# Virtual Set — Integration and provenance

Date: 2026-11-25. Source: local installation inspection and the official public repositories. Status: versions and license notes verified; Virtual Set remains isolated from production.

## IV Studio

The local IV Studio installation reports ProductVersion 1.1.28.0. The official `hollisorg/iv-studio` repository declares version 1.1.28 under the MIT license and organizes its Electron app across `src/main`, `src/preload`, `src/renderer`, `src/service`, and `src/mcp`. The production installation and IV Studio AppData were not modified.

## Evaluated projects

- `Weloyo/VIG-MiniMaxH3-Director`: GPL-3.0; no code reused.
- `AHEKOT/ComfyUI_VNCCS_Utils`: MIT; no component was needed for this prototype.
- `minrixa02/comfyui-blender-layout`: MIT; inspected as a workflow and composition reference, not incorporated.

None of these projects was installed. Three.js 0.171.0 is MIT-licensed; its copied modules in `vendor/` retain the upstream notice. The installer bundles Electron 45.5.0 and Node.js 26.13.1 (`node-win-x64`, MIT), with the complete Node license at `licenses/Node-LICENSE-v26.13.1.txt` and alongside the installed resources.

## Integration boundary

Virtual Set exports reference footage but does not submit it to MiniMax H3. A future IV Studio integration should use an explicit, validated import point and must not write to projects or alter queues and workflows without an intentional user action. The Electron app keeps its own data under `%APPDATA%/iv-studio-virtual-set/Virtual Set Data/`.
