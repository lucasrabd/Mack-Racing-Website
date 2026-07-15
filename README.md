# 🏎️ Mack Racing — Site Oficial (v2 "Livery")

Site da equipe de Fórmula SAE da Universidade Presbiteriana Mackenzie, totalmente renovado:
identidade visual de livery de corrida, feed de notícias com posts do LinkedIn/Instagram,
diário de desenvolvimento do MP4/1 e páginas reestruturadas.

## 🚀 Rodando o projeto

```bash
npm install
npm start        # desenvolvimento em http://localhost:3000
npm run build    # build de produção na pasta /build
```

## 📰 Como adicionar um post do LinkedIn no site

1. Abra o post da Mack Racing no LinkedIn **pelo navegador** (não pelo app).
2. Clique nos três pontinhos (⋯) do post → **"Incorporar esta publicação"**.
3. No código que aparece, copie apenas o número depois de `urn:li:activity:`.
4. Abra `src/data/newsData.js` e adicione no topo da lista:

```js
{
  id: 'li-002',                    // qualquer id único
  type: 'linkedin',
  urn: '7123456789012345678',      // o número copiado
  date: '2026-07-03',              // data do post (AAAA-MM-DD)
  featured: true,                  // true = aparece também na home
},
```

Pronto — o post oficial aparece renderizado na página **Notícias** (e na home, se `featured`).

> ⚠️ O embed só funciona para posts **públicos** da página da equipe.

## 📸 Como adicionar um post do Instagram

```js
{
  id: 'ig-002',
  type: 'instagram',
  url: 'https://www.instagram.com/p/CODIGO_DO_POST/',
  date: '2026-07-03',
},
```

## 🛠️ Como adicionar um post "Paddock" (conteúdo interno)

Para eventos com fotos/vídeos hospedados no próprio site (sem depender de rede social):

1. Coloque as mídias em `src/assets/` com nomes simples (ex.: `evento-01.jpg`).
2. Importe no topo de `src/data/newsData.js` e adicione:

```js
{
  id: 'pd-evento',
  type: 'paddock',
  date: '2026-07-03',
  featured: true,
  title: 'Título do evento',
  text: 'Descrição do que rolou...',
  media: [
    { type: 'image', src: evento01, alt: 'Descrição da foto' },
    { type: 'video', src: eventoVideo, alt: 'Descrição do vídeo' },
  ],
},
```

O card mostra até 3 mídias com contador **+N** e abre tudo em lightbox.

## 👥 Como adicionar um membro na equipe

1. Foto em `src/assets/fotos/membros/Nome_Sobrenome.png`.
2. Importe e adicione o objeto em `src/data/teamData.js` na lista `MEMBERS`.

## 🏁 Como atualizar a ficha técnica do carro

Edite `src/data/carData.js` — specs, render e itens da galeria do diário.

## 🗂️ Estrutura

```
src/
├── App.jsx            # rotas (+ apelidos /projetos e /competicao)
├── App.css            # design system completo ("Livery")
├── components/        # NavBar, Hero, Ticker, NewsFeed, Gallery, Contact...
├── pages/             # Home, Sobre, Equipe, Carro, Notícias, Contato
├── data/              # newsData, teamData, carData  ← edite aqui no dia a dia
└── utils/             # navegação SPA e ícones
```

## ♿ Acessibilidade

- Widget **VLibras** mantido
- Navegação por teclado com foco visível
- `prefers-reduced-motion` respeitado (animações desligam)
- Textos alternativos em todas as mídias
