
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { api } from '@/services/api';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await api.getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return (
      <SectionWrapper className="min-h-[300px] flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-lg">Loading testimonials...</p>
        </div>
      </SectionWrapper>
    );
  }

  if (testimonials.length === 0) {
    return (
      <SectionWrapper className="min-h-[300px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Early Adopters Say
          </h2>
          <p>Testimonials coming soon. Join our waitlist to be one of the first!</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        What Our Early Adopters Say
      </h2>
      
      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-lg mb-4 relative">
                        <span className="text-3xl text-nipay-green absolute -left-4 -top-2">"</span>
                        {testimonial.quote}
                        <span className="text-3xl text-nipay-green">"</span>
                      </p>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2" />
          <CarouselNext className="relative static ml-2" />
        </div>
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
