import { Link } from 'react-router-dom'

export default function CursoDetalhes() {
    return (
        <main className="flex flex-1 justify-center py-10 w-full">
            <div className="layout-content-container flex flex-col max-w-[1140px] flex-1 px-4 md:px-10">

                {/* Hero Section */}
                <section className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-center">
                    <Link to="/aula" className="w-full lg:w-3/5 bg-slate-200 dark:bg-slate-800 aspect-video rounded-xl overflow-hidden relative group cursor-pointer shadow-xl block" data-alt="Interface de sistema de software moderno em monitor de alta resolução" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdWEGxiy9NG8BraqJd7nWNQlD5hfE6Gx8hh5hQKvRcvbAaHHnGAF3u8826z_0aBX8VkdoJ5GSv7Gw6e-nP_WMLoPmnFEx37onZ_mnbaqgjRIXQVaA4gEQ9qYS9h--WpWtXcr20f5KnNnP8cmI04suAIapt2TKmrtWOKlJHf2UgCowLgWsq473sTDAryUKJbCfhQmVXip0qU_VS0Znqy2RygcFbCMxRPrqR0pFrV88o5rmTcB2_oFid8yzlTbGDemafgMnAcRS7jtlS')", backgroundSize: 'cover' }}>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                            <div className="bg-primary text-white p-4 rounded-full shadow-lg">
                                <span className="material-symbols-outlined text-4xl block">play_arrow</span>
                            </div>
                        </div>
                    </Link>
                    <div className="flex flex-col gap-6 lg:w-2/5">
                        <div className="flex flex-col gap-2">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase">Treinamento Oficial</span>
                            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                                Domine o Sistema ERP Pro 2024
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Aprenda do zero ao avançado com tutoriais em vídeo e manuais práticos. O guia definitivo para otimizar seus processos de software.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/aula" className="flex-1 flex items-center justify-center rounded-lg h-14 bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all shadow-md">
                                <span className="truncate">Acessar Aulas</span>
                            </Link>
                            <button className="flex items-center justify-center rounded-lg h-14 px-6 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                                <span className="material-symbols-outlined mr-2">bookmark</span>
                                Salvar
                            </button>
                        </div>
                    </div>
                </section>

                {/* Topics */}
                <section className="mb-16">
                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-8">O que você vai aprender</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-primary/50 transition-all">
                            <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined">settings</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-base font-bold mb-1">Configuração Inicial</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Parametrize o sistema corretamente para sua empresa.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-primary/50 transition-all">
                            <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-base font-bold mb-1">Módulos de Vendas</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Domine o fluxo completo de pedidos e faturamento.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-primary/50 transition-all">
                            <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined">inventory_2</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-base font-bold mb-1">Gestão de Estoque</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Controle entradas e saídas de forma otimizada.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-primary/50 transition-all">
                            <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined">analytics</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-base font-bold mb-1">Relatórios Avançados</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Gere insights poderosos para tomada de decisão.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-slate-900 dark:text-white text-2xl font-bold">Conteúdo do Curso</h2>
                        <span className="text-sm font-medium text-slate-500">12 Módulos • 48 Aulas • 12h de vídeo</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                            <button className="w-full flex items-center justify-between p-5 text-left bg-slate-50 dark:bg-slate-800/50">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">01</span>
                                    <span className="font-bold text-slate-900 dark:text-white">Introdução e Primeiros Passos</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </button>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                <Link to="/aula" className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
                                        <span className="text-sm font-medium">Visão Geral do Ecossistema ERP</span>
                                    </div>
                                    <span className="text-xs text-slate-400">12:45</span>
                                </Link>
                                <Link to="/aula" className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
                                        <span className="text-sm font-medium">Configurando seu primeiro acesso</span>
                                    </div>
                                    <span className="text-xs text-slate-400">08:20</span>
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                            <button className="w-full flex items-center justify-between p-5 text-left">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold">02</span>
                                    <span className="font-bold text-slate-900 dark:text-white">Gestão Financeira e Contas</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400">lock</span>
                            </button>
                        </div>

                        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden opacity-70">
                            <button className="w-full flex items-center justify-between p-5 text-left">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold">03</span>
                                    <span className="font-bold text-slate-900 dark:text-white">Automação de Processos Logísticos</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400">lock</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Materials */}
                <section className="mb-16">
                    <div className="bg-primary/5 rounded-2xl p-8 border-2 border-dashed border-primary/20">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Materiais Inclusos</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">Acesse apostilas completas, guias de consulta rápida e manuais técnicos hospedados no Google Drive.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Link to="/manuais" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:border-primary border border-transparent transition-colors">
                                        <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                        <div>
                                            <p className="text-sm font-bold block text-slate-900 dark:text-white">Manual do Usuário.pdf</p>
                                            <p className="text-xs text-slate-400">2.4 MB • Google Drive</p>
                                        </div>
                                    </Link>
                                    <Link to="/manuais" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:border-primary border border-transparent transition-colors">
                                        <span className="material-symbols-outlined text-blue-500">description</span>
                                        <div>
                                            <p className="text-sm font-bold block text-slate-900 dark:text-white">Checklist de Implantação</p>
                                            <p className="text-xs text-slate-400">1.1 MB • Google Drive</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                                    <span className="material-symbols-outlined text-6xl">cloud_download</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
