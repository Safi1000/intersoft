import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function PowerSystems() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-teal">Power</span> Systems
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Efficient, safe, and compliant power architectures for battery‑powered and mains‑connected products.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• PMIC selection and power tree design</li>
                <li>• Battery systems, charging, and fuel gauging</li>
                <li>• Energy harvesting and ultra‑low‑power modes</li>
                <li>• Thermal design and efficiency optimization</li>
                <li>• Protections and safety analysis</li>
                <li>• EMI/EMC considerations</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/power-systems.jpg" alt="Power systems" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Safety & Compliance</h3>
            <p className="text-white/90">We design for UL/CE compliance with protections, isolation, and thorough validation to safeguard users and hardware.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Efficiency first</h4>
                <p className="text-white/90">Topology selection, switching strategies, and thermal budgets grounded in data.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Safety analysis</h4>
                <p className="text-white/90">Protection, isolation, creepage/clearance, and fault‑tree reviews.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Validation plans</h4>
                <p className="text-white/90">Load/line regulation, transients, and environmental testing.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Power sims (LTspice, vendor tools)</li>
                <li>• IPC, UL/CE, IEC safety references</li>
                <li>• Thermal analysis and profiling</li>
                <li>• Test benches and fixtures</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Schematics and layouts for power stages</li>
                <li>• Thermal and efficiency reports</li>
                <li>• Safety documentation</li>
                <li>• Validation results and recommendations</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


