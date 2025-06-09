
import SectionWrapper from '../shared/SectionWrapper';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12 lg:mb-16 text-gray-900">
          What SMEs Are Saying
        </h2>
        
        <div className="bg-gradient-to-br from-nipay-green to-nipay-dark-green rounded-2xl p-8 lg:p-12 text-white shadow-xl">
          <Quote className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-6 lg:mb-8 opacity-80" />
          
          <blockquote className="text-xl lg:text-2xl mb-8 lg:mb-10 leading-relaxed italic">
            "Before NiPay, I had to ask my supplier for credit. Now I just borrow from my own sales!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg lg:text-xl font-bold">MA</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg lg:text-xl">Mukamisha Annet</div>
              <div className="text-white/80">Boutique Owner, Kimironko</div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 lg:mt-8 space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 lg:mt-16">
          <div className="text-center p-6 lg:p-8 bg-gray-50 rounded-xl">
            <div className="text-3xl lg:text-4xl font-bold text-nipay-green mb-2">400+</div>
            <div className="text-gray-600">SMEs Already Signed Up</div>
          </div>
          
          <div className="text-center p-6 lg:p-8 bg-gray-50 rounded-xl">
            <div className="text-3xl lg:text-4xl font-bold text-nipay-green mb-2">258M</div>
            <div className="text-gray-600">RWF Requested in Pilot</div>
          </div>
          
          <div className="text-center p-6 lg:p-8 bg-gray-50 rounded-xl">
            <div className="text-3xl lg:text-4xl font-bold text-nipay-green mb-2">95%</div>
            <div className="text-gray-600">Would Recommend NiPay</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
