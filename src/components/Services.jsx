import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Flutter Mobile Development',
      description: 'Building modern, high-performance mobile applications',
      features: [
        'Cross-platform apps with Flutter',
        'State management (Cubit, MVVM)',
        'Firebase & RESTful APIs',
        'Clean architecture & scalable design'
      ]
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Web & Admin Dashboards',
      description: 'Fast, responsive web applications and admin panels',
      features: [
        'Flutter Web & JavaScript',
        'Admin panels with charts & analytics',
        'Firebase & API integration',
        'Responsive design & authentication'
      ]
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Integration',
      description: 'Smart AI-powered features for modern applications',
      features: [
        'GPT-based chatbots',
        'Voice interaction & AI assistants',
        'Multi-agent systems',
        'Python & API integration'
      ]
    },
    {
      icon: 'fas fa-microchip',
      title: 'IoT & Hardware Integration',
      description: 'Connecting mobile apps with IoT devices',
      features: [
        'Arduino & ESP32 integration',
        'Bluetooth & Wi-Fi connectivity',
        'Real-time sensor monitoring',
        'Smart device control dashboards'
      ]
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
