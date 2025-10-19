import {
    db,
    collection,
    getDocs,
    query,
    orderBy
} from './firebase-config.js';

// Load projects dynamically from Firebase
async function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid) {
        console.error('Projects grid element not found');
        return;
    }

    // Show loading
    projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #aaa;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; margin-bottom: 20px;"></i>
            <p>جاري تحميل المشاريع...</p>
        </div>
    `;

    try {
        const querySnapshot = await getDocs(query(collection(db, 'projects'), orderBy('createdAt', 'desc')));
        const projects = [];

        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });

        if (projects.length === 0) {
            projectsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #aaa;">
                    <i class="fas fa-folder-open" style="font-size: 4rem; margin-bottom: 20px; color: #555;"></i>
                    <h3 style="color: #666;">لا توجد مشاريع حالياً</h3>
                    <p>سيتم إضافة المشاريع قريباً</p>
                </div>
            `;
            return;
        }

        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');

    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px; color: #f44336;"></i>
                <h3 style="color: #f44336;">حدث خطأ أثناء تحميل المشاريع</h3>
                <p style="color: #aaa;">يرجى المحاولة مرة أخرى</p>
            </div>
        `;
    }
}

function createProjectCard(project) {
    const statusBadge = project.status === 'live'
        ? '<span class="project-status status-live"><i class="fas fa-circle"></i> LIVE</span>'
        : project.status === 'coming-soon'
        ? '<span class="project-status status-coming-soon"><i class="fas fa-rocket"></i> قيد الإطلاق قريباً</span>'
        : '<span class="project-status status-in-development"><i class="fas fa-code"></i> قيد التطوير</span>';

    const techTags = project.tech
        ? project.tech.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')
        : '';

    const features = project.features && Array.isArray(project.features)
        ? project.features.map(feature => `<li>${feature}</li>`).join('')
        : '';

    const mediaContent = project.videoUrl
        ? `<video controls poster="${project.imageUrl || '../images/store.png'}">
             <source src="${project.videoUrl}" type="video/mp4" />
             المتصفح لا يدعم عرض الفيديو.
           </video>`
        : project.imageUrl
        ? `<img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />`
        : `<div style="width: 100%; height: 100%; background: #000; display: flex; align-items: center; justify-content: center; color: #555;">
             <i class="fas fa-image" style="font-size: 3rem;"></i>
           </div>`;

    const linkButton = project.link
        ? `<a href="${project.link}" target="_blank" class="project-link">
             <i class="fas fa-external-link-alt"></i> زيارة المشروع
           </a>`
        : '';

    return `
        <div class="project-card">
            <div class="project-media">
                ${mediaContent}
            </div>
            <div class="project-content">
                <h3 class="project-category">${project.title}</h3>
                <p class="project-description">${project.description || ''}</p>

                <div class="project-meta">
                    ${statusBadge}
                    ${linkButton}
                </div>

                ${features ? `
                    <ul class="project-features">
                        ${features}
                    </ul>
                ` : ''}

                ${techTags ? `
                    <div class="project-tech">
                        ${techTags}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}

export { loadProjects };
