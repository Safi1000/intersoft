import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function DataAnalytics() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-red">Data</span> Analytics
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Turn raw data into decisions with robust pipelines, modeling, and intuitive visualizations.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• ETL/ELT pipelines and warehousing</li>
                <li>• BI dashboards and reporting</li>
                <li>• Machine learning and forecasting</li>
                <li>• Data governance and quality</li>
                <li>• Real‑time analytics and streaming</li>
                <li>• Privacy and access controls</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/data-analytics.jpg" alt="Data analytics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Insights</h3>
            <p className="text-white/90">Deliver trusted insights with validated models and clear visual narratives for stakeholders.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Data contracts</h4>
                <p className="text-white/90">Clear ownership, SLAs, and schemas to stabilize downstream use.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Governed pipelines</h4>
                <p className="text-white/90">Versioned datasets, lineage, and quality checks in CI.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Decision‑ready outputs</h4>
                <p className="text-white/90">Dashboards and narratives tailored to executives and teams.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• dbt, Airflow, and warehouse stacks</li>
                <li>• Catalogs, lineage, and access controls</li>
                <li>• ML lifecycle with experiment tracking</li>
                <li>• KPI definitions and governance</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Data models and marts</li>
                <li>• Dashboards and self‑serve tools</li>
                <li>• Model cards and accuracy reports</li>
                <li>• Data governance handbook</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


