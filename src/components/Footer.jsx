export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-12 mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-primary mb-6">
            <div className="size-6 flex items-center justify-center bg-primary text-white rounded">
              <span className="material-symbols-outlined text-lg">school</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold">TutorialSystem</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Providing high-quality educational resources for software systems and technical mastery since 2018.
          </p>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm">Platform</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Courses</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Video Library</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Manuals</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Live Workshops</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm">Support</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Community Forum</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">API Docs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm">Legal</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-12 mt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2024 TutorialSystem. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-primary" href="#">Twitter</a>
          <a className="hover:text-primary" href="#">LinkedIn</a>
          <a className="hover:text-primary" href="#">YouTube</a>
          <a className="hover:text-primary" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
