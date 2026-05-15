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

## Quick start

```bash
pnpx degit haroldjeshua/craft-skills/skills .agents/skills
```

Pulls only the 4 skill folders into `.agents/skills/` — nothing else. opencode picks them up automatically.

## Installation

### Option A — degit (skills only, recommended)

```bash
pnpx degit haroldjeshua/craft-skills/skills .agents/skills
```

Only the `/skills` subdirectory is pulled — no CLI, no package.json, no README.

### Option B — degit (full repo)

```bash
pnpx degit haroldjeshua/craft-skills .agents
```

Pulls everything (skills + CLI + docs). Useful if you want the `craft-skills init` CLI available.

### Option C — npm package (upgrade-friendly)

```bash
npx craft-skills init
```

Published npm package. Supports `--force`, custom paths, and version pinning:
```bash
npx craft-skills init ./my-skills
npx craft-skills init --force
```

### Option D — global install (shared across all projects)

```bash
pnpx degit haroldjeshua/craft-skills/skills ~/.agents/skills
```

Then reference globally in your opencode config:
```json
{
  "skills": ["~/.agents/skills/*"]
}
```
