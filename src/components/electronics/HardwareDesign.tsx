import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function HardwareDesign() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-teal">Hardware</span> Design
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">We deliver robust PCB schematics, layouts, and prototypes—from concept to production—optimized for signal integrity, manufacturability, and compliance.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] box-border flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• Schematic capture and BoM optimization</li>
                <li>• PCB layout: HDI, high‑speed, RF, impedance control</li>
                <li>• DFM/DFT, EMC/EMI‑aware routing and stackups</li>
                <li>• Rapid prototyping and bring‑up</li>
                <li>• Impedance and SI simulations</li>
                <li>• Manufacturing NPI support</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/hardware-design.jpg" alt="Hardware design" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Outcomes</h3>
            <p className="text-white/90">Production‑ready designs with clean documentation, repeatable builds, and test coverage that reduces risk and shortens time‑to‑market.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Design for manufacturability</h4>
                <p className="text-white/90">Early DFM/DFT reviews, clear fabrication notes, and vendor‑ready outputs.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Signal‑integrity reviews</h4>
                <p className="text-white/90">Stackups, return paths, and controlled impedance validated against constraints.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Iterative prototyping</h4>
                <p className="text-white/90">Short design cycles with bring‑up checklists and measured acceptance criteria.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Altium/KiCad, controlled templates and libraries</li>
                <li>• IPC‑2221/2222, IPC‑7351 footprint standards</li>
                <li>• EMC/EMI best practices; pre‑scan readiness</li>
                <li>• Versioned design packages and release notes</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Source schematics and layouts</li>
                <li>• Fabrication and assembly files (Gerbers, ODB++, BoM, pick/place)</li>
                <li>• Bring‑up procedures and test reports</li>
                <li>• Revision history and change log</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


