import { Link } from 'react-router-dom'

export default function Certificados() {
    return (
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-10 lg:px-10">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
                <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Meus Certificados</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                    Acompanhe suas conquistas, baixe seus diplomas e compartilhe seu progresso de aprendizado na plataforma.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">verified</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Concluídos</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">4</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">pending_actions</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Em Andamento</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">2</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Horas Estudadas</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">45h</p>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Certificados Disponíveis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Certificate Card 1 */}
                    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all flex">
                        <div className="w-1/3 bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center p-4 border-r border-slate-200 dark:border-slate-800">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 drop-shadow-sm group-hover:scale-110 group-hover:text-primary transition-all">workspace_premium</span>
                        </div>
                        <div className="flex-1 p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold uppercase rounded tracking-wider">Concluído</span>
                                <span className="text-xs text-slate-500">Emitido: 12 Fev 2024</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">Módulo Fiscal Completo</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Carga Horária: 15h</p>

                            <div className="mt-auto flex gap-3">
                                <button className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">download</span>
                                    Baixar PDF
                                </button>
                                <button className="flex items-center justify-center w-10 text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-[18px]">share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Certificate Card 2 */}
                    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all flex">
                        <div className="w-1/3 bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center p-4 border-r border-slate-200 dark:border-slate-800">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 drop-shadow-sm group-hover:scale-110 group-hover:text-primary transition-all">workspace_premium</span>
                        </div>
                        <div className="flex-1 p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold uppercase rounded tracking-wider">Concluído</span>
                                <span className="text-xs text-slate-500">Emitido: 05 Mar 2024</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">Logística e Estoque</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Carga Horária: 10h</p>

                            <div className="mt-auto flex gap-3">
                                <button className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">download</span>
                                    Baixar PDF
                                </button>
                                <button className="flex items-center justify-center w-10 text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-[18px]">share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Próximas Conquistas</h2>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex items-center gap-6 opacity-80">
                    <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-slate-400 text-3xl">lock</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Módulo Contábil Avançado</h4>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                <div className="bg-primary h-full w-[80%]"></div>
                            </div>
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-400">80%</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Faltam apenas 2 lições para liberar este certificado.</p>
                    </div>
                    <Link to="/cursos" className="hidden sm:flex text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                        Continuar
                    </Link>
                </div>
            </div>
        </div>
    )
}
