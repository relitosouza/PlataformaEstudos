import { Link } from 'react-router-dom'

export default function Aula() {
    return (
        <main className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-[1440px] px-4 py-6 lg:px-10">
                <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <Link className="hover:text-primary" to="/">Início</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link className="hover:text-primary" to="/trilha">Básicos do Sistema</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-slate-900 dark:text-slate-100">Aula 1: Introdução</span>
                </nav>
                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="flex-1">
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 group cursor-pointer">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-white shadow-xl transition-transform group-hover:scale-110">
                                    <span className="material-symbols-outlined text-5xl fill-icon">play_arrow</span>
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center -z-10 opacity-60"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBStfvs1mcxxwSG7ubzNtJ1zbs7_mviVQ3kJGsIwEvyIbsyvk0j_ToJwu2LJZFL46fOeC6XdcPengsTIZc742LHViEnwpN3Ri6JxPKoptCOsN4ty5TeNEHRCnn9RuE5XVXtKJfXqzjYWZRnVD85LaW5AHeH6SvT6EZAuUNhmesqsaqvTmA91aNDmdctIaz0QTOOkqq95zKA_aCj0Y5sz-W5FYBtraFVOd9O9rp4TiVbInngpxfE4KtQucX3G_Y0cA6M9Sk5cxSqG_Vv')" }}
                                ></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="mb-3 h-1.5 w-full rounded-full bg-white/20">
                                    <div className="h-full w-1/4 rounded-full bg-primary relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white shadow-lg"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">play_circle</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">skip_next</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">volume_up</span>
                                        <span className="text-sm font-medium">08:24 / 32:00</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">settings</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">fullscreen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Aula 1: Introdução aos Básicos do Sistema</h1>
                                    <p className="mt-2 text-slate-500 dark:text-slate-400">Atualizado em 12 Jan, 2024 • 32 minutos • Nível Iniciante</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
                                        <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                                        Baixar Apostila (PDF)
                                    </button>
                                    <button className="flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined">share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                                <h3 className="text-lg font-bold">Descrição</h3>
                                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Este módulo introdutório cobre a arquitetura fundamental do ecossistema do software. Vamos explorar como os diferentes módulos se comunicam, o fluxo básico de dados e as filosofias centrais por trás do design do sistema. Ao final desta aula, você terá um mapa mental claro de como a plataforma opera desde a base.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Comentários e Dúvidas (24)</h3>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">person</span>
                                    </div>
                                    <div className="flex-1">
                                        <textarea className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-sm focus:ring-primary" placeholder="Tire sua dúvida sobre esta aula..." rows="2"></textarea>
                                        <div className="mt-2 flex justify-end">
                                            <button className="rounded-lg bg-slate-900 dark:bg-white dark:text-slate-900 px-4 py-2 text-xs font-bold text-white">Postar Pergunta</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 py-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                        <img alt="Usuário" className="rounded-full h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr17FIOUC9oA8FupMddB5lnswLoPx_5l9kfdKXE_D-3qfp3StmyRKYUImZJDyQa8y8VjNdAvEaPj_gaENMm7GJv-ASNUYpW165tW8OnAKFXTEFZCxHlxcXK4f4G2AjItEqdCV7kIj_ySfxo-fvR28sy79ETeJDCbE5pwMPLrL-UkXsPkMQK97jXTZ9svbI_Q8WS_YOoZEzXq-71rc6PVO3zTBf9dY47vVem-N0zRMe76TYSP7flQv2X_C4zScsaYVQNs5eQTymQYac" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold">Sarah Miller</span>
                                            <span className="text-xs text-slate-500">Há 2 horas</span>
                                        </div>
                                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Você poderia esclarecer a parte de integração com banco de dados aos 14:20? É compatível com estruturas NoSQL?</p>
                                        <div className="mt-2 flex items-center gap-4">
                                            <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary">
                                                <span className="material-symbols-outlined text-sm">thumb_up</span> 12
                                            </button>
                                            <button className="text-xs text-slate-500 hover:text-primary">Responder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="w-full lg:w-80 flex-shrink-0">
                        <div className="sticky top-24 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                            <div className="border-b border-slate-100 dark:border-slate-800 p-4">
                                <h3 className="font-bold">Lista de Aulas</h3>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">8 Aulas • Total 4h 15m</span>
                                    <span className="text-xs font-bold text-primary">12% Concluído</span>
                                </div>
                                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                                    <div className="h-full w-[12%] rounded-full bg-primary"></div>
                                </div>
                            </div>
                            <div className="max-h-[600px] overflow-y-auto">
                                <div className="group flex items-center gap-3 bg-primary/10 border-l-4 border-primary p-4 cursor-pointer">
                                    <span className="material-symbols-outlined text-primary fill-icon">play_circle</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-primary">1. Introdução aos Básicos</p>
                                        <p className="text-xs text-slate-500">32:00 mins</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                </div>
                                <div className="group flex items-center gap-3 border-l-4 border-transparent p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400">play_circle</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">2. Configuração do Ambiente</p>
                                        <p className="text-xs text-slate-500">45:12 mins</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 border-l-4 border-transparent p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400">play_circle</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">3. Componentes Principais</p>
                                        <p className="text-xs text-slate-500">28:40 mins</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 border-l-4 border-transparent p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400">lock</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-500">4. Módulo de Autenticação</p>
                                        <p className="text-xs text-slate-400">52:15 mins</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 border-l-4 border-transparent p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400">lock</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-500">5. Conectividade de Banco</p>
                                        <p className="text-xs text-slate-400">41:00 mins</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 border-l-4 border-transparent p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400">lock</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-500">6. Fluxos Avançados</p>
                                        <p className="text-xs text-slate-400">1h 05m</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 border-l-4 border-transparent p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400">lock</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-500">7. Protocolos de Segurança</p>
                                        <p className="text-xs text-slate-400">38:20 mins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4">
                                <button className="w-full rounded-lg bg-slate-200 dark:bg-slate-700 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-300 dark:hover:bg-slate-600">
                                    Ver Curso Completo
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}
