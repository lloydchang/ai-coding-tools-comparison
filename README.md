## Before You Read: What Actually Determines Your Toolbox

> **These are tools in a toolbox — and tools can be combined.** No single tool is best, and no combination is universally right.

The right tool — or combination of tools — depends on how your mind naturally approaches a piece of work. Some developers think in terms of tight feedback loops and want to see every change as it happens. Others think in terms of outcomes and prefer to delegate, then review. Some work best when they stay close to the code; others work best when they step back and direct. The architecture of a tool either matches how you think or it doesn't — and when it doesn't, no amount of features will compensate.

**The skill is not knowing which tools exist. It is knowing which tool fits the work at hand, when, why, how, for what, and for whom.**

**Time is the ultimate constraint.** Every tool requires real investment — evaluation, onboarding, workflow integration, and continuous adaptation. Access without time is worthless. A single well-understood tool used deeply will always outperform five poorly understood tools used occasionally.

**LLMs are probabilistic.** Every output is a best guess, not a guarantee. Developers who treat AI outputs like a pull request to review — expected to be good, not assumed to be correct — will get far more from these tools than those who need deterministic results. Tolerance for uncertainty is a real constraint that should inform which architectural pattern fits you.

**Enjoyment is a multiplier.** A tool you find genuinely engaging will outperform a tool you tolerate. Flow state is not a soft metric.

**Adaptability has a cost.** This ecosystem moves fast — Cursor Rules became legacy and was replaced by AGENTS.md in a single release cycle. Staying current requires continuous attention. That is energizing for some and exhausting for others. Know which one you are.

**The architectural patterns in this document describe differences, not a ranking.** What fits depends entirely on everything above.

---

# The AI Coding Ecosystem: State of Play, March 2026

> *Snapshot as of March 2026. Tools, features, and conventions are evolving rapidly and may have changed since publication.*

