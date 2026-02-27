import { Link, useNavigate } from 'react-router-dom'

export default function DashboardCMS() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated')
        navigate('/')
    }

    return (
        <div className="flex h-full grow flex-col bg-slate-50 dark:bg-slate-950">
            {/* Minimal Dashboard Header for CMS */}
            <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4">
                <div className="flex items-center gap-4">
                    <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold">Dashboard Admin</h2>
                </div>
                <div className="flex gap-4 items-center">
                    <nav className="hidden md:flex gap-6 mr-4">
                        <Link to="/cms/dashboard" className="text-primary font-bold border-b-2 border-primary pb-1">Dashboard</Link>
                        <Link to="/cms/cadastrar-video" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Aulas</Link>
                        <Link to="/cms/gerenciar-apostilas" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Apostilas</Link>
                        <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Usuários</a>
                    </nav>
                    <button onClick={handleLogout} className="text-sm font-bold text-slate-500 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer">Sair</button>
                </div>
            </header>

            <main className="flex-1 p-6 lg:p-10 max-w-[1200px] mx-auto w-full">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Visão Geral</h1>
                        <p className="text-slate-500 mt-1">Bem-vindo ao painel de gerenciamento do TutorialSystem</p>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/cms/cadastrar-video" className="px-4 py-2 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Nova Aula
                        </Link>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                                <span className="material-symbols-outlined">play_circle</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm flex items-center">+12%</span>
                        </div>
                        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total de Aulas</h4>
                        <p className="text-3xl font-black text-slate-900 dark:text-white">142</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                                <span className="material-symbols-outlined">description</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm flex items-center">+5%</span>
                        </div>
                        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Apostilas Ativas</h4>
                        <p className="text-3xl font-black text-slate-900 dark:text-white">48</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm flex items-center">+24%</span>
                        </div>
                        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Alunos Registrados</h4>
                        <p className="text-3xl font-black text-slate-900 dark:text-white">3,250</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">
                                <span className="material-symbols-outlined">visibility</span>
                            </div>
                            <span className="text-slate-400 font-bold text-sm flex items-center">--</span>
                        </div>
                        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Acessos Hoje</h4>
                        <p className="text-3xl font-black text-slate-900 dark:text-white">8,4k</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Quick Actions / Atividades */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                        <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">Últimas Atividades</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-primary ring-4 ring-primary/20 shrink-0"></div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Nova aula publicada</p>
                                    <p className="text-xs text-slate-500 mt-1">Professor Admin adicionou "Fluxo de Caixa 101" na categoria Financeiro.</p>
                                    <span className="text-[10px] font-bold text-slate-400 mt-2 block uppercase">Há 2 horas</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-green-500 ring-4 ring-green-500/20 shrink-0"></div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Apostila Atualizada</p>
                                    <p className="text-xs text-slate-500 mt-1">Manual de RH v2.0 foi vinculado e está ativo.</p>
                                    <span className="text-[10px] font-bold text-slate-400 mt-2 block uppercase">Ontem</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-amber-500 ring-4 ring-amber-500/20 shrink-0"></div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Novo usuário registrado</p>
                                    <p className="text-xs text-slate-500 mt-1">Carlos Lima juntou-se à plataforma.</p>
                                    <span className="text-[10px] font-bold text-slate-400 mt-2 block uppercase">Ontem</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Espaço reservado para gráficos */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col">
                        <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">Cursos Populares</h3>
                        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800/50 min-h-[250px]">
                            <div className="text-center text-slate-400">
                                <span className="material-symbols-outlined text-4xl mb-2">bar_chart</span>
                                <p className="text-sm">Gráficos de engajamento</p>
                                <p className="text-xs opacity-60">Implementar lib. de gráficos aqui (Recharts/ChartJS)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
