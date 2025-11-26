import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Cisco Network Certification',
      issuer: 'NTI Egypt',
      date: '2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/250px-Cisco_logo_blue_2016.svg.png',
      icon: 'fas fa-award',
      description: 'CCNA certified, obtained through technical summer training at Creative Mansoura University. Proficient in Cisco networking technologies, including routing and switching, network fundamentals, LAN switching technologies, IPv4 and IPv6 routing technologies, WAN technologies, infrastructure services, and security fundamentals.',
      links: {
        linkedin: 'https://www.linkedin.com/posts/basel-embaby-948671227_training-ccna-nti-activity-6982974217025695744-fMOi',
        certificate: 'https://drive.google.com/file/d/1ykoZamXmF40e0biPJeUh51kp4lZh7mF_/view?usp=drive_link'
      }
    },
    {
      title: 'ITI Flutter Summer Training',
      issuer: 'Information Technology Institute',
      date: '2023',
      logo: 'https://iti.gov.eg/assets/images/ColoredLogo.svg',
      icon: 'fas fa-mobile-alt',
      description: 'Completed 150-hour Flutter Mobile Development Training. Covered topics include Flutter framework fundamentals, UI design, Firebase integration, and communication skills for effective project collaboration. Grateful to instructor Marwa Talaat for guidance.',
      links: {
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7143314171332407296/',
        certificate: 'https://drive.google.com/file/d/1pLgh34dZvAU2fmVywqwcuUqP6A-iysL3/view?usp=drive_link'
      }
    },
    {
      title: 'Udemy Flutter Developer Certification',
      issuer: 'Instructor: Tharwat Samy',
      date: '54 Hours',
      logo: 'https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg',
      icon: 'fas fa-code',
      description: 'Completed the Flutter & Dart Complete Development Course (Arabic). Comprehensive training in Flutter and Dart programming, covering essential skills for mobile app development including state management, API integration, and UI design.',
      links: {
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7117507432246853632/',
        certificate: 'https://drive.google.com/file/d/1a7bD1G6sOFThr_sJbBcwCbCbuskhsG09/view?usp=drive_link'
      }
    },
    {
      title: 'Cisco Cybersecurity',
      issuer: 'NTI Mansoura',
      date: 'July 2023',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/250px-Cisco_logo_blue_2016.svg.png',
      icon: 'fas fa-shield-alt',
      description: 'Completed a comprehensive 120-hour online course covering cybercriminal tactics, threats to IT infrastructure, security frameworks, malware defense, cryptography, access controls, data integrity, and system defense strategies.',
      links: {
        linkedin: 'https://www.linkedin.com/posts/basel-embaby-948671227_certification-cybersecurity-skillsdevelopment-activity-7105904468277215232-yH-8',
        certificate: 'https://drive.google.com/file/d/1n3idc74qMgu3XxR9agSjaYpr7Ip9u1hl/view?usp=drive_link'
      }
    },
    {
      title: 'Aspire Training Solutions',
      issuer: 'UCCD Mansoura',
      date: 'July 2022',
      logo: 'https://aspire-int.com/wp-content/uploads/2024/11/Aspire_Logo_Horizontal.svg',
      icon: 'fas fa-briefcase',
      description: 'Successfully completed the Employability Skills Track from 24th to 28th of July, 2022. This training, made possible by The American University in Cairo, equipped me with essential skills for professional development.',
      links: {
        linkedin: 'https://www.linkedin.com/posts/basel-embaby-948671227_aspire-uccd-mansoura-activity-6981993556844425216-6J3s',
        certificate: 'https://drive.google.com/file/d/1xZAsSOtpVRs9GnL4Y2Pv0A_zpUsw0sf_/view?usp=drive_link'
      }
    },
    {
      title: 'Human Resource Essentials',
      issuer: 'American Chamber of Commerce',
      date: 'August 2022',
      logo: 'https://www.amcham.org.eg/images/amchamlogo40years2.jpg',
      icon: 'fas fa-users',
      description: 'Certificate of Completion from the American Chamber of Commerce in Egypt\'s Career Development Center for the course in Human Resources Essentials, held from 14th to 18th August 2022. This certification marks my proficiency in essential human resources skills.',
      links: {
        linkedin: 'https://www.linkedin.com/posts/basel-embaby-948671227_professional-engineering-certificate-activity-6982975441754050560-7Tr8',
        certificate: 'https://drive.google.com/file/d/1QMO1kx2spusjYtu2Rf_g9trY2GRsBKiz/view?usp=drive_link'
      }
    }
  ];

  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="cert-header">
                <div className="cert-logo">
                  <img src={cert.logo} alt={`${cert.issuer} Logo`} />
                </div>
                <div className="cert-badge">
                  <i className={cert.icon}></i>
                </div>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span><i className="fas fa-building"></i> {cert.issuer}</span>
                  <span><i className="far fa-calendar-alt"></i> {cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-actions">
                  <a href={cert.links.linkedin} target="_blank" rel="noopener noreferrer" className="cert-link">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                  <a href={cert.links.certificate} target="_blank" rel="noopener noreferrer" className="cert-link cert-link-primary">
                    <i className="fas fa-certificate"></i> Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
