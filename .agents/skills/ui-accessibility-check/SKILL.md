---
name: ui-accessibility-check
description: >-
  Revise a acessibilidade e a UX após alterações de frontend, incluindo
  componentes, páginas, funcionalidades, correções, layout e outras mudanças
  visuais de UI.
---

# UI accessibility check

Use esta checklist depois de qualquer alteração de frontend, antes de concluir
o trabalho. Inspecione a implementação e, quando possível, valide o fluxo na
interface. Registre problemas encontrados e corrija-os ou deixe-os explícitos
como bloqueios.

## Checklist

- Navegação por teclado com Tab, Enter e Escape: fluxo lógico, foco visível e sem travamentos.
- Contraste de cores conforme os tokens HSL do `design-system/`; não introduza cores hardcoded.
- Foco visível usando `--ring` em todos os elementos interativos.
- `aria-label` descritivo em botões de ícone, como `Fechar` e `Remover exercício`.
- Estados `hover`, `focus`, `active`, `disabled` e `error` mapeados quando aplicáveis.
- Responsividade com containers limitados por `max-width` e grids colapsando para uma coluna abaixo de 640px.
- Carrosséis, quando existirem, usando `scroll-snap` sem quebra visual durante a rolagem.
- Mutações com TanStack Query, quando existirem, com estados de loading, vazio e erro.
- Atualizações dinâmicas, como check/uncheck e add/remove, sem perda de foco do teclado.

Considere um item não aplicável somente quando a superfície alterada não tiver
esse comportamento. Preserve `alt` text, rotas, links externos e semântica
existente; prefira corrigir a causa na implementação compartilhada.
