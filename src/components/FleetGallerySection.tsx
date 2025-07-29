import { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FleetGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fleetImages = [
    {
      id: 1,
      src: "/lovable-uploads/6f89b426-bf69-4a5d-b099-c650718361c0.png",
      alt: "WestMak Logistics Truck - Front View",
      caption: "Modern fleet with professional branding"
    },
    {
      id: 2,
      src: "/lovable-uploads/d3daba5f-34b4-44e2-bda3-adbf05c24d58.png",
      alt: "WestMak Logistics Truck with Cargo Trailer",
      caption: "Heavy-duty cargo transportation"
    },
    {
      id: 3,
      src: "/lovable-uploads/398d5d9b-f951-4a3f-8d53-c75359ba6b3b.png",
      alt: "WestMak Logistics Long Haul Truck",
      caption: "Long-distance freight solutions"
    },
    {
      id: 4,
      src: "/lovable-uploads/078928a3-4015-48a5-b5a4-97cb2264ef31.png",
      alt: "WestMak Logistics Bulk Transport",
      caption: "Specialized bulk cargo handling"
    },
    {
      id: 5,
      src: "/lovable-uploads/7d1e27c2-3c01-4a13-b6cc-0811d3ec4ed2.png",
      alt: "WestMak Logistics Heavy Load Transport",
      caption: "Heavy load transportation expertise"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === fleetImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? fleetImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-full mb-4">
            <Truck className="text-brand-green" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional vehicles equipped for all your logistics needs across Southern Africa
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={fleetImages[currentIndex].src}
              alt={fleetImages[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-semibold mb-2">
                {fleetImages[currentIndex].caption}
              </p>
              <p className="text-sm text-white/80">
                Vehicle {currentIndex + 1} of {fleetImages.length}
              </p>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {fleetImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-brand-green scale-105 shadow-lg'
                    : 'border-border hover:border-brand-green/50 hover:scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">5+</div>
            <div className="text-muted-foreground">Modern Vehicles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">24/7</div>
            <div className="text-muted-foreground">Fleet Operations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">100%</div>
            <div className="text-muted-foreground">GPS Tracked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetGallerySection;