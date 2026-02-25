# Design: Plataforma de Estudos SMARAPD

**Data:** 2026-02-25
**Status:** Aprovado

---

## Visão Geral

Site de 3 páginas para estudo dos sistemas SMARAPD: **Sistema de Materiais** e **Sistema Contábil**. Público-alvo são servidores de todos os níveis (iniciantes e avançados). Acesso livre, sem autenticação.

---

## Arquitetura

**Stack:** React + Vite + React Router v6 + Tailwind CSS

**Rotas:**
- `/` → Home
- `/trilha` → Trilha de Aprendizado
- `/sobre` → Sobre / Contato

**Dados:** JSON estático em `/src/data/cursos.json` — sem backend.

**Progresso:** Salvo em `localStorage` via hook `useProgresso`.

---

## Estrutura de Conteúdo

```
Trilha de Aprendizado
├── Sistema de Materiais
│   ├── Módulo 1 — Visão Geral
│   ├── Módulo 2 — Cadastro e Consulta
│   └── Módulo 3 — Quiz de Fixação
└── Sistema Contábil
    ├── Módulo 1 — Visão Geral
    ├── Módulo 2 — Lançamentos e Relatórios
    └── Módulo 3 — Quiz de Fixação
```

---

## Design Visual

**Identidade:** Azul institucional (#1E40AF) + branco + cinza claro. Tipografia Inter. Estilo sóbrio e profissional.

### Home (`/`)
- Hero com título, subtítulo e CTA "Começar Agora"
- 2 cards de destaque (Sistema de Materiais / Sistema Contábil)
- Seção de features: Vídeos, Conteúdo, Quizzes

### Trilha (`/trilha`)
- Tabs para alternar entre os dois sistemas
- Barra de progresso por sistema (via localStorage)
- Lista de módulos com status (✅ concluído / 🔄 em andamento / 🔒 bloqueado)
- Expansão inline de módulo: texto + vídeo embed + quiz

### Sobre (`/sobre`)
- Texto institucional (missão, objetivo, sistemas)
- Formulário de contato simples via `mailto:`

---

## Estrutura de Arquivos

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ModuloCard.jsx
│   ├── ProgressBar.jsx
│   ├── VideoPlayer.jsx
│   ├── QuizBlock.jsx
│   └── SystemTabs.jsx
├── pages/
│   ├── Home.jsx
│   ├── Trilha.jsx
│   └── Sobre.jsx
├── data/
│   └── cursos.json
├── hooks/
│   └── useProgresso.js
└── App.jsx
```

---

## Schema de Dados (`cursos.json`)

```json
{
  "sistemas": [
    {
      "id": "materiais",
      "nome": "Sistema de Materiais",
      "icone": "📦",
      "descricao": "...",
      "modulos": [
        {
          "id": "mat-01",
          "titulo": "Visão Geral do Sistema",
          "nivel": "básico",
          "conteudo": "markdown...",
          "videoUrl": "https://youtube.com/embed/...",
          "quiz": [
            {
              "pergunta": "...",
              "opcoes": ["A", "B", "C", "D"],
              "correta": 0
            }
          ]
        }
      ]
    }
  ]
}
```

---

## Hook de Progresso (`useProgresso.js`)

- Armazena array de IDs de módulos concluídos no `localStorage`
- Expõe `marcarConcluido(id)` e `isConcluido(id)`
- Calcula `percentualSistema(sistemaId)` para a barra de progresso

---

## Tasks de Implementação

| ID | Componente |
|----|-----------|
| #7 | Setup Vite + React + Tailwind + React Router |
| #8 | Layout global (Header, Footer, App.jsx com rotas) |
| #9 | Hook useProgresso + cursos.json com conteúdo placeholder |
| #10 | Página Home |
| #11 | Componentes da Trilha (Tabs, ModuloCard, ProgressBar, VideoPlayer, QuizBlock) |
| #12 | Página Trilha |
| #13 | Página Sobre |
