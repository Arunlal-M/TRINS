import React from 'react';

const CurriculumSection = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#EAC985] py-16 md:py-24 flex flex-col justify-start">
      {/* Main content - Title and description at the top */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center pt-8 md:pt-12">
        <h2
          className="text-6xl md:text-7xl lg:text-8xl font-black text-center relative"
          style={{
            fontFamily: 'Gideon Roman, serif',
            color: 'black',
            letterSpacing: '0.1em',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '0.5em',
          }}
        >
          CURRICULUM
        </h2>

        {/* Description text with specified styling */}
        <div
          className="mx-auto mt-4 mb-8"
          style={{
            width: '992px',
            maxWidth: '100%',
            fontFamily: 'Gideon Roman, serif',
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: '1.6',
            letterSpacing: '0.02em',
            textAlign: 'center',
            padding: '0 1rem',
          }}
        >
          <p>
            I am fortunate to have been part of the creation of Western International School in
            2003. From its inception, Mr George M
          </p>
        </div>
      </div>

      {/* Content container with CURRICULUM background */}
      <div className="w-full relative mt-8 md:mt-12 flex-grow min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background CURRICULUM text */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          style={{
            zIndex: 1,
          }}
        >
          <div
            className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              fontFamily: 'Cormorant, serif',
              fontWeight: 600,
              fontSize: 'clamp(100px, 16vw, 261.28px)',
              lineHeight: '1.2em',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)',
              opacity: 0.4,
              maxWidth: '100%',
              width: '100%',
            }}
          >
            CURRICULUM
            <br />
            CURRICULUM
          </div>
        </div>
      </div>

      {/* Diamond buttons with connecting lines */}
      <div className="w-full mt-8 md:mt-16">
        <div className="container mx-auto">
          <div className="w-full overflow-x-auto py-8">
            <div className="flex justify-center items-center min-w-max px-4 relative">
              {' '}
              {/* Single continuous line connecting all diamonds */}
              <div
                className="absolute h-[1px] bg-black top-[40px] md:top-[50px] z-0"
                style={{
                  width: 'calc(100% - 200px)',
                  left: '100px',
                  right: '100px',
                }}
              ></div>
              {/* Diamond 01 - Active by default */}
              <div className="flex flex-col items-center mx-4 md:mx-8">
                <div className="relative">
                  <div
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rotate-45 flex items-center justify-center cursor-pointer group transition-all duration-300 z-10 relative"
                    style={{
                      backgroundColor: '#085038',
                      border: '1px solid #000',
                    }}
                  >
                    <span className="text-white text-2xl md:text-3xl font-bold -rotate-45">01</span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="font-bold mb-1">Early Year Program</h4>
                  <p className="text-sm">3 to 5 Years</p>
                </div>
              </div>
              {/* Diamond 02 */}
              <div className="flex flex-col items-center mx-4 md:mx-8">
                <div className="relative">
                  <div
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#085038] transition-all duration-300 z-10 relative"
                    style={{
                      border: '1px solid #000',
                      backgroundColor: '#EAC985',
                    }}
                  >
                    <span className="text-black text-2xl md:text-3xl font-bold -rotate-45 group-hover:text-white transition-colors duration-300">
                      02
                    </span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="font-bold mb-1">Primary Year Program</h4>
                  <p className="text-sm">6 to 10 Years</p>
                </div>
              </div>
              {/* Diamond 03 */}
              <div className="flex flex-col items-center mx-4 md:mx-8">
                <div className="relative">
                  <div
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#085038] transition-all duration-300 z-10 relative"
                    style={{
                      border: '1px solid #000',
                      backgroundColor: '#EAC985',
                    }}
                  >
                    <span className="text-black text-2xl md:text-3xl font-bold -rotate-45 group-hover:text-white transition-colors duration-300">
                      03
                    </span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="font-bold mb-1">Middle School</h4>
                  <p className="text-sm">11 to 13 Years</p>
                </div>
              </div>
              {/* Diamond 04 */}
              <div className="flex flex-col items-center mx-4 md:mx-8">
                <div className="relative">
                  <div
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#085038] transition-all duration-300 z-10 relative"
                    style={{
                      border: '1px solid #000',
                      backgroundColor: '#EAC985',
                    }}
                  >
                    <span className="text-black text-2xl md:text-3xl font-bold -rotate-45 group-hover:text-white transition-colors duration-300">
                      04
                    </span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="font-bold mb-1">Secondary School</h4>
                  <p className="text-sm">14 to 16 Years</p>
                </div>
              </div>
              {/* Diamond 05 - Last */}
              <div className="flex flex-col items-center mx-4 md:mx-8">
                <div className="relative">
                  <div
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#085038] transition-all duration-300 z-10 relative"
                    style={{
                      border: '1px solid #000',
                      backgroundColor: '#EAC985',
                    }}
                  >
                    <span className="text-black text-2xl md:text-3xl font-bold -rotate-45 group-hover:text-white transition-colors duration-300">
                      05
                    </span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="font-bold mb-1">Senior Secondary School</h4>
                  <p className="text-sm">17 to 18 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
