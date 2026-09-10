# Módulo app

## Propósito e limites

Dona das rotas principais, do layout raiz, da página 404, dos estilos globais e
dos assets estáticos usados pela landing page. Conteúdo compartilhado de UI
fica em `components/`; SVGs reutilizáveis ficam em `icons/`.

## Arquivos-chave

- `layout.tsx` — HTML raiz, fonte Poppins, metadata e Vercel Analytics.
- `page.tsx` — home, hero, categorias e catálogo de produtos.
- `not-found.tsx` — fallback 404 e retorno para a home.
- `globals.css` — camadas Tailwind e comportamento global de scroll.
- `img/` — imagens locais importadas por páginas e componentes.

## Superfícies

- `/` — hero com CTA externo, categorias e produtos.
- `/sobre` — página institucional documentada em `sobre/sobre.md`.
- Qualquer rota inexistente — página 404.

## Verificação

Execute `./init.sh` após mudanças. Para mudanças visuais, confirme as rotas em
`http://localhost:3000` e registre a evidência na feature correspondente.

## Restrições

- MUST manter metadata, idioma `pt-BR`, tema de cores e importações de imagens.
- MUST NOT mover componentes compartilhados para este módulo.
