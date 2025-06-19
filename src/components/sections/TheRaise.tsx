
import SectionWrapper from "../shared/SectionWrapper";

const TheRaise = () => {
  return (
    <SectionWrapper className="py-16 lg:py-18">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-r from-nipay-green to-nipay-dark-green rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">The Raise</h2>
          <div className="text-4xl lg:text-5xl font-bold mb-4">$550K</div>
          <p className="text-base mb-6">Pre-Seed Round</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-lg font-bold mb-1">18 months</div>
              <div className="text-sm opacity-90">Runway</div>
            </div>
            <div>
              <div className="text-lg font-bold mb-1">Series A</div>
              <div className="text-sm opacity-90">Next milestone</div>
            </div>
            <div>
              <div className="text-lg font-bold mb-1">10,000+</div>
              <div className="text-sm opacity-90">SMEs target</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TheRaise;
