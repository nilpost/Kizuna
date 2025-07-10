import { Zap, Users, Home, CheckCircle } from "lucide-react";

export default function IntegralReformsSection() {
  return (
    <section id="reforms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integral Reforms: Modernizing Japanese Housing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive approach to modernizing Japanese properties with cutting-edge solutions 
            for energy efficiency, accessibility, and contemporary living.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Zero-Energy & Smart Homes */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zero-Energy & Smart Homes</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Zero-Energy Homes (ZEH):</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span>Net-zero annual energy use via advanced insulation, high-efficiency systems, and solar panels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span>Superior thermal insulation, triple-glazed windows, airtight construction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span>Lower utility costs, disaster resilience, healthier indoor environments</span>
                    </li>
                  </ul>
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Regulatory note:</strong> By April 2025, all new homes in Japan must meet strict energy-efficiency standards.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart Homes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span>Centralized control of lighting, climate, and security via smartphone or voice assistants</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span>Smart locks, cameras, earthquake detection, AI-powered assistants, and robotics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span>Rapid market growth driven by convenience, sustainability, and government incentives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Smart home technology" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern energy efficient home" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
          
          {/* Senior Housing Renovation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Senior Housing Renovation</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium">
                    <strong>Demographic Focus:</strong> Over 28% of Japan's population is age 65+
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Renovation Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Barrier-free design:</strong> step-free access, wide hallways, accessible bathrooms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Safety:</strong> emergency alert systems, motion sensors, remote health monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Comfort:</strong> improved insulation, smart climate control, ergonomic fixtures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Support:</strong> Subsidies and low-interest loans available for renovations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Accessible bathroom design" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Senior-friendly home features" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
          
          {/* Akia: Traditional Japanese Homes */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Home className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Akia: Traditional Japanese Homes for Modern Living</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-orange-50 rounded-lg mb-4">
                  <p className="text-orange-800 font-medium">
                    <strong>Background:</strong> Over 13% of homes in Japan are vacant (akia), especially in rural areas.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Modernization Approach:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Preserve traditional elements:</strong> tatami rooms, shoji screens, wooden beams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Upgrade essentials:</strong> earthquake reinforcement, modern kitchens/bathrooms, insulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Ready for modern life:</strong> high-speed internet, energy efficiency, flexible layouts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={14} />
                      <span><strong>Incentives:</strong> National and local subsidies for akia renovation and rental support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Traditional Japanese home interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modernized traditional Japanese house" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to modernize your Japanese property with our comprehensive reform solutions?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Learn More About Reforms
          </button>
        </div>
      </div>
    </section>
  );
}
