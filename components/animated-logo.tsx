"use client"

export function AnimatedLogo() {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
          <span className="text-white font-bold text-lg">N</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-400 transition-all duration-300">
          NOUR
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 -mt-1">
          BAGANNE
        </span>
      </div>
    </div>
  )
}
