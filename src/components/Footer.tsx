import logoText from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Links */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <img 
              src={logoText} 
              alt="Dev Stack Logo" 
              className="mb-6 h-8 object-contain" 
            />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-sm font-semibold text-slate-700">
              <a href="#" className="transition-all duration-200 hover:text-[#C0337C] hover:underline">GitHub</a>
              <a href="#" className="transition-all duration-200 hover:text-[#C0337C] hover:underline">Twitter</a>
              <a href="#" className="transition-all duration-200 hover:text-[#C0337C] hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Link Group: Product */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-900">PRODUCT</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">Home</a></li>
              <li><a href="#technologies" className="transition-colors hover:text-[#C0337C]">Technologies</a></li>
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">Projects</a></li>
            </ul>
          </div>
          
          {/* Link Group: Company */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-900">COMPANY</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">About</a></li>
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">Careers</a></li>
            </ul>
          </div>

          {/* Link Group: Legal */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-900">LEGAL</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-[#C0337C]">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="mt-4 flex gap-6 text-sm text-slate-400 sm:mt-0">
            <a href="#" className="transition-colors hover:text-[#C0337C]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[#C0337C]">Terms</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer