---
name: documentation-sync
description: >-
  Use after any code, schema, API, infrastructure, frontend UI, or design-system
  change in this project, before completing work. Review the relevant living
  documentation and update only facts made outdated by the change. Do not use
  for historical plans in docs/superpowers/.
---

# Documentation sync

Mantenha a documentação viva alinhada ao comportamento implementado, sem criar
histórico artificial nem reescrever documentos que continuam corretos.

## Fluxo

1. Identifique os arquivos alterados pela tarefa e leia o código relevante antes
   de editar documentação. Preserve alterações existentes que não pertencem à
   tarefa.
2. Compare a implementação somente com as fontes aplicáveis:

   - Rotas ou contratos de API: Swagger/OpenAPI, `backend/backend.md`,
     `specification.md` e `frontend/frontend.md` quando o contrato do cliente
     mudar. Use `swagger-workflow` se essa skill estiver disponível; caso
     contrário, revise o contrato diretamente.
   - Banco de dados, seed ou infraestrutura: `database.excalidraw`,
     `specification.md`, `backend/backend.md` e `README.md` quando o modelo,
     tabelas, relacionamentos, restrições, seed, setup ou arquitetura mudarem.
     Leia `database.excalidraw` como JSON estruturado e só o atualize se estiver
     desatualizado.
   - Comportamento frontend: `frontend/frontend.md` para rotas, estrutura,
     estado e catálogo de testes. Em mudanças visuais ou funcionais, mantenha
     alinhadas as páginas HTML finais em `design-system/pages/*.html`, quando
     esses arquivos existirem.
   - Especificação do design system: `design-system/DESIGN.md` quando tokens,
     tipografia, paleta, espaçamento, layout, responsividade, componentes,
     interações, acessibilidade ou linguagem visual mudarem.
   - Resumo do design system: `design-system/design-system.md` quando tokens,
     componentes reutilizáveis ou padrões de interação específicos do projeto
     mudarem.
   - Pacote do design system: `design-system/README.md` quando estrutura,
     manifestos, previews, assets, telas-fonte ou fluxos de revisão e reuso
     mudarem.
   - UI kit aplicado: `design-system/ui_kits/app/README.md` quando componentes,
     arquivos, ações, variantes, padrões de uso ou origem do kit mudarem.
   - Escopo ou status de feature: `feature_list.json` e `progress.md`. Atualize
     `feature_list.json` quando comportamento, escopo, verificação, evidência ou
     status de uma feature rastreada mudar; atualize `progress.md` quando o
     estado atual, próximos passos ou histórico significativo mudarem.
   - Continuidade da sessão: `session-handoff.md` quando estado, próximos
     passos, arquivos relevantes, verificações, branch ou instruções de retomada
     mudarem. Preserve o formato existente.
   - Fatos gerais do projeto: `README.md` e `AGENTS.md` somente quando ficarem
     incorretos.

3. Edite apenas documentos cujos fatos tenham ficado desatualizados pela tarefa.
   Não registre refactors rotineiros como histórico de status.
4. Mantenha `docs/superpowers/` fora do escopo: é documentação histórica.
   Não crie documentação ausente apenas porque um plano a menciona.
5. Antes de concluir, revise o diff documental contra o código e valide todo
   JSON modificado, inclusive `database.excalidraw` quando aplicável. Se nenhum
   documento vivo for afetado, informe que a revisão não exigiu edição.
