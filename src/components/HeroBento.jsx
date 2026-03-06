import HeroContent from './hero/HeroContent';
import HeroBentoGrid from './hero/HeroBentoGrid';
import HeroTechStack from './hero/HeroTechStack';

const HeroBento = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-10 pb-14 md:pt-14 md:pb-18 lg:pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroContent onViewWork={scrollToWork} />
          </div>

          {/* Bento Grid - Right Side */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5 mt-8 lg:mt-0 pt-10">
            <HeroBentoGrid />
          </div>
        </div>

        {/* Tech Stack */}
        <HeroTechStack />
      </div>
    </section>
  );
};

export default HeroBento;
