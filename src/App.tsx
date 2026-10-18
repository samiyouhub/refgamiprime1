import { useState } from 'react'

const heroImage = "https://image.qwenlm.ai/generated-images/fa95a223-8e93-4cf2-ba49-393d3e29dd33/_result.png"
const check1Image = "https://image.qwenlm.ai/generated-images/500717f9-135c-4704-b9be-4fc56bd039af/_result.png"
const check3Image = "https://image.qwenlm.ai/generated-images/2600afbe-d29c-48cf-84ec-43522296ffe1/_result.png"
const check4Image = "https://image.qwenlm.ai/generated-images/eb61ad8f-62ab-439b-a036-89e9b12d15f5/_result.png"
const check5Image = "https://image.qwenlm.ai/generated-images/13b11fba-f4c4-4556-9272-0169dc0527fd/_result.png"

const games = [
  { name: "Zenless Zone Zero", dev: "COGNOSPHERE PTE. LTD.", pub: "COGNOSPHERE PTE. LTD.", site: "zenless.hoyoverse.com" },
  { name: "NTE: Neverness to Everness", dev: "Hotta Studio", pub: "Perfect World Games", site: "nte.perfectworld.com" },
  { name: "Wuthering Waves", dev: "KURO GAMES", pub: "KURO GAMES", site: "wutheringwaves.kurogames.com" },
  { name: "Where Winds Meet", dev: "Everstone Studio", pub: "NetEase Games", site: "wherewindsmeetgame.com" },
  { name: "Marvel Rivals", dev: "NetEase Games", pub: "NetEase Games", site: "marvelrivals.com" },
  { name: "Delta Force", dev: "Team Jade", pub: "TiMi Studio Group", site: "playdeltaforce.com" },
  { name: "Arena Breakout: Infinite", dev: "Morefun Studios", pub: "Morefun Studios", site: "arenabreakoutinfinite.com" },
  { name: "STALZONE", dev: "EXBO", pub: "EXBO", site: "stalzone.com" },
]

