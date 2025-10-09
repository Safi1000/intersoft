import { Reveal } from '../Reveal';
import useScrollTop from '../useScrollTop';

export default function IoTSolutions() {
  useScrollTop();
  return (
    <div className="min-h-screen gradient-bg text-white pt-24">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="brand-teal">IoT</span> Solutions
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">From sensor nodes to cloud analytics, we build secure connected devices with reliable connectivity and maintainable firmware.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 h-[320px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
              <ul className="text-white/90 space-y-2">
                <li>• Sensor integration and low‑power design</li>
                <li>• BLE, Wi‑Fi, LoRa, cellular connectivity</li>
                <li>• Device provisioning, OTA updates, fleet mgmt</li>
                <li>• Edge compute and gateway integration</li>
                <li>• OTA rollout strategies</li>
                <li>• Device security hardening</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-[320px] box-border">
              <img src="/images/iot-solutions.jpg" alt="IoT solutions" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-bold mb-4">Security First</h3>
            <p className="text-white/90">We implement secure boot, encrypted storage, and authenticated communication to protect data and devices across the lifecycle.</p>
          </div>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Secure provisioning</h4>
                <p className="text-white/90">Automated enrollment, unique keys, and lifecycle management for fleets.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">OTA pipelines</h4>
                <p className="text-white/90">Staged rollouts with telemetry and rollback to minimize risk.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Cloud integration</h4>
                <p className="text-white/90">Event streams, device twins, and dashboards tailored to stakeholders.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Tooling & standards</h3>
              <ul className="text-white/90 space-y-2">
                <li>• MQTT/HTTP, BLE/Wi‑Fi/LoRa/cellular stacks</li>
                <li>• TLS, secure boot, hardware root of trust</li>
                <li>• Cloud: AWS IoT, Azure IoT, GCP IoT Core</li>
                <li>• Fleet telemetry and alerting</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-3">Deliverables</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Device firmware, provisioning scripts</li>
                <li>• Cloud infrastructure as code</li>
                <li>• Monitoring dashboards and runbooks</li>
                <li>• Security model and threat assessment</li>
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


