import { Target, Eye, Compass, Shield, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: "VALUE",
      content: "We strive to perform with solid commitment to Integrity, Honesty, Transparency, Creativity with Respect for All.",
      color: "primary"
    },
    {
      icon: Eye,
      title: "VISION", 
      content: "To be recognized as the expert in logistic services with top-notch Customer Service.",
      color: "brand-green"
    },
    {
      icon: Target,
      title: "MISSION",
      content: "To design, build and deliver flexible, integrated, best-in-class and cost effective logistics solutions.",
      color: "primary"
    }
  ];

  const principles = [
    { icon: Shield, label: "Integrity", desc: "Honest and transparent in all our dealings" },
    { icon: Users, label: "Respect", desc: "Treating all stakeholders with dignity" },
    { icon: Award, label: "Excellence", desc: "Delivering quality in every service" },
    { icon: Compass, label: "Innovation", desc: "Creative solutions for complex challenges" }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Our Foundation
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Values, Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-brand-green rounded-full mx-auto"></div>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 
                    ${item.color === 'primary' ? 'bg-primary/10' : 'bg-brand-green/10'} 
                    group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent 
                      size={32} 
                      className={item.color === 'primary' ? 'text-primary' : 'text-brand-green'} 
                    />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 
                    ${item.color === 'primary' ? 'text-primary' : 'text-brand-green'}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Core Principles</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-brand-green/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{principle.label}</h4>
                  <p className="text-sm text-muted-foreground">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;