# Virtual Set 0.1

Protótipo local e isolado para realização 3D de uma sala de referência MiniMax H3.

## Arranque

1. Instalar Node.js 20 ou superior.
2. Na pasta `virtual-set`, executar `npm ci` e `npm start`.
3. Abrir `http://127.0.0.1:4193` (ou a porta definida por `VIRTUAL_SET_PORT`).

Os dados ficam em `virtual-set/data/` e no armazenamento local do browser, separados de `AppData\Roaming\IV Studio`, de projetos de produção e dos modelos ComfyUI. A resolução por omissão é 640×360 para reduzir carga gráfica.

## Conteúdo

- Sala experimental inicial de 6×5×3 m, com porta, duas janelas, mesa, sofá e dois manequins.
- Navegação orbital, dimensões ajustáveis, biblioteca geométrica, transformação XYZ e importação GLB/glTF.
- Seis superfícies com importação de imagem, escala e orientação.
- Câmara com alvo, lente, três predefinições de enquadramento, keyframes, interpolação suave, órbita e trajetória de personagem.
- Exportação de 21 frames PNG e de MP4 H.264 via FFmpeg. O MP4 de aceitação foi validado a 640×360, 4 fps e 2 s; o diretório/export fica dentro de `data/exports/`.

## Estado e testes

`npm run check` verifica a sintaxe dos módulos e do código. Testes efetivamente feitos no browser: canvas Three.js ativo; sala 6×5×3 com porta, duas janelas, mesa, sofá e dois manequins; alteração da mesa para X=2 guardada em JSON e recuperada após recarregar a página; importação das seis texturas e confirmação dos seis assets em disco; enquadramentos, órbita e trajetória; exportação de 21 PNG; MP4 H.264 reproduzível com FFmpeg (8 frames, 640×360, 4 fps, 2 s, 10 430 bytes), confirmado pela leitura do stream FFmpeg.

Limitações V0.1: a app é uma página local servida por Node.js com Three.js, não um renderer React/Electron. A navegação implementada é orbital/zoom/pan, sem modo de caminhada em primeira pessoa. A importação GLB/glTF está marcada como pendente enquanto o carregamento do addon falha no preview atual. O manipulador TransformControls e a biblioteca de mobiliário precisam de QA visual adicional; os manequins são proxies geométricos, não personagens animados articulados. A integração nativa no IV Studio não foi feita; o vídeo é uma referência técnica exportada e não é submetido ao H3. Os repositórios oficiais externos não puderam ser consultados neste ambiente devido à resolução DNS do GitHub, pelo que não houve reutilização de código desses projetos. A versão instalada do IV Studio continua por confirmar; 1.1.28 é apenas a versão do instalador pendente.

## Licenças e proveniência

Three.js 0.171.0 é distribuído sob MIT; os módulos de controlo, GLTFLoader e GLTFExporter vêm da mesma dependência Three.js. Os fontes originais são preservados em `node_modules/three` e cópias de runtime em `vendor/`. A consulta aos repositórios oficiais IV Studio, VIG-MiniMaxH3-Director, ComfyUI_VNCCS_Utils e comfyui-blender-layout falhou por indisponibilidade de DNS GitHub neste ambiente. Não foi reutilizado código desses projetos. A versão da instalação efetiva de IV Studio não foi confirmada; o instalador em cache indica 1.1.28 e é apenas uma versão pendente.

## Reversão

Parar o processo `npm start` com Ctrl+C. O código está contido nesta pasta. Nenhum ficheiro da instalação IV Studio, projetos, personagens, configurações ou modelos foi alterado. Para remover o protótipo, mover ou apagar apenas a pasta `virtual-set` depois de arquivar o que se pretenda conservar.
