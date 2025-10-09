import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function EmbeddedSystems() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-teal">Embedded</span> Systems
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Deterministic firmware and RTOS solutions for industrial, consumer, and medical devices with rigorous quality standards.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• Bare‑metal and RTOS firmware (FreeRTOS, Zephyr)</li>
                <li>• Driver development and board bring‑up</li>
                <li>• Bootloaders, power management, diagnostics</li>
                <li>• Continuous integration and test automation</li>
                <li>• Continuous profiling and optimization</li>
                <li>• Safety mechanisms and diagnostics</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/embedded-systems (2).jpg" alt="Embedded systems" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Reliability</h3>
            <p className="text-white/90">We prioritize watchdogs, fail‑safes, and robust error handling to ensure predictable operation in the field.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Architecture upfront</h4>
                <p className="text-white/90">Task models, timing budgets, and HAL abstractions to sustain growth.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Continuous testing</h4>
                <p className="text-white/90">Unit, integration, and HIL tests in CI for predictable releases.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Observability</h4>
                <p className="text-white/90">Event logs, metrics, and debug modes for quick triage in the field.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• FreeRTOS/Zephyr; C/C++ with static analysis</li>
                <li>• MISRA‑C guidance and code reviews</li>
                <li>• Bootloaders, DFU, and diagnostics</li>
                <li>• Test fixtures and emulators</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Firmware source with build scripts</li>
                <li>• Board support packages and drivers</li>
                <li>• Test suites and coverage reports</li>
                <li>• Release notes and upgrade guides</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


