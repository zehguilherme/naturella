# Módulo components

## Propósito e limites

Dona dos componentes reutilizáveis de navegação, rodapé, categorias e cards de
produto usados pelas páginas do app.

## Arquivos-chave

- `Header.tsx` — navegação desktop e menu mobile animado.
- `Footer.tsx` — navegação inferior, localização, copyright, créditos e links sociais.
- `Category.tsx` — figura de categoria com imagem e legenda.
- `Product.tsx` — card de produto com imagem, nome e descrição.

## Superfícies

- Header desktop/mobile em `/` e `/sobre`.
- Footer em `/` e `/sobre`, incluindo links para portfólio, GitHub, LinkedIn e e-mail.
- Cards de categoria e produto na home.

## Verificação

Execute `./init.sh`; valide navegação, menu mobile, links externos e conteúdo
dos cards, registrando a evidência nas features correspondentes.

## Restrições

- MUST preservar props tipadas, `alt` text e componentes Next/Image e Next/Link.
- MUST NOT colocar dados específicos de uma página dentro de componentes genéricos.
