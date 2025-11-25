# Guia de Contribuição

Obrigado por contribuir com o COLETAFortal! Siga estas diretrizes para facilitar revisões e manter a qualidade do projeto.

Branches e workflow:

- Nomeie branches com `feature/`, `fix/`, `chore/` seguido de uma descrição curta, por exemplo: `feature/map-filters`.
- Faça pull request contra o branch principal (`main` ou conforme política) ou contra o branch de feature do time.

Commits:

- Use mensagens de commit claras e no estilo convencional, por exemplo: `feat: adicionar filtros por categoria`.

Antes de abrir PR:

- Rode `npm install` e verifique que o app inicia com `npx expo start`.
- Execute lint e checagem de tipos se os scripts existirem:

```powershell
npm run lint
npm run typecheck
```

Templates e boas práticas:

- Inclua uma descrição curta do que foi alterado e por quê.
- Se aplicável, inclua capturas de tela ou gif mostrando o comportamento.

Obrigado novamente — mantenha o foco em commits pequenos e revisáveis.
