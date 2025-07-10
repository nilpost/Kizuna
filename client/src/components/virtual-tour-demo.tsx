import { Play, Eye, Box, Smartphone } from "lucide-react";

export default function VirtualTourDemo() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Virtual Tours</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Take a virtual tour of premium properties from anywhere in the world
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury apartment interior" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors">
                  <Play className="text-white" size={32} />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">Premium Tokyo Apartment</h3>
                <p className="text-white/80 text-sm">360° Virtual Tour Available</p>
              </div>
            </div>
          </div>
          
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Revolutionary Property Viewing</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Eye className="text-secondary" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Immersive VR Experience</h4>
                  <p className="text-blue-100 text-sm">Walk through properties as if you're actually there</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Box className="text-secondary" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">3D Floor Plans</h4>
                  <p className="text-blue-100 text-sm">Interactive 3D layouts and measurements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Smartphone className="text-secondary" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mobile Compatible</h4>
                  <p className="text-blue-100 text-sm">View on any device, anywhere in the world</p>
                </div>
              </div>
            </div>
            <button 
              onClick={scrollToContact}
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Schedule Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
