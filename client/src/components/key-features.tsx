import { Bot, Eye, HandHeart } from "lucide-react";

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Kizuna 絆?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining traditional Japanese hospitality with cutting-edge technology to deliver exceptional real estate experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bot className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Property Visualization</h3>
              <p className="text-gray-600">
                Experience properties like never before with our AI-powered visualization technology, 
                helping you envision your future home or investment.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">360° Virtual Tours</h3>
              <p className="text-gray-600">
                Explore properties from anywhere in the world with our immersive 360° virtual tours 
                and 3D scanning technology.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HandHeart className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Relocation Support</h3>
              <p className="text-gray-600">
                From property search to settling in, we provide end-to-end support including 
                transportation, local experiences, and cultural integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
