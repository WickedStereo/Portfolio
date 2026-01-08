---
layout: default
title: Home
---

<div class="intro">
  <p>I'm a Computer Engineer focused on translating algorithms and architectures into efficient silicon.</p>
  <p>My experience spans ASIC/RTL design, caches and coherence, high‑speed SRAM, and RISC‑V extensions for ML acceleration. I enjoy making pragmatic micro‑architectural trade‑offs to hit power, performance, and area targets.</p>
  <ul>
    <li>Hands‑on with SystemVerilog/Verilog and verification‑driven RTL</li>
    <li>Memory design with timing‑aware workflows</li>
    <li>Hardware‑software co‑design for domain‑specific acceleration</li>
  </ul>
</div>

## Focus Areas

### ASIC & RTL Design
SystemVerilog/Verilog, microarchitecture, verification mindful RTL.
* Coherent interconnects (TileLink TL‑C)
* Cache controllers, pipeline control
* Power/perf conscious design

### Memory
SRAM design, decoders, and built‑in self‑test flows.
* High‑speed SRAM (7nm ASAP)
* MBIST algorithms & timing closure
* EDA‑driven validation

### Accelerators & Architecture
RISC‑V extensions and ML acceleration via HW/SW co‑design.
* Custom ISA ops (FMA, softmax)
* Analog AI explorations
* Perf modeling & trade‑offs

## Experience

**ASIC Design Engineer** — Western Semiconductor (Mar 2025 – Present)
* Designed a TileLink interconnect for cache‑coherent communication in shared RISC‑V systems.
* Implemented coherent memory access with proper prioritization and serialization support ensuring protocol compliance.
* Developed a full‑system simulation with a quad core system and three‑level cache hierarchy.

**Graduate Assistant** — NYU (Aug 2023 – May 2024)
* Designed a fully‑custom high‑speed 32Kb SRAM (256×128) using ASU ASAP 7nm PDK.
* Designed the wordline decoder and beat the 100 ps target by 10%.
* Collaborated to achieve 200 ps clock‑to‑data‑out via SPICE simulations.

**Hardware Development Intern** — Dhruva Space Pvt. Ltd. (Aug 2020 – Dec 2020)
* Implemented UART/SPI communication between microcontrollers for a CubeSat deployer.

**Education**
* **New York University** — M.S. Computer Engineering (2022–2024)
* **BITS Pilani** — B.E. Electronics and Instrumentation (2017–2021)

## Selected Projects

<ul class="project-list">
<li>
<img src="{{ '/assets/project/transformer_hw_sw.png' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>Transformer Encoder Acceleration</strong> — Custom RISC‑V instructions (FMA, hardware softmax) delivering ~8× speedup on a
simplified encoder.</div>
</li>

<li>
<img src="{{ '/assets/project/sha256.jpg' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>Open‑Miner‑BTC</strong> — RTL implementation of a Bitcoin mining ASIC in SystemVerilog. <a href="https://github.com/WickedStereo/Open-Miner-BTC">GitHub</a></div>
</li>

<li>
<img src="{{ '/assets/project/sha256arch.png' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>SHA‑256 ASIC</strong> — Open‑source ASIC optimized for the SHA‑256 hash function used in Bitcoin mining. <a href="https://github.com/WickedStereo/SHA-256-ASIC">GitHub</a></div>
</li>

<li>
<img src="{{ '/assets/project/aihwkit.jpg' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>LLMs on IBM Analog AI Accelerator</strong> — LLAMA‑2 on IBM Analog AI accelerator using PCM arrays. <a href="https://github.com/WickedStereo/LLAMA-2-7b-on-IBM-Analog-AI-accelerator">GitHub</a></div>
</li>

<li>
<img src="{{ '/assets/project/mbist.png' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>BIST SRAM Design</strong> — 256×4b SRAM MBIST with four test algorithms; timing optimized with Genus tools. <a href="https://github.com/WickedStereo/SRAM-BIST">GitHub</a></div>
</li>

<li>
<img src="{{ '/assets/project/riscv.png' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>RISC‑V Processor</strong> — A from‑scratch RV32I processor core designed for robustness and extensibility. <a href="https://github.com/WickedStereo/RV32I-Processor-Design">GitHub</a></div>
</li>

<li>
<img src="{{ '/assets/project/vmips_simulator.png' | relative_url }}" alt="" class="project-thumb">
<div class="project-info"><strong>Vector Processor</strong> — Functional and timing simulator for a VMIPS‑based vector processor (46 instructions). <a href="https://github.com/WickedStereo/VMIPS-Func-Timing-Simulator">GitHub</a></div>
</li>
</ul>

## Contact

* **Email**: [am12553@nyu.edu](mailto:am12553@nyu.edu)
* **GitHub**: [@WickedStereo](https://github.com/WickedStereo)
* **LinkedIn**: [/in/anish-miryala](https://www.linkedin.com/in/anish-miryala/)