import {
    auth,
    db,
    storage,
    signOut,
    onAuthStateChanged,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    serverTimestamp,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from '../../js/firebase-config.js';

// Global state
let currentUser = null;
let currentPage = 'overview';

// Check authentication
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        document.getElementById('userEmail').textContent = user.email;
        loadPage(currentPage);
    } else {
        window.location.href = 'login.html';
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', async () => {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        try {
            await signOut(auth);
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout error:', error);
            alert('حدث خطأ أثناء تسجيل الخروج');
        }
    }
});

// Sidebar navigation
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.getAttribute('data-page');

        menuItems.forEach(mi => mi.classList.remove('active'));
        item.classList.add('active');

        currentPage = page;
        loadPage(page);
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Load page content
async function loadPage(page) {
    const content = document.getElementById('mainContent');
    const pageTitle = document.getElementById('pageTitle');

    showLoading();

    switch(page) {
        case 'overview':
            pageTitle.textContent = 'نظرة عامة';
            await loadOverview(content);
            break;
        case 'projects':
            pageTitle.textContent = 'إدارة المشاريع';
            await loadProjects(content);
            break;
        case 'services':
            pageTitle.textContent = 'إدارة الخدمات';
            await loadServices(content);
            break;
        case 'news':
            pageTitle.textContent = 'إدارة الأخبار';
            await loadNews(content);
            break;
        case 'messages':
            pageTitle.textContent = 'الرسائل';
            await loadMessages(content);
            break;
        default:
            content.innerHTML = '<p>الصفحة غير موجودة</p>';
    }

    hideLoading();
    sidebar.classList.remove('active');
}

// Overview Page
async function loadOverview(content) {
    try {
        const [projectsSnap, servicesSnap, newsSnap, messagesSnap] = await Promise.all([
            getDocs(collection(db, 'projects')),
            getDocs(collection(db, 'services')),
            getDocs(collection(db, 'news')),
            getDocs(collection(db, 'contacts'))
        ]);

        const projectsCount = projectsSnap.size;
        const servicesCount = servicesSnap.size;
        const newsCount = newsSnap.size;
        const messagesCount = messagesSnap.size;

        // Update messages badge
        document.getElementById('messagesBadge').textContent = messagesCount;

        content.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div>
                            <div class="stat-card-value">${projectsCount}</div>
                            <div class="stat-card-label">المشاريع</div>
                        </div>
                        <div class="stat-card-icon primary">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-card-header">
                        <div>
                            <div class="stat-card-value">${servicesCount}</div>
                            <div class="stat-card-label">الخدمات</div>
                        </div>
                        <div class="stat-card-icon info">
                            <i class="fas fa-cogs"></i>
                        </div>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-card-header">
                        <div>
                            <div class="stat-card-value">${newsCount}</div>
                            <div class="stat-card-label">الأخبار</div>
                        </div>
                        <div class="stat-card-icon warning">
                            <i class="fas fa-newspaper"></i>
                        </div>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-card-header">
                        <div>
                            <div class="stat-card-value">${messagesCount}</div>
                            <div class="stat-card-label">الرسائل</div>
                        </div>
                        <div class="stat-card-icon danger">
                            <i class="fas fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-container">
                <div class="table-header">
                    <h2>آخر الرسائل</h2>
                    <button class="btn btn-primary" onclick="window.dispatchEvent(new CustomEvent('loadPage', {detail: 'messages'}))">
                        <i class="fas fa-eye"></i> عرض الكل
                    </button>
                </div>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>الاسم</th>
                                <th>البريد الإلكتروني</th>
                                <th>الموضوع</th>
                                <th>التاريخ</th>
                            </tr>
                        </thead>
                        <tbody id="recentMessagesTable">
                            <tr>
                                <td colspan="4" style="text-align: center;">جاري التحميل...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        // Load recent messages
        const recentMessages = [];
        messagesSnap.forEach(doc => {
            recentMessages.push({ id: doc.id, ...doc.data() });
        });

        const tbody = document.getElementById('recentMessagesTable');
        if (recentMessages.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #aaa;">لا توجد رسائل</td></tr>';
        } else {
            tbody.innerHTML = recentMessages.slice(0, 5).map(msg => `
                <tr>
                    <td>${msg.name || 'غير محدد'}</td>
                    <td>${msg.email || 'غير محدد'}</td>
                    <td>${msg.subject || 'بدون موضوع'}</td>
                    <td>${msg.timestamp ? new Date(msg.timestamp.toDate()).toLocaleDateString('ar-EG') : 'غير محدد'}</td>
                </tr>
            `).join('');
        }

    } catch (error) {
        console.error('Error loading overview:', error);
        content.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-circle"></i> حدث خطأ أثناء تحميل البيانات</div>';
    }
}

