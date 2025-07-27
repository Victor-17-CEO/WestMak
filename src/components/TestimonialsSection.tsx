import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Trade Solutions",
      role: "Supply Chain Director",
      content: "Westmak Logistics has been our trusted partner for over 2 years. Their reliability and professionalism in handling our freight forwarding needs is exceptional. The team goes above and beyond to ensure timely deliveries.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Michael Chen", 
      company: "Manufacturing Plus",
      role: "Operations Manager",
      content: "The land transportation services provided by Westmak are outstanding. They understand our requirements and consistently deliver on time. Their modern fleet and professional drivers give us complete confidence.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "David Mukamuri",
      company: "African Exports Ltd",
      role: "CEO",
      content: "Working with Westmak Logistics has transformed our supply chain efficiency. Their tailor-made solutions and dedicated support team have helped us expand our operations across the region successfully.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Lisa Moyo",
      company: "Retail Connect",
      role: "Logistics Coordinator", 
      content: "Exceptional service from inquiry to delivery. Westmak's team is responsive, professional, and always finds solutions to our logistics challenges. They truly understand the meaning of customer service.",
      rating: 5,
      image: "👩‍💼"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-brand-green/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-brand-green rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our logistics services and commitment to excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote size={32} className="text-brand-green/30" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-green/20 flex items-center justify-center text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-brand-green font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Successful Deliveries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">98%</div>
            <div className="text-muted-foreground">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;