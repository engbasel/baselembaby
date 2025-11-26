import './Languages.css';

const Languages = () => {
  const languages = [
    {
      name: 'German',
      flag: '/assets/images/german.jpg',
      level: 'A2 Level'
    },
    {
      name: 'English',
      flag: '/assets/images/uk.jpg',
      level: 'B1 Level'
    },
    {
      name: 'Arabic',
      flag: '/assets/images/egypt.jpg',
      level: 'Native'
    }
  ];

  return (
    <section className="languages section" id="languages">
      <div className="container">
        <h2 className="section-title">Language Proficiency</h2>

        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div key={index} className="language-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="language-flag">
                <img src={lang.flag} alt={`${lang.name} Flag`} />
              </div>
              <div className="language-info">
                <h3 className="language-name">{lang.name}</h3>
                <p className="language-level">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
