
import SectionWrapper from '../shared/SectionWrapper';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Simplified background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-nipay-green/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-400/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-nipay-green/10 text-nipay-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            What SMEs Are Saying
          </h2>
        </div>
        
        {/* Main Testimonial */}
        <div className="relative mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-nipay-green to-nipay-dark-green rounded-xl p-6 lg:p-8 text-white shadow-xl max-w-3xl mx-auto">
            {/* Quote icon */}
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <blockquote className="text-lg lg:text-xl mb-6 leading-relaxed italic text-center font-medium">
              "Before NiPay, I had to ask my supplier for credit. Now I just borrow from my own sales!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-base lg:text-lg font-bold">MA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-gray-900" />
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-base lg:text-lg">Mukamisha Annet</div>
                <div className="text-white/80 text-sm">Boutique Owner, Kimironko</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-4 space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
            <div className="w-10 h-10 bg-nipay-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5 text-nipay-green" />
            </div>
            <div className="text-3xl font-bold text-nipay-green mb-2">400+</div>
            <div className="text-gray-600 font-medium text-sm">SMEs Signed Up</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
            <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-nipay-green mb-2">258M</div>
            <div className="text-gray-600 font-medium text-sm">RWF Requested in Pilot</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
            <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-nipay-green mb-2">95%</div>
            <div className="text-gray-600 font-medium text-sm">Recommend NiPay</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
