# Virtual Set 0.1

Protótipo local e isolado para realização 3D de uma sala de referência MiniMax H3.

## Arranque

### Windows (recomendado)

Executar `release/Virtual-Set-0.1.0-Setup.exe`. O instalador é independente do IV Studio, não toca nos seus dados e mantém a pasta de dados do Virtual Set ao desinstalar. O executável portátil também está em `release/win-unpacked/Virtual Set.exe`.

### Desenvolvimento

Requer Node.js 22.12 ou superior para desenvolvimento. Na pasta do projeto: `npm ci`, `node node_modules/electron/install.js`, `npm start`. O primeiro comando instala o grafo isolado; o segundo descarrega o runtime Electron, conforme o script oficial npm. O preview Web pode arrancar com `npm run start:web` e a porta 4193. `npm run package:win` copia automaticamente o runtime Node dedicado e cria o instalador.

As cenas, texturas, modelos e exportações da app instalada ficam em `%APPDATA%/iv-studio-virtual-set/Virtual Set Data/`, separadas dos dados do IV Studio. O repositório tem Git próprio; `data/`, `dist/`, `release/`, `runtime/` e `node_modules/` são ignorados.

## Conteúdo V0.1

- Sala 6×5×3 m, porta e duas janelas integradas na geometria, mesa, sofá e dois manequins proxy. A parede sul pode ser ocultada temporariamente para pré-visualizar o interior.
- Navegação orbital/zoom/pan, seis superfícies com texturas individuais, rotação e escala.
- Biblioteca de geometria/mobiliário, importação GLB/glTF, manipulação XYZ e rotação.
- Câmara virtual com alvo, distância focal, três enquadramentos, keyframes e interpolação suave; órbita e trajetória de manequim.
- Iluminação e exposição configuráveis.
- Guardar/reabrir cena em JSON; cópias de texturas e modelos em pastas da cena.
- Exportação de fotogramas PNG e MP4 H.264 via FFmpeg. Predefinição leve: 640×360.
- A cena e a exportação de aceitação estão preservadas em `examples/Sala-experimental-6x5/`, com instruções de importação manual no IV Studio. Não há submissão automática ao H3.

## Verificação executada

- `npm run check` e `npm run build` concluídos.
- `npm run package:win` criou o instalador Windows x64 em `release/Virtual-Set-0.1.0-Setup.exe` e a pasta portátil em `release/win-unpacked/`. O pacote não tem assinatura digital.
- O Electron empacotado arrancou e serviu a interface Three.js. A cena experimental 6×5×3 foi guardada, a aplicação foi fechada, reaberta e a cena recuperada com quatro objetos colocados, porta, duas janelas, seis texturas e posições persistidas.
- Pela interface Electron, foram escolhidos três enquadramentos, criada a órbita de câmara e a trajetória de um manequim. O MP4 exportado contém 32 fotogramas em 8 s; FFmpeg confirmou H.264, 640×360, 4 fps, ecrã 16:9. As imagens dos fotogramas estão preservadas ao lado do vídeo.
- A exportação de 21 PNG também foi exercitada na pré-visualização Web; a interface Electron disponibiliza a mesma ação.
- A exportação MP4 é executada pelo FFmpeg local, encontrado na instalação ComfyUI existente. Se não estiver nesse caminho, definir `VIRTUAL_SET_FFMPEG`.
- A cena de aceitação no repositório inclui a sala JSON, as seis texturas efetivamente usadas, o MP4, os 32 fotogramas e as instruções de importação.

## Limitações

A interface é HTML/JavaScript com Three.js, dentro de Electron; React ainda não foi introduzido. Os manequins são geometria proxy sem esqueleto. A navegação é orbital, sem modo de caminhada. GLB é carregado por GLTFLoader, mas sidecars de glTF externo não são consolidados. A rotação da câmara é controlada pela vista/alvo, sem campos Euler dedicados. A integração IV Studio é importação manual de referência. MCP, biblioteca de animações, mocap e mapas Depth/Pose/Normals permanecem pontos de extensão.

## Componentes e licenças

- IV Studio: código oficial em `hollisorg/iv-studio`, versão publicada 1.1.28, licença MIT. Instalado localmente em `D:\IVSTUDIO\IV Studio\IV Studio.exe`; ProductVersion conferida como 1.1.28.0. A estrutura oficial é Electron com `src/main`, `src/preload`, `src/renderer`, `src/service` e `src/mcp`. O módulo permanece isolado; nenhuma integração foi copiada ou injetada na app de produção.
- Three.js 0.171.0 e addons distribuídos sob MIT, preservados em `vendor/` com `THREE_LICENSE.txt`.
- VIG-MiniMaxH3-Director: GPL-3.0. Não reutilizado por incompatibilidade e não necessidade atual.
- ComfyUI_VNCCS_Utils e comfyui-blender-layout: MIT. Úteis como referências futuras de workflow e composição, mas nenhum código instalado/copied por falta de componente imediatamente necessário nesta app local.

## Ficheiros principais alterados

Ficheiros principais: `package.json`, `package-lock.json`, `.gitignore`, `server.cjs`, `renderer/app.js`, `renderer/index.html`, addons em `vendor/`, `electron/main.cjs`, `electron/preload.cjs`, `electron-builder.json`, `vite.config.js`, `index.html`, `style.css`, `INTEGRACAO_E_LICENCAS.md` e a licença Node.js em `licenses/`.
## Reversão

Fechar a aplicação ou parar `npm start` com Ctrl+C. O código está contido nesta pasta. Nenhum ficheiro da instalação IV Studio, projetos, personagens, configurações ou modelos foi alterado. Para remover o protótipo, desinstalar Virtual Set e, se também se quiser remover os dados, eliminar apenas `%APPDATA%/iv-studio-virtual-set/Virtual Set Data/`; ou mover/apagar apenas esta pasta do repositório depois de arquivar o que se pretenda conservar.