> *This is a companion piece to the [AI Coding Tools Comparison](https://lloydchang.github.io/ai-coding-tools-comparison/) interactive table, which compares tools by AI Independence Levels, Target User Persona, workflow fit, concurrency, pricing, and IP indemnification. The two documents use different but complementary lenses — the table answers what level of AI independence a tool operates at and who it is for; this document answers what architectural pattern it represents and how the ecosystem fits together strategically.*

---

> **The core insight: architecture is the product. Model choice is secondary.**

Many tools run the same underlying models — Claude Sonnet 4.6, GPT-5, Gemini 3 — yet feel completely different in practice. The context a tool provides, the actions it permits, and where the human sits in the loop define the experience far more than which LLM runs underneath.

---

## The 7 Architectures

### 1. 🔌 The Plugin Model — "AI as Autocomplete"
**Representative tool:** GitHub Copilot

The original generation. AI predicts the next token or function as you type — you accept or reject, the IDE stays primary. Still dominant in large enterprises because it is low-risk and requires zero workflow change.

**Workflow:** Developer types → AI suggests → Developer accepts/rejects

**Strengths:** Fast, cheap, works in most languages, minimal disruption
**Ceiling:** No project-level reasoning, no execution, reactive only

---

### 2. 🧩 The Extension Agent Model — "Agentic AI Inside Stock VS Code"
**Representative tools:** Cline, Roo Code, Kilo Code

Agentic behavior delivered as a VS Code extension — the editor stays stock and unmodified, but the extension brings autonomous, multi-step execution capabilities inside it. No new IDE to install or learn. BYOK, open-source, and model-agnostic. The lowest-friction path to agentic AI for developers already in VS Code.

**Workflow:** Developer describes task → Extension agent plans and executes → Developer monitors and approves

**Strengths:** Zero IDE switching cost, full model flexibility, open-source, no markup on model costs
**Ceiling:** Less integrated than a full IDE fork; capabilities bounded by what VS Code extensions can access

**Tools in this category:**
- **Cline** — supervised agentic execution; requires explicit permission for every command and file change; 5M+ installs; the most transparent BYOK model
- **Roo Code** — multi-personality agents (Architect, Code, Debug, Ask) for role-based automation; more autonomous than Cline; SOC 2 compliant
- **Kilo Code** — forked from Cline and Roo Code; adds Orchestrator mode, inline autocomplete, and a visible to-do list that breaks tasks into sub-steps; raised $8M seed

---

### 3. 🖥️ The Fork Model — "AI-Native IDE"
**Representative tools:** Cursor, Windsurf Editor, Zed

AI-native IDEs with deep codebase integration. The AI indexes the full repository, edits multiple files, and produces diffs for review. Cursor popularized this model; it remains the most active and competitive category.

**Workflow:** Developer requests change → AI edits multiple files → Developer reviews diffs

**Strengths:** Deep codebase awareness, fast large-scale edits, familiar environment
**Ceiling:** Human supervision required at each step, large edits can be unreliable

> **Note on Zed:** Unlike Cursor and Windsurf, Zed is built from scratch in Rust — not a VS Code fork. It runs the Claude Agent SDK and communicates with Claude Code over ACP, making it a high-performance visual host for Claude Code rather than a standalone agent. The pattern: Zed as IDE layer, Claude Code as reasoning engine underneath.

---

### 4. ⌨️ The Terminal Model — "AI as Pair Programmer"
**Representative tools:** Claude Code, Amp, OpenCode, Aider

No GUI. AI operates in the terminal like a human developer — editing files, running tests, executing commands, and retrying on errors. Prioritizes reasoning transparency. Strong for DevOps, debugging, complex refactors, and migrations.

**Workflow:** Developer describes task → AI executes commands and edits files → Developer monitors

**Strengths:** Transparent reasoning, flexible automation, strong debugging
**Ceiling:** No UI visualization, slower interactive editing, harder to parallelize

**Tools in this category:**
- **Claude Code** — benchmark for reasoning depth and complex multi-step tasks
- **Amp** — terminal-only by deliberate choice; discontinued its VS Code and Cursor extensions in March 2026, stating "the sidebar is dead"; notable for subagent parallelization and team collaboration features like thread sharing
- **OpenCode** — open-source, privacy-first; supports 75+ models including local ones; stores no code or context; right choice for teams avoiding vendor lock-in
- **Aider** — git-native; every AI edit auto-creates a formatted git commit; actively maintained; purpose-built for open-source maintainers and git-heavy workflows

---

### 5. ☁️ The Cloud Agent Model — "AI as Async Worker"
**Representative tools:** Codex App (OpenAI), Jules (Google)

You assign tasks; agents run in parallel in isolated cloud environments; you review results later. You are the manager, not the collaborator.

> **The defining mental shift: you are no longer coding alongside AI — you are delegating to it.**

**Workflow:** Developer assigns tasks → Agents execute in parallel → Developer reviews results

**Strengths:** Massive parallelism, background execution, CI/CD integration
**Ceiling:** Slower feedback loop, requires precise task definition upfront

**Tools in this category:**
- **Codex App (OpenAI)** — cloud sandboxes with parallel agent execution, reusable skills, and automation pipelines
- **Jules (Google)** — asynchronous agent that clones codebases into Google Cloud VMs; includes a CLI, API, and integrations with CI/CD pipelines and tools like Slack

---

### 6. 🤖 The Autonomous Agent Model — "AI as Junior Developer"
**Representative tools:** Devin, Windsurf Cascade

Given an issue, AI plans, writes, tests, and opens a PR with minimal human involvement. You assign tickets and approve results; everything in between is delegated.

**Workflow:** Developer assigns issue → AI plans and writes → AI tests → Developer approves

**Strengths:** High automation, full task execution end to end
**Ceiling:** Error risk, reliability concerns, security considerations at scale

---

### 7. 🛰️ The Antigravity Model — "Hybrid Autonomous IDE + Agent Network"
**Representative tool:** Antigravity (Google)

Combines an AI-native IDE, embedded agent orchestration, autonomous test execution, and deployment sandboxes in one surface. Two modes: **Editor View** (standard IDE with agent sidebar) and **Manager View** (control center for orchestrating multiple parallel agents). Developers oversee selectively rather than continuously.

**Workflow:** Developer assigns goal → AI IDE + agents execute → Developer oversees selectively

**Strengths:** Bridges IDE-focused and autonomous workflows, handles multi-step multi-file tasks
**Ceiling:** High complexity, steep learning curve, limited adoption so far

---

## The Autonomy Spectrum

```
Plugin → Extension  → Fork     → Terminal    → Cloud         → Autonomous  → Hybrid IDE
Copilot  Cline        Cursor     Claude Code   Codex App        Devin          Antigravity
         Roo Code     Windsurf   Amp           Jules (Google)   Cascade
         Kilo Code    Zed        OpenCode
                                 Aider
```

---

## Human Role by Architecture

| Architecture                  | Human Role                          |
|-------------------------------|-------------------------------------|
| Copilot                       | Reactive assistant                  |
| Cline / Roo Code / Kilo Code  | Agent supervisor inside VS Code     |
| Cursor / Windsurf / Zed       | Deep collaborator inside IDE        |
| Claude Code / Amp / OpenCode  | Terminal reasoning partner          |
| Codex App / Jules             | Manager of async AI workers         |
| Windsurf Cascade / Devin      | Supervisor of autonomous junior dev |
| Antigravity                   | Overseer of hybrid agent network    |

---

## Strategic Companies

| Company             | Strategic Lever               | Architecture                               |
|---------------------|-------------------------------|--------------------------------------------|
| GitHub (Microsoft)  | System of record              | Copilot / Plugin                           |
| Anysphere           | Developer interface           | Cursor / Fork                              |
| Anthropic           | Terminal-native reasoning     | Claude Code / Terminal                     |
| OpenAI              | Agent orchestration           | Codex App / Cloud                          |
| Google              | Model + cloud infrastructure  | Jules (Cloud Agent) + Antigravity (Hybrid) |
| Cognition           | Hybrid IDE + autonomy         | Windsurf (Fork + Autonomous) + Devin       |

> **The Cognition position:** Cognition owns both Windsurf and Devin.

> **The Google position:** Google spans two categories — Jules in the Cloud Agent model and Antigravity in the Hybrid Autonomous IDE model. Combined with their underlying model and infrastructure layer, they have a credible play across the full autonomous end of the spectrum.

---

## The Real Strategic Fight

Today's visible fight is **Cursor vs. GitHub**: who owns the developer workflow? GitHub controls the repo, CI/CD, pull requests, and deployment — Copilot expands AI outward from that system of record. Cursor and Windsurf bet that the editor becomes the center of gravity instead.

> **But this framing may already be transitional.**

If the Orchestrator Developer paradigm becomes dominant, neither the editor nor the repo UI matters much. Developers who delegate to agents don't live in Cursor or care about GitHub's PR interface — they care about agent execution environments and supervision surfaces. The fight shifts to who owns the orchestration layer, which points to **Cognition** (Windsurf Cascade + Devin) and **Google** (Antigravity + Jules) as the players best positioned for that world.

---

## Two Developer Identities

> **The most important question this map forces: which kind of developer are you?**

**The Collaborative Developer** stays in the reasoning loop. Uses AI to go faster and deeper, not to exit the process. Optimizes for comprehension and control.

**The Orchestrator Developer** has mentally promoted themselves out of the writing loop. Directs agents, supervises outcomes, steers direction — more engineering manager than engineer. Optimizes for parallelism and delegation. This profile is smaller today but it is where tooling is maturing fastest.

Neither is superior. They reflect different working styles and different levels of trust in AI systems.

---

## Tool Combinations by Architectural Pattern

*These groupings reflect architectural approach, not quality or desirability. Tools can be combined across patterns. Each combination suits different working styles, tasks, and mental models of the work at hand.*

---

### Pattern A — Orchestrator Architecture
*Developer directs, agents execute, developer supervises outcomes*

**Windsurf Cascade + Antigravity** — parallel autonomous agents plus a hybrid IDE built for multi-agent supervision. The most purpose-built combination for full delegation.

**Codex App + Antigravity** — cloud async execution paired with hybrid autonomous IDE. Covers parallel execution and visual orchestration across two platforms.

**Windsurf Cascade + Codex App** — double delegation across two parallel execution environments. Strong but with more overlap than the Cascade + Antigravity combination.

---

### Pattern B — Supervised Autonomy Architecture
*Deep reasoning paired with selective delegation*

**Claude Code + Zed + Antigravity** — three-layer toolbox: terminal reasoning depth, visual supervision via Zed, autonomous IDE for broader orchestration. Orchestrator-style output without fully leaving the reasoning loop.

**Claude Code + Windsurf Cascade** — reasoning depth paired with autonomous delegation. Claude Code for complex thinking; Cascade for parallel execution of well-defined work.

---

### Pattern C — Collaborative Architecture
*Developer stays in the loop throughout; AI accelerates heavily*

**Claude Code + Zed** — deep reasoning with a clean visual layer. Full transparency with terminal friction removed.

**Cursor + Claude Code** — the most common serious developer setup today. Well-tested, large community, consistent.

**Windsurf Editor + Claude Code** — same collaborative pattern as Cursor + Claude Code, marginally cheaper.

---

### Pattern D — IDE-Only Architecture
*Single AI-native IDE; no terminal agent or delegation layer*

Cursor alone, Windsurf Editor alone.

---

### Pattern E — Extension Agent Architecture
*Agentic capability inside stock VS Code; no IDE switching required*

Kilo Code, Roo Code, Cline — differing in how much autonomy they grant the agent per action. All are BYOK, open-source, and model-agnostic.

---

### Pattern F — Plugin Architecture
*AI augments an existing editor without replacing or extending it*

GitHub Copilot
