# Virtual Set 0.1

An isolated 3D previsualization prototype for cinematic planning and reference footage for MiniMax H3 and IV Studio.

## Download and run

Download the Windows installer from the [v0.1.1 English release](https://github.com/flavi0costa/virtual-set/releases/tag/v0.1.1). The installer runs independently of IV Studio and preserves Virtual Set data when uninstalled. The Windows binaries are release artifacts; they are not stored in Git history.

To build the installer or portable application from source, use Node.js 22.12 or newer:

```powershell
npm ci
node node_modules/electron/install.js
npm start                 # Electron desktop app
npm run start:web         # Browser preview at http://127.0.0.1:4193
npm run check
npm run package:win       # Windows installer
```

The packaged app includes a dedicated Node.js runtime. If FFmpeg is not found in the local ComfyUI installation, set `VIRTUAL_SET_FFMPEG` to its executable path.

Scenes, textures, models, and exports are stored in `%APPDATA%/iv-studio-virtual-set/Virtual Set Data/`, separate from IV Studio data. The repository has its own Git history; `data/`, `dist/`, `release/`, `runtime/`, and `node_modules/` are ignored.

## V0.1 features

- Configurable 6×5×3 m room with a door and two windows; hide the south wall to preview the interior.
- Six independently textured surfaces with rotation and scale controls.
- Built-in furniture and geometry, GLB/glTF import, XYZ positioning, and rotation.
- Two proxy mannequins, a virtual camera, focal length, three shot presets, keyframes, smooth interpolation, camera orbit, and mannequin movement.
- Configurable lighting and exposure, interactive 3D preview, and persistent scene saving and reopening.
- PNG frame export and H.264 MP4 export through FFmpeg, with a lightweight 640×360 preset.
- Manual IV Studio reference import instructions. The prototype never submits content to H3 automatically.

The acceptance scene and its six textures, MP4, 32 rendered frames, and IV Studio import note are in `examples/Experimental-Room-6x5/`.

## Verification performed

- `npm run check`, `npm run build`, and `npm run package:win` completed.
- Launched the packaged Electron app, saved the 6×5×3 m scene, closed and reopened the app, then recovered the scene with four placed objects, the door, two windows, six textures, and saved positions.
- Exercised all three shot presets, a camera orbit, and a mannequin movement track in the Electron app.
- Exported and inspected a playable MP4: H.264, 640×360, 4 fps, 8 seconds, 32 frames. The exported PNG frames are preserved beside it.
- Also exercised the 21-frame PNG export in the web preview.
- The installer is unsigned. Windows may show a SmartScreen warning.

## Limitations and extension points

The UI uses HTML/JavaScript, Three.js, and Electron; React has not been added yet. Mannequins are non-rigged proxy geometry. Navigation is orbital, with no first-person walk mode. GLTF external sidecar files are not consolidated. Camera orientation is controlled through its target rather than dedicated Euler fields. IV Studio integration is a manual reference import. MCP tools, an animation library, motion capture, AI texture generation, and Depth/Pose/Normal maps remain future extension points.

## Reuse and license notes

See [INTEGRATION_AND_LICENSES.md](INTEGRATION_AND_LICENSES.md) for the inspected IV Studio version, upstream project licenses, and the reuse decisions. Three.js 0.171.0 and its included addons are MIT-licensed and retain their notices in `vendor/`. The installer includes Electron 45.5.0 and a Node.js 26.13.1 runtime with the full Node license.

## Revert

Close the app or stop `npm start` with Ctrl+C. The prototype is contained in this repository. It did not modify the IV Studio installation, production projects, characters, settings, or models. To remove it, uninstall Virtual Set. To also remove its data, delete only `%APPDATA%/iv-studio-virtual-set/Virtual Set Data/`.
