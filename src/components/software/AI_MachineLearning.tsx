import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function AI_MachineLearning() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-red">AI</span> & Machine Learning
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Intelligent systems that learn from data to automate decisions and enhance products.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• Model development and MLOps pipelines</li>
                <li>• NLP, vision, and recommendation systems</li>
                <li>• Data labeling and evaluation frameworks</li>
                <li>• Responsible AI and governance</li>
                <li>• Prompt engineering and retrieval</li>
                <li>• Monitoring and guardrails</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/ai-machine-learning.jpg" alt="AI and Machine Learning" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Productionization</h3>
            <p className="text-white/90">From notebooks to production with versioned datasets, reproducible training, and monitoring.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Problem discovery</h4>
                <p className="text-white/90">Business framing, baselines, and ROI to ensure model value.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">MLOps lifecycle</h4>
                <p className="text-white/90">Data versioning, experiment tracking, and monitored deployments.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Responsible AI</h4>
                <p className="text-white/90">Bias checks, privacy safeguards, and governance for trust.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Python/ML frameworks, feature stores</li>
                <li>• Model registries and deployment platforms</li>
                <li>• Online/offline evaluation and monitoring</li>
                <li>• Risk and compliance documentation</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• End‑to‑end pipelines and code</li>
                <li>• Model cards and evaluation reports</li>
                <li>• Inference services and dashboards</li>
                <li>• Governance and risk assessments</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


