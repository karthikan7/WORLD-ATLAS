import countryfacts from "../api/countrydata.json";

export const About = () => {
  return (
    <section className="bg-black mx-auto max-w-[140rem] px-[3.2rem] py-[4rem]">
      <h2 className="text-center mb-[3.2rem] text-[40px] font-semibold leading-[60px] text-white">
        HERE ARE THE INTERESTING FACTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.4rem] w-full max-w-[1400px] mx-auto">
        {countryfacts.map(({ id, countryName, capital, population, interestingFact }) => (
          <div key={id} className="w-full">
            <div className="rounded-[30px] p-[32px] bg-gradient-to-r from-[#1a1a1a] via-[#] to-[#9d4cbb] shadow-md hover:shadow-lg transition duration-300">
              <p className="text-white font-semibold text-[24px] leading-[36px] pb-[8px] tracking-[-0.02em]">
                {countryName}
              </p>
              <p>
                <span className="text-white/50 font-semibold">Capital:</span> {capital}
              </p>
              <p>
                <span className="text-white/50 font-semibold">Population:</span> {population}
              </p>
              <p>
                <span className="text-white/50 font-semibold">Interesting Facts:</span> {interestingFact}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
