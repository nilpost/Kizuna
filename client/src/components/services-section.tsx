import { Home, Cpu, Layers, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored for international clients in Japan
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real Estate Agent Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real Estate Agent Services</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Property management and maintenance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Complete relocation services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Property renovation and resale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Vacation property investment (Nagano focus)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Tokyo investment strategy</span>
              </li>
            </ul>
          </div>
          
          {/* Technology Integration */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Integration</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>AI-powered property visualization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>3D scanning and modeling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Remote property viewings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Virtual reality tours</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Digital property documentation</span>
              </li>
            </ul>
          </div>
          
          {/* Service Bundling */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Layers className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Bundling</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Transportation arrangements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Local cultural experiences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>University partnership programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Banking and legal support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={16} />
                <span>Language assistance services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
