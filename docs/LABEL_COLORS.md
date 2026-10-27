# 🏷️ Label Guide — Visual Organization Reference

> **Resolves:** [#13 - Document label organization for better visual organization](https://github.com/xyliugo/claude-code/issues/13)

This document is the **single source of truth** for all labels used in this repository. All contributors should consult this guide when triaging issues or opening pull requests to ensure consistent, meaningful labeling.

---

## 📋 Table of Contents

- [How to Use Labels](#how-to-use-labels)
- [Category Overview](#category-overview)
- [1. Issue Type](#1--issue-type)
- [2. Priority](#2--priority)
- [3. Platform](#3--platform)
- [4. Area / Domain](#4--area--domain)
- [5. Status](#5--status)
- [6. Contribution](#6--contribution)
- [7. Documentation](#7--documentation)
- [Usage Guidelines](#usage-guidelines)
- [Label Color Reference](#label-color-reference)

---

## How to Use Labels

- **Apply at least one label per category** where applicable (type + area is the minimum).
- **Multiple labels** from *different* categories may be combined freely.
- **Avoid stacking** labels from the *same* category (e.g., don't use both `bug` and `feature` on the same issue unless it is genuinely both).
- Labels marked with ⚠️ should only be applied by **maintainers**.

---

## Category Overview

| # | Category | Purpose | Examples |
|---|----------|---------|---------|
| 1 | **Issue Type** | What kind of work is this? | `bug`, `feature`, `task` |
| 2 | **Priority** | How urgent is it? | `critical`, `hotfix` |
| 3 | **Platform** | Which platform is affected? | `macOS`, `iOS`, `web` |
| 4 | **Area / Domain** | Which part of the codebase? | `frontend`, `backend`, `testing` |
| 5 | **Status** | Where is this in the workflow? | `in-progress`, `blocked`, `wip` |
| 6 | **Contribution** | Community-facing signals | `good-first-issue`, `help-wanted` |
| 7 | **Documentation** | Docs-specific labels | `documentation` |

---

## 1. 🔴 Issue Type

Labels that describe the fundamental *nature* of the issue or pull request.

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `bug` | `#d73a4a` | Something isn't working | Use when reporting broken behaviour, crashes, or incorrect output that deviates from intended functionality. |
| `enhancement` | `#a2eeef` | Improvement or addition to existing functionality | Use for incremental improvements to existing features (performance, UX, refactor). |
| `feature` | `#0075ca` | New feature or capability | Use when proposing or implementing **net-new** functionality that doesn't exist yet. |
| `task` | `#e4e669` | General maintenance or chore | Use for housekeeping work: dependency updates, CI changes, configuration, refactors with no user-visible change. |
| `question` | `#d876e3` | Further information is requested | Use when an issue is really a question or needs clarification before work can begin. |
| `wontfix` | `#ffffff` | ⚠️ This will not be worked on | Applied by maintainers when closing an issue that is out-of-scope, intentional, or a known limitation. |

---

## 2. 🔥 Priority

Labels that communicate **urgency** and help with triage ordering.

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `critical` | `#b60205` | ⚠️ Severe issue affecting all users or blocking a release | Production outages, data loss risks, or security vulnerabilities. Requires immediate attention. |
| `hotfix` | `#e11d48` | ⚠️ Urgent fix that needs to be merged outside the normal release cycle | Use when a `critical` bug needs an out-of-band patch release. Usually paired with `critical`. |

> **Rule of thumb:** `critical` describes *severity*; `hotfix` describes the *delivery mechanism*. They often appear together but are distinct.

---

## 3. 💻 Platform

Labels that scope an issue to a **specific operating system or runtime environment**.

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `macOS` | `#0366d6` | Issue is specific to macOS | Bugs or features that only reproduce or apply on macOS. |
| `iOS` | `#0366d6` | Issue is specific to iOS | Bugs or features that only reproduce or apply on iPhone/iPad. |
| `web` | `#0366d6` | Issue relates to the web/browser platform | Applies to browser-based functionality, PWA, or web-only APIs. |
| `platform` | `#0366d6` | Cross-platform concern | Use when the issue affects multiple platforms simultaneously or is about platform abstraction itself. |

---

## 4. 🧩 Area / Domain

Labels that identify **which part of the codebase** is relevant. Combine freely with issue type labels.

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `frontend` | `#fbca04` | UI / client-side code | React components, CSS, animations, accessibility, browser rendering. |
| `backend` | `#006b75` | Server-side / API code | REST endpoints, database queries, authentication, business logic. |
| `testing` | `#0e8a16` | Test code or testing infrastructure | Unit tests, integration tests, E2E tests, CI pipelines, test tooling. |
| `hooks` | `#c5def5` | React hooks or Git hooks | Custom React hooks (`use*`) or Git lifecycle hooks (pre-commit, pre-push, etc.). |
| `context` | `#e99695` | React Context or application state context | Issues related to context providers, consumers, or global state management. |
| `memory` | `#f9d0c4` | Memory usage or leaks | Performance issues related to memory consumption, leaks, or garbage collection. |

---

## 5. 🔄 Status

Labels that reflect the **current workflow state** of an issue or PR. These are dynamic — update them as work progresses.

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `in-progress` | `#0052cc` | Actively being worked on | Someone has picked this up and is actively committing work. |
| `wip` | `#fbca04` | Work in progress — not ready for review | Draft PR or early-stage implementation. Do not review yet. |
| `needs-review` | `#e4e669` | Ready and waiting for a code review | PR is complete from the author's perspective. Reviewers should take action. |
| `needs-approval` | `#d93f0b` | ⚠️ Requires maintainer sign-off before merge | Use for PRs that touch sensitive areas (security, APIs, config) requiring explicit approval. |
| `blocked` | `#ee0701` | Cannot proceed — waiting on an external dependency | Another issue, PR, decision, or third-party must be resolved first. Always add a comment explaining the blocker. |
| `waiting-on-decision` | `#ededed` | Pending a product or architecture decision | Work can't start until a design/architecture choice is made. Tag relevant decision-makers. |

### Status Lifecycle

```
Open → in-progress → wip → needs-review → needs-approval → Merged/Closed
         ↑                                      ↓
       blocked ←←←←←←←←←←← waiting-on-decision
```

---

## 6. 🤝 Contribution

Labels that signal **community participation opportunities**.

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `good-first-issue` | `#7057ff` | Great for newcomers to the project | Well-scoped, low-risk issues with clear acceptance criteria. Ideal for first-time contributors. |
| `help-wanted` | `#008672` | Extra attention or expertise needed | Issues that are open for community contributions, especially ones requiring specialized knowledge. |

> **Tip:** `good-first-issue` implies `help-wanted`. You can use them together, but `good-first-issue` alone is sufficient for beginner-friendly tasks.

---

## 7. 📄 Documentation

| Label | Color | Description | When to Use |
|-------|-------|-------------|-------------|
| `documentation` | `#0075ca` | Improvements or additions to documentation | README updates, new guides (like this one!), JSDoc comments, API docs, or inline code comments. |

---

## Usage Guidelines

### ✅ Do

- Apply labels **immediately** when opening an issue or PR.
- Update status labels **promptly** as work progresses.
- Combine **type + area + status** for maximum clarity (e.g., `bug` + `frontend` + `in-progress`).
- Remove stale status labels when they no longer apply (e.g., remove `in-progress` when blocked).

### ❌ Don't

- Leave issues **unlabeled** — even `question` or `task` is better than nothing.
- Apply `critical` or `hotfix` without **first notifying a maintainer**.
- Use `wontfix` or `needs-approval` unless you are a **maintainer**.
- Stack two issue-type labels unless the issue is genuinely a hybrid (e.g., a `bug` that also requires a new `feature` to fix it properly).

---

## Label Color Reference

A quick visual summary of all 27 labels grouped by category.

| Category | Label | Hex Color |
|----------|-------|-----------|
| **Issue Type** | `bug` | `#d73a4a` |
| **Issue Type** | `enhancement` | `#a2eeef` |
| **Issue Type** | `feature` | `#0075ca` |
| **Issue Type** | `task` | `#e4e669` |
| **Issue Type** | `question` | `#d876e3` |
| **Issue Type** | `wontfix` | `#ffffff` |
| **Priority** | `critical` | `#b60205` |
| **Priority** | `hotfix` | `#e11d48` |
| **Platform** | `macOS` | `#0366d6` |
| **Platform** | `iOS` | `#0366d6` |
| **Platform** | `web` | `#0366d6` |
| **Platform** | `platform` | `#0366d6` |
| **Area** | `frontend` | `#fbca04` |
| **Area** | `backend` | `#006b75` |
| **Area** | `testing` | `#0e8a16` |
| **Area** | `hooks` | `#c5def5` |
| **Area** | `context` | `#e99695` |
| **Area** | `memory` | `#f9d0c4` |
| **Status** | `in-progress` | `#0052cc` |
| **Status** | `wip` | `#fbca04` |
| **Status** | `needs-review` | `#e4e669` |
| **Status** | `needs-approval` | `#d93f0b` |
| **Status** | `blocked` | `#ee0701` |
| **Status** | `waiting-on-decision` | `#ededed` |
| **Contribution** | `good-first-issue` | `#7057ff` |
| **Contribution** | `help-wanted` | `#008672` |
| **Documentation** | `documentation` | `#0075ca` |

---

*Last updated: 2026-10-27 · Resolves [xyliugo/claude-code#13](https://github.com/xyliugo/claude-code/issues/13)*
