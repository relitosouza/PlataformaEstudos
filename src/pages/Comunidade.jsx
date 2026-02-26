import { Link } from 'react-router-dom'

export default function Comunidade() {
    return (
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-10 lg:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Comunidade</h1>
                    <p className="text-slate-600 dark:text-slate-400">Interaja com outros alunos, tire dúvidas e compartilhe conhecimentos.</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-primary/30 flex items-center gap-2 transition-all hover:-translate-y-1">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Nova Discussão
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Tópicos</h3>
                        <nav className="flex flex-col gap-2">
                            <a href="#" className="flex justify-between items-center text-sm font-bold bg-primary/10 text-primary px-3 py-2 rounded-lg">
                                <span>Geral</span>
                                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">124</span>
                            </a>
                            <a href="#" className="flex justify-between items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">
                                <span>Dúvidas Frequentes</span>
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] px-2 py-0.5 rounded-full">85</span>
                            </a>
                            <a href="#" className="flex justify-between items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">
                                <span>Módulo Contábil</span>
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] px-2 py-0.5 rounded-full">32</span>
                            </a>
                            <a href="#" className="flex justify-between items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">
                                <span>Recursos Humanos</span>
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] px-2 py-0.5 rounded-full">18</span>
                            </a>
                        </nav>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-5 text-white shadow-lg">
                        <span className="material-symbols-outlined text-4xl mb-2 opacity-80">military_tech</span>
                        <h4 className="font-bold text-lg mb-1">Top Contribuidor</h4>
                        <p className="text-sm text-blue-100 mb-4 opacity-90">Ajude a comunidade respondendo dúvidas e ganhe badges especiais!</p>
                        <div className="flex -space-x-3">
                            <div className="size-10 rounded-full border-2 border-primary bg-slate-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=11" alt="avatar" /></div>
                            <div className="size-10 rounded-full border-2 border-primary bg-slate-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="avatar" /></div>
                            <div className="size-10 rounded-full border-2 border-primary bg-slate-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=13" alt="avatar" /></div>
                            <div className="size-10 rounded-full border-2 border-primary bg-slate-800 text-white flex items-center justify-center text-xs font-bold">+50</div>
                        </div>
                    </div>
                </aside>

                {/* Feed */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    {/* Search bar inside feed */}
                    <div className="flex bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-2 shadow-sm mb-2">
                        <div className="text-slate-400 flex items-center justify-center pl-3">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="form-input flex flex-1 border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-500 text-sm" placeholder="Buscar nas discussões..." />
                    </div>

                    {/* Post 1 */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex gap-5 hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                        <div className="flex flex-col items-center gap-1">
                            <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">expand_less</span></button>
                            <span className="font-bold text-slate-900 dark:text-white text-lg">42</span>
                            <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">expand_more</span></button>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded">Geral</span>
                                <span className="text-xs text-slate-500">Postado por <b className="text-slate-700 dark:text-slate-300">Ana Souza</b> há 2 horas</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">Melhores práticas para conciliação de notas fiscais em lote</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                                Olá pessoal! Gostaria de saber como vocês estão otimizando o envio e conciliação de NFs. Atualmente o processo manual está consumindo muito tempo do meu setor de contas a pagar...
                            </p>
                            <div className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                                    <span>15 Comentários</span>
                                </div>
                                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">share</span>
                                    <span>Compartilhar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex gap-5 hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                        <div className="flex flex-col items-center gap-1">
                            <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-primary font-bold">expand_less</span></button>
                            <span className="font-bold text-slate-900 dark:text-white text-lg text-primary">28</span>
                            <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">expand_more</span></button>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded">Recursos Humanos</span>
                                <span className="text-xs text-slate-500">Postado por <b className="text-slate-700 dark:text-slate-300">Carlos Lima</b> há 5 horas</span>
                                <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded">
                                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                                    Resolvido
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">Erro ao processar folha de pagamento na versão 3.0</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                                Identificamos um erro de cálculo no 13º salário na nova atualização. Já existe algum patch ou manual ensinando a configurar o cálculo na nova versão de forma correta?
                            </p>
                            <div className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                                    <span>8 Comentários</span>
                                </div>
                                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">share</span>
                                    <span>Compartilhar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-3 mt-4 text-primary font-bold bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                        Carregar Mais Discussões
                    </button>
                </div>
            </div>
        </div>
    )
}
