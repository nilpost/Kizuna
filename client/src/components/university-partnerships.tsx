import { GraduationCap, Presentation, Handshake } from "lucide-react";

export default function UniversityPartnerships() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="partnerships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">University Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting international business students with comprehensive housing and investment education
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Benefits</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                  <GraduationCap className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Student Housing Solutions</h4>
                  <p className="text-gray-600">Specially curated housing options for international business students with flexible lease terms and furnished units.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                  <Presentation className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real Estate Education</h4>
                  <p className="text-gray-600">Workshops and seminars on Japanese real estate investment, market trends, and investment strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                  <Handshake className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Exclusive Partnerships</h4>
                  <p className="text-gray-600">Preferred pricing and priority access to premium properties for partner university students and alumni.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Partner With Us
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="International students" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="University campus" 
              className="rounded-lg shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Students collaborating" 
              className="rounded-lg shadow-lg -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business presentation" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
