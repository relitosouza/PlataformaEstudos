import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function LoginCMS() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === 'admin@educacao.com.br' && senha === 'admin123') {
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/cms/dashboard')
        } else {
            alert('Credenciais inválidas. Utilize admin@educacao.com.br / admin123 para testar.')
        }
    }

    return (
        <div className="flex h-screen w-full antialiased overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
            {/* Left Side: Inspiring Background */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
                <div className="absolute inset-0 z-10 bg-primary/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="Estudante universitária sorrindo em ambiente moderno de tecnologia" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPrRZzcqlsEidVu2RcBq5Q2N83rct-ndkme9jzZcsRdCHjiVgplL_98nUkmN29Q5xhESk881qsSaLgqhnr7WSQ5cgPrZnwMdXL0iaRa7BkNn8i8Pg83gKBsmMyt7bIksCliGXvFrdUfRPbxEeTjZf6v1yaZdxxL1ViTIIS3Lfm4LDvrOSIEXi2rJahmFqyldrXqVKTaGOCexiG4yfbxigCXxe8-huqI7sLT6WWiYBQxL8Tmv4j44wkLfLYCl0JRuFzDGYuy_iV8VUu')" }}></div>
                <div className="relative z-20 flex flex-col justify-end p-16 h-full text-white">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-lg">
                            <span className="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight">EduAdmin</span>
                    </div>
                    <h1 className="text-5xl font-extrabold leading-tight mb-6">Impulsionando o futuro da educação</h1>
                    <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                        Nossa plataforma fornece as ferramentas necessárias para transformar a gestão educacional através de dados e inovação.
                    </p>
                    <div className="mt-12 flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">15k+</span>
                            <span className="text-sm text-white/70">Instituições</span>
                        </div>
                        <div className="w-px h-10 bg-white/20 mx-4"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">2M+</span>
                            <span className="text-sm text-white/70">Alunos ativos</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 bg-background-light dark:bg-slate-950">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-2 mb-12">
                        <span className="material-symbols-outlined text-primary text-4xl">school</span>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">EduAdmin</span>
                    </div>

                    <div className="mb-10 text-left">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Acesso Administrativo</h2>
                        <p className="text-slate-500 dark:text-slate-400">Insira suas credenciais para gerenciar sua instituição.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">E-mail</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                                <input
                                    className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    id="email"
                                    name="email"
                                    placeholder="exemplo@educacao.com.br"
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Senha</label>
                                <a className="text-sm font-medium text-primary hover:underline" href="#">Esqueceu a senha?</a>
                            </div>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                                <input
                                    className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    required
                                    type="password"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                                    <span className="material-symbols-outlined">visibility</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer transition-all bg-white dark:bg-slate-800" id="remember" name="remember" type="checkbox" />
                            <label className="ml-3 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">
                                Manter conectado
                            </label>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="submit">
                            <span>Entrar</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Não possui acesso? <a className="text-primary font-semibold hover:underline" href="#">Solicite aqui</a>
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-6">
                        <Link className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm transition-colors" to="/">Início</Link>
                        <Link className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm transition-colors" to="/sobre">Suporte</Link>
                        <Link className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm transition-colors" to="/sobre">Sobre</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
