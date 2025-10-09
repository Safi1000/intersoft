import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function DevOpsCloud() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-red">DevOps</span> & Cloud
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Automated delivery pipelines and resilient cloud infrastructure for fast, safe releases.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• CI/CD pipelines and release strategies</li>
                <li>• Containers and orchestration (Kubernetes)</li>
                <li>• IaC with Terraform and cloud security</li>
                <li>• Monitoring, logging, and incident response</li>
                <li>• Compliance and policy enforcement</li>
                <li>• Cost optimization and governance</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/devops-cloud.jpg" alt="DevOps and Cloud" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Velocity</h3>
            <p className="text-white/90">Ship faster with fewer failures by codifying environments and automating quality gates.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Paved roads</h4>
                <p className="text-white/90">Standardized CI/CD templates, environments, and security gates.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Observability by default</h4>
                <p className="text-white/90">Unified logs, metrics, and traces with actionable alerts.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Resilience testing</h4>
                <p className="text-white/90">Chaos drills, backups, and recovery runbooks validated regularly.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Docker/Kubernetes, Helm, and GitOps</li>
                <li>• Terraform/IaC with policy as code</li>
                <li>• SRE practices and error budgets</li>
                <li>• Security scanning and SBOMs</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• CI/CD templates and environment configs</li>
                <li>• Observability dashboards and alerts</li>
                <li>• Disaster recovery runbooks</li>
                <li>• Cost optimization reports</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


