import './Freelance.css';

const Freelance = () => {
  const platforms = [
    {
      name: 'نفذلي',
      nameEn: 'Nafezly',
      logo: 'https://static.nafezly.com/images/nafezly.com.png',
      description: 'Flutter development, IoT integration & AI chatbots',
      profileUrl: 'https://nafezly.com/u/basel_embaby',
      rating: '4.9/5',
      projects: '10+ Projects'
    },
    {
      name: 'مستقل',
      nameEn: 'Mostaql',
      logo: 'https://mostaql.hsoubcdn.com/public/assets/images/custom/mostaql-logo-white.svg?id=dc639dfc13cb096309795e9d84ddd15c',
      description: 'Flutter development, IoT integration & AI chatbots',
      profileUrl: 'https://mostaql.com/u/Basel_embaby',
      rating: '4.7/5',
      projects: '10+ Projects'
    },
    {
      name: 'خمسات',
      nameEn: 'Khamsat',
      logo: 'https://khamsat.hsoubcdn.com/assets/images/logo-73045c76e830509d4dbe03ea6172d22f047c708fed5435e93ffd47f80ee5ffa4.png',
      description: 'Flutter development, IoT integration & AI chatbots',
      profileUrl: 'https://khamsat.com/user/engba5el',
      rating: '4.6/5',
      projects: '8+ Services'
    }
  ];

  return (
    <section className="freelance section" id="freelance">
      <div className="container">
        <h2 className="section-title">Hire Me on Freelance Platforms</h2>

        <div className="freelance-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="freelance-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="freelance-logo">
                <img src={platform.logo} alt={`${platform.name} Logo`} />
              </div>

              <div className="freelance-content">
                <h3 className="freelance-title">{platform.name}</h3>
                <p className="freelance-description">{platform.description}</p>

                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="freelance-link"
                >
                  View Profile <i className="fas fa-external-link-alt"></i>
                </a>

                <div className="freelance-stats">
                  <span>
                    <i className="fas fa-star"></i> {platform.rating}
                  </span>
                  <span>
                    <i className="fas fa-briefcase"></i> {platform.projects}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
