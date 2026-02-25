# SMARAPD Study Platform Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Criar plataforma de estudos de 3 páginas (Home, Trilha, Sobre) para os sistemas SMARAPD usando React + Vite + Tailwind CSS + React Router v6.

**Architecture:** SPA com React Router v6. Dados em JSON estático. Progresso persistido em localStorage via hook customizado. Sem backend, sem autenticação.

**Tech Stack:** React 18, Vite 5, React Router v6, Tailwind CSS v3, Vitest, @vitejs/plugin-react

---

### Task 1: Setup do projeto Vite + React + Tailwind + React Router

**Files:**
- Create: `package.json` (via npm)
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/index.css`

**Step 1: Inicializar projeto Vite**

```bash
cd /e/projetos/AmCP
npm create vite@latest . -- --template react
```

Quando perguntado sobre sobrescrever arquivos existentes, confirmar com `y`.

**Step 2: Instalar dependências**

```bash
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Step 3: Configurar Tailwind (`tailwind.config.js`)**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

**Step 4: Configurar `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

**Step 5: Instalar Vitest**

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Step 6: Configurar `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

**Step 7: Criar arquivo de setup de testes `src/test/setup.js`**

```js
import '@testing-library/jest-dom'
```

**Step 8: Verificar que o projeto sobe**

```bash
npm run dev
```

Abrir `http://localhost:5173` — deve mostrar a tela padrão do Vite.

**Step 9: Commit**

```bash
git init
git add .
git commit -m "feat: setup Vite + React + Tailwind + React Router + Vitest"
```

---

### Task 2: Dados (`cursos.json`) e Hook `useProgresso`

**Files:**
- Create: `src/data/cursos.json`
- Create: `src/hooks/useProgresso.js`
- Create: `src/hooks/useProgresso.test.js`

**Step 1: Criar `src/data/cursos.json`**

