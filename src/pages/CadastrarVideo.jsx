import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CadastrarVideo() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [dificuldade, setDificuldade] = useState('beg');
    const [urlVideo, setUrlVideo] = useState('');

    const handleSave = () => {
        if (!titulo || !urlVideo) {
            alert("Por favor, preencha o título e a URL do vídeo.");
            return;
        }

        const newVideo = {
            id: Date.now(),
            titulo,
            descricao,
            categoria,
            dificuldade,
            urlVideo,
            thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDITps9XyMberRBHl3UAguTs7RBjOWDTmUMnHT9-6cKXH0S-dck5KuL2fDv4tMSaqJX5HGNMxt36ZlHSQo4eKGiDpqWg-PzXJfheBTnoae_YMPLRSnTeVc8sRqeuXUDx8lNaeub6P6qpveFkp3t4IINexd8uTs-Tv2IJOlHF3Pgiu6Xp1cYtDjO_yQ41Mk29zKjoiqVbhhc-EOctZXw1L2DR7rd6CZridkP08ZYA4vedRBDr0M-w-JxDHbwz2RzJx8npVe-azlulc4T", // Default mockup
            duration: "10:00",
            views: "Novo",
            date: new Date().toLocaleDateString('pt-BR')
        };

        const existingVideos = JSON.parse(localStorage.getItem('cadastrados_videos') || '[]');
        existingVideos.unshift(newVideo);
        localStorage.setItem('cadastrados_videos', JSON.stringify(existingVideos));

        alert("Vídeo cadastrado com sucesso!");
        navigate('/biblioteca-videos');
    }

    return (
        <>
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-40">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary">
                        <div className="size-8 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">CMS Educacional</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal">Dashboard</Link>
                        <Link to="/cms/cadastrar-video" className="text-primary text-sm font-medium leading-normal border-b-2 border-primary">Aulas</Link>
                        <Link to="/manuais" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal">Biblioteca</Link>
                        <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Alunos</a>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-slate-100 dark:bg-slate-800 h-full placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Buscar no CMS..." defaultValue="" />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                        </button>
                        <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">settings</span>
                        </button>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="Avatar de usuário do administrador" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC43GmVWJDPndk3JfTKY2D4gqnxluGI4op7zwq9QQIin4itc14vN8bZvx1L5UgzxQvRCby2PzPDudquvh5oMafZaWu0oho3TYYXT89l5kEM3J7QR9EjgcseWZ2pZ8EuGplECMwWk8Isd_WH7dKuoXLgEjl2lRmUezPFfGkJrL7u0Uuyb6BDE9GiV89kgsLbAACDAgoALJrMAAft_mBghtkbb2A_FKoPPcqQoYK-AQ8_cPiePG3rTg_l6JNsLwwDsC4vXcx5iYD_tTPy")' }}></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 lg:px-40 py-8 flex flex-1 justify-center">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 mb-6">
                        <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Gerenciamento</a>
                        <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Aulas</a>
                        <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Cadastrar Novo Vídeo</span>
                    </nav>
                    <div className="mb-10">
                        <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Cadastrar Novo Vídeo</h1>
                        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal mt-2">Configure os detalhes da videoaula para publicação imediata ou agendada.</p>
                    </div>

                    {/* Form Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Details */}
                        <div className="lg:col-span-2 space-y-6">
                            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">info</span>
                                    Informações Básicas
                                </h3>
                                <div className="space-y-4">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Título da Aula</span>
                                        <input value={titulo} onChange={e => setTitulo(e.target.value)} className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary h-12 text-base font-normal placeholder:text-slate-400" placeholder="Ex: Introdução ao Design de Interface" type="text" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Descrição</span>
                                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary text-base font-normal placeholder:text-slate-400" placeholder="Descreva os principais tópicos abordados nesta aula..." rows="4"></textarea>
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Categoria</span>
                                            <select value={categoria} onChange={e => setCategoria(e.target.value)} className="form-select w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary h-12 text-base">
                                                <option value="" disabled>Selecione uma categoria</option>
                                                <option value="design">Design de Produto</option>
                                                <option value="dev">Desenvolvimento Web</option>
                                                <option value="mkt">Marketing Digital</option>
                                                <option value="business">Negócios</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Nível de Dificuldade</span>
                                            <select value={dificuldade} onChange={e => setDificuldade(e.target.value)} className="form-select w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary h-12 text-base">
                                                <option value="beg">Iniciante</option>
                                                <option value="int">Intermediário</option>
                                                <option value="adv">Avançado</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">play_circle</span>
                                    Fonte do Vídeo
                                </h3>
                                <div className="space-y-4">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">URL do Vídeo</span>
                                        <div className="relative">
                                            <input value={urlVideo} onChange={e => setUrlVideo(e.target.value)} className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary h-12 text-base font-normal pl-12" placeholder="https://youtube.com/watch?v=..." type="text" />
                                            <span className="material-symbols-outlined absolute left-4 top-3 text-slate-400">link</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1">Suporte para YouTube, Vimeo ou link interno mp4.</p>
                                    </label>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">attachment</span>
                                    Material Complementar
                                </h3>
                                <div className="space-y-4">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Vincular Apostila (PDF)</span>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-primary focus:ring-primary h-12 text-base font-normal pl-12" placeholder="Buscar apostila na biblioteca..." type="text" />
                                                <span className="material-symbols-outlined absolute left-4 top-3 text-slate-400">picture_as_pdf</span>
                                            </div>
                                            <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold px-4 rounded-lg flex items-center justify-center transition-colors">
                                                <span className="material-symbols-outlined">add</span>
                                            </button>
                                        </div>
                                    </label>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Media/Actions */}
                        <div className="space-y-6">
                            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">image</span>
                                    Miniatura (Thumbnail)
                                </h3>
                                <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-center">
                                    <span className="material-symbols-outlined text-4xl text-slate-400">upload_file</span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Arraste a imagem aqui</p>
                                        <p className="text-xs text-slate-500">ou clique para selecionar (JPG, PNG)</p>
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-2 italic">Recomendado: 1280x720px</p>
                                </div>
                                <div className="mt-4 hidden">
                                    <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-200">
                                        <img className="w-full h-full object-cover" data-alt="Visualização da miniatura do vídeo de curso" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYkhWqpTm7U6QdK4BiW_0t1M1QEuMtHnilgvlEPODzv16fYVdmAr7xHvJKBR-b4dWFM56nldg32vmuPNAJqqSXYQqVPya5DEsN3CAnKut2HriNJcMNuatGDYVEdtDXGugs_e5dfnDydvKQc24WKs6fnDNNU0t4Fhcjvi9GK39L9fxV73Gsfg7Hcjx-tWIy5o81eMRArq7315qhGol4nEoydT_3L_3x9JBSPPRiXM1XfPklCz2dLbrw4sYWPdUTjpg0i2BAdW8usTy4" />
                                        <button className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg">
                                            <span className="material-symbols-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                                <button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">publish</span>
                                    Publicar Aula
                                </button>
                                <button className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined">save</span>
                                    Salvar Rascunho
                                </button>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <div className="relative inline-flex items-center">
                                            <input className="sr-only peer" type="checkbox" defaultChecked />
                                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Notificar Alunos</span>
                                    </label>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-6 lg:px-40 py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 CMS Educacional. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">Termos de Uso</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">Suporte</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">Ajuda</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
