import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function LoginCMS() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        // Por enquanto, apenas um redirecionamento simples para o dashboard (cadastrar-video)
        // No futuro, adicionar lógica de validação do backend (Supabase, Firebase, Node, etc)
        navigate('/cms/cadastrar-video')
    }

    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center text-primary mb-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl">admin_panel_settings</span>
                    </div>
                </div>
                <h2 className="mt-2 text-center text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                    Acesso Restrito
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                    Faça login para gerenciar a plataforma
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-slate-900 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-200 dark:border-slate-800">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Email de Administrador
                            </label>
                            <div className="mt-2 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">mail</span>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full pl-10 px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                                    placeholder="admin@tutorialsystem.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Senha de Acesso
                            </label>
                            <div className="mt-2 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">lock</span>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="appearance-none block w-full pl-10 px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">
                                    Lembrar meu acesso
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-semibold text-primary hover:text-primary/80">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-[20px]">login</span>
                                Entrar no Painel (CMS)
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-amber-500 text-xl">info</span>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Esta área é restrita a administradores e professores. O acesso indevido é monitorado.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Link to="/" className="text-sm font-medium text-slate-500 hover:text-primary flex items-center justify-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                        Voltar para a plataforma de alunos
                    </Link>
                </div>
            </div>
        </div>
    )
}