```json
{
  "sistemas": [
    {
      "id": "materiais",
      "nome": "Sistema de Materiais",
      "icone": "📦",
      "descricao": "Gerencie requisições, almoxarifado e controle de estoque patrimonial da organização.",
      "modulos": [
        {
          "id": "mat-01",
          "titulo": "Visão Geral do Sistema de Materiais",
          "nivel": "básico",
          "conteudo": "## O que é o Sistema de Materiais?\n\nO Sistema de Materiais (SMARAPD-MAT) é responsável pelo controle e gestão de todos os materiais e insumos da organização. Através dele é possível:\n\n- **Registrar entradas e saídas** de materiais do almoxarifado\n- **Consultar saldos** de estoque em tempo real\n- **Emitir requisições** internas de material\n- **Gerar relatórios** de movimentação\n\n### Principais Módulos\n\n1. Cadastro de Materiais\n2. Controle de Estoque\n3. Requisições Internas\n4. Relatórios e Consultas",
          "videoUrl": "",
          "quiz": [
            {
              "pergunta": "Qual a principal função do Sistema de Materiais?",
              "opcoes": [
                "Controlar folha de pagamento",
                "Gerenciar estoque e movimentação de materiais",
                "Emitir notas fiscais",
                "Cadastrar fornecedores apenas"
              ],
              "correta": 1
            },
            {
              "pergunta": "Qual das opções abaixo NÃO é uma funcionalidade do Sistema de Materiais?",
              "opcoes": [
                "Registro de entradas de materiais",
                "Consulta de saldo em estoque",
                "Lançamento de despesas contábeis",
                "Emissão de requisições internas"
              ],
              "correta": 2
            }
          ]
        },
        {
          "id": "mat-02",
          "titulo": "Cadastro e Consulta de Materiais",
          "nivel": "básico",
          "conteudo": "## Cadastrando um Material\n\nPara cadastrar um novo material no sistema:\n\n1. Acesse o menu **Cadastros > Materiais**\n2. Clique em **Novo**\n3. Preencha os campos obrigatórios:\n   - **Código:** gerado automaticamente\n   - **Descrição:** nome completo do material\n   - **Unidade de medida:** UN, KG, L, M, etc.\n   - **Grupo:** categoria do material\n4. Clique em **Salvar**\n\n## Consultando Materiais\n\nUse o filtro de busca por código, descrição ou grupo. O resultado exibe saldo atual, localização no almoxarifado e histórico de movimentações.",
          "videoUrl": "",
          "quiz": [
            {
              "pergunta": "Qual o caminho correto para cadastrar um novo material?",
              "opcoes": [
                "Relatórios > Materiais > Novo",
                "Cadastros > Materiais > Novo",
                "Estoque > Entrada > Cadastrar",
                "Financeiro > Materiais > Incluir"
              ],
              "correta": 1
            }
          ]
        },
        {
          "id": "mat-03",
          "titulo": "Quiz Final — Sistema de Materiais",
          "nivel": "avançado",
          "conteudo": "## Teste seus conhecimentos!\n\nResponda as questões abaixo para verificar seu aprendizado sobre o Sistema de Materiais. Você precisa acertar todas as questões para concluir este módulo.",
          "videoUrl": "",
          "quiz": [
            {
              "pergunta": "Uma requisição interna de material deve ser emitida por qual setor?",
              "opcoes": [
                "Pelo almoxarifado central",
                "Pelo setor solicitante",
                "Pela contabilidade",
                "Pela direção"
              ],
              "correta": 1
            },
            {
              "pergunta": "O saldo de estoque é atualizado:",
              "opcoes": [
                "Manualmente pelo almoxarife toda semana",
                "Automaticamente a cada entrada ou saída registrada",
                "Apenas no fechamento mensal",
                "Somente após inventário anual"
              ],
              "correta": 1
            },
            {
              "pergunta": "Qual relatório mostra todas as movimentações de um material em um período?",
              "opcoes": [
                "Relatório de Cadastro",
                "Relatório de Saldo",
                "Relatório de Movimentação",
                "Relatório de Requisições Abertas"
              ],
              "correta": 2
            }
          ]
        }
      ]
    },
    {
      "id": "contabil",
      "nome": "Sistema Contábil",
      "icone": "💰",
      "descricao": "Realize lançamentos contábeis, controle de despesas e geração de relatórios financeiros.",
      "modulos": [
        {
          "id": "cont-01",
          "titulo": "Visão Geral do Sistema Contábil",
          "nivel": "básico",
          "conteudo": "## O que é o Sistema Contábil?\n\nO Sistema Contábil (SMARAPD-CONT) é a ferramenta de gestão financeira e contábil da organização. Ele permite:\n\n- **Registrar lançamentos contábeis** de receitas e despesas\n- **Controlar o orçamento** por centro de custo\n- **Gerar balancetes** e demonstrativos financeiros\n- **Conciliar contas** bancárias e financeiras\n\n### Plano de Contas\n\nO sistema utiliza um plano de contas estruturado em:\n\n1. **Ativo** — bens e direitos\n2. **Passivo** — obrigações\n3. **Receitas** — entradas financeiras\n4. **Despesas** — saídas financeiras",
          "videoUrl": "",
          "quiz": [
            {
              "pergunta": "O que representa o ATIVO no plano de contas?",
              "opcoes": [
                "As obrigações da organização",
                "Os bens e direitos da organização",
                "As despesas do período",
                "O resultado do exercício"
              ],
              "correta": 1
            },
            {
              "pergunta": "Qual a função principal do Sistema Contábil?",
              "opcoes": [
                "Controlar estoque de materiais",
                "Gerenciar recursos humanos",
                "Registrar e controlar movimentações financeiras e contábeis",
                "Emitir ordens de compra"
              ],
              "correta": 2
            }
          ]
        },
        {
          "id": "cont-02",
          "titulo": "Lançamentos e Relatórios Contábeis",
          "nivel": "intermediário",
          "conteudo": "## Realizando um Lançamento Contábil\n\nTodo lançamento contábil segue o princípio da **partida dupla**: débito e crédito sempre em equilíbrio.\n\n### Passo a passo:\n\n1. Acesse **Contabilidade > Lançamentos > Novo**\n2. Informe a **data** do lançamento\n3. Selecione a **conta de débito** (o que aumenta)\n4. Selecione a **conta de crédito** (o que diminui)\n5. Informe o **valor** e o **histórico**\n6. Clique em **Confirmar**\n\n## Relatórios Disponíveis\n\n| Relatório | Descrição |\n|-----------|----------|\n| Balancete | Saldos de todas as contas |\n| DRE | Demonstração de Resultado |\n| Razão | Movimentação conta a conta |\n| Diário | Todos os lançamentos do período |",
          "videoUrl": "",
          "quiz": [
            {
              "pergunta": "O princípio da partida dupla significa que:",
              "opcoes": [
                "Todo lançamento deve ser feito duas vezes",
                "Débito e crédito devem sempre estar em equilíbrio",
                "São necessários dois usuários para confirmar um lançamento",
                "O lançamento é revisado em dois momentos"
              ],
              "correta": 1
            }
          ]
        },
        {
          "id": "cont-03",
          "titulo": "Quiz Final — Sistema Contábil",
          "nivel": "avançado",
          "conteudo": "## Teste seus conhecimentos!\n\nResponda as questões abaixo para verificar seu aprendizado sobre o Sistema Contábil.",
          "videoUrl": "",
          "quiz": [
            {
              "pergunta": "Qual relatório apresenta o saldo de TODAS as contas em um período?",
              "opcoes": [
                "Razão",
                "Diário",
                "Balancete",
                "DRE"
              ],
              "correta": 2
            },
            {
              "pergunta": "No plano de contas, onde são registradas as dívidas da organização?",
              "opcoes": [
                "Ativo",
                "Passivo",
                "Receitas",
                "Patrimônio Líquido"
              ],
              "correta": 1
            },
            {
              "pergunta": "O Razão é usado para:",
              "opcoes": [
                "Ver o resultado do exercício",
                "Listar todas as contas com saldo zero",
                "Acompanhar a movimentação de uma conta específica",
                "Conciliar o caixa diário"
              ],
              "correta": 2
            }
          ]
        }
      ]
    }
  ]
}
```

**Step 2: Escrever o teste do hook `src/hooks/useProgresso.test.js`**

```js
import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import useProgresso from './useProgresso'

beforeEach(() => {
  localStorage.clear()
})

describe('useProgresso', () => {
  it('começa sem módulos concluídos', () => {
    const { result } = renderHook(() => useProgresso())
    expect(result.current.isConcluido('mat-01')).toBe(false)
  })

  it('marca módulo como concluído', () => {
    const { result } = renderHook(() => useProgresso())
    act(() => result.current.marcarConcluido('mat-01'))
    expect(result.current.isConcluido('mat-01')).toBe(true)
  })

  it('calcula percentual por sistema', () => {
    const { result } = renderHook(() => useProgresso())
    act(() => result.current.marcarConcluido('mat-01'))
    // 1 de 3 módulos = 33%
    expect(result.current.percentualSistema('materiais', 3)).toBe(33)
  })

  it('persiste no localStorage', () => {
    const { result, rerender } = renderHook(() => useProgresso())
    act(() => result.current.marcarConcluido('mat-01'))
    rerender()
    expect(result.current.isConcluido('mat-01')).toBe(true)
  })
})
```

**Step 3: Rodar o teste para verificar que falha**

```bash
npx vitest run src/hooks/useProgresso.test.js
```

Esperado: FAIL — "Cannot find module './useProgresso'"

**Step 4: Implementar `src/hooks/useProgresso.js`**

```js
import { useState } from 'react'

const STORAGE_KEY = 'smarapd_progresso'

function carregarProgresso() {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    return []
  }
}

export default function useProgresso() {
  const [concluidos, setConcluidos] = useState(carregarProgresso)

  function marcarConcluido(moduloId) {
    setConcluidos(prev => {
      if (prev.includes(moduloId)) return prev
      const novo = [...prev, moduloId]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(novo))
      return novo
    })
  }

  function isConcluido(moduloId) {
    return concluidos.includes(moduloId)
  }

  function percentualSistema(sistemaId, totalModulos) {
    const prefixo = sistemaId === 'materiais' ? 'mat-' : 'cont-'
    const concluídosSistema = concluidos.filter(id => id.startsWith(prefixo))
    return Math.floor((concluídosSistema.length / totalModulos) * 100)
  }

  return { marcarConcluido, isConcluido, percentualSistema, concluidos }
}
```

**Step 5: Rodar o teste para verificar que passa**

```bash
npx vitest run src/hooks/useProgresso.test.js
```

Esperado: PASS — 4 testes passando

**Step 6: Commit**

```bash
git add src/data/cursos.json src/hooks/useProgresso.js src/hooks/useProgresso.test.js
git commit -m "feat: add cursos.json data and useProgresso hook with tests"
```

---

### Task 3: Layout Global — Header, Footer, App.jsx com rotas

**Files:**
- Create: `src/components/Header.jsx`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

**Step 1: Criar `src/components/Header.jsx`**

```jsx
import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand-800 text-white'
        : 'text-brand-100 hover:bg-brand-700 hover:text-white'
    }`

  return (
    <header className="bg-brand-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <p className="text-white font-bold text-base leading-tight">SMARAPD</p>
            <p className="text-brand-100 text-xs">Plataforma de Estudos</p>
          </div>
        </div>
        <nav className="flex gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/trilha" className={linkClass}>Trilha</NavLink>
          <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
        </nav>
      </div>
    </header>
  )
}
```

**Step 2: Criar `src/components/Footer.jsx`**

```jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} SMARAPD — Plataforma de Estudos
      </p>
      <p className="text-xs mt-1">Sistema de Materiais · Sistema Contábil</p>
    </footer>
  )
}
```

**Step 3: Atualizar `src/App.jsx`**

```jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Trilha from './pages/Trilha'
import Sobre from './pages/Sobre'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilha" element={<Trilha />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
```

**Step 4: Atualizar `src/main.jsx`**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

**Step 5: Criar placeholders para as páginas `src/pages/Home.jsx`, `src/pages/Trilha.jsx`, `src/pages/Sobre.jsx`**

```jsx
// src/pages/Home.jsx
export default function Home() { return <div className="p-8">Home</div> }

// src/pages/Trilha.jsx
export default function Trilha() { return <div className="p-8">Trilha</div> }

// src/pages/Sobre.jsx
export default function Sobre() { return <div className="p-8">Sobre</div> }
```

**Step 6: Verificar no browser**

```bash
npm run dev
```

Navegar em `http://localhost:5173` — deve mostrar header azul com navegação funcional.

**Step 7: Commit**

```bash
git add src/components/ src/App.jsx src/main.jsx src/pages/
git commit -m "feat: add Header, Footer and React Router setup"
```

---

### Task 4: Componentes da Trilha

**Files:**
- Create: `src/components/SystemTabs.jsx`
- Create: `src/components/ProgressBar.jsx`
- Create: `src/components/ModuloCard.jsx`
- Create: `src/components/VideoPlayer.jsx`
- Create: `src/components/QuizBlock.jsx`

**Step 1: Criar `src/components/SystemTabs.jsx`**

```jsx
export default function SystemTabs({ sistemas, ativo, onSelect }) {
  return (
    <div className="flex gap-2 border-b border-gray-200 mb-6">
      {sistemas.map(s => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`flex items-center gap-2 px-5 py-3 font-medium text-sm border-b-2 transition-colors ${
            ativo === s.id
              ? 'border-brand-800 text-brand-800'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <span>{s.icone}</span>
          {s.nome}
        </button>
      ))}
    </div>
  )
}
```

**Step 2: Criar `src/components/ProgressBar.jsx`**

```jsx
export default function ProgressBar({ percentual }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Progresso</span>
        <span className="font-semibold text-brand-800">{percentual}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-brand-800 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentual}%` }}
        />
      </div>
    </div>
  )
}
```

**Step 3: Criar `src/components/ModuloCard.jsx`**

