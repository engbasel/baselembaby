import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Stronger Kiddoz 🧸',
      description: 'تطبيق تطوير مهارات الأطفال مع فيديوهات تعليمية من متخصصين',
      video: '/assets/images/stronger-Kiddoss.mp4',
      status: 'coming-soon',
      statusText: '🚀 قريبًا',
      tags: ['Flutter', 'Firebase', 'Material 3'],
      link: null
    },
    {
      title: 'Al Maseyah Store 🛍️',
      description: 'متجر إلكتروني احترافي مع نظام طلبات متكامل',
      video: '/assets/images/almasya-website.mp4',
      status: 'live',
      statusText: '● LIVE',
      tags: ['Flutter', 'Firebase', 'Responsive'],
      link: 'https://almaseyah.vercel.app/'
    },
    {
      title: 'Al Maseyah Dashboard 🎛️',
      description: 'لوحة تحكم شاملة لإدارة المتجر والمنتجات',
      video: '/assets/images/almasy-dashboard-video.mp4',
      status: null,
      tags: ['Flutter Web', 'Firebase Admin', 'Charts'],
      link: null
    },
    {
      title: 'Shemyra Family Store 👗',
      description: 'متجر أزياء أنيق مع أكثر من 4,352 عميل',
      video: '/assets/images/meraStore.mp4',
      status: 'live',
      statusText: '● LIVE',
      tags: ['React', 'Vite', 'Firebase'],
      link: 'https://shemyra-family-store.vercel.app/'
    },
    {
      title: 'CircuitHub 🤖',
      description: 'منصة ذكية مدعومة بالذكاء الاصطناعي',
      video: '/assets/images/CircuitHub.mp4',
      status: null,
      tags: ['Flutter', 'Firebase', 'AI'],
      link: 'https://github.com/engbasel/CircuitHub',
      linkType: 'github'
    },
    {
      title: 'Blood Bank App 🩸',
      description: 'تطبيق بنك دم لربط المتبرعين بالمستشفيات',
      video: '/assets/images/BloodBankApp.mp4',
      status: null,
      tags: ['Flutter', 'Firebase', 'Maps'],
      link: 'https://github.com/engbasel/BloodBankApp',
      linkType: 'github'
    },
    {
      title: 'Blood Bank Dashboard 📊',
      description: 'لوحة تحكم للمستشفيات لإدارة التبرعات',
      video: '/assets/images/BloodBankAdminPanel.mp4',
      status: null,
      tags: ['Flutter Web', 'Firebase'],
      link: 'https://github.com/engbasel/BloodBankAdminPanel',
      linkType: 'github'
    },
    {
      title: 'POS Dashboard 💼',
      description: 'نظام إدارة المبيعات والمخزون للمحلات',
      video: '/assets/images/POSDashboard.mp4',
      status: null,
      tags: ['Flutter Web', 'Charts'],
      link: 'https://github.com/engbasel/POS-Dashboard',
      linkType: 'github'
    },
    {
      title: 'Chat App 💬',
      description: 'تطبيق محادثة فورية مع إشعارات',
      video: '/assets/images/ChatApp.mp4',
      status: null,
      tags: ['Flutter', 'Firebase'],
      link: 'https://github.com/engbasel/ChatApp',
      linkType: 'github'
    },
    {
      title: 'Notes App 📝',
      description: 'تطبيق ملاحظات مع قاعدة بيانات محلية',
      video: '/assets/images/NotesApp.mp4',
      status: null,
      tags: ['Flutter', 'SQflite'],
      link: 'https://github.com/engbasel/Notes-App-SQflite',
      linkType: 'github'
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-video">
                <video controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.status && (
                  <div className="project-status">
                    <span className={`status-badge ${project.status}`}>
                      {project.statusText}
                    </span>
                  </div>
                )}

                {project.link && (
                  <div className="project-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.linkType === 'github' ? (
                        <>
                          <i className="fab fa-github"></i> Source Code
                        </>
                      ) : (
                        <>
                          <i className="fas fa-external-link-alt"></i> Visit Site
                        </>
                      )}
                    </a>
                  </div>
                )}

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
