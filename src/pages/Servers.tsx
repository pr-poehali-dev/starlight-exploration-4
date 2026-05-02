import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { BackgroundPaths, AnimatedBackground, BackgroundStripes, Navbar, MouseMoveEffect } from "@/components/landing"

const servers = [
  {
    id: "zerotime",
    name: "ZeroTime",
    description: "Сервер с уникальными механиками для казуальных игроков. Выживание, PvP, мини-игры и творческий режим.",
    ip: "play.zerotime.ru",
    href: "/donate",
    color: "from-green-500/20 to-emerald-600/10",
    border: "border-green-500/30 hover:border-green-400/60",
    accent: "text-green-400",
    glow: "rgba(34, 197, 94, 0.2)",
    emoji: "🌍",
    tags: ["Выживание", "PvP", "Мини-игры", "Творчество"],
    packages: ["Ангел — 798 ₽", "Zero — 869 ₽", "Д.Админ — 900 ₽"],
  },
  {
    id: "skynet",
    name: "SkyNet",
    description: "Особый сервер с уникальными привилегиями, китами и системой управления нарушителями.",
    ip: "play.skynet.ru",
    href: "/donate/skynet",
    color: "from-purple-500/20 to-violet-600/10",
    border: "border-purple-500/30 hover:border-purple-400/60",
    accent: "text-purple-400",
    glow: "rgba(147, 51, 234, 0.2)",
    emoji: "🛸",
    tags: ["Киты", "Иммунитет", "Привилегии"],
    packages: ["Магистр — 600 ₽", "Фантом — 800 ₽", "Эндер — 1100 ₽"],
  },
]

export default function Servers() {
  return (
    <div className="relative min-h-screen bg-black">
      <MouseMoveEffect />
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-lime-500/20 border border-green-400/30 rounded-full text-sm text-white font-medium backdrop-blur-sm mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span>Выбери сервер и купи донат</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Наши{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                серверы
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Выбери сервер, чтобы посмотреть доступные донат-пакеты
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servers.map((server, index) => (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={server.href}
                  className={`block bg-gradient-to-br ${server.color} border ${server.border} rounded-3xl p-8 transition-all duration-300 group`}
                  style={{ boxShadow: `0 0 0px ${server.glow}` }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${server.glow}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0px ${server.glow}`)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-900/60 rounded-2xl flex items-center justify-center text-3xl">
                      {server.emoji}
                    </div>
                    <div>
                      <h2 className={`text-2xl font-minecraft ${server.accent}`}>{server.name}</h2>
                      <p className="text-xs text-gray-500 mt-1">{server.ip}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{server.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {server.tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs border border-gray-700 text-gray-400`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-800 pt-6 mb-6">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Донат-пакеты</p>
                    <div className="space-y-2">
                      {server.packages.map(pkg => (
                        <div key={pkg} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${server.accent.replace("text-", "bg-")}`}></div>
                          {pkg}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 text-sm font-medium ${server.accent} group-hover:gap-3 transition-all`}>
                    Смотреть пакеты
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
