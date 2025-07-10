import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "MBA Student, Tokyo",
      initials: "SM",
      content: "The virtual tour technology was incredible! I was able to find and secure my apartment in Tokyo before even arriving in Japan. The team made the entire process seamless.",
      bgColor: "bg-secondary"
    },
    {
      name: "David Kim",
      role: "Foreign Investor",
      initials: "DK",
      content: "Excellent investment guidance and property management. My Nagano vacation rental has exceeded all expectations in terms of rental income and property appreciation.",
      bgColor: "bg-accent"
    },
    {
      name: "Anna Rodriguez",
      role: "Expat Professional",
      initials: "AR",
      content: "The comprehensive relocation support was invaluable. From finding my apartment to setting up banking, they took care of everything. Highly recommend!",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hear from international clients who found their perfect property in Japan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-blue-100 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
