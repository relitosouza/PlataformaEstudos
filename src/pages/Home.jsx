import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="flex-1 px-6 lg:px-20 py-10 max-w-[1400px] mx-auto w-full">
      <section className="mb-16">
        <div className="flex flex-col gap-10 lg:flex-row items-center">
          <Link to="/aula" className="relative w-full lg:w-3/5 aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-slate-200 dark:border-slate-700 block">
            <div className="absolute inset-0 bg-cover bg-center" data-alt="Miniatura de tutorial em vídeo de alta qualidade mostrando interface de dashboard" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMAxYL_KQmRYvdB3ePerXVUJUViSdQbI-MvLmiOfElt7J3ZK9LRsSOFvqBC5vEDtB5UAbzSMquUiV_jprKCZXA6gMUR4E9dfQDLoWcECagCGqLWotYS2HXwHhIcXQBGjlBVnnFgjU02QDWHJ4lw5bs5Bsb0r802olrLCBn3I7vdqQ2ZKZm68TY4Wv_cK1AeK1fiYvVV2bYLT9FnQrBiQKVFSRxrR4vzlEqEALXhpUISE_HLdPwm955Z23MvDdYuuSgcsS_Baqt-ROh")' }}></div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl translate-x-1">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium">
              Tutorial: Introdução às Operações do Sistema (08:45)
            </div>
          </Link>
          <div className="flex flex-col gap-6 lg:w-2/5">
            <div className="flex flex-col gap-4 text-left">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Comece hoje mesmo</span>
              <h1 className="text-slate-900 dark:text-white text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
                Domine Sistemas de Software com Tutoriais de Especialistas
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Acesso imediato a lições em vídeo profissionais e manuais PDF abrangentes. Projetado para desenvolvedores e administradores de sistema.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/aula" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all">
                Começar a Aprender
              </Link>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Explorar Biblioteca
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Tutoriais em Destaque</h2>
            <p className="text-slate-500 text-sm">As lições em vídeo mais populares desta semana</p>
          </div>
          <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline" href="#">
            Ver Todos <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/aula" className="flex flex-col group cursor-pointer block">
            <div className="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden mb-3">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Dashboard analytics and charts overview" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX1S8xKEbBB4kISIWCf8iX9sIqUMqBIicLRKn_vmwRN7qp8QQrP0QwzPI3QrwRF96LuZR_WCHqzetpqBkutcR9c_yr80Luh3deXED0uRbxzcg3XXgQD3JLuh3sVR7MYiq16E7Qz4oFYBJDtVpYw3s4JK0ZP6qqU8zYVYx5J9m82pFrreAv3b9pGABBtvf_UMDqKsbQCx7y0GG7-HzPuuYnmz_I6vyWLHLhEEfXJyPwzphGlFAbKDRw7BOYZ7in0jh-iTOOe9nptI9i")' }}></div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">15:00</div>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug group-hover:text-primary transition-colors">Introdução a Sistemas CRM</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm text-slate-400">videocam</span>
              <p className="text-slate-500 text-sm">Lição em Vídeo • Iniciante</p>
            </div>
          </Link>
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden mb-3">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Server hardware and network infrastructure" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOcUq_2-YxKFOujz0u9Y6YZVLxqGQ4zeUdX1j6Id_oju9B9QGGZ-bc5Tgs4GW3jSbhQqOClXc7FC2UssMqCABIYRa99kDU-caCetmlSSF7vHfq97Dr0rs7w5sJd4s9bayYDcgf3HHh0kChDuTzSHJFskdsz0QzYTbYCbuqf-pnqTYw6SPmNHuInbx4Q_DZiUQeZM9tDvmgiiwTABQ-T_xO9S71QUrOpFO5ESKrpD0WPhMPqCkKm2Yb5d3o6aE5ytrsd_aA91cnGG27")' }}></div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">45:00</div>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug group-hover:text-primary transition-colors">Segurança Avançada de Banco de Dados</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm text-slate-400">videocam</span>
              <p className="text-slate-500 text-sm">Lição em Vídeo • Avançado</p>
            </div>
          </div>
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden mb-3">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Digital representation of cloud computing network" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASWPZDeGQfcDxY8NGdnIRNjT4hU01YShMBEmCLoFkpmtXakpLgVLEJ8Fyy6YrKLpvRiB3gNtmnRdWkDm-bl7qVNuwwkmrwcSJnk-L7y9kS8_nioPWzXZh3LmnRmn5DhVy3jUCjEomZQKaudEL2Y5Z8nNhjzFtZ8NBVx3vld_dVTYetPiz8SPFEuixgxqPhKqHJW-cJVBPWgGwar0DhgGOei8PpGTLAXakVvCeRFhoHZJfaWvl0pYq-PVJrBdFe41pCf-ofCTfEno-o")' }}></div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">30:00</div>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug group-hover:text-primary transition-colors">Arquitetura em Nuvem 101</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm text-slate-400">videocam</span>
              <p className="text-slate-500 text-sm">Lição em Vídeo • Intermediário</p>
            </div>
          </div>
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden mb-3">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Code on a screen showing API calls" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDITps9XyMberRBHl3UAguTs7RBjOWDTmUMnHT9-6cKXH0S-dck5KuL2fDv4tMSaqJX5HGNMxt36ZlHSQo4eKGiDpqWg-PzXJfheBTnoae_YMPLRSnTeVc8sRqeuXUDx8lNaeub6P6qpveFkp3t4IINexd8uTs-Tv2IJOlHF3Pgiu6Xp1cYtDjO_yQ41Mk29zKjoiqVbhhc-EOctZXw1L2DR7rd6CZridkP08ZYA4vedRBDr0M-w-JxDHbwz2RzJx8npVe-azlulc4T")' }}></div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">20:00</div>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug group-hover:text-primary transition-colors">Básico de Integração de API</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm text-slate-400">videocam</span>
              <p className="text-slate-500 text-sm">Lição em Vídeo • Iniciante</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Manuais Recentes</h2>
            <p className="text-slate-500 text-sm">Guias para download e documentação técnica</p>
          </div>
          <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline" href="#">
            Ver Todos <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Manual do Admin de Sistema v2.4</h4>
              <p className="text-slate-500 text-xs">PDF • 4.2 MB • Atualizado há 2 dias</p>
            </div>
            <button className="text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Guia de Melhores Práticas de Segurança</h4>
              <p className="text-slate-500 text-xs">PDF • 2.8 MB • Atualizado há 1 semana</p>
            </div>
            <button className="text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Manual de Tuning PostgreSQL</h4>
              <p className="text-slate-500 text-xs">PDF • 1.5 MB • Atualizado há 3 dias</p>
            </div>
            <button className="text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Documentação de Referência da API</h4>
              <p className="text-slate-500 text-xs">PDF • 8.1 MB • Atualizado há 5 dias</p>
            </div>
            <button className="text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Integração de Novos Funcionários</h4>
              <p className="text-slate-500 text-xs">PDF • 3.0 MB • Atualizado há 2 semanas</p>
            </div>
            <button className="text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Plano de Recuperação de Desastres</h4>
              <p className="text-slate-500 text-xs">PDF • 2.2 MB • Atualizado há 1 mês</p>
            </div>
            <button className="text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-20 p-8 rounded-2xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Junte-se à nossa comunidade de alunos</h2>
          <p className="text-primary/10 bg-white/20 p-4 rounded-lg text-sm leading-relaxed text-white">
            Acesse conteúdos, participe de discussões e conecte-se com outros profissionais em nossos fóruns abertos.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors">Acessar Comunidade</button>
          <button className="bg-primary/20 border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/30 transition-colors">Ver Fóruns</button>
        </div>
      </section>
    </main>
  )
}
