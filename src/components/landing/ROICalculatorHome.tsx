import { motion } from "framer-motion"
import { useState } from "react"
import { TrendingUp, Target, Swords, TreePine, Hammer, BarChart3 } from "lucide-react"

const playerTypes = [
  {
    id: "survival",
    name: "Выживание",
    icon: <TreePine className="w-6 h-6" />,
    description: "Исследование и крафт",
    hours: 3,
    events: 12,
  },
  {
    id: "pvp",
    name: "PvP",
    icon: <Swords className="w-6 h-6" />,
    description: "Арены и битвы",
    hours: 4,
    events: 20,
  },
  {
    id: "creative",
    name: "Творчество",
    icon: <Hammer className="w-6 h-6" />,
    description: "Строительство",
    hours: 2,
    events: 5,
  },
  {
    id: "all",
    name: "Всё сразу",
    icon: <Target className="w-6 h-6" />,
    description: "Без ограничений",
    hours: 6,
    events: 30,
  },
]

export default function ROICalculatorHome() {
  const [selectedDays, setSelectedDays] = useState(5)
  const [selectedType, setSelectedType] = useState("survival")

  const selectedPlayerType = playerTypes.find((b) => b.id === selectedType)
  const hoursPerDay = selectedPlayerType?.hours || 3
  const eventsPerMonth = selectedPlayerType?.events || 12

  const totalHours = selectedDays * hoursPerDay
  const totalEvents = Math.round((selectedDays / 30) * eventsPerMonth)
  const achievementsUnlocked = Math.round(totalHours * 0.8)

  return (
    <section className="py-24 bg-black relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Что тебя ждёт?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Посмотри, сколько приключений ты сможешь пережить на ZeroTime
          </p>
        </motion.div>

        <div className="bg-gray-900/40 border border-gray-700/30 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(132,204,22,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(34,197,94,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              {/* Player Type Selection */}
              <div>
                <label className="block text-lg font-medium text-white mb-4">Выбери свой стиль игры</label>
                <div className="grid grid-cols-2 gap-3">
                  {playerTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                        selectedType === type.id
                          ? "bg-green-500/20 border-green-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div
                          className={`p-2 rounded-lg ${
                            selectedType === type.id ? "bg-green-500/30" : "bg-gray-700/50"
                          }`}
                        >
                          {type.icon}
                        </div>
                        <div>
                          <div className="font-medium">{type.name}</div>
                          <div className="text-xs opacity-70">{type.description}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Days Slider */}
              <div>
                <label className="block text-lg font-medium text-white mb-4">Сколько дней в месяц будешь играть?</label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={selectedDays}
                    onChange={(e) => setSelectedDays(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #22c55e 0%, #22c55e ${((selectedDays - 1) / (30 - 1)) * 100}%, #374151 ${((selectedDays - 1) / (30 - 1)) * 100}%, #374151 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1 день</span>
                    <span>30 дней</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-3xl font-bold text-white">{selectedDays}</span>
                  <span className="text-gray-400 ml-2">дней в месяц</span>
                </div>
              </div>

              {/* Note */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium text-white">Примерный расчёт</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Расчёт основан на среднем времени сессии для каждого режима. Реальные результаты зависят от твоего стиля игры!
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {/* Circle */}
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="6" fill="none" className="text-gray-700" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="url(#gradient-green)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 219.8" }}
                    animate={{
                      strokeDasharray: `${Math.min((selectedDays / 30) * 219.8, 219.8)} 219.8`,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#84cc16" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      key={`${selectedDays}-${selectedType}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl font-bold text-white"
                    >
                      {totalHours}ч
                    </motion.div>
                    <div className="text-gray-400 text-sm">в месяц</div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 text-center">
                  <div className="w-8 h-8 text-green-400 mx-auto mb-2 flex items-center justify-center text-2xl">🎮</div>
                  <motion.div
                    key={`events-${selectedDays}-${selectedType}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white mb-1"
                  >
                    {totalEvents}
                  </motion.div>
                  <div className="text-gray-400 text-sm">Ивентов</div>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <motion.div
                    key={`ach-${selectedDays}-${selectedType}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white mb-1"
                  >
                    {achievementsUnlocked}
                  </motion.div>
                  <div className="text-gray-400 text-sm">Достижений</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
