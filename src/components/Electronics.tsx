interface ElectronicsProps {
  onPageChange?: (page: string) => void;
}

import { Reveal } from './Reveal';
import useScrollTop from './useScrollTop';

export default function Electronics({ onPageChange }: ElectronicsProps) {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="text-5xl font-bold mb-6">
              <span className="brand-teal">Electronics</span> Solutions
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge hardware design and electronic systems that power the future
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {/* Hardware Design */}
          <Reveal>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#24c4c4]/20 hover:border-[#24c4c4]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
            <div className="service-card-header">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mb-6 flex items-center justify-center">
              <svg className="icon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Hardware Design</h3>
            <p className="text-gray-300 mb-6">Custom PCB design, schematic development, and prototype creation for specialized applications.</p>
            </div>
            <ul className="service-list">
              <li>• PCB Layout & Design</li>
              <li>• Circuit Analysis</li>
              <li>• Component Selection</li>
              <li>• Prototype Development</li>
            </ul>
          </div>
          </Reveal>

          {/* IoT Solutions */}
          <Reveal delay={0.08}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#24c4c4]/20 hover:border-[#24c4c4]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
            <div className="service-card-header">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mb-6 flex items-center justify-center">
              <svg className="icon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">IoT Solutions</h3>
            <p className="text-gray-300 mb-6">End-to-end IoT development from sensors to cloud connectivity and data analytics.</p>
            </div>
            <ul className="service-list">
              <li>• Sensor Integration</li>
              <li>• Wireless Communication</li>
              <li>• Edge Computing</li>
              <li>• Cloud Connectivity</li>
            </ul>
          </div>
          </Reveal>

          {/* Embedded Systems */}
          <Reveal delay={0.16}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#24c4c4]/20 hover:border-[#24c4c4]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
            <div className="service-card-header">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mb-6 flex items-center justify-center">
              <svg className="icon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Embedded Systems</h3>
            <p className="text-gray-300 mb-6">Microcontroller programming and real-time systems for industrial applications.</p>
            </div>
            <ul className="service-list">
              <li>• Microcontroller Programming</li>
              <li>• Real-time Systems</li>
              <li>• Firmware Development</li>
              <li>• System Integration</li>
            </ul>
          </div>
          </Reveal>

          {/* Signal Processing */}
          <Reveal delay={0.24}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#24c4c4]/20 hover:border-[#24c4c4]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
            <div className="service-card-header">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mb-6 flex items-center justify-center">
              <svg className="icon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Signal Processing</h3>
            <p className="text-gray-300 mb-6">Advanced signal processing and data acquisition systems for precise measurements.</p>
            </div>
            <ul className="service-list">
              <li>• Data Acquisition</li>
              <li>• Digital Filters</li>
              <li>• Analog Design</li>
              <li>• Measurement Systems</li>
            </ul>
          </div>
          </Reveal>

          {/* Power Systems */}
          <Reveal delay={0.32}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#24c4c4]/20 hover:border-[#24c4c4]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
            <div className="service-card-header">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mb-6 flex items-center justify-center">
              <svg className="icon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Power Systems</h3>
            <p className="text-gray-300 mb-6">Efficient power management and energy harvesting solutions for sustainable electronics.</p>
            </div>
            <ul className="service-list">
              <li>• Power Management</li>
              <li>• Battery Systems</li>
              <li>• Energy Harvesting</li>
              <li>• Efficiency Optimization</li>
            </ul>
          </div>
          </Reveal>

          {/* Testing & Validation */}
          <Reveal delay={0.4}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#24c4c4]/20 hover:border-[#24c4c4]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
            <div className="service-card-header">
            <div className="w-16 h-16 bg-[#24c4c4]/20 rounded-full mb-6 flex items-center justify-center">
              <svg className="icon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Testing & Validation</h3>
            <p className="text-gray-300 mb-6">Comprehensive testing protocols and validation processes to ensure reliability.</p>
            </div>
            <ul className="service-list">
              <li>• Performance Testing</li>
              <li>• Compliance Verification</li>
              <li>• Environmental Testing</li>
              <li>• Quality Assurance</li>
            </ul>
          </div>
          </Reveal>
        </div>

        {/* Process Section */}
        <Reveal>
        <div className="bg-gradient-to-r from-[#24c4c4]/10 to-[#bc3723]/10 rounded-lg p-12 mb-16 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Reveal>
            <div className="text-center">
              <div className="process-circle-teal mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2">Consultation</h4>
              <p className="process-desc text-sm">Understanding your requirements and technical specifications</p>
            </div>
            </Reveal>
            <Reveal delay={0.08}>
            <div className="text-center">
              <div className="process-circle-teal mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2">Design</h4>
              <p className="process-desc text-sm">Creating detailed schematics and system architecture</p>
            </div>
            </Reveal>
            <Reveal delay={0.16}>
            <div className="text-center">
              <div className="process-circle-teal mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2">Prototype</h4>
              <p className="process-desc text-sm">Building and testing functional prototypes</p>
            </div>
            </Reveal>
            <Reveal delay={0.24}>
            <div className="text-center">
              <div className="process-circle-teal mx-auto mb-4">4</div>
              <h4 className="font-bold mb-2">Production</h4>
              <p className="process-desc text-sm">Manufacturing and quality assurance</p>
            </div>
            </Reveal>
          </div>
        </div>
        </Reveal>

        {/* Call to Action */}
        <div className="text-center">
          <Reveal>
            <h3 className="text-3xl font-bold mb-6">Ready to bring your electronics project to life?</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              From concept to production, we provide comprehensive electronics solutions tailored to your needs.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <button className="btn" onClick={() => onPageChange && onPageChange('contact')}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Contact our electronics team today
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}