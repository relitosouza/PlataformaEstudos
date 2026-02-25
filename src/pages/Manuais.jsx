import { Link } from 'react-router-dom'

export default function Manuais() {
    return (
        <div className="flex flex-1 flex-col lg:flex-row max-w-[1440px] mx-auto w-full">
            <aside className="w-full lg:w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-8 shrink-0">
                <div className="flex flex-col gap-4">
                    <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider">Conteúdo</h3>
                    <div className="px-0">
                        <label className="flex flex-col w-full h-11">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <div className="text-slate-500 flex items-center justify-center pl-3">
                                    <span className="material-symbols-outlined text-[18px]">find_in_page</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 text-sm px-2" placeholder="Pesquisar manuais..." />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-2">Categorias</h3>
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary text-white font-medium transition-all" href="#">
                        <span className="material-symbols-outlined">description</span>
                        <span className="text-sm">Todos os Documentos</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                        <span className="material-symbols-outlined">payments</span>
                        <span className="text-sm">Financeiro</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                        <span className="material-symbols-outlined">badge</span>
                        <span className="text-sm">RH</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                        <span className="material-symbols-outlined">local_shipping</span>
                        <span className="text-sm">Logística</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                        <span className="material-symbols-outlined">settings_suggest</span>
                        <span className="text-sm">Operações</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                        <span className="material-symbols-outlined">security</span>
                        <span className="text-sm">Segurança e Compliance</span>
                    </a>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="bg-primary/5 rounded-xl p-4 flex flex-col gap-3">
                        <h4 className="text-primary text-xs font-bold uppercase tracking-tight">Precisa de ajuda?</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-xs">Não encontrou o manual que estava procurando?</p>
                        <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all">Contatar Suporte</button>
                    </div>
                </div>
            </aside>
            <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <nav className="flex text-xs font-medium text-slate-500 gap-2 items-center mb-1">
                            <span>Biblioteca</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-primary">Biblioteca de Manuais e Apostilas</span>
                        </nav>
                        <h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-black leading-tight tracking-tight">Biblioteca de Manuais e Apostilas</h1>
                        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl leading-relaxed">
                            Explore nossa biblioteca completa de tutoriais de sistema, apostilas em PDF e guias em vídeo para todos os departamentos.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 flex-wrap items-center">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mr-2">Filtros Rápidos:</span>
                    <button className="flex h-9 items-center justify-center gap-2 rounded-full bg-primary/10 text-primary px-4 hover:bg-primary/20 transition-all">
                        <span className="text-sm font-medium">Últimas Versões</span>
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </button>
                    <button className="flex h-9 items-center justify-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                        <span className="text-sm font-medium">Atualizados Recentemente</span>
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </button>
                    <button className="flex h-9 items-center justify-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                        <span className="text-sm font-medium">Formato: PDF</span>
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="w-2/3 h-full bg-white dark:bg-slate-900 shadow-lg rounded-t-lg mt-10 p-4 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                                <div className="h-2 w-12 bg-primary/20 rounded"></div>
                                <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <div className="aspect-video bg-slate-50 dark:bg-slate-800 rounded"></div>
                                    <div className="aspect-video bg-slate-50 dark:bg-slate-800 rounded"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-[10px] font-bold uppercase rounded">Atualizado</span>
                                <span className="text-xs font-medium text-slate-400">v4.2.0</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1">Suíte de Gestão Financeira</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Guia completo para os módulos de contas a pagar, receber e conciliação bancária.</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                <div className="flex flex-col text-slate-400">
                                    <span className="text-[10px] uppercase font-bold">Última atualização</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span className="text-xs">12 Out, 2023</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Baixar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="w-2/3 h-full bg-white dark:bg-slate-900 shadow-lg rounded-t-lg mt-10 p-4 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                                <div className="h-2 w-12 bg-primary/20 rounded"></div>
                                <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">play_circle</span>
                                    </div>
                                    <div className="h-2 w-20 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase rounded">Guia em Vídeo</span>
                                <span className="text-xs font-medium text-slate-400">v1.5.2</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1">Logística e Cadeia de Suprimentos</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Rastreamento de estoque, sistema de gerenciamento de armazém (WMS) e uso avançado.</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                <div className="flex flex-col text-slate-400">
                                    <span className="text-[10px] uppercase font-bold">Última atualização</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span className="text-xs">05 Nov, 2023</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Baixar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="w-2/3 h-full bg-white dark:bg-slate-900 shadow-lg rounded-t-lg mt-10 p-4 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                                <div className="h-2 w-12 bg-primary/20 rounded"></div>
                                <div className="flex flex-col gap-1 mt-2">
                                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                                    <div className="h-3 w-3/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                </div>
                                <div className="mt-4 flex gap-1">
                                    <div className="h-8 w-1/3 bg-slate-50 dark:bg-slate-800 rounded"></div>
                                    <div className="h-8 w-1/3 bg-slate-50 dark:bg-slate-800 rounded"></div>
                                    <div className="h-8 w-1/3 bg-slate-50 dark:bg-slate-800 rounded"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase rounded">Apostila</span>
                                <span className="text-xs font-medium text-slate-400">v2.0.1</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1">Central de RH</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Treinamento essencial para gestão de ciclo de vida do funcionário, folha de pagamento e benefícios.</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                <div className="flex flex-col text-slate-400">
                                    <span className="text-[10px] uppercase font-bold">Última atualização</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span className="text-xs">28 Set, 2023</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Baixar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="w-2/3 h-full bg-white dark:bg-slate-900 shadow-lg rounded-t-lg mt-10 p-4 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                                <div className="h-2 w-12 bg-primary/20 rounded"></div>
                                <div className="h-10 w-full bg-primary/5 rounded border border-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                </div>
                                <div className="mt-2 h-4 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-[10px] font-bold uppercase rounded">Rascunho</span>
                                <span className="text-xs font-medium text-slate-400">v0.9.5-beta</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1">Painel de Relatórios e BI</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Como construir relatórios personalizados, exportar dados e utilizar ferramentas de visualização.</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                <div className="flex flex-col text-slate-400">
                                    <span className="text-[10px] uppercase font-bold">Última atualização</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span className="text-xs">15 Nov, 2023</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Baixar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="w-2/3 h-full bg-white dark:bg-slate-900 shadow-lg rounded-t-lg mt-10 p-4 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                                <div className="h-2 w-12 bg-primary/20 rounded"></div>
                                <div className="flex items-center gap-1">
                                    <div className="size-4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                    <div className="size-4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                    <div className="size-4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                </div>
                                <div className="mt-2 h-16 w-full bg-slate-50 dark:bg-slate-800 rounded flex flex-col p-2 gap-1">
                                    <div className="h-1.5 w-full bg-primary/10 rounded"></div>
                                    <div className="h-1.5 w-5/6 bg-primary/10 rounded"></div>
                                    <div className="h-1.5 w-4/6 bg-primary/10 rounded"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase rounded">Essencial</span>
                                <span className="text-xs font-medium text-slate-400">v5.1.0</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1">Operações de TI e Segurança</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Procedimentos operacionais padrão para manutenção, protocolos de backup e controle de acesso.</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                <div className="flex flex-col text-slate-400">
                                    <span className="text-[10px] uppercase font-bold">Última atualização</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span className="text-xs">10 Ago, 2023</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Baixar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="w-2/3 h-full bg-white dark:bg-slate-900 shadow-lg rounded-t-lg mt-10 p-4 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                                <div className="h-2 w-12 bg-primary/20 rounded"></div>
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="h-2 w-20 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                        <div className="h-2 w-14 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase rounded">Apostila</span>
                                <span className="text-xs font-medium text-slate-400">v3.3.0</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1">Compras e Suprimentos</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Portal do fornecedor, geração de ordens de compra e tutoriais de fluxo de aprovação.</p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                <div className="flex flex-col text-slate-400">
                                    <span className="text-[10px] uppercase font-bold">Última atualização</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span className="text-xs">30 Out, 2023</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Baixar PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-8 py-10 border-t border-slate-100 dark:border-slate-800">
                    <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-30" disabled>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div className="flex gap-1">
                        <button className="size-10 rounded-lg bg-primary text-white font-bold text-sm">1</button>
                        <button className="size-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium text-sm">2</button>
                        <button className="size-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium text-sm">3</button>
                        <span className="flex items-center px-2 text-slate-400">...</span>
                        <button className="size-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium text-sm">12</button>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </main>
        </div>
    )
}
