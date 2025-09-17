# Portfolio Responsivo - Luan Kenzo

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Vite.

## 🚀 Funcionalidades

### Desktop
- Layout sidebar com logo e menu de navegação
- Carrossel de imagens na página inicial
- Galeria de trabalhos com posicionamento criativo
- Páginas de detalhes de projetos
- Página sobre e contato

### Mobile (≤ 767px)
- **Header fixo** com logo à esquerda e botão de menu à direita
- **Menu hambúrguer** que abre um overlay com navegação
- Layout adaptativo que reorganiza todo o conteúdo
- **Navegação touch-friendly**
- Carrossel otimizado para mobile
- Galeria reorganizada em lista vertical

## 🎨 Componentes Mobile

### MobileHeader
- Logo posicionado à esquerda
- Botão hambúrguer à direita
- Header fixo no topo da tela
- Animação do ícone hambúrguer

### MobileMenuOverlay
- Overlay em tela cheia com fundo escuro
- Menu centralizado em card branco
- Fecha ao clicar fora, no X ou tecla ESC
- Previne scroll da página quando aberto
- Animação de fade-in

## 📱 Responsividade

### Breakpoints
- **Mobile**: `max-width: 767px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `min-width: 1025px`

### Adaptações Mobile
- Sidebar desktop oculta
- Header mobile visível
- Conteúdo com padding-top para compensar header fixo
- Textos e espaçamentos otimizados
- Imagens redimensionadas

## 🛠️ Tecnologias

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **React Router** para navegação
- **CSS3** com media queries
- **ESLint** para qualidade de código

## 🎯 Estrutura de Arquivos

```
src/
├── components/
│   ├── Logo.tsx
│   ├── Menu.tsx
│   ├── Sidebar.tsx
│   ├── MobileHeader.tsx
│   └── MobileMenuOverlay.tsx
├── pages/
│   ├── Home.tsx
│   ├── Works.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── [ProjectDetails].tsx
├── styles/
│   ├── responsive.css
│   ├── Menu.css
│   └── Logo.css
└── assets/
    ├── home/
    ├── works/
    └── details/
```

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📋 Funcionalidades Mobile Implementadas

✅ Header fixo com logo e menu  
✅ Botão hambúrguer animado  
✅ Overlay de menu responsivo  
✅ Navegação touch-friendly  
✅ Layout adaptativo  
✅ Prevenção de scroll durante menu aberto  
✅ Fechamento por tecla ESC  
✅ Fechamento por clique fora  
✅ Animações suaves  

## 🎨 Design System Mobile

- **Fonte base**: 4vw para textos médios
- **Espaçamento**: 4% padding padrão
- **Altura header**: 60px fixo
- **Z-index**: Menu (999), Header (1000), Botão (1001)
- **Animações**: 0.3s ease para transições

## 📱 Layout Mobile

### Header
```
[LOGO]                    [☰]
```

### Menu Overlay
```
┌─────────────────────────┐
│ ██████████████████████  │
│ ██                  ██  │
│ ██  ┌─────────────┐ ██  │
│ ██  │     MENU    │ ██  │
│ ██  │   - HOME    │ ██  │
│ ██  │   - WORKS   │ ██  │
│ ██  │   - ABOUT   │ ██  │
│ ██  │   - CONTACT │ ██  │
│ ██  └─────────────┘ ██  │
│ ██                  ██  │
│ ██████████████████████  │
└─────────────────────────┘
```

## 🔧 Configurações CSS Responsivas

O projeto utiliza media queries específicas para garantir a melhor experiência em cada dispositivo:

- **Mobile**: Sidebar oculta, header fixo, menu overlay
- **Tablet**: Layout intermediário com ajustes de espaçamento
- **Desktop**: Layout original com sidebar

---

Desenvolvido com ❤️ por [Luan Kenzo](mailto:designedbykenzo@gmail.com)