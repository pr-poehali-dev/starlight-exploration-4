import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-gray-900/60 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(34, 197, 94, 0.3)",
            "rgba(16, 185, 129, 0.3)",
            "rgba(132, 204, 22, 0.3)",
            "rgba(74, 222, 128, 0.3)",
            "rgba(34, 197, 94, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(34, 197, 94, 0.2)",
              "0 0 20px rgba(16, 185, 129, 0.2)",
              "0 0 20px rgba(132, 204, 22, 0.2)",
              "0 0 20px rgba(74, 222, 128, 0.2)",
              "0 0 20px rgba(34, 197, 94, 0.2)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <span className="text-lg font-minecraft bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                  ZeroTime
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Режимы
                </a>
                <a href="#how-to-play" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                  Как играть
                </a>
                <a href="#stats" className="text-sm text-gray-300 hover:text-lime-400 transition-colors">
                  Сервер
                </a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Контакты
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#get-started">
                <AnimatedButton size="sm" className="bg-green-500 text-black hover:bg-green-400">
                  Играть
                </AnimatedButton>
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-green-400">
                Режимы
              </a>
              <a href="#how-to-play" className="block text-gray-300 hover:text-emerald-400">
                Как играть
              </a>
              <a href="#stats" className="block text-gray-300 hover:text-lime-400">
                Сервер
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-green-400">
                Контакты
              </a>
              <div className="pt-3 border-t border-gray-700">
                <a href="#get-started" className="block">
                  <AnimatedButton className="w-full bg-green-500 text-black hover:bg-green-400">Играть</AnimatedButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}