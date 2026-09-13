import bannerImage from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
      
      {/* Left Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal <br className="hidden sm:block" />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
          Explore top frontend, backend, database, and tooling options. Compare them side-by-side and curate the perfect technology stack for your next web engineering project.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
          <button className="brand-gradient w-full rounded-full px-8 py-3.5 font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:w-auto">
            Explore Technologies
          </button>
          <button className="w-full rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="w-full max-w-lg flex-1 lg:max-w-none">
        <img 
          src={bannerImage} 
          alt="Development Stack Display" 
          className="h-auto w-full object-contain drop-shadow-xl"
        />
      </div>
      
    </section>
  )
}

export default Hero