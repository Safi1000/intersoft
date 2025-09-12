interface HeroProps {
  onPageChange: (page: string) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  return (
    <section className="gradient-bg relative flex items-center justify-center min-h-screen pt-24">
      {/* Animated wave layers */}
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      
      {/* Hero Content */}
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Main Hero Title */}
        <h2 className="hero-title">
          <span>Intersoft International</span>
          <span>Intersoft International</span>
          <span>Innovation Unleashed</span>
        </h2>
        
        {/* Subtitle */}
        <div className="mt-32 mb-16">
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leading the future through cutting-edge electronics and innovative software solutions
          </p>
        </div>

        {/* Two Branch Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          {/* Electronics Branch */}
          <div 
            className="btn cursor-pointer bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-gradient-to-br hover:from-[#24c4c4]/10 hover:to-[#24c4c4]/5"
            onClick={() => onPageChange('electronics')}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#24c4c4]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Electronics</h3>
              <p className="text-gray-300">Advanced hardware solutions, IoT development, and circuit design</p>
            </div>
          </div>

          {/* Software Development Branch */}
          <div 
            className="btn cursor-pointer bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-gradient-to-br hover:from-[#bc3723]/10 hover:to-[#bc3723]/5"
            onClick={() => onPageChange('software')}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#bc3723]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#bc3723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Software Development</h3>
              <p className="text-gray-300">Custom applications, web platforms, and enterprise software solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}