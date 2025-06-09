
import SectionWrapper from '../shared/SectionWrapper';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nipay-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-nipay-green/10 text-nipay-green px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            What SMEs Are Saying
          </h2>
        </div>
        
        {/* Main Testimonial */}
        <div className="relative mb-16 lg:mb-20">
          <div className="bg-gradient-to-br from-nipay-green to-nipay-dark-green rounded-3xl p-10 lg:p-14 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>
            
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl mb-10 lg:mb-12 leading-relaxed italic text-center font-medium">
              "Before NiPay, I had to ask my supplier for credit. Now I just borrow from my own sales!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xl lg:text-2xl font-bold">MA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-gray-900" />
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-xl lg:text-2xl">Mukamisha Annet</div>
                <div className="text-white/80 text-lg">Boutique Owner, Kimironko</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 lg:mt-10 space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 lg:w-8 lg:h-8 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <div className="group">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-nipay-green/20 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-nipay-green/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-nipay-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-nipay-green" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-nipay-green mb-3 group-hover:scale-110 transition-transform">400+</div>
                <div className="text-gray-600 font-medium text-lg">SMEs Already Signed Up</div>
              </div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-nipay-green/20 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-nipay-green mb-3 group-hover:scale-110 transition-transform">258M</div>
                <div className="text-gray-600 font-medium text-lg">RWF Requested in Pilot</div>
              </div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-nipay-green/20 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-nipay-green mb-3 group-hover:scale-110 transition-transform">95%</div>
                <div className="text-gray-600 font-medium text-lg">Would Recommend NiPay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
