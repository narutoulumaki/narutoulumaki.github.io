---
layout: default
title: "Projects"
permalink: /projects/
---

# Selected Work

### PARISCV: Cycle-Accurate RISC-V Performance Profiler (`IEEE HiPC 2025`)
**Stack:** Python, C/C++, RISC-V, Spike, Verilator  
**Repository:** [github.com/narutoulumaki/spike-basics](https://github.com/narutoulumaki/spike-basics)
- Instruction trace analysis and cycle-accurate hardware profiling pipeline integrated with OpenHW's `cv32e40x` core.
- Combines functional instruction execution from Spike with cycle-level RTL simulation in Verilator to identify application-specific execution bottlenecks.
- Co-authored research paper accepted at the 32nd IEEE International Conference on High Performance Computing, Data, and Analytics (HiPC 2025).

### Automated PR & Code Review Service
**Stack:** Python, FastAPI, Pydantic, GitHub Webhooks, REST APIs  
**Repository:** [github.com/narutoulumaki/ai-code-reviewer](https://github.com/narutoulumaki/ai-code-reviewer)
- FastAPI backend service that automates multi-language pull request audits via HMAC-SHA256 verified GitHub webhooks.
- Processes unified PR diffs in asynchronous background workers and enforces strict Pydantic JSON response schemas to surface security vulnerabilities, logic bugs, and line-level refactor suggestions.

### Distributed Email Outbox & Job Scheduler
**Stack:** Node.js, TypeScript, Redis, BullMQ, PostgreSQL, Prisma, Next.js  
**Repository:** [github.com/narutoulumaki/Email-outbox-management](https://github.com/narutoulumaki/Email-outbox-management)
- Fault-tolerant outbound email scheduling system engineered with BullMQ and Redis delayed queues instead of volatile cron jobs.
- Supports configurable per-tenant hourly rate limiting, restart-safe worker recovery, Google OAuth authentication, and bulk CSV recipient ingestion backed by PostgreSQL and Prisma.

### Real-Time Classroom Polling Engine
**Stack:** TypeScript, Node.js, Socket.io, PostgreSQL, Prisma, Next.js  
**Links:** [Live Demo](https://live-polling-xi.vercel.app) · [github.com/narutoulumaki/Live-polling](https://github.com/narutoulumaki/Live-polling)
- Event-driven classroom polling system built on Socket.io, Express, and PostgreSQL.
- Maintains server-authoritative countdown timers so late-joining or reconnecting clients synchronize state accurately, while enforcing database-level uniqueness constraints to guarantee single-vote integrity under concurrent load.

### PD-YOLOv7: Edge Object Detection Compression
**Stack:** Python, PyTorch, ONNX, Model Compression  
**Repository:** [github.com/narutoulumaki/PD-YOLOv7-Research](https://github.com/narutoulumaki/PD-YOLOv7-Research)
- Deep learning model compression pipeline combining teacher-student knowledge distillation (KL-divergence loss), structured channel pruning, and INT8 quantization-aware training (QAT) to reduce YOLOv7 model footprint and FLOPs for edge deployment with ONNX runtime export.
