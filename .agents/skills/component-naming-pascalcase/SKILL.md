---
name: component-naming-pascalcase
description: >-
  Use when creating or renaming React components in src/app/components/.
  Ensures PascalCase naming convention. Trigger: componente, criar componente,
  renomear arquivo componente.
---

# Component naming: PascalCase

## Regras

- Arquivos de componentes em `src/app/components/` devem usar PascalCase:
  `Button.tsx`, `ProductCard.tsx`.
- Nomes em minúsculas, kebab-case ou snake_case são inválidos.
- Arquivos de rota do Next.js em `src/app/` são exceção (`page.tsx`, `layout.tsx`,
  `not-found.tsx` e arquivos equivalentes do App Router).
- Antes de concluir criação ou renomeação, execute `npm run test:component-names`.

## Fluxo

1. Leia o guia de `src/app/components/` antes de editar um componente.
2. Escolha um nome PascalCase que descreva a responsabilidade do componente.
3. Atualize importações afetadas ao renomear um arquivo.
4. Execute `npm run test:component-names` e registre qualquer falha antes de concluir.
