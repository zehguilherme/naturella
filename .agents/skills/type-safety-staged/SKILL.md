---
name: type-safety-staged
description: >-
  Check TypeScript type safety on git-staged files before completing work or
  committing. Use for commit, finalization, completion, TypeScript, typing,
  staged changes, or any conclusion of feature or bug work.
---

# Type safety staged

Verifique a segurança de tipos somente nos arquivos TypeScript staged antes de
concluir trabalho ou commitar.

## Fluxo

1. Liste os arquivos TypeScript staged:

   ```bash
   git diff --cached --name-only --diff-filter=ACM -- '*.ts' '*.tsx'
   ```

   Se não houver arquivos, encerre a skill.

2. Separe os arquivos pelos módulos `frontend/` e `backend/`. Ignore módulos
   que não existirem ou que não tiverem arquivos staged.

3. Execute `npx tsc --noEmit` em cada módulo afetado. O `tsconfig` deve usar
   `strict: true`, cobrindo `noImplicitAny`, `strictNullChecks` e verificações
   relacionadas:

   ```bash
   cd frontend && npx tsc --noEmit
   cd backend && npx tsc --noEmit
   ```

   Se houver erros, corrija-os antes de prosseguir.

4. Inspecione as linhas adicionadas no diff staged:

   ```bash
   git diff --cached -U0 -- '*.ts' '*.tsx'
   ```

   Corrija cada violação encontrada:

   - `any` em variáveis, parâmetros ou retornos é proibido; crie um `type` ou
     `interface` próprio quando necessário.
   - Parâmetros de função devem ter tipo explícito.
   - Retornos de função devem ter tipo explícito.
   - `// @ts-ignore` e `// @ts-expect-error` são proibidos sem justificativa em
     comentário.

5. Depois das correções, execute novamente `npx tsc --noEmit` nos módulos
   afetados.

6. Confirme o resultado com `npm run lint` e `npm run format:check` em cada
   módulo afetado. Não conclua o trabalho enquanto alguma verificação falhar.

O foco da inspeção manual é o diff staged. Se o typecheck do projeto inteiro
falhar, corrija também o código necessário para que o módulo afetado passe.
