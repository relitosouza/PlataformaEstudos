import { Link } from 'react-router-dom'

export default function Cursos() {
    return (
        <div className="flex-1 w-full bg-background-light dark:bg-background-dark font-display relative pb-10">
            {/* Main Content Container */}
            <main className="max-w-[1280px] mx-auto w-full px-6 py-8 lg:px-20">
                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Olá, Ana</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Continue seu aprendizado de onde parou.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all shadow-sm">
                                <span>Status</span>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all shadow-sm">
                                <span>Duração</span>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all shadow-sm">
                                <span>Nível</span>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section: Cursos para Iniciantes */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            Cursos para Iniciantes
                        </h3>
                        <Link className="text-primary font-semibold text-sm hover:underline flex items-center gap-1" to="#">
                            Ver Tudo
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Course Card 1 */}
                        <Link to="/curso" className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group block">
                            <div className="relative h-40 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-90" data-alt="Fundo abstrato azul com formas geométricas suaves"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-5xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">play_circle</span>
                                </div>
                                <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Módulo 1</span>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">Introdução ao Sistema</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-8 overflow-hidden">Aprenda os conceitos fundamentais e navegação básica.</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                        <span>Progresso</span>
                                        <span className="text-primary">80%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Course Card 2 */}
                        <Link to="/curso" className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group block">
                            <div className="relative h-40 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-primary opacity-90" data-alt="Padrão de malha digital em tons de azul claro"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-5xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">description</span>
                                </div>
                                <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Módulo 2</span>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">Primeiros Passos</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-8 overflow-hidden">Configuração inicial de perfil e preferências de conta.</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                        <span>Progresso</span>
                                        <span className="text-primary">45%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{ width: "45%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Course Card 3 */}
                        <Link to="/curso" className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group block">
                            <div className="relative h-40 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-700 opacity-90" data-alt="Visualização abstrata de dados e conexões em azul escuro"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-5xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">settings</span>
                                </div>
                                <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Módulo 3</span>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">Configurações Básicas</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-8 overflow-hidden">Entenda como gerenciar permissões e notificações.</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                        <span>Progresso</span>
                                        <span className="text-primary">10%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{ width: "10%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Course Card 4 */}
                        <Link to="/manuais" className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group block">
                            <div className="relative h-40 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 opacity-90" data-alt="Fundo de textura de papel cinza neutro com ícones de manual"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-5xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">help</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">Guia de Ajuda Rápida</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-8 overflow-hidden">Manual em PDF com as principais dúvidas resolvidas.</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                        <span>Status</span>
                                        <span className="text-slate-400 italic font-normal">Não Iniciado</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{ width: "0%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Section: Avançando no Sistema */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            Avançando no Sistema
                        </h3>
                        <Link className="text-primary font-semibold text-sm hover:underline flex items-center gap-1" to="#">
                            Ver Tudo
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link to="/curso" className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group block">
                            <div className="relative h-40 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" data-alt="Fundo de ondas de luz dinâmicas em azul profundo"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-all">
                                    <span className="material-symbols-outlined text-white text-5xl group-hover:scale-110 transition-transform">play_circle</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">Relatórios Dinâmicos</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-8 overflow-hidden">Crie visões customizadas de seus dados.</p>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{ width: "0%" }}></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/curso" className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group block">
                            <div className="relative h-40 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-primary" data-alt="Visualização de redes e nós interconectados"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-all">
                                    <span className="material-symbols-outlined text-white text-5xl group-hover:scale-110 transition-transform">play_circle</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">Integração via API</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-8 overflow-hidden">Como conectar o sistema com outras ferramentas.</p>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{ width: "0%" }}></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Section: Módulos de Especialização */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            Módulos de Especialização
                        </h3>
                        <Link className="text-primary font-semibold text-sm hover:underline flex items-center gap-1" to="#">
                            Ver Tudo
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                        <div className="w-full md:w-1/3 aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-indigo-600/30 transition-all group-hover:opacity-80"></div>
                            <span className="material-symbols-outlined text-primary text-6xl relative z-10 group-hover:scale-110 transition-transform">workspace_premium</span>
                            <img alt="Especialista" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 transition-opacity group-hover:opacity-70" data-alt="Imagem de uma pessoa focada trabalhando em um notebook moderno" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3nnLI-XqXtaC0jKHVkE7Kf4BSspaYdcoVf-0txVZePBLCsQ0hhuMURFbQvFrZWz4WR_yN-Mev6ZiFXyIQIPBk-CyX8RzeTFLQQD-_znIg-qJWcgEj6EVx_tC8VXT85L-lEtNeSrh1HUkp-pbxqoe6Wz4arTuLJuvr_u3cKNaMsXck7OeYM8eqt_KwJch6-hog2wOwdHlQxx3lC61BFjbdWySW_3l5_AMLPtV9ZZZvimFC-o3361k0eNW5MwzKAOxGs6HORRTPnctm" />
                        </div>
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="material-symbols-outlined text-sm">stars</span>
                                Novo Módulo
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Segurança de Dados e Compliance</h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed">
                                Aprofunde-se nas melhores práticas de segurança da informação aplicadas ao nosso sistema. Aprenda sobre LGPD, criptografia de ponta a ponta e gestão de chaves de acesso.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/curso" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                                    Iniciar Especialização
                                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                                </Link>
                                <Link to="/curso" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 border border-transparent dark:border-slate-700">
                                    <span className="material-symbols-outlined text-lg">menu_book</span>
                                    Ver Syllabus
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Fixed Help Button */}
            <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform z-50">
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
            </button>
        </div>
    )
}
