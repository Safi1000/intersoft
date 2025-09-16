import { Reveal } from './Reveal';
import useScrollTop from './useScrollTop';

export default function About() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-[#24c4c4]">Intersoft</span> International
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the intersection of hardware and software innovation since our founding
            </p>
          </Reveal>
        </div>

        {/* Company Story Timeline */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <Reveal>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-[#24c4c4] mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between cutting-edge electronics and innovative software solutions, 
                delivering integrated systems that push the boundaries of what's possible in technology.
              </p>
            </div>
            </Reveal>
            
            <Reveal delay={0.08}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-[#bc3723] mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in integrated technology solutions, where hardware meets software 
                in perfect harmony to create tomorrow's innovations today.
              </p>
            </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <h3 className="text-3xl font-bold mb-8">Company Timeline</h3>
            </Reveal>
            
            <div className="space-y-6">
              <Reveal>
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-[#24c4c4] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-white">2010 - Foundation</h4>
                  <p className="text-gray-400">Started as a small electronics consulting firm</p>
                </div>
              </div>
              </Reveal>
              
              <Reveal delay={0.08}>
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-[#24c4c4] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-white">2015 - Software Division</h4>
                  <p className="text-gray-400">Expanded into custom software development</p>
                </div>
              </div>
              </Reveal>
              
              <Reveal delay={0.16}>
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-[#bc3723] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-white">2020 - IoT Solutions</h4>
                  <p className="text-gray-400">Pioneered integrated IoT hardware-software platforms</p>
                </div>
              </div>
              </Reveal>
              
              <Reveal delay={0.24}>
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-[#bc3723] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-white">2024 - Global Expansion</h4>
                  <p className="text-gray-400">International presence across 15 countries</p>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Team & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Reveal>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-400">Constantly pushing technological boundaries</p>
          </div>
          </Reveal>

          <Reveal delay={0.08}>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quality</h3>
            <p className="text-gray-400">Uncompromising standards in every project</p>
          </div>
          </Reveal>

          <Reveal delay={0.16}>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#bc3723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p className="text-gray-400">Working together to achieve excellence</p>
          </div>
          </Reveal>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Reveal>
            <h3 className="text-3xl font-bold mb-6">Ready to innovate with us?</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <a href="#" className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Get in touch to discuss your next project
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}