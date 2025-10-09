import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function EnterpriseSoftware() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-red">Enterprise</span> Software
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Highly available platforms that streamline operations, integrate systems, and scale with your business.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• ERP/CRM customization and integration</li>
                <li>• Workflow automation and RPA</li>
                <li>• Role‑based access and auditability</li>
                <li>• Observability and SLOs</li>
                <li>• Data governance and compliance</li>
                <li>• Performance and resilience engineering</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/enterprise-software.jpg" alt="Enterprise software" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Compliance</h3>
            <p className="text-white/90">We design for security and compliance, aligned with organizational policies and industry standards.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Stakeholder alignment</h4>
                <p className="text-white/90">Roadmaps, SLAs, and governance models that align IT and business.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Integration first</h4>
                <p className="text-white/90">Connectors and APIs to unify systems and eliminate swivel‑chair work.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Operational excellence</h4>
                <p className="text-white/90">Runbooks, on‑call rotations, and observability baked in.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Microservices, message buses, and eventing</li>
                <li>• IAM, SSO, RBAC/ABAC policies</li>
                <li>• Observability: tracing, metrics, logs</li>
                <li>• Compliance frameworks (SOC2, ISO 27001)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Architecture diagrams and ADRs</li>
                <li>• API contracts and integration guides</li>
                <li>• Runbooks and escalation paths</li>
                <li>• SLA/SLO definitions</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


