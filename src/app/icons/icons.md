# Módulo icons

## Propósito e limites

Dona dos ícones SVG locais que não são fornecidos por uma dependência externa.

## Arquivos-chave

- `Logo.tsx` — marca usada no Header.
- `NotFoundIcon.tsx` — ilustração da página 404.

## Superfícies

- Logo clicável no Header.
- Ilustração da rota de erro 404.

## Verificação

Execute `./init.sh` e confirme que os SVGs renderizam nas rotas que os utilizam.

## Restrições

- MUST manter os ícones como componentes SVG tipados e acessíveis no contexto.
- MUST NOT adicionar uma biblioteca de ícones para substituir os SVGs existentes.
