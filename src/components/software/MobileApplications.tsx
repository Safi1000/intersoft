import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function MobileApplications() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-red">Mobile</span> Applications
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Cross‑platform and native apps with smooth UI, stable performance, and robust release pipelines.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• React Native and Flutter</li>
                <li>• Native iOS/Android integrations</li>
                <li>• App store deployment and CI/CD</li>
                <li>• Analytics, crash reporting, and QA</li>
                <li>• Push notifications and deep linking</li>
                <li>• Performance profiling and tuning</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/mobile-app.jpg" alt="Mobile applications" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">User Experience</h3>
            <p className="text-white/90">We ship fluid, responsive interfaces with attention to native patterns and accessibility.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Design systems</h4>
                <p className="text-white/90">Reusable components and tokens aligned with platform guidelines.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Robust pipelines</h4>
                <p className="text-white/90">Automated builds, signing, and staged rollouts to stores.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Quality gates</h4>
                <p className="text-white/90">Instrumentation, E2E tests, and crash analytics wired into CI.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• React Native/Flutter, native modules</li>
                <li>• Detox/Appium for automated testing</li>
                <li>• Feature flags and remote config</li>
                <li>• Accessibility (WCAG) and i18n</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Source code and CI/CD configs</li>
                <li>• Test plans and automation suites</li>
                <li>• Release notes and store assets</li>
                <li>• Monitoring dashboards and KPIs</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


