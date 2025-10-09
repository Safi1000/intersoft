import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function WebApplications() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-red">Web</span> Applications
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Modern, responsive, and accessible web apps built on scalable architectures and performance best practices.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• React/Next.js, TypeScript, SSR/SSG</li>
                <li>• Progressive Web Apps and offline UX</li>
                <li>• REST/GraphQL APIs and integrations</li>
                <li>• Performance, SEO, and accessibility</li>
                <li>• Security: auth, access, and data protections</li>
                <li>• Observability and error tracking</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/web-applications.jpg" alt="Web applications" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Outcomes</h3>
            <p className="text-white/90">Reliable, fast, and maintainable web applications with clean codebases and CI/CD pipelines.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Business‑aligned roadmaps</h4>
                <p className="text-white/90">Prioritized backlogs and milestones grounded in outcomes, not output.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Secure, scalable foundations</h4>
                <p className="text-white/90">Authentication, authorization, and performance budgets defined upfront.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Continuous delivery</h4>
                <p className="text-white/90">Automated tests, preview environments, and progressive rollouts.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• React/Next.js, TypeScript, ESLint, Jest/Playwright</li>
                <li>• OWASP ASVS, OAuth/OIDC, SAST/DAST checks</li>
                <li>• Lighthouse budgets and RUM dashboards</li>
                <li>• IaC for repeatable environments</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Architecture and ADRs</li>
                <li>• Component libraries and design tokens</li>
                <li>• Test suites and coverage reports</li>
                <li>• Runbooks and SLIs/SLOs</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


