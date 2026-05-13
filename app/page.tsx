export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Detect When Registrars{" "}
          <span className="text-[#58a6ff]">Steal Your Domain Searches</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Domain Search Leak Detector monitors registrars and alerts you the moment a domain you searched becomes registered — exposing potential search hijacking before it costs you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Monitoring — $19/month
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. Instant setup.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Add Domains", desc: "Paste any domains you've searched or plan to research." },
          { step: "2", title: "We Monitor", desc: "Background jobs check WHOIS & DNS status every few hours." },
          { step: "3", title: "Get Alerted", desc: "Receive instant email alerts if a domain suddenly gets registered." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-black mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor up to 500 domains",
              "Checks every 4 hours",
              "Instant email alerts",
              "Registrar leak report",
              "30-day history log"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is domain search hijacking real?",
              a: "Yes. Several registrars have been caught registering domains users searched for, then offering them at inflated prices. This tool gives you evidence if it happens to you."
            },
            {
              q: "How does monitoring work?",
              a: "After you add domains, our background jobs query WHOIS and DNS records on a regular schedule. Any status change from unregistered to registered triggers an immediate alert."
            },
            {
              q: "What if I want to cancel?",
              a: "You can cancel anytime from your billing portal. No questions asked, no lock-in."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pt-8 border-t border-[#30363d]">
        © {new Date().getFullYear()} Domain Search Leak Detector. All rights reserved.
      </footer>
    </main>
  );
}
