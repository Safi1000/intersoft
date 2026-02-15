interface SoftwareProps {
  onPageChange?: (page: string) => void;
}

import { Reveal } from './Reveal';
import useScrollTop from './useScrollTop';

export default function Software({ onPageChange }: SoftwareProps) {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="text-5xl font-bold mb-6">
              <span className="brand-red page-title-highlight">Software</span> Development
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom software solutions that power businesses and drive innovation
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {/* Web Applications */}
          <Reveal>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#bc3723]/20 hover:border-[#bc3723]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mb-6 flex items-center justify-center icon-bg-container">
                  <svg className="icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9c0-5 4-9 9-9s9 4 9 9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Applications</h3>
                <p className="text-gray-300 mb-6">Modern, responsive web applications built with cutting-edge technologies and frameworks.</p>
              </div>
              <ul className="service-list">
                <li>• React & Next.js</li>
                <li>• Progressive Web Apps</li>
                <li>• API Development</li>
                <li>• Cloud Deployment</li>
              </ul>
            </div>
          </Reveal>

          {/* Mobile Applications */}
          <Reveal delay={0.08}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#bc3723]/20 hover:border-[#bc3723]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mb-6 flex items-center justify-center icon-bg-container">
                  <svg className="icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile Applications</h3>
                <p className="text-gray-300 mb-6">Cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.</p>
              </div>
              <ul className="service-list">
                <li>• React Native</li>
                <li>• Flutter Development</li>
                <li>• Native iOS & Android</li>
                <li>• App Store Deployment</li>
              </ul>
            </div>
          </Reveal>

          {/* Enterprise Software */}
          <Reveal delay={0.16}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#bc3723]/20 hover:border-[#bc3723]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mb-6 flex items-center justify-center icon-bg-container">
                  <svg className="icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Software</h3>
                <p className="text-gray-300 mb-6">Scalable enterprise solutions that streamline business processes and improve efficiency.</p>
              </div>
              <ul className="service-list">
                <li>• ERP Systems</li>
                <li>• CRM Solutions</li>
                <li>• Workflow Automation</li>
                <li>• System Integration</li>
              </ul>
            </div>
          </Reveal>

          {/* Data Analytics */}
          <Reveal delay={0.24}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#bc3723]/20 hover:border-[#bc3723]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mb-6 flex items-center justify-center icon-bg-container">
                  <svg className="icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
                <p className="text-gray-300 mb-6">Transform raw data into actionable insights with advanced analytics and visualization tools.</p>
              </div>
              <ul className="service-list">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Machine Learning</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
          </Reveal>

          {/* DevOps & Cloud */}
          <Reveal delay={0.32}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#bc3723]/20 hover:border-[#bc3723]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mb-6 flex items-center justify-center icon-bg-container">
                  <svg className="icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">DevOps & Cloud</h3>
                <p className="text-gray-300 mb-6">Streamlined deployment pipelines and cloud infrastructure for scalable applications.</p>
              </div>
              <ul className="service-list">
                <li>• CI/CD Pipelines</li>
                <li>• AWS/Azure/GCP</li>
                <li>• Container Orchestration</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
          </Reveal>

          {/* AI & Machine Learning */}
          <Reveal delay={0.4}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#bc3723]/20 hover:border-[#bc3723]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full md:min-h-[360px] flex flex-col">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#bc3723]/20 rounded-full mb-6 flex items-center justify-center icon-bg-container">
                  <svg className="icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6">Intelligent solutions powered by artificial intelligence and machine learning algorithms.</p>
              </div>
              <ul className="service-list">
                <li>• Neural Networks</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Technology Stack */}
        <Reveal>
          <div className="bg-gradient-to-r from-[#bc3723]/10 to-[#24c4c4]/10 rounded-lg p-12 mb-16 border border-white/10">
            <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h4 className="font-bold mb-4 brand-red tech-stack-title">Frontend</h4>
                <ul className="service-list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 brand-red tech-stack-title">Backend</h4>
                <ul className="service-list">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 brand-red tech-stack-title">Mobile</h4>
                <ul className="service-list">
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-4 brand-red tech-stack-title">Cloud</h4>
                <ul className="service-list">
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Process Section */}
        <Reveal>
          <div className="bg-gradient-to-r from-[#24c4c4]/10 to-[#bc3723]/10 rounded-lg p-12 mb-16 border border-white/10">
            <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Reveal>
                <div className="text-center">
                  <div className="process-circle-red mx-auto mb-4">1</div>
                  <h4 className="font-bold mb-2">Consultation</h4>
                  <p className="process-desc text-sm">Understanding your business goals, user needs, and technical requirements to define the project scope and roadmap.</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="text-center">
                  <div className="process-circle-red mx-auto mb-4">2</div>
                  <h4 className="font-bold mb-2">Design</h4>
                  <p className="process-desc text-sm">Creating UI/UX wireframes, system architecture, and database structures to ensure a scalable and user-friendly solution.</p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="text-center">
                  <div className="process-circle-red mx-auto mb-4">3</div>
                  <h4 className="font-bold mb-2">Development</h4>
                  <p className="process-desc text-sm">Building the software using modern technologies, following best coding practices, and implementing core features and integrations.</p>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="text-center">
                  <div className="process-circle-red mx-auto mb-4">4</div>
                  <h4 className="font-bold mb-2">Testing & Deployment</h4>
                  <p className="process-desc text-sm">Thorough testing for performance, security, and bugs, followed by deployment and ongoing maintenance support.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Call to Action */}
        <div className="text-center">
          <Reveal>
            <h3 className="text-3xl font-bold mb-6">Ready to transform your business with custom software?</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              From web applications to enterprise systems, we build software solutions that drive results.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <button className="btn" onClick={() => onPageChange && onPageChange('contact')}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Discuss your software project with our team
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}