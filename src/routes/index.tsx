import { createFileRoute } from "@tanstack/react-router";
import communitySpotlight from "@/assets/community-spotlight.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StreakWok — Workout Konsisten Bareng Circle-mu" },
      {
        name: "description",
        content:
          "StreakWok: aplikasi workout dengan mekanisme group-streak gamification untuk meningkatkan konsistensi aktivitas fisik remaja & mahasiswa bersama teman.",
      },
      { property: "og:title", content: "StreakWok — Workout Konsisten Bareng Circle-mu" },
      {
        property: "og:description",
        content:
          "Group-streak gamification untuk workout harian. Satu orang bolos, streak grup reset. Jaga apinya bareng-bareng.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-primary selection:text-black">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/5 sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-brand-primary rounded-full flex items-center justify-center">
            <div className="size-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase">
            StreakWok
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
          <a href="#fitur" className="hover:text-brand-primary transition-colors">
            Fitur
          </a>
          <a href="#cara-kerja" className="hover:text-brand-primary transition-colors">
            Cara Kerja
          </a>
          <a href="#leaderboard" className="hover:text-brand-primary transition-colors">
            Leaderboard
          </a>
        </div>
        <button className="bg-brand-primary text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-[1.03] transition-transform">
          Unduh
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-brand-primary/30 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Group Streak Aktif: 14 Hari
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
            JANGAN PUTUSKAN
            <br />
            <span className="text-brand-primary">RANTAINYA.</span>
          </h1>
          <p className="max-w-xl text-white/50 text-lg leading-relaxed">
            Squad-mu mengandalkanmu. Selesaikan workout harian untuk menjaga group
            streak tetap menyala. Satu hari bolos, semua kena reset.
          </p>
        </header>

        {/* Dashboard Grid */}
        <div id="cara-kerja" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: The Squad */}
          <section className="md:col-span-8 space-y-6">
            <div className="bg-brand-card rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-1">
                    Geng Anak Kos
                  </h2>
                  <p className="text-white/40 text-sm">4 Anggota aktif hari ini</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-display font-bold text-brand-primary">
                    14
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30">
                    Hari Streak
                  </div>
                </div>
              </div>

              {/* Streak Visualizer */}
              <div className="flex gap-2 h-24 items-end mb-8">
                <div className="flex-1 bg-brand-primary h-full rounded-t-lg opacity-20" />
                <div className="flex-1 bg-brand-primary h-2/3 rounded-t-lg opacity-40" />
                <div className="flex-1 bg-brand-primary h-3/4 rounded-t-lg opacity-60" />
                <div className="flex-1 bg-brand-primary h-full rounded-t-lg" />
                <div className="flex-1 bg-white/10 h-1/4 rounded-t-lg" />
                <div className="flex-1 bg-white/10 h-1/4 rounded-t-lg" />
                <div className="flex-1 bg-white/10 h-1/4 rounded-t-lg" />
              </div>

              <div className="flex -space-x-3">
                <div className="size-12 rounded-full border-4 border-brand-card bg-zinc-800 grid place-items-center text-xs font-bold">
                  AM
                </div>
                <div className="size-12 rounded-full border-4 border-brand-card bg-zinc-700 grid place-items-center text-xs font-bold">
                  RK
                </div>
                <div className="size-12 rounded-full border-4 border-brand-card bg-zinc-600 grid place-items-center text-xs font-bold">
                  SY
                </div>
                <div className="size-12 rounded-full border-4 border-brand-card border-brand-primary bg-brand-primary/20 grid place-items-center text-xs font-bold text-brand-primary">
                  KAMU
                </div>
              </div>
            </div>

            <div id="fitur" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-card rounded-3xl p-6 border border-white/5">
                <h3 className="font-display font-bold uppercase tracking-widest text-white/40 text-xs mb-4">
                  Quest Hari Ini
                </h3>
                <p className="text-xl font-bold mb-4">30 High Knees + 20 Pushups</p>
                <button className="w-full py-4 bg-brand-primary text-black font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-[1.02] transition-transform cursor-pointer">
                  Kirim Bukti
                </button>
              </div>
              <div className="bg-brand-card rounded-3xl p-6 border border-white/5">
                <h3 className="font-display font-bold uppercase tracking-widest text-white/40 text-xs mb-4">
                  Squad Chat
                </h3>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="text-brand-secondary font-bold">Raka:</span>{" "}
                    Udah kelar nih! Giliranmu @Budi
                  </p>
                  <p className="text-sm">
                    <span className="text-white/60 font-bold">Siti:</span> Jangan
                    sampai streak putus ya guys 😤
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Stats & Global */}
          <aside id="leaderboard" className="md:col-span-4 space-y-6">
            <div className="bg-brand-secondary/10 rounded-3xl p-8 border border-brand-secondary/20">
              <h3 className="font-display font-bold text-brand-secondary uppercase tracking-widest text-xs mb-6">
                Peringkat Global
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">1. PowerLifters UI</span>
                  <span className="font-bold">42 Hari</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">2. Yoga-nauts ITB</span>
                  <span className="font-bold">38 Hari</span>
                </div>
                <div className="flex items-center justify-between text-brand-primary">
                  <span className="font-bold italic">12. Geng Anak Kos</span>
                  <span className="font-bold">14 Hari</span>
                </div>
              </div>
            </div>

            <img
              src={communitySpotlight}
              alt="Tiga mahasiswa high-five di gym dengan pencahayaan neon"
              className="w-full aspect-[3/4] object-cover rounded-3xl outline-1 -outline-offset-1 outline-white/10"
              loading="lazy"
            />
          </aside>
        </div>

        {/* Final CTA */}
        <section className="mt-24 bg-brand-card rounded-3xl p-12 md:p-16 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 pointer-events-none" />
          <h2 className="relative text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            SIAP JADI <span className="text-brand-primary">CIRCLE TERSEHAT?</span>
          </h2>
          <p className="relative text-white/50 max-w-xl mx-auto mb-8">
            Ajak 3 temanmu, mulai group streak pertama, dan rasakan workout yang
            akhirnya konsisten karena seru.
          </p>
          <button className="relative bg-brand-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
            Unduh StreakWok
          </button>
        </section>
      </main>

      <footer className="border-t border-white/5 mt-16 py-8 px-6 text-center text-white/30 text-xs uppercase tracking-widest">
        © 2026 StreakWok — Dibuat untuk generasi yang tak kenal berhenti.
      </footer>

      {/* Sticky Mobile Action */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md md:hidden z-40">
        <button className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full shadow-2xl shadow-brand-primary/20">
          Log Workout
        </button>
      </div>
    </div>
  );
}
