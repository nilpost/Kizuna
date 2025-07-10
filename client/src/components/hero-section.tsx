export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Gateway to Exceptional Living & Investment in Japan
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Specialized real estate services for international business students, expats, and property investors. 
          Experience Japan's property market with cutting-edge technology and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg"
          >
            Contact Us Today
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
