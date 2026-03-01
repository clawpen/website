function WhyIBuiltClawPen() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-primary-600 font-semibold mb-2">March 2026</p>
        <h1 className="text-4xl font-bold mb-4">Why I Built Claw Pen</h1>
        <p className="text-xl text-gray-600">
          AI agents should run on your hardware, not someone else's.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <p>
          I live in Northern Ontario. Cold winters, hydroelectric power, and not a lot of data centers.
          When I started playing with AI agents, I kept running into the same problem:
        </p>

        <blockquote>
          <p>
            Every option wanted me to send my data to someone else's servers.
          </p>
        </blockquote>

        <p>
          Maybe that's fine for some things. But if I'm building agents that read my emails,
          search my files, help me write — I want that stuff on my machine. Not AWS. Not Azure.
          Not a black box I can't audit.
        </p>

        <h2>So I built what I couldn't find</h2>

        <p>
          Claw Pen is an open-source platform for running AI agents on your own hardware.
          It's not a model host. It's not a chat wrapper. It's infrastructure — the stuff
          that lets you deploy an agent, give it tools, and trust that it's isolated, secure,
          and under your control.
        </p>

        <p>
          The core idea is simple:
        </p>

        <ul>
          <li>Each agent runs in its own container</li>
          <li>Each agent has its own config, memory, and tools</li>
          <li>Your data never leaves your machine unless you want it to</li>
        </ul>

        <h2>The philosophy</h2>

        <p>
          I'm not anti-cloud. Cloud is great for some things. But AI agents are different —
          they're not just processing data, they're <em>learning</em> from it. They remember.
          They connect dots.
        </p>

        <p>
          That's powerful. It's also invasive if you don't control it.
        </p>

        <p>
          I believe:
        </p>

        <ul>
          <li><strong>Your AI should belong to you.</strong> Not rented. Not surveilled. Yours.</li>
          <li><strong>Open source matters.</strong> If you can't see the code, you can't trust it.</li>
          <li><strong>Sustainable matters.</strong> Northern Ontario has cheap, clean hydro power. Why ship data to Virginia?</li>
        </ul>

        <h2>What's next</h2>

        <p>
          Claw Pen is still early. It works — I've got agents running lead generation,
          tutoring, research — but there's more to do. Security hardening. More templates.
          Better docs. Optional hosting for people who don't want to manage their own servers.
        </p>

        <p>
          If any of this resonates with you:
        </p>

        <ul>
          <li><a href="/docs">Download it</a> and try it out</li>
          <li><a href="https://github.com/clawpen">Star the repo</a> on GitHub</li>
          <li><a href="https://discord.gg/Jkt3u4Ug">Join the Discord</a> and say hi</li>
        </ul>

        <p>
          I'm building this in the open. Come build with me.
        </p>

        <p>
          — <strong>Jer</strong><br />
          <span className="text-gray-500">Sudbury, Ontario</span>
        </p>
      </div>
    </article>
  )
}

export default WhyIBuiltClawPen