```jsx
export default function ModuloCard({ modulo, concluido, aberto, onToggle }) {
  const statusIcon = concluido ? '✅' : aberto ? '🔄' : '📖'
  const statusText = concluido ? 'Concluído' : aberto ? 'Em andamento' : 'Não iniciado'

  return (
    <div className={`border rounded-xl mb-3 overflow-hidden transition-shadow hover:shadow-md ${
      aberto ? 'border-brand-800 shadow-md' : 'border-gray-200'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{statusIcon}</span>
          <div>
            <p className="font-semibold text-gray-800">{modulo.titulo}</p>
            <p className="text-xs text-gray-500 capitalize">{modulo.nivel} · {statusText}</p>
          </div>
        </div>
        <span className={`text-gray-400 transition-transform ${aberto ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
    </div>
  )
}
```

**Step 4: Criar `src/components/VideoPlayer.jsx`**

```jsx
export default function VideoPlayer({ url }) {
  if (!url) return null

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2">🎥 Vídeo</h3>
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
        <iframe
          src={url}
          title="Vídeo da aula"
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  )
}
```

**Step 5: Criar `src/components/QuizBlock.jsx`**

```jsx
import { useState } from 'react'

export default function QuizBlock({ quiz, onConcluir }) {
  const [respostas, setRespostas] = useState({})
  const [enviado, setEnviado] = useState(false)

  const acertos = quiz.filter((q, i) => respostas[i] === q.correta).length
  const todasRespondidas = Object.keys(respostas).length === quiz.length
  const aprovado = acertos === quiz.length

  function handleEnviar() {
    setEnviado(true)
    if (aprovado) onConcluir()
  }

  function handleReiniciar() {
    setRespostas({})
    setEnviado(false)
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-700 mb-4">✅ Quiz de Fixação</h3>
      <div className="space-y-5">
        {quiz.map((q, qi) => (
          <div key={qi} className="bg-gray-50 rounded-lg p-4">
            <p className="font-medium text-gray-800 mb-3">{qi + 1}. {q.pergunta}</p>
            <div className="space-y-2">
              {q.opcoes.map((op, oi) => {
                const selecionada = respostas[qi] === oi
                const correta = q.correta === oi
                let estilo = 'border-gray-200 bg-white hover:border-brand-500'
                if (enviado) {
                  if (correta) estilo = 'border-green-500 bg-green-50'
                  else if (selecionada) estilo = 'border-red-400 bg-red-50'
                  else estilo = 'border-gray-200 bg-white'
                } else if (selecionada) {
                  estilo = 'border-brand-800 bg-brand-50'
                }
                return (
                  <button
                    key={oi}
                    disabled={enviado}
                    onClick={() => setRespostas(prev => ({ ...prev, [qi]: oi }))}
                    className={`w-full text-left px-4 py-2 border-2 rounded-lg text-sm transition-colors ${estilo}`}
                  >
                    {op}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {!enviado ? (
        <button
          disabled={!todasRespondidas}
          onClick={handleEnviar}
          className="mt-4 w-full py-2 px-4 bg-brand-800 text-white rounded-lg font-medium
                     disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-700 transition-colors"
        >
          Enviar Respostas
        </button>
      ) : (
        <div className={`mt-4 p-4 rounded-lg text-center ${aprovado ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
          <p className="font-bold text-lg">{aprovado ? '🎉 Parabéns!' : '😅 Quase lá!'}</p>
          <p className="text-sm mt-1">
            {acertos} de {quiz.length} acertos
            {aprovado ? ' — Módulo concluído!' : ' — Tente novamente'}
          </p>
          {!aprovado && (
            <button
              onClick={handleReiniciar}
              className="mt-3 px-4 py-1 bg-brand-800 text-white rounded text-sm hover:bg-brand-700"
            >
              Tentar novamente
            </button>
          )}
        </div>
      )}
    </div>
  )
}
```

**Step 6: Commit**

```bash
git add src/components/
git commit -m "feat: add Trilha components (SystemTabs, ProgressBar, ModuloCard, VideoPlayer, QuizBlock)"
```

---

### Task 5: Página Trilha (`/trilha`)

**Files:**
- Modify: `src/pages/Trilha.jsx`

**Step 1: Implementar `src/pages/Trilha.jsx`**

```jsx
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import cursos from '../data/cursos.json'
import useProgresso from '../hooks/useProgresso'
import SystemTabs from '../components/SystemTabs'
import ProgressBar from '../components/ProgressBar'
import ModuloCard from '../components/ModuloCard'
import VideoPlayer from '../components/VideoPlayer'
import QuizBlock from '../components/QuizBlock'

