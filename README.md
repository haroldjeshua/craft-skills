# craft-skills

A collection of essential agent skills focused on
frontend UI craft, polish, and design engineering.

## Skills included

| Skill | Description |
|---|---|
| **baseline-ui** | Validates animation durations, enforces typography scale, checks accessibility, prevents layout anti-patterns |
| **emil-design-eng** | Emil Kowalski's philosophy on UI polish, component design, animation decisions |
| **make-interfaces-feel-better** | Hover states, shadows, borders, micro-interactions, enter/exit animations, visual polish |
| **shadcn** | Manage shadcn/ui components — add, search, fix, debug, style, compose |

## Installation

### Option A — degit (no npm, no git history)

```bash
# Install into .agents/ (project-local)
npx degit haroldjeshua/craft-skills .agents

# Install into a custom folder
npx degit haroldjeshua/craft-skills ./my-custom-folder

# Install only the skills subdirectory (if .agents already exists)
npx degit haroldjeshua/craft-skills/skills .agents/skills
```

### Option B — npm package (upgrade-friendly)

```bash
# Install into .agents/ (default)
npx craft-skills init

# Install into a custom folder
npx craft-skills init ./my-custom-folder

# Overwrite existing without prompting
npx craft-skills init --force
```

### Option C — global install (shared across all projects)

```bash
# Install skills globally
npx degit haroldjeshua/craft-skills/skills ~/.agents/skills
```

Then reference the global path in your opencode config:
```json
{
  "skills": ["~/.agents/skills/*"]
}
```
