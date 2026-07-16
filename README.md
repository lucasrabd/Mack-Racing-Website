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

## Área administrativa (`/admin`) — somente desenvolvimento

Permite editar os membros da equipe (nome, cargo, setor) e ajustar o
**enquadramento das fotos** (ponto focal + zoom), com preview igual ao site.

```bash
npm start          # http://localhost:3000/admin
```

### Trocar fotos

No editor de cada membro há uma área de **Trocar a foto**: arraste a imagem
(ou clique para escolher). Ela é redimensionada para **400x400 PNG** no próprio
navegador e aparece na hora no preview.

- **Substituir** (padrão): mantém o mesmo nome de arquivo, então a foto antiga
  é sobrescrita ao extrair o ZIP.
- **Criar arquivo novo**: gera um `.png` novo a partir do nome da pessoa
  (`Aynoã D'Souza` -> `Aynoa_DSouza.png`) e mantém a antiga no repo.

Fluxo de publicação:

1. Edite em `/admin` (o rascunho salva sozinho no navegador)
2. Clique em **Exportar ZIP**
3. Extraia o ZIP **na raiz do repositório**, substituindo os arquivos
4. `npm start` para conferir, `npm run build`, commit e deploy

O ZIP traz `teamData.js`, o `photoRegistry.js` já regenerado com os imports
das fotos novas, as próprias fotos e um `LEIA-ME.txt`. O botão
**Só teamData.js** continua existindo para quando não há foto nova.

> Nada é enviado para servidor nenhum: o redimensionamento usa `<canvas>` e o
> ZIP é montado no navegador.

### Por que o admin não vaza para produção

`npm run build` roda `scripts/build-safe.js`, que troca `src/admin/loader.js`
por `loader.prod.js` (exporta `null`) antes de compilar, desliga os sourcemaps
e, no fim, **varre o bundle** procurando vestígios do admin — se achar algo,
aborta o build. Resultado: no site publicado `/admin` cai no 404 e o código
não está lá para ser lido.

> `npm run build:raw` é o build sem essa proteção — use só para depurar.

## Fotos dos membros

1. Coloque o arquivo em `src/assets/fotos/membros/Nome_Sobrenome.png`
2. Importe e adicione a chave em `src/data/photoRegistry.js`
3. A foto aparece no seletor do `/admin`
