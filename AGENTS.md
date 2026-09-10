# Naturella — guia do agente

Landing page frontend em Next.js 16, React 19, TypeScript e Tailwind CSS.
Este arquivo é o índice global; regras detalhadas vivem junto de cada módulo.

## Início da sessão

1. Leia `feature_list.json` e escolha uma única feature `ui` ativa.
2. Leia o documento do módulo antes de editar qualquer arquivo daquela área.
3. Consulte `progress.md` e `session-handoff.md` para recuperar contexto.
4. Confirme o escopo da feature antes de escrever código.

## Comandos

- `npm run dev` — servidor local em `http://localhost:3000`.
- `npm run lint` — ESLint.
- `npm run build` — build de produção e verificação TypeScript do Next.js.
- `./init.sh` — sensor completo antes de declarar conclusão.

## Mapa de módulos

| Módulo | Caminho | Guia | Verificação |
|---|---|---|---|
| app | `src/app/` | `src/app/app.md` | `./init.sh` |
| sobre | `src/app/sobre/` | `src/app/sobre/sobre.md` | `./init.sh` |
| components | `src/app/components/` | `src/app/components/components.md` | `./init.sh` |
| icons | `src/app/icons/` | `src/app/icons/icons.md` | `./init.sh` |

## Regras globais

- Trabalhe em uma feature por vez e permaneça no escopo dela.
- Reutilize componentes, tokens Tailwind e dependências já instaladas.
- Preserve acessibilidade, `alt` text, rotas existentes e links externos.
- Não adicione dependências ou abstrações sem necessidade concreta.
- Não execute `git reset` nem `git stash` durante a tarefa.
- Não marque uma feature como aprovada sem evidência verificável.
- Atualize o guia do módulo quando seu comportamento ou verificação mudar.
- Ao criar ou renomear componentes em `src/app/components/`, use a skill `.agents/skills/component-naming-pascalcase/` e valide com `npm run test:component-names`.
- Após qualquer alteração de código, schema, API, infraestrutura, interface ou design system, antes de concluir, use a skill `documentation-sync` para revisar e atualizar apenas a documentação viva afetada.

## Regra de acessibilidade de UI

Toda alteração de frontend (interface, funcionalidade, correção, layout ou UI) deve passar pela checklist em `.agents/skills/ui-accessibility-check/`; consulte também `.agents/skills/naturella-ui/SKILL.md` e o guia do módulo afetado.

## Definição de pronto

- A implementação atende a descrição da feature sem alterar áreas não relacionadas.
- `./init.sh` termina sem erro.
- A evidência da verificação está registrada em `feature_list.json`.
- `progress.md` e `session-handoff.md` permitem retomar a sessão.

## Encerramento da sessão

1. Execute `./init.sh`.
2. Registre arquivos alterados, comandos e resultados em `progress.md`.
3. Atualize o próximo passo e bloqueios em `session-handoff.md`.
4. Deixe a feature ativa claramente identificada.

## Regra de tipagem TypeScript

- Nunca use o tipo `any`; toda variável, parâmetro e retorno de função deve ter tipo explícito. Antes de concluir ou commitar alterações TypeScript, use a skill `.agents/skills/type-safety-staged/` e valide os módulos afetados com `npm run lint && npm run format:check`.
