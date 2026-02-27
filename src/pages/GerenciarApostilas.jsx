import { Link, useNavigate } from 'react-router-dom'

export default function GerenciarApostilas() {
    const navigate = useNavigate();

    return (
        <div className="flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary">
                        <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">auto_stories</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">CMS Educacional</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link to="/cms/dashboard" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors">Dashboard</Link>
                        <Link to="/cms/cadastrar-video" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors">Videoaulas</Link>
                        <Link to="/cms/gerenciar-apostilas" className="text-primary text-sm font-bold leading-normal border-b-2 border-primary py-1">Apostilas</Link>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Usuários</a>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg" data-icon="search">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal" placeholder="Buscar links..." defaultValue="" />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button onClick={() => { localStorage.removeItem('isAuthenticated'); navigate('/'); }} className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-3 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 transition-colors">
                            <span className="material-symbols-outlined text-[20px] mr-1">logout</span> Sair
                        </button>
                        <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                    <div className="bg-primary/20 rounded-full size-10 flex items-center justify-center overflow-hidden border border-primary/30">
                        <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCILlYlxYvnAmQbdQr-ipymJQXqxJ1TRNzRFyuDRXWSMgxZAomqNS5oFxvpeGiATlLmne6-FHb2oIxVQJDS_96Js4LD6HJo9iES12CUugsnxF9vI-yNzd0J8107nuJTXZbmMvu4g4DW8fZMsFqBaoIvx29BL7fgJMu18BzqJnGzapcTpBImjqwvYNBRKMPg6mhXD01KZkBYLZawU8c9FDEke08Z3gJPPosolbiuoHtDcD2aGQSZsxmaTNN_A2Ub-dwJ0U9zLsfi7Zr8" />
                    </div>
                </div>
            </header>
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-[1200px] mx-auto px-6 py-8">
                    <div className="flex flex-col gap-2 mb-8">
                        <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Gerenciar Links de Apostilas</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Vincule manuais e documentos externos através de links compartilhados do Google Drive.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 flex flex-col gap-6">
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-5 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">link</span>
                                    Novo Link de Apostila
                                </h2>
                                <div className="mb-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50">
                                    <h3 className="text-amber-800 dark:text-amber-400 text-xs font-bold uppercase mb-2 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">info</span>
                                        Como compartilhar:
                                    </h3>
                                    <ul className="text-xs text-amber-700 dark:text-amber-500 space-y-1 list-disc ml-4">
                                        <li>No Google Drive, clique com o botão direito no arquivo.</li>
                                        <li>Selecione <b>Compartilhar</b>.</li>
                                        <li>Em "Acesso geral", mude para <b>"Qualquer pessoa com o link"</b>.</li>
                                        <li>Certifique-se de que a permissão é de <b>Leitor</b>.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label className="flex flex-col">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Nome do Documento</span>
                                        <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm" placeholder="Ex: Apostila de Física Moderna" type="text" />
                                    </label>
                                    <label className="flex flex-col">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Link do Google Drive</span>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-slate-400 text-lg">add_link</span>
                                            </div>
                                            <input className="form-input w-full pl-10 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm" placeholder="https://drive.google.com/..." type="url" />
                                        </div>
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col">
                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Versão</span>
                                            <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm" placeholder="v1.0" type="text" />
                                        </label>
                                        <label className="flex flex-col">
                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Tags</span>
                                            <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm" placeholder="enem, física" type="text" />
                                        </label>
                                    </div>
                                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg h-12 bg-primary text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
                                        <span className="material-symbols-outlined text-lg">add</span>
                                        Vincular Documento
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                    <h2 className="text-slate-900 dark:text-white text-xl font-bold">Documentos Vinculados</h2>
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 tracking-wide uppercase">4 Documentos Ativos</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Documento</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Versão</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.71 3.502L1.155 15.013l3.359 5.812h13.11l6.653-11.511-3.313-5.812H7.71zm2.3 2.162h7.971l2.122 3.714H12.13L10.01 5.664zm-5.496 9.613l2.122-3.714h11.233l2.121 3.714H4.514zm3.359 1.486l2.121-3.714 2.121 3.714-2.121 3.714-2.121-3.714z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="max-w-[280px]">
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Cálculo Diferencial I</p>
                                                            <p className="text-[10px] text-primary truncate hover:underline cursor-pointer">drive.google.com/file/d/1A2B3C...</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">v1.0.5</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <a className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors" href="https://drive.google.com" target="_blank" rel="noreferrer">
                                                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                            Testar Link
                                                        </a>
                                                        <button className="flex items-center justify-center p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors" title="Remover">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.71 3.502L1.155 15.013l3.359 5.812h13.11l6.653-11.511-3.313-5.812H7.71zm2.3 2.162h7.971l2.122 3.714H12.13L10.01 5.664zm-5.496 9.613l2.122-3.714h11.233l2.121 3.714H4.514zm3.359 1.486l2.121-3.714 2.121 3.714-2.121 3.714-2.121-3.714z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="max-w-[280px]">
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Gramática Normativa</p>
                                                            <p className="text-[10px] text-primary truncate hover:underline cursor-pointer">drive.google.com/file/d/2X4Y6Z...</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">v2.1.0</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <a className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors" href="https://drive.google.com" target="_blank" rel="noreferrer">
                                                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                            Testar Link
                                                        </a>
                                                        <button className="flex items-center justify-center p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors" title="Remover">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.71 3.502L1.155 15.013l3.359 5.812h13.11l6.653-11.511-3.313-5.812H7.71zm2.3 2.162h7.971l2.122 3.714H12.13L10.01 5.664zm-5.496 9.613l2.122-3.714h11.233l2.121 3.714H4.514zm3.359 1.486l2.121-3.714 2.121 3.714-2.121 3.714-2.121-3.714z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="max-w-[280px]">
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">História do Brasil Império</p>
                                                            <p className="text-[10px] text-primary truncate hover:underline cursor-pointer">drive.google.com/file/d/9K8J7H...</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">v1.0.0</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <a className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors" href="https://drive.google.com" target="_blank" rel="noreferrer">
                                                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                            Testar Link
                                                        </a>
                                                        <button className="flex items-center justify-center p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors" title="Remover">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.71 3.502L1.155 15.013l3.359 5.812h13.11l6.653-11.511-3.313-5.812H7.71zm2.3 2.162h7.971l2.122 3.714H12.13L10.01 5.664zm-5.496 9.613l2.122-3.714h11.233l2.121 3.714H4.514zm3.359 1.486l2.121-3.714 2.121 3.714-2.121 3.714-2.121-3.714z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="max-w-[280px]">
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Física Mecânica - Exercícios</p>
                                                            <p className="text-[10px] text-primary truncate hover:underline cursor-pointer">drive.google.com/file/d/5M4N3O...</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">v1.1.2</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <a className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors" href="https://drive.google.com" target="_blank" rel="noreferrer">
                                                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                            Testar Link
                                                        </a>
                                                        <button className="flex items-center justify-center p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors" title="Remover">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-center">
                                    <button className="text-primary text-sm font-bold hover:underline">Ver todos os links</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-primary rounded-xl p-6 text-white flex items-center gap-5 shadow-lg shadow-primary/20">
                                    <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl">cloud_sync</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/70 uppercase tracking-widest font-bold">Status dos Links</p>
                                        <p className="text-2xl font-black">100% <span className="text-sm font-normal text-white/70">Funcionais</span></p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex items-center gap-5">
                                    <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl">visibility</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">Acessos via Link</p>
                                        <p className="text-2xl font-black text-slate-900 dark:text-white">12.8k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