const relatedArticles = [
  { title: "How Free-to-Play PC Games Make Money: A Player's Guide", category: "Guides", time: "9 MIN", date: "OCT 17, 2026" },
  { title: "Free-to-Play PC Game News: 2026 Steam Arrivals Timeline", category: "News", time: "7 MIN", date: "OCT 4, 2026" },
  { title: "Best Free-to-Play PC Games in 2026, Sorted by Genre", category: "Games", time: "13 MIN", date: "OCT 17, 2026" },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold text-white text-lg">
              G
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GamiPrime
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-purple-400 hover:text-purple-300 transition">Guides</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition">News</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition">Games</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition">Reviews</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition">Editorial Policy</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-4 py-3 space-y-2">
            <a href="#" className="block text-purple-400 py-1">Guides</a>
            <a href="#" className="block text-gray-400 py-1">News</a>
            <a href="#" className="block text-gray-400 py-1">Games</a>
            <a href="#" className="block text-gray-400 py-1">Reviews</a>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <a href="#" className="hover:text-purple-400 transition">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-purple-400 transition">Guides</a>
          <span>/</span>
          <span className="text-gray-300">How to Install Free PC Games Safely</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Category & Title */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                Guides
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How to Install Free PC Games Safely: Match the Listing
            </h1>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Start from the official store page, check that developer and publisher match the game's own site, and know what an installer or anti-cheat will ask. A checklist with a real table.
            </p>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                  TM
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Theo Marsh</p>
                  <p className="text-xs text-gray-500">Guides Editor</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  6 MIN READ
                </span>
                <span>Updated OCT 4, 2026</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Last verified OCT 4, 2026
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden mb-8 border border-gray-800 shadow-2xl shadow-purple-500/10">
              <img src={heroImage} alt="Digital shield protecting PC gaming setup" className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent p-4">
                <p className="text-xs text-gray-400">Photo: AI-generated illustration for GamiPrime</p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 leading-relaxed text-base">
                Before you start: have the game's name, 70 GB or more of free space for the big ones, and your browser open. By the end you will have checked that the page you are about to download from belongs to the people who make the game. Not hands-on tested: the table and reports below come from Steam listings and cited articles.
              </p>
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm font-medium flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Common mistake: following a "free download" link from a video description or an ad. If the names do not match, stop.
                </p>
              </div>
            </div>

            {/* Check 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold">1</span>
                <span className="text-white">Start from the official page</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Open the game's Steam page or its official site, and move from one to the other. Steam lists a website for each game. If the site on the Steam page is not the site you were sent to, you were sent somewhere else.
              </p>

              {/* Image for Check 1 */}
              <div className="rounded-xl overflow-hidden mb-6 border border-gray-800 shadow-lg">
                <img src={check1Image} alt="Verifying official game websites" className="w-full h-auto object-cover" />
              </div>

              {/* Games Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-800 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900/80 border-b border-gray-800">
                      <th className="text-left px-4 py-3 text-purple-400 font-semibold">Game</th>
                      <th className="text-left px-4 py-3 text-purple-400 font-semibold">Developer</th>
                      <th className="text-left px-4 py-3 text-purple-400 font-semibold">Publisher</th>
                      <th className="text-left px-4 py-3 text-purple-400 font-semibold">Site</th>
                    </tr>
                  </thead>
                  <tbody>
                    {games.map((game, i) => (
                      <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-900/40 transition">
                        <td className="px-4 py-3 text-white font-medium">{game.name}</td>
                        <td className="px-4 py-3 text-gray-400">{game.dev}</td>
                        <td className="px-4 py-3 text-gray-400">{game.pub}</td>
                        <td className="px-4 py-3 text-cyan-400 text-xs">{game.site}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-sm italic">
                The table above shows eight games as of October 4, 2026 (UTC): the developer and publisher Steam lists, and the website Steam links to.
              </p>
            </section>

            {/* Check 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                <span className="text-white">Match the names</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A genuine page should use the same developer or publisher names as the Steam listing. Some publishers use a studio name on Steam and a brand name on their site. Zenless Zone Zero lists COGNOSPHERE PTE. LTD. on Steam and links to a HoYoverse site. When names differ, find a page that connects them, such as the publisher's own site linking to the store page.
              </p>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-400 text-sm flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  If the connection is not obvious, do not install. Ask on the game's Steam community page or check the Steam page's own links.
                </p>
              </div>
            </section>

            {/* Check 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold">3</span>
                <span className="text-white">Know the size before you click</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Free does not mean small. Steam lists 150 GB for Wuthering Waves, 130 GB for Where Winds Meet and 110 GB for NTE. If a "free" installer for one of these is a few megabytes, it is most likely a launcher that downloads the rest.
              </p>

              {/* Image for Check 3 */}
              <div className="rounded-xl overflow-hidden mb-6 border border-gray-800 shadow-lg">
                <img src={check3Image} alt="Game storage requirements" className="w-full h-auto object-cover" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-cyan-400">150 GB</p>
                  <p className="text-sm text-gray-400 mt-1">Wuthering Waves</p>
                </div>
                <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-purple-400">130 GB</p>
                  <p className="text-sm text-gray-400 mt-1">Where Winds Meet</p>
                </div>
                <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-pink-400">110 GB</p>
                  <p className="text-sm text-gray-400 mt-1">NTE</p>
                </div>
              </div>
            </section>

            {/* Check 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold">4</span>
                <span className="text-white">Know what an installer or anti-cheat adds</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Some games install extra software. PCGamesN reported at Delta Force's launch that players raised concerns about its kernel-level anti-cheat, called Anti-Cheat Expert (ACE), which installs itself when you download the game. The developer, Team Jade, said the tool only runs while the game is active and later said it had fixed an issue where it was not fully uninstalled with the game.
              </p>

              {/* Image for Check 4 */}
              <div className="rounded-xl overflow-hidden mb-6 border border-gray-800 shadow-lg">
                <img src={check4Image} alt="Anti-cheat protection concept" className="w-full h-auto object-cover" />
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  The lesson is general: read what a game says it installs, and know how to remove it.
                </p>
              </div>
            </section>

            {/* Check 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold">5</span>
                <span className="text-white">Link accounts only from the game</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Account linking happens inside the game or its official launcher, not on a web page you were sent. For Zenless Zone Zero on Steam, RPGSite reported that you link an existing HoYoverse ID or create a new one through Steam, with linking prompted on first launch.
              </p>

              {/* Image for Check 5 */}
              <div className="rounded-xl overflow-hidden mb-6 border border-gray-800 shadow-lg">
                <img src={check5Image} alt="Secure account linking" className="w-full h-auto object-cover" />
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                  If a page asks for your password outside that flow, leave immediately.
                </p>
              </div>
            </section>

            {/* Checklist */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Safe-install checklist
              </h2>
              <div className="bg-gray-900/60 border border-green-500/20 rounded-xl p-6 space-y-4">
                {[
                  "Start from Steam or the official site, and cross-check the other.",
                  "Compare developer and publisher names with the listing.",
                  "Confirm the storage figure before you download.",
                  "Read what the game says it installs, including anti-cheat.",
                  "Never enter game account details on a page you were sent to.",
                  "If anything does not match, stop."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <FAQItem question="Is it safe to download free PC games from Steam?" answer="The Steam listing shows the developer and publisher, which lets you match them to the official site. That is a useful check. It is not a guarantee of safety for every game." />
                <FAQItem question="How do I know a game's official website?" answer="Steam lists a website on each game's page. Compare it with the link you were given." />
                <FAQItem question="Why is a free game 100 GB?" answer="Some listings state it: Wuthering Waves lists 150 GB on Steam." />
                <FAQItem question="What is Anti-Cheat Expert (ACE)?" answer="PCGamesN reported it as the kernel-level anti-cheat used by Delta Force, which Team Jade said only runs while the game is active." />
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                  TM
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Theo Marsh</h3>
                  <p className="text-sm text-purple-400 mb-2">Guides Editor · editorial byline</p>
                  <p className="text-gray-400 text-sm">
                    Explains how to get started, what to expect and where the catches are, with every claim tied to a cited source.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Table of Contents */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">In this guide</h3>
                <nav className="space-y-2">
                  {[
                    "Start from the official page",
                    "Match the names",
                    "Know the size before you click",
                    "Know what an installer adds",
                    "Link accounts only from the game",
                    "Safe-install checklist",
                    "FAQ"
                  ].map((item, i) => (
                    <a key={i} href="#" className="block text-sm text-gray-400 hover:text-purple-400 transition py-1 border-l-2 border-transparent hover:border-purple-400 pl-3">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">Related articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article, i) => (
                    <a key={i} href="#" className="block group">
                      <span className="text-xs text-cyan-400 uppercase tracking-wider">{article.category}</span>
                      <p className="text-sm font-medium text-gray-200 group-hover:text-purple-400 transition mt-1 leading-snug">
                        {article.title}
                      </p>
                      <span className="text-xs text-gray-500 mt-1">{article.time} · {article.date}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-5">
                <h3 className="text-sm font-bold text-white mb-2">Stay updated</h3>
                <p className="text-xs text-gray-400 mb-4">Get the latest gaming guides and news delivered to your inbox.</p>
                <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 mb-3" />
                <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
                  G
                </div>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  GamiPrime
                </span>
              </div>
              <p className="text-sm text-gray-500">Your trusted source for free-to-play PC gaming guides, news, and reviews.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Guides</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-purple-400 transition">Installation Safety</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">System Requirements</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">How F2P Makes Money</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">News</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-purple-400 transition">2026 Steam Arrivals</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Game Updates</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Industry</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">About</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-purple-400 transition">Editorial Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Team</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
            <p>© 2026 GamiPrime. All rights reserved. Last verified: 2026-10-04.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-900/40 transition"
      >
        <span className="font-medium text-white text-sm">{question}</span>
        <svg className={`w-5 h-5 text-purple-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default App
