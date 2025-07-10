import { Building, University } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About JapanRealty Pro</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a mission to bridge the gap between international clients and Japan's dynamic real estate market, 
              we specialize in serving business students, expats, and foreign investors seeking exceptional opportunities in Japan.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our vision is to transform how international clients experience Japanese real estate through innovative technology, 
              personalized service, and deep market expertise.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Strategic Partners</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Building className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Terrace</h4>
                    <p className="text-sm text-gray-600">75% commission partnership</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent/10 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <University className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sumo</h4>
                    <p className="text-sm text-gray-600">Banking relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team meeting" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office interior" 
              className="rounded-lg shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Tokyo business district" 
              className="rounded-lg shadow-lg -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business handshake" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
