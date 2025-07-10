import { Mountain, MountainSnow, TrendingUp, Wrench, Building2, Hammer, JapaneseYen } from "lucide-react";

export default function InvestmentOpportunities() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="investments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover prime real estate investment opportunities in Japan's most promising markets
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Nagano Vacation Properties */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nagano Vacation Properties</h3>
              <div className="flex items-center mb-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  ¥30-60 Million Range
                </span>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Nagano mountain resort" 
              className="rounded-lg shadow-lg mb-6 w-full h-48 object-cover"
            />
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mountain className="text-accent mr-3" size={20} />
                <span className="text-gray-700">Premium mountain resort locations</span>
              </div>
              <div className="flex items-center">
                <MountainSnow className="text-accent mr-3" size={20} />
                <span className="text-gray-700">Year-round rental potential</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="text-accent mr-3" size={20} />
                <span className="text-gray-700">Strong appreciation potential</span>
              </div>
              <div className="flex items-center">
                <Wrench className="text-accent mr-3" size={20} />
                <span className="text-gray-700">Full renovation support</span>
              </div>
            </div>
          </div>
          
          {/* Tokyo Investment Properties */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tokyo Investment Strategy</h3>
              <div className="flex items-center mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Buy • Renovate • Manage
                </span>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Tokyo apartment building" 
              className="rounded-lg shadow-lg mb-6 w-full h-48 object-cover"
            />
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Building2 className="text-primary mr-3" size={20} />
                <span className="text-gray-700">Prime Tokyo locations</span>
              </div>
              <div className="flex items-center">
                <Hammer className="text-primary mr-3" size={20} />
                <span className="text-gray-700">Professional renovation services</span>
              </div>
              <div className="flex items-center">
                <Building2 className="text-primary mr-3" size={20} />
                <span className="text-gray-700">Ongoing property management</span>
              </div>
              <div className="flex items-center">
                <JapaneseYen className="text-primary mr-3" size={20} />
                <span className="text-gray-700">Maximize rental yields</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to explore investment opportunities in Japan's dynamic real estate market?
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            View Investment Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
