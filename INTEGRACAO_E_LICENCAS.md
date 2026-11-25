# VIRTUAL SET — decisões de integração e proveniência

Data: 2026-11-25. Origem: inspeção local e código público dos repositórios oficiais. Estado: verificado para versão publicada; integração ainda isolada.

## IV Studio

A instalação local foi identificada no registo Windows e no executável `D:\IVSTUDIO\IV Studio\IV Studio.exe`: ProductVersion 1.1.28.0. O código público `hollisorg/iv-studio` declara 1.1.28, MIT. O repositório organiza o processo Electron em `src/main`, `src/preload`, `src/renderer`, `src/service` e `src/mcp`. A instalação de produção e `AppData/Roaming/IV Studio` não foram alterados.

## Projetos avaliados

- `Weloyo/VIG-MiniMaxH3-Director`: GPL-3.0; não reutilizado.
- `AHEKOT/ComfyUI_VNCCS_Utils`: MIT; sem componente diretamente necessário ao protótipo local.
- `minrixa02/comfyui-blender-layout`: MIT; referência de fluxo de pré-visualização, ainda não incorporada.

Nenhum dos três foi instalado. Three.js 0.171.0 (MIT) é a dependência gráfica; os módulos copiados no diretório `vendor/` mantêm o aviso oficial MIT. O instalador inclui Electron 45.5.0 e um runtime Node.js 26.13.1 (`node-win-x64`, MIT), com a licença oficial completa em `licenses/Node-LICENSE-v26.13.1.txt` e cópia junto aos recursos instalados.

## Fronteira de integração

O protótipo exporta vídeo de referência, sem o submeter ao MiniMax H3. A entrada futura no IV Studio deve ser feita por um ponto de importação explícito e validado, sem escrever nos projetos nem alterar fila/workflow. O processo Electron atual tem dados próprios em `%APPDATA%/iv-studio-virtual-set/Virtual Set Data/`.
