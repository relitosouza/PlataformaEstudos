import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50 lg:px-20">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">TutorialSystem</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Courses</Link>
          <Link to="/trilha" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Video Library</Link>
          <Link to="/sobre" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Manuals</Link>
          <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Community</a>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
            <div className="text-slate-500 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-slate-500 px-4 pl-2 text-sm font-normal leading-normal" placeholder="Search tutorials..." />
          </div>
        </label>
        <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90 transition-all">
          Sign In
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-100 dark:border-slate-800" data-alt="User profile avatar placeholder" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBmWXGyqrtzhA43X8eBisehc_J5Fy-nO_Hm6Ns1pjb4a1OK3pfpa0eIPjwrji4XH3UdzR1Q8vI9GLmajcikMisJMG8yccisJRIYpwAj-XXDpe3b5RMIEzFYR9tlJLD94j7bJF-9p4Rqq7t1x-Mh0BTRnGjczO5ITI6vGeHuN6TAiK0fH5Ee5cjRdIrLqjTIWt5oxa1EGu5j867FiwLorxnfC8QQSft-lDRW25Fgbtf2RVV0uXtr1NRd6ILMgs4LGkHyPLbuvmlgm76")' }}></div>
      </div>
    </header>
  )
}
