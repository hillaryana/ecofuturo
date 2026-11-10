# EcoFuturo Verde - Single Page Application (SPA)

## 📌 Tema do Projeto
Aplicação web responsiva e interativa desenvolvida para a **EcoFuturo Verde**, uma organização comunitária sem fins lucrativos focada em reflorestamento urbano, preservação de nascentes e educação ambiental.

## 🚀 Tecnologias Utilizadas
- **HTML5 Semântico**: Estruturação completa com tags semânticas (`header`, `nav`, `main`, `section`, `footer`).
- **CSS3**: Estilização personalizada, animações em hover, ajuste de layout e suporte a variáveis CSS.
- **Bootstrap 5.3.3**: Componentes nativos (Navbar, Cards, Modals, Accordion, Toast) e Grid System responsivo.
- **JavaScript (ES6+)**: Lógica interativa no lado do cliente (DOM, manipuladores de evento, IntersectionObserver).
- **Bootstrap Icons**: Ícones vetoriais integrados.

## ⚡ Recursos em JavaScript Implementados
1. **Modo Escuro / Claro (Dark Mode)**:
   - Alternância dinâmica entre temas escuro e claro.
   - Salva a preferência do usuário no `localStorage`.
2. **Filtro Dinâmico de Projetos**:
   - Botões interativos que filtram os cards da galeria por categoria (Urbano, Educação, Florestal) sem recarregar a página.
3. **Contadores Numéricos Animados**:
   - Animação contínua ativada via `IntersectionObserver` assim que a seção de "Impacto" entra na tela do usuário.
4. **Validação Dinâmica do Formulário de Contato**:
   - Validação em tempo real no lado do cliente usando expressões regulares (E-mail) e contagem de caracteres (Nome e Mensagem).
   - Feedback visual através das classes do Bootstrap (`is-invalid` e `is-valid`).
   - Simulação de envio com estado de carregamento (Spinner) e exibição de notificação Toast.

## 📂 Estrutura de Pastas
```
ecofuturo-verde/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## 🌐 Como Executar o Projeto no VS Code
1. Baixe e extraia o arquivo `ecofuturo-verde.zip`.
2. Abra a pasta `ecofuturo-verde` no VS Code.
3. Clique com o botão direito sobre `index.html` e selecione **Open with Live Server** (ou abra o arquivo diretamente em seu navegador).
