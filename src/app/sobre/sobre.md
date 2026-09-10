# Módulo sobre

## Propósito e limites

Dona da rota `/sobre`, que apresenta Amanda, a Naturella e o processo artesanal.
Não possui estado ou integração de dados.

## Arquivos-chave

- `page.tsx` — conteúdo institucional e composição da imagem de perfil.
- `../img/profile.jpg` — imagem local usada com placeholder blur.

## Superfícies

- `/sobre` — imagem acessível e texto institucional responsivo.

## Verificação

Execute `./init.sh`; depois abra `/sobre` em viewport móvel e desktop e registre
a evidência na feature `ui-004`.

## Restrições

- MUST preservar o texto em português, o `alt` descritivo e o layout responsivo.
- MUST NOT duplicar Header ou Footer; use os componentes compartilhados.
