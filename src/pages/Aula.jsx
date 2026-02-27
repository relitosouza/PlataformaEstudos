import { Link } from 'react-router-dom'

export default function Aula() {
    return (
        <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 py-8">
            <nav className="flex items-center gap-2 text-sm mb-6 text-slate-500">
                <Link className="hover:text-primary transition-colors" to="/biblioteca-videos">Biblioteca</Link>
                <span className="material-symbols-outlined !text-xs">chevron_right</span>
                <span className="hover:text-primary transition-colors cursor-pointer">Cursos</span>
                <span className="material-symbols-outlined !text-xs">chevron_right</span>
                <span className="text-slate-900 font-semibold dark:text-white">Vídeo Aula</span>
            </nav>

            <section className="relative group">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-xl ring-1 ring-slate-200 dark:ring-slate-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <button className="size-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined !text-5xl">play_arrow</span>
                        </button>
                    </div>
                    {/* Imagem de mock do vídeo caso não haja Iframe */}
                    <img
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRpB838rOR45Xy32tbKNYBrEdxaASObEy4eUtIocw6MiGzFsFOEYaFaz9rCVGOY7_lH4j1P8MPVNul59_4QSpDwb9pt_aGNmwgQFBTa-z98xVVV1Uuj4YEdQcowvERHsjzHrSrA74be4fRNW1CUMADTZ142nANswhjrpuyr7gVPDXmGyx1KLYb-10dvi4VqUoSzMV5dAp5jWE2PdbZYst7-Qm2MwBCmXM6pp980_9Tw_ygYjL19nocR45iAWs63H0W46trZ17KT15U"
                    />

                    {/* Controles de vídeo fictícios */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-20">
                        <div className="flex flex-col gap-3">
                            <div className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative">
                                <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full border-2 border-primary shadow-lg"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-white">
                                <div className="flex items-center gap-5">
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">play_arrow</span>
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">skip_next</span>
                                    <div className="flex items-center gap-2 hidden sm:flex">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">volume_up</span>
                                        <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-white"></div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium">04:12 / 15:45</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">subtitles</span>
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">settings</span>
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">fullscreen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
                <div className="flex-1">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">Título da Vídeo Aula</h1>
                    <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="size-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined !text-sm text-slate-600 dark:text-slate-300">person</span>
                            </div>
                            <span className="font-medium text-slate-700 dark:text-slate-300">Admin</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined !text-lg">schedule</span>
                            <span>15 min</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined !text-lg text-yellow-500">star</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-300">4.9</span>
                            <span className="text-slate-400">(1.2k avaliações)</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95">
                        <span className="material-symbols-outlined">check_circle</span>
                        <span>Marcar como Concluída</span>
                    </button>
                </div>
            </section>

            <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">info</span>
                            Sobre esta aula
                        </h3>
                        <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                            <p>Esta é a descrição detalhada da vídeo aula. Aqui você encontra todos os tópicos abordados pelo professor e instruções adicionais sobre o conteúdo apresentado no vídeo.</p>

                            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 mt-4">
                                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4">O que você vai aprender:</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined !text-sm text-primary">check</span>
                                        Conceitos Fundamentais
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined !text-sm text-primary">check</span>
                                        Aplicação Prática
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined !text-sm text-primary">check</span>
                                        Dicas Avançadas
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined !text-sm text-primary">check</span>
                                        Melhores Práticas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">folder</span>
                            Materiais de Apoio
                        </h3>
                        <div className="space-y-3">
                            <a className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-all group" href="#">
                                <div className="size-11 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Guia_Anotações.pdf</p>
                                    <p className="text-xs text-slate-500">Google Drive • 2.4 MB</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
                            </a>
                            <a className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-all group" href="#">
                                <div className="size-11 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">link</span>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Repositório / Link Útil</p>
                                    <p className="text-xs text-slate-500">Acesso Externo</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">open_in_new</span>
                            </a>
                        </div>
                    </div>

                    <div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 to-purple-400/30">
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-[calc(1rem-1px)]">
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Próxima Aula</p>
                            <h4 className="text-[15px] font-bold text-slate-900 dark:text-white mb-4 leading-snug">Introdução ao módulo 2</h4>
                            <button className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                                Ir para o próximo vídeo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
