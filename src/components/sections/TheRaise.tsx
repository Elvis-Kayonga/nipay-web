
import SectionWrapper from "../shared/SectionWrapper";

const TheRaise = () => {
  return (
    <SectionWrapper className="py-12 lg:py-14">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-r from-nipay-green to-nipay-dark-green rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Raise</h2>
          <div className="text-5xl lg:text-6xl font-bold mb-4">$550K</div>
          <p className="text-lg mb-6">Pre-Seed Round</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-xl font-bold mb-1">18 months</div>
              <div className="text-sm opacity-90">Runway</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1">Series A</div>
              <div className="text-sm opacity-90">Next milestone</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1">10,000+</div>
              <div className="text-sm opacity-90">SMEs target</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TheRaise;
