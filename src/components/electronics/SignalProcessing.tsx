import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function SignalProcessing() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-teal">Signal</span> Processing
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Precision data acquisition and digital signal processing pipelines tailored for measurement and control systems.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• High‑fidelity ADC/DAC and analog front‑ends</li>
                <li>• DSP algorithms: filtering, FFT, feature extraction</li>
                <li>• Real‑time acquisition and buffering</li>
                <li>• Calibration and noise mitigation</li>
                <li>• Sensor fusion</li>
                <li>• Real‑time telemetry pipelines</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/signal-processing.jpg" alt="Signal processing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Accuracy</h3>
            <p className="text-white/90">From anti‑aliasing to quantization control, our designs preserve signal integrity for trustworthy results.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Careful analog design</h4>
                <p className="text-white/90">Low‑noise front‑ends, filtering, shielding, and reference stability.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Deterministic pipelines</h4>
                <p className="text-white/90">Real‑time buffers, scheduling, and bounded‑latency processing.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Calibration & QA</h4>
                <p className="text-white/90">Factory calibration procedures with golden samples and fixtures.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• MATLAB/Python DSP toolchains</li>
                <li>• Lab equipment: scopes, analyzers, DAQ</li>
                <li>• Data logging and traceability</li>
                <li>• Documentation for auditability</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Schematics and BOM for analog stages</li>
                <li>• DSP specifications and reference code</li>
                <li>• Calibration procedures and results</li>
                <li>• Verification and validation reports</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


