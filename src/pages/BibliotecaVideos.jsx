import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function BibliotecaVideos() {
  const [videosCadastrados, setVideosCadastrados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}?action=getVideos`);
        if (response.ok) {
          const data = await response.json();
          // Certifique-se de que os videos mais recentes apareçam primeiro
          setVideosCadastrados(data.reverse());
        }
      } catch (error) {
        console.error("Erro ao puxar da planilha (fallback pro localstorage):", error);
        // Fallback para não quebrar a tela pra testar
        const videos = JSON.parse(localStorage.getItem('cadastrados_videos') || '[]');
        setVideosCadastrados(videos);
      } finally {
        setIsLoading(false);
      }
    };

    if (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL !== "COLOQUE_AQUI_A_URL_DO_SEU_WEBAPP_DO_APPS_SCRIPT") {
      loadVideos();
    } else {
      // Se não tem URL da planilha configurada, puxa do localstorage
      const videos = JSON.parse(localStorage.getItem('cadastrados_videos') || '[]');
      setVideosCadastrados(videos);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-1 flex-row w-full max-w-[1440px] mx-auto">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 gap-6 min-h-[calc(100vh-73px)]">
        <div>
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-4">Módulos do Sistema</h3>
          <nav className="flex flex-col gap-1">
            <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">
              <span className="material-symbols-outlined">receipt</span>
              <span className="text-sm">Módulo Fiscal</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">calculate</span>
              <span className="text-sm">Contábil</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">description</span>
              <span className="text-sm">Faturamento</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">inventory_2</span>
              <span className="text-sm">Estoque</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm">Configurações</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
            <p className="text-xs text-slate-500 mb-2">Seu Progresso</p>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[65%]"></div>
            </div>
            <p className="text-xs text-slate-900 dark:text-white mt-2 font-medium">65% concluído</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">
        {/* Destaque da Semana */}
        <section className="mb-12">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-6">Central de Vídeos</h2>
          <div className="group relative flex flex-col xl:flex-row items-stretch rounded-xl overflow-hidden shadow-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Link to="/aula" className="relative w-full xl:w-2/3 aspect-video bg-slate-200 dark:bg-slate-800 bg-center bg-cover flex items-center justify-center cursor-pointer block" data-alt="Cena de escritório com tecnologia moderna e dashboards" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8nV2IrqBBVjk_paJp2hZcwKN9CXN8b5k_yGzqhc1YnTSvFduyD7STbL7bWqBqMrkmMEsjUgdEuoWxhrsrem4Yx9-4fBIe5giNICnWZ7Q7zfJk1-w_bXhv7sZGWkg2ECppSWR0zq4rZ3WkFCAWL76KGrzImnrtscyWW3ZF1thd_3MOy5v3BR66FstDVsB5XZDAL6tqxGfV0s9KPr1hTVml54fJHe4zZV76X7aWAS2ts4u4WEwk7NKbqWbH4hr3jDysHQMtad8G-2Xe')" }}>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
              <div className="z-10 bg-primary/90 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative">
                <span className="material-symbols-outlined text-4xl">play_arrow</span>
              </div>
            </Link>
            <div className="flex w-full xl:w-1/3 flex-col justify-center p-8 lg:p-10 gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">NOVIDADE</span>
                <span className="text-slate-500 text-xs font-medium">15 min • Intermediário</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-2xl xl:text-3xl font-bold leading-tight">Configurando o Novo Fluxo de Notas Fiscais</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm xl:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Descubra as atualizações mais recentes no módulo fiscal e aprenda como automatizar o envio de documentos para a contabilidade em tempo real.
              </p>
              <div className="flex gap-4 mt-2">
                <Link to="/aula" className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Assistir Agora
                </Link>
                <button className="flex items-center justify-center w-12 h-12 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias: Novidades */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Novidades</h3>
            <a className="text-primary text-sm font-semibold hover:underline" href="#">Ver tudo</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Loading State */}
            {isLoading && (
              <div className="col-span-full flex justify-center items-center py-12">
                <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
                <span className="ml-3 text-slate-500 font-medium">Carregando da planilha...</span>
              </div>
            )}

            {/* Vídeos Cadastrados Dinamicamente */}
            {!isLoading && videosCadastrados.map((video, idx) => (
              <Link key={video.id || idx} to="/aula" className="group flex flex-col gap-3">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${video.thumbnail}')` }}></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">{video.duration}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">{video.titulo}</h4>
                  <p className="text-slate-500 text-xs uppercase">{video.categoria || "Geral"} • {video.date}</p>
                </div>
              </Link>
            ))}

            {/* Video Card 1 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Gráficos financeiros em uma tela de computador" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMZcWdO53DYvxqx_zCZ1ym6aeWamYkmZHjznlAL9l7GOKwPjI73130CphbthZROwXQrYsrX-eO4bKeYCzfvPQtcb_LYoaGZ7jR2TqM5XEoGRgH31OjllWynn6OZ24Vb2pPzjtAnpNJY_Qj3B83eE4DdPfUQZ0L0iDZiQNXyHxDsdRAJj1P2YVkXLHmmUZSH54FHD-r-vHdSHo1gh-1b2OJAmdBfx26tpRatd8qmYhC3yEQDa2rj4ch6YfTTnnEG4KUQttRtXR7fcPs')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">08:45</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Relatórios Gerenciais Dinâmicos</h4>
                <p className="text-slate-500 text-xs">Módulo Financeiro • 2 dias atrás</p>
              </div>
            </Link>

            {/* Video Card 2 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Pessoa analisando dados em tablet" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2Vpbbwy0i98cc6cCNJythictg_vJvfi2R1yzBgNTFx72QFO3a21AhfMLlOS3t_MmV_K-k9J1UzuW56783zg2_DxPb32QOkRljXFt02A-osPObvPemdcTKKXwFjfYXR8ts4vOPomwzlY-ADD5MA5u3bZhRqnGtlRgIY4S4hbliFs_R0AEY72f5xGwMtlQfxedAJOmtO5inhuzBN-MnBicytPRLk357-m4t5VjIuRlG6mg-IWVfL5SCTIX18m5mTFuNUx7hK2v6qBUL')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">12:20</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Exportação de Dados para Excel</h4>
                <p className="text-slate-500 text-xs">Utilidades • 3 dias atrás</p>
              </div>
            </Link>

            {/* Video Card 3 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Calculadora e papéis contábeis" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkvNUlxRt2FIjB_EqJSt3wevKbvtL9KKpNNQ7apBa9ETbpO0yCU-gLaCNUyQ3AoBG3ogKDgD505kOb1pQcIA9rR-NgpOA83qvgwFQTCmHP5fJ2c4kGJbZf_WDvtUuHaxDo9N_dQt08Z6ctRXg5JiOEDZIUdtngWsVzcicPn-3pyKR4Hl-k9NWqQ6Wo8XKko3rKKVz387hGbJzL7gwQU-5ozCsgazF2gG5DHWwg4OXiYoyCIoBgqsp4Ng_h961qXjm3DZ_CoWdEtU37')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">05:30</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Conciliação Bancária Automatizada</h4>
                <p className="text-slate-500 text-xs">Módulo Contábil • 1 semana atrás</p>
              </div>
            </Link>

            {/* Video Card 4 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Lupa sobre documentos de faturamento" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqY01IcEoCvb8TJFkKRsP6zvSUc-O360ocsxMqm2MizDOJBUq47nR2J2qg8XvPeKF_3oOffvnsQgrSXr9_PnhEzjU6LfAf9AtaTTjq6q3N2Ro-jRCvKUGgFNt-dK29_0Pu19x77oR9oUCcKBQsEDl6VNkW0fLgEY7OESDQNwDetGOxdQAC_JrFfyMuDsoIeKV3qz2lsTqzEO5iQEkXkYgyC88hHTqlALguKBJpuefpbcJJUTtJAvVu1WMsNoXYwITujFoqCJjs41Oi')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">10:15</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Busca Avançada de Pedidos</h4>
                <p className="text-slate-500 text-xs">Vendas • 1 semana atrás</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Categorias: Mais Assistidos */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Mais Assistidos</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Video Card 5 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Pessoas em reunião de treinamento" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUQyoJ5zOD6yCeTkjyQpP-q8h86AXEPMwCD1IZZxU-4jHCz0HorNTG5CTeEyp8oUzdWbpnKVzXf_4LCXKb_v_yUYVAKcb4VSq9ZoJYCcRwsRiCNVXf6ybn-TsNqs_gvapndg8TgusnaeLzebiDlQvITfnCzqsE_d6Dlf5MT1hN2B1n-pg5gRB4uCfONk2CE44N3VT8d_5YuRsOA_lUzOAdz3_usKUyK7zqI0F0p_pIJER7xpgjFXNQcfUjhHkPdMavl8s7O_I8EiY9')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
                <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">POPULAR</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Introdução ao Sistema para Novos Usuários</h4>
                <p className="text-slate-500 text-xs">Geral • 45k visualizações</p>
              </div>
            </Link>

            {/* Video Card 6 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Aperto de mãos simbolizando fechamento de vendas" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAK_HuYsIVb74IJzlkPaYmCZZRS9SCgcSnt_MZhkgUnZ7Z8ElW3GjA-j60Jof2jgeb8jzcctfkZroolpBwiF6kWAx-rqD5eP9iDd_TQtOrHqrXwOHeWaF2MlnyXeiTV6DwfTY_H58Uj5HaXps28O4j4ixIVTDVgOHxHDDBzO09ceK52BuEX3d-q5iWbhjgtO-_pvEgCQ86cZXoOYsVzJ2T20XK_Q83cj4M9k7bob7Z4BMZvYkwinl00v3OiKLsnbaSWcsEIIbon0K_0')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Cadastro de Clientes e Fornecedores</h4>
                <p className="text-slate-500 text-xs">Geral • 32k visualizações</p>
              </div>
            </Link>

            {/* Video Card 7 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Faturas e caneta sobre mesa" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBin2TKfCegj25uSlYQHbVzfLFoz-H6T4E9M3AvlYsAzQWcifu8KdKZ3xNrWwJjPjpM6L8In1sxt_1WV7BlVO9VpI0z7mkL3wCBQ_7yPYTwp0ISLRrNIORMiYyVc8joVwQ3BpVpIKMcwNUkMUikdZjmJ-VTk_9eplm3kR8VjESTjAV0rspBFt9VVS1Y36zAcNwrxraiqRPZn7r9rLQ72LSk2GEImnfVI4SjylTUA1EeZ0ZHN-rYFMqZZlO2IRTsGP38veadcm6L50Y6')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Emissão de Nota Fiscal Eletrônica (NF-e)</h4>
                <p className="text-slate-500 text-xs">Módulo Fiscal • 28k visualizações</p>
              </div>
            </Link>

            {/* Video Card 8 */}
            <Link to="/aula" className="group flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
                <div className="absolute inset-0 bg-center bg-cover" data-alt="Post-its coloridos em parede" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDArhIGcPI9dqromgRzTUSNjX_-jUrcQFhD5hEaAjftyWAdxMYegG_c_h8QhKdo-VAHXiyvmfMm5Z9Z4aKJfDsABiIeUe7HNy6tFz7YKEy58Xsv4jIr4tgrYZ-cDSMOKOKmCGyNzyOCFmGKVLJ-FoQDMj81Fm-nM9raC4GDEmgnB9-2N4ISS1EYPCN7ePygAQTv8Vj3eHq_slfcK1lXXBWpX2XXfJm2lnR_G-2xNrh4Bsn-uCAJ-4OxTDe0PpWwHapsf1e_A1CpLCcO')" }}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-900 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors">Gerenciamento de Fluxo de Caixa</h4>
                <p className="text-slate-500 text-xs">Financeiro • 25k visualizações</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Categorias: Documentação do Sistema (PDFs) */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Manuais e Documentação</h3>
            <Link to="/manuais" className="text-primary text-sm font-semibold hover:underline">Ver Menu de Manuais</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/manuais" className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mr-4">
                <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Manual_Fiscal_v2.4.pdf</h5>
                <p className="text-xs text-slate-500">2.4 MB • Atualizado em Jan 2024</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
            </Link>

            <Link to="/manuais" className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mr-4">
                <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Guia_Rapido_Atalhos.pdf</h5>
                <p className="text-xs text-slate-500">1.1 MB • Atualizado em Mar 2024</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
            </Link>

            <Link to="/manuais" className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mr-4">
                <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Fluxograma_Vendas_v3.pdf</h5>
                <p className="text-xs text-slate-500">5.8 MB • Atualizado em Dez 2023</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
