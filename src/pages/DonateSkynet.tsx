import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Crown, Zap, GraduationCap, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import AnimatedButton from "@/components/landing/AnimatedButton"
import { BackgroundPaths, AnimatedBackground, BackgroundStripes, Navbar, MouseMoveEffect } from "@/components/landing"

const packages = [
  {
    id: "magistr",
    name: "Магистр",
    price: 600,
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    accent: "text-cyan-400",
    glow: "rgba(6, 182, 212, 0.15)",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Уникальная привилегия с правом выдавать кик нарушителям порядка на сервере.",
    features: [
      "Право выдавать /kick нарушителям",
      "Уникальный ник [Магистр]",
      "Доступ к каналу модераторов",
      "Приоритетный вход на сервер",
      "Особый цвет ника в чате",
    ],
  },
  {
    id: "fantom",
    name: "Фантом",
    price: 800,
    color: "from-purple-500/20 to-violet-600/10",
    border: "border-purple-500/30 hover:border-purple-400/60",
    accent: "text-purple-400",
    glow: "rgba(147, 51, 234, 0.15)",
    icon: <Zap className="w-8 h-8" />,
    description: "Уникальная привилегия с доступом ко всем китам на сервере в любое время.",
    features: [
      "Доступ ко всем китам сервера",
      "Неограниченное использование китов",
      "Уникальный ник [Фантом]",
      "Невидимость в режиме ожидания",
      "Приоритетный вход на сервер",
      "Особый эффект при входе",
    ],
    popular: true,
  },
  {
    id: "ender",
    name: "Эндер",
    price: 1100,
    color: "from-indigo-500/20 to-purple-600/10",
    border: "border-indigo-500/30 hover:border-indigo-400/60",
    accent: "text-indigo-400",
    glow: "rgba(99, 102, 241, 0.15)",
    icon: <Crown className="w-8 h-8" />,
    description: "Максимальный донат с иммунитетом к банам, мутам и кикам. Все возможности сервера.",
    features: [
      "Иммунитет к банам и мутам",
      "Иммунитет к кикам",
      "Все привилегии Фантом + Магистр",
      "Полный доступ ко всем командам",
      "Уникальный ник [Эндер]",
      "Кастомный префикс в чате",
      "Доступ к закрытым локациям",
      "VIP-поддержка 24/7",
    ],
  },
]

export default function DonateSkynet() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen bg-black">
      <MouseMoveEffect />
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link to="/servers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Назад к выбору сервера
            </Link>
          </motion.div>

          {/* Header */}
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 border border-purple-400/30 rounded-full text-sm text-white font-medium backdrop-blur-sm mb-6"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span>🛸 Сервер SkyNet</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Донат-пакеты{" "}
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                SkyNet
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Выбери привилегию и возьми максимум от игры на SkyNet
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(pkg.id)}
                className={`relative bg-gradient-to-br ${pkg.color} border ${pkg.border} rounded-3xl p-8 cursor-pointer transition-all duration-300 ${selected === pkg.id ? "ring-2 ring-offset-2 ring-offset-black ring-purple-500" : ""}`}
                style={{
                  boxShadow: selected === pkg.id ? `0 0 40px ${pkg.glow}` : undefined,
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Популярный
                    </span>
                  </div>
                )}

                <div className={`inline-flex p-3 rounded-2xl bg-gray-900/50 mb-6 ${pkg.accent}`}>
                  {pkg.icon}
                </div>

                <h2 className={`text-2xl font-minecraft mb-2 ${pkg.accent}`}>{pkg.name}</h2>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{pkg.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">₽</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.accent}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <AnimatedButton
                  className={`w-full ${selected === pkg.id ? "bg-purple-500 text-white hover:bg-purple-400" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                >
                  {selected === pkg.id ? "Выбрано" : "Выбрать"}
                </AnimatedButton>
              </motion.div>
            ))}
          </div>

          {/* Buy button */}
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 mb-4 text-sm">
                Выбран пакет: <span className="text-white font-semibold">{packages.find(p => p.id === selected)?.name}</span> — {packages.find(p => p.id === selected)?.price} ₽
              </p>
              <AnimatedButton className="bg-purple-500 text-white hover:bg-purple-400 px-12">
                Перейти к оплате
              </AnimatedButton>
            </motion.div>
          )}
        </section>
      </div>
    </div>
  )
}