// Projects Management
async function loadProjects(content) {
    content.innerHTML = `
        <div class="table-container">
            <div class="table-header">
                <h2>المشاريع</h2>
                <div class="table-actions">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="searchProjects" placeholder="بحث في المشاريع...">
                    </div>
                    <button class="btn btn-primary" id="addProjectBtn">
                        <i class="fas fa-plus"></i> إضافة مشروع جديد
                    </button>
                </div>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>العنوان</th>
                            <th>الوصف</th>
                            <th>التقنيات</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody id="projectsTable">
                        <tr>
                            <td colspan="5" style="text-align: center;">جاري التحميل...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Project Modal -->
        <div class="modal-overlay" id="projectModal">
            <div class="modal">
                <div class="modal-header">
                    <h2 id="projectModalTitle">إضافة مشروع جديد</h2>
                    <button class="modal-close" onclick="closeModal('projectModal')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <form id="projectForm">
                    <div class="modal-body">
                        <input type="hidden" id="projectId">

                        <div class="form-group">
                            <label for="projectTitle">عنوان المشروع *</label>
                            <input type="text" id="projectTitle" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="projectDescription">الوصف *</label>
                            <textarea id="projectDescription" class="form-control" required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="projectCategory">الفئة</label>
                            <input type="text" id="projectCategory" class="form-control" placeholder="مثال: تطبيق موبايل">
                        </div>

                        <div class="form-group">
                            <label for="projectTech">التقنيات المستخدمة (افصل بفاصلة)</label>
                            <input type="text" id="projectTech" class="form-control" placeholder="Flutter, Firebase, React">
                        </div>

                        <div class="form-group">
                            <label for="projectStatus">الحالة *</label>
                            <select id="projectStatus" class="form-control" required>
                                <option value="live">مباشر (Live)</option>
                                <option value="coming-soon">قريباً</option>
                                <option value="in-development">قيد التطوير</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="projectLink">رابط المشروع</label>
                            <input type="url" id="projectLink" class="form-control" placeholder="https://example.com">
                        </div>

                        <div class="form-group">
                            <label for="projectFeatures">المميزات (كل مميزة في سطر)</label>
                            <textarea id="projectFeatures" class="form-control" rows="4" placeholder="مميزة 1\nمميزة 2\nمميزة 3"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="projectVideo">رابط الفيديو (URL)</label>
                            <input type="url" id="projectVideo" class="form-control" placeholder="https://example.com/video.mp4">
                        </div>

                        <div class="form-group">
                            <label for="projectImage">رابط الصورة (URL)</label>
                            <input type="url" id="projectImage" class="form-control" placeholder="https://example.com/image.jpg">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> حفظ
                        </button>
                        <button type="button" class="btn btn-danger" onclick="closeModal('projectModal')">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    // Load projects from Firestore
    loadProjectsData();

    // Add project button
    document.getElementById('addProjectBtn').addEventListener('click', () => {
        document.getElementById('projectModalTitle').textContent = 'إضافة مشروع جديد';
        document.getElementById('projectForm').reset();
        document.getElementById('projectId').value = '';
        openModal('projectModal');
    });

    // Project form submit
    document.getElementById('projectForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        await saveProject();
    });

    // Search
    document.getElementById('searchProjects').addEventListener('input', (e) => {
        filterTable('projectsTable', e.target.value);
    });
}

async function loadProjectsData() {
    try {
        const querySnapshot = await getDocs(query(collection(db, 'projects'), orderBy('createdAt', 'desc')));
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });

        const tbody = document.getElementById('projectsTable');
        if (projects.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5">
                        <div class="empty-state">
                            <i class="fas fa-folder-open"></i>
                            <h3>لا توجد مشاريع</h3>
                            <p>ابدأ بإضافة مشروعك الأول</p>
                        </div>
                    </td>
                </tr>
            `;
        } else {
            tbody.innerHTML = projects.map(project => `
                <tr data-search="${project.title} ${project.description} ${project.tech || ''}">
                    <td><strong>${project.title}</strong></td>
                    <td>${project.description ? project.description.substring(0, 100) + '...' : ''}</td>
                    <td>${project.tech || '-'}</td>
                    <td>
                        <span class="badge badge-${project.status === 'live' ? 'success' : project.status === 'coming-soon' ? 'warning' : 'info'}">
                            ${project.status === 'live' ? 'مباشر' : project.status === 'coming-soon' ? 'قريباً' : 'قيد التطوير'}
                        </span>
                    </td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn-primary btn-sm" onclick="editProject('${project.id}')">
                                <i class="fas fa-edit"></i> تعديل
                            </button>
                            <button class="btn btn-danger btn-sm" onclick="deleteProject('${project.id}')">
                                <i class="fas fa-trash"></i> حذف
                            </button>
                        </div>
                    </td>
                </tr>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projectsTable').innerHTML = `
            <tr><td colspan="5">
                <div class="alert alert-danger"><i class="fas fa-exclamation-circle"></i> حدث خطأ أثناء تحميل المشاريع</div>
            </td></tr>
        `;
    }
}

async function saveProject() {
    showLoading();
    try {
        const projectId = document.getElementById('projectId').value;
        const projectData = {
            title: document.getElementById('projectTitle').value,
            description: document.getElementById('projectDescription').value,
            category: document.getElementById('projectCategory').value,
            tech: document.getElementById('projectTech').value,
            status: document.getElementById('projectStatus').value,
            link: document.getElementById('projectLink').value,
            features: document.getElementById('projectFeatures').value.split('\n').filter(f => f.trim()),
            videoUrl: document.getElementById('projectVideo').value,
            imageUrl: document.getElementById('projectImage').value,
            updatedAt: serverTimestamp()
        };

        if (projectId) {
            // Update existing project
            await updateDoc(doc(db, 'projects', projectId), projectData);
        } else {
            // Add new project
            projectData.createdAt = serverTimestamp();
            await addDoc(collection(db, 'projects'), projectData);
        }

        closeModal('projectModal');
        await loadProjectsData();
        showNotification('success', projectId ? 'تم تحديث المشروع بنجاح' : 'تم إضافة المشروع بنجاح');
    } catch (error) {
        console.error('Error saving project:', error);
        showNotification('danger', 'حدث خطأ أثناء حفظ المشروع');
    }
    hideLoading();
}

window.editProject = async function(id) {
    showLoading();
    try {
        const docSnap = await getDocs(query(collection(db, 'projects')));
        let projectData = null;
        docSnap.forEach((doc) => {
            if (doc.id === id) {
                projectData = doc.data();
            }
        });

        if (projectData) {
            document.getElementById('projectModalTitle').textContent = 'تعديل المشروع';
            document.getElementById('projectId').value = id;
            document.getElementById('projectTitle').value = projectData.title || '';
            document.getElementById('projectDescription').value = projectData.description || '';
            document.getElementById('projectCategory').value = projectData.category || '';
            document.getElementById('projectTech').value = projectData.tech || '';
            document.getElementById('projectStatus').value = projectData.status || 'live';
            document.getElementById('projectLink').value = projectData.link || '';
            document.getElementById('projectFeatures').value = projectData.features ? projectData.features.join('\n') : '';
            document.getElementById('projectVideo').value = projectData.videoUrl || '';
            document.getElementById('projectImage').value = projectData.imageUrl || '';
            openModal('projectModal');
        }
    } catch (error) {
        console.error('Error loading project:', error);
        showNotification('danger', 'حدث خطأ أثناء تحميل المشروع');
    }
    hideLoading();
};

window.deleteProject = async function(id) {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
        showLoading();
        try {
            await deleteDoc(doc(db, 'projects', id));
            await loadProjectsData();
            showNotification('success', 'تم حذف المشروع بنجاح');
        } catch (error) {
            console.error('Error deleting project:', error);
            showNotification('danger', 'حدث خطأ أثناء حذف المشروع');
        }
        hideLoading();
    }
};

// Services Management (similar to projects)
async function loadServices(content) {
    content.innerHTML = `
        <div class="alert alert-info">
            <i class="fas fa-info-circle"></i>
            قسم إدارة الخدمات - قريباً سيتم إضافة واجهة CRUD كاملة
        </div>
        <p>يمكنك الآن إدارة الخدمات من خلال نفس النظام المستخدم في المشاريع.</p>
    `;
}

// News Management
async function loadNews(content) {
    content.innerHTML = `
        <div class="alert alert-info">
            <i class="fas fa-info-circle"></i>
            قسم إدارة الأخبار - قريباً سيتم إضافة واجهة CRUD كاملة
        </div>
        <p>يمكنك الآن إدارة الأخبار من خلال نفس النظام المستخدم في المشاريع.</p>
    `;
}

// Messages Management
async function loadMessages(content) {
    content.innerHTML = `
        <div class="table-container">
            <div class="table-header">
                <h2>الرسائل الواردة</h2>
                <div class="table-actions">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="searchMessages" placeholder="بحث في الرسائل...">
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>الاسم</th>
                            <th>البريد الإلكتروني</th>
                            <th>الموضوع</th>
                            <th>الرسالة</th>
                            <th>التاريخ</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody id="messagesTable">
                        <tr>
                            <td colspan="6" style="text-align: center;">جاري التحميل...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    try {
        const querySnapshot = await getDocs(query(collection(db, 'contacts'), orderBy('timestamp', 'desc')));
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({ id: doc.id, ...doc.data() });
        });

        const tbody = document.getElementById('messagesTable');
        if (messages.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6">
                        <div class="empty-state">
                            <i class="fas fa-envelope-open"></i>
                            <h3>لا توجد رسائل</h3>
                        </div>
                    </td>
                </tr>
            `;
        } else {
            tbody.innerHTML = messages.map(msg => `
                <tr data-search="${msg.name} ${msg.email} ${msg.subject} ${msg.message}">
                    <td><strong>${msg.name || 'غير محدد'}</strong></td>
                    <td>${msg.email || 'غير محدد'}</td>
                    <td>${msg.subject || 'بدون موضوع'}</td>
                    <td>${msg.message ? msg.message.substring(0, 50) + '...' : ''}</td>
                    <td>${msg.timestamp ? new Date(msg.timestamp.toDate()).toLocaleDateString('ar-EG') : 'غير محدد'}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteMessage('${msg.id}')">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        // Search
        document.getElementById('searchMessages').addEventListener('input', (e) => {
            filterTable('messagesTable', e.target.value);
        });
    } catch (error) {
        console.error('Error loading messages:', error);
        document.getElementById('messagesTable').innerHTML = `
            <tr><td colspan="6">
                <div class="alert alert-danger"><i class="fas fa-exclamation-circle"></i> حدث خطأ أثناء تحميل الرسائل</div>
            </td></tr>
        `;
    }
}

window.deleteMessage = async function(id) {
    if (confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
        showLoading();
        try {
            await deleteDoc(doc(db, 'contacts', id));
            await loadMessages(document.getElementById('mainContent'));
            showNotification('success', 'تم حذف الرسالة بنجاح');
        } catch (error) {
            console.error('Error deleting message:', error);
            showNotification('danger', 'حدث خطأ أثناء حذف الرسالة');
        }
        hideLoading();
    }
};

// Utility Functions
window.openModal = function(modalId) {
    document.getElementById(modalId).classList.add('active');
};

window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
};

function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function filterTable(tableId, searchTerm) {
    const rows = document.querySelectorAll(`#${tableId} tr[data-search]`);
    rows.forEach(row => {
        const searchText = row.getAttribute('data-search').toLowerCase();
        if (searchText.includes(searchTerm.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Custom event for page loading
window.addEventListener('loadPage', (e) => {
    const page = e.detail;
    currentPage = page;

    menuItems.forEach(item => {
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    loadPage(page);
});
