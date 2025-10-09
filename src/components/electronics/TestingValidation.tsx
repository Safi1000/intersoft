import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function TestingValidation() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-teal">Testing</span> & Validation
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Comprehensive verification plans, test automation, and environmental validation to ensure reliable performance at scale.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• Functional, performance, and regression testing</li>
                <li>• Compliance and EMC pre‑certification</li>
                <li>• HAL/driver test harnesses and HIL rigs</li>
                <li>• Documentation and traceability</li>
                <li>• Fault injection and robustness testing</li>
                <li>• Reliability and soak tests</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/testing-validation (2).jpg" alt="Testing and validation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Confidence</h3>
            <p className="text-white/90">Ship with confidence thanks to measurable quality gates and repeatable test suites integrated into CI.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Test strategy</h4>
                <p className="text-white/90">Risk‑based plans covering functional, performance, and environmental tests.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Automation first</h4>
                <p className="text-white/90">HIL rigs, fixtures, and scripts built into CI pipelines for repeatability.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Traceability</h4>
                <p className="text-white/90">Requirements linking to tests and reports for audit readiness.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• LabView/Python rigs, serial harnesses</li>
                <li>• Pre‑compliance EMC tools and jigs</li>
                <li>• Environmental chambers and fixtures</li>
                <li>• Structured reporting templates</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Test plans and traceability matrix</li>
                <li>• Automated scripts and harnesses</li>
                <li>• Test reports with pass/fail criteria</li>
                <li>• Issue logs and corrective actions</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