export default function Trilha() {
  const [sistemaAtivo, setSistemaAtivo] = useState(cursos.sistemas[0].id)
  const [moduloAberto, setModuloAberto] = useState(null)
  const { isConcluido, marcarConcluido, percentualSistema } = useProgresso()

  const sistema = cursos.sistemas.find(s => s.id === sistemaAtivo)
  const percentual = percentualSistema(sistemaAtivo, sistema.modulos.length)

  function toggleModulo(id) {
    setModuloAberto(prev => prev === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Trilha de Aprendizado</h1>
      <p className="text-gray-500 mb-8">Estude no seu ritmo. Seu progresso é salvo automaticamente.</p>

      <SystemTabs
        sistemas={cursos.sistemas}
        ativo={sistemaAtivo}
        onSelect={id => { setSistemaAtivo(id); setModuloAberto(null) }}
      />

      <ProgressBar percentual={percentual} />

      <div>
        {sistema.modulos.map(modulo => (
          <div key={modulo.id}>
            <ModuloCard
              modulo={modulo}
              concluido={isConcluido(modulo.id)}
              aberto={moduloAberto === modulo.id}
              onToggle={() => toggleModulo(modulo.id)}
            />

            {moduloAberto === modulo.id && (
              <div className="border border-brand-100 rounded-xl p-6 mb-3 bg-white -mt-3">
                <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                  <ReactMarkdown>{modulo.conteudo}</ReactMarkdown>
                </div>

                <VideoPlayer url={modulo.videoUrl} />

                {modulo.quiz.length > 0 && (
                  <QuizBlock
                    quiz={modulo.quiz}
                    onConcluir={() => marcarConcluido(modulo.id)}
                  />
                )}

                {isConcluido(modulo.id) && modulo.quiz.length === 0 && (
                  <button
                    onClick={() => marcarConcluido(modulo.id)}
                    className="mt-4 px-4 py-2 bg-brand-800 text-white rounded-lg text-sm hover:bg-brand-700"
                  >
                    Marcar como concluído
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Step 2: Instalar react-markdown**

```bash
npm install react-markdown
```

**Step 3: Verificar no browser**

```bash
npm run dev
```

Navegar em `http://localhost:5173/trilha`. Deve mostrar as tabs, barra de progresso e módulos expansíveis com quiz.

**Step 4: Commit**

```bash
git add src/pages/Trilha.jsx
git commit -m "feat: implement Trilha page with modules, video and quiz"
```

---

### Task 6: Página Home (`/`)

**Files:**
- Modify: `src/pages/Home.jsx`

**Step 1: Implementar `src/pages/Home.jsx`**

```jsx
import { Link } from 'react-router-dom'
import cursos from '../data/cursos.json'

export default function Home() {
  const features = [
    { icone: '🎥', titulo: 'Vídeo-aulas', desc: 'Conteúdo em vídeo para cada módulo' },
    { icone: '📝', titulo: 'Conteúdo Detalhado', desc: 'Textos explicativos e passo a passo' },
    { icone: '✅', titulo: 'Quizzes', desc: 'Teste seus conhecimentos e fixe o aprendizado' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl block mb-6">🎓</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Plataforma de Estudos<br />
            <span className="text-brand-100">SMARAPD</span>
          </h1>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Aprenda os sistemas no seu ritmo. Conteúdo completo sobre o Sistema de Materiais e o Sistema Contábil.
          </p>
          <Link
            to="/trilha"
            className="inline-block bg-white text-brand-800 font-bold px-8 py-3 rounded-full
                       hover:bg-brand-50 transition-colors shadow-lg text-lg"
          >
            Começar Agora →
          </Link>
        </div>
      </section>

      {/* Cards dos Sistemas */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Escolha por onde começar
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cursos.sistemas.map(s => (
            <Link
              key={s.id}
              to={`/trilha?sistema=${s.id}`}
              className="border-2 border-gray-100 rounded-2xl p-8 hover:border-brand-800 hover:shadow-lg
                         transition-all group bg-white"
            >
              <span className="text-5xl block mb-4">{s.icone}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-800">
                {s.nome}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{s.descricao}</p>
              <p className="text-brand-800 font-semibold text-sm">
                {s.modulos.length} módulos · Acessar →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            O que você vai encontrar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.titulo} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <span className="text-4xl block mb-3">{f.icone}</span>
                <h3 className="font-bold text-gray-800 mb-1">{f.titulo}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

**Step 2: Atualizar `src/pages/Trilha.jsx` para suportar query param `?sistema=`**

No início do componente `Trilha`, adicionar leitura do query param:

```jsx
import { useSearchParams } from 'react-router-dom'

// dentro do componente, substituir o useState:
const [searchParams] = useSearchParams()
const sistemaInicial = searchParams.get('sistema') || cursos.sistemas[0].id
const [sistemaAtivo, setSistemaAtivo] = useState(sistemaInicial)
```

**Step 3: Verificar no browser**

```bash
npm run dev
```

Navegar em `http://localhost:5173` — deve mostrar hero, cards e features. Clicar em "Acessar" deve navegar para a trilha do sistema correto.

**Step 4: Commit**

```bash
git add src/pages/Home.jsx src/pages/Trilha.jsx
git commit -m "feat: implement Home page and system deep-link from Home to Trilha"
```

---

### Task 7: Página Sobre (`/sobre`)

**Files:**
- Modify: `src/pages/Sobre.jsx`

**Step 1: Implementar `src/pages/Sobre.jsx`**

```jsx
export default function Sobre() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const nome = form.nome.value
    const email = form.email.value
    const mensagem = form.mensagem.value
    const mailto = `mailto:smarapd@exemplo.gov.br?subject=Contato de ${encodeURIComponent(nome)}&body=${encodeURIComponent(mensagem)}%0A%0AEmail de retorno: ${encodeURIComponent(email)}`
    window.location.href = mailto
  }

  const sistemas = [
    {
      icone: '📦',
      nome: 'Sistema de Materiais',
      desc: 'Responsável pelo controle e gestão de materiais, almoxarifado, requisições internas e controle de estoque.'
    },
    {
      icone: '💰',
      nome: 'Sistema Contábil',
      desc: 'Responsável pelos lançamentos contábeis, controle orçamentário, geração de balancetes e relatórios financeiros.'
    }
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Sobre */}
      <section className="mb-14">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre a Plataforma</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          A Plataforma de Estudos SMARAPD foi criada para capacitar servidores e colaboradores
          no uso dos sistemas institucionais. Aqui você encontra conteúdo estruturado, vídeos
          explicativos e quizzes de fixação para aprender no seu próprio ritmo.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {sistemas.map(s => (
            <div key={s.nome} className="border border-gray-200 rounded-xl p-5 bg-white">
              <span className="text-3xl block mb-2">{s.icone}</span>
              <h3 className="font-bold text-gray-800 mb-1">{s.nome}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Missão */}
      <section className="mb-14 bg-brand-50 border border-brand-100 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-brand-800 mb-3">Nossa Missão</h2>
        <p className="text-gray-700 leading-relaxed">
          Facilitar o acesso ao conhecimento sobre os sistemas SMARAPD, garantindo que todos
          os usuários — independente do nível de experiência — possam utilizar as ferramentas
          com eficiência e segurança.
        </p>
      </section>

      {/* Contato */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dúvidas ou Sugestões?</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Preencha o formulário abaixo e entraremos em contato.
        </p>
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input
              name="nome"
              required
              type="text"
              placeholder="Seu nome completo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              required
              type="email"
              placeholder="seu.email@exemplo.gov.br"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea
              name="mensagem"
              required
              rows={5}
              placeholder="Descreva sua dúvida ou sugestão..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-800 text-white font-semibold py-2 px-4 rounded-lg
                       hover:bg-brand-700 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  )
}
```

**Step 2: Verificar no browser**

```bash
npm run dev
```

Navegar em `http://localhost:5173/sobre` — deve mostrar texto institucional, cards dos sistemas e formulário.

**Step 3: Commit**

```bash
git add src/pages/Sobre.jsx
git commit -m "feat: implement Sobre page with institutional content and contact form"
```

---

### Task 8: Build final e verificação

**Files:**
- None

**Step 1: Rodar todos os testes**

```bash
npx vitest run
```

Esperado: todos os testes passando.

**Step 2: Build de produção**

```bash
npm run build
```

Esperado: `dist/` gerado sem erros.

**Step 3: Preview do build**

```bash
npm run preview
```

Navegar em `http://localhost:4173` e testar todas as 3 páginas, navegação, quiz e progresso.

**Step 4: Commit final**

```bash
git add .
git commit -m "chore: verify build and all tests passing"
```
