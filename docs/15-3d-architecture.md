# 15 — 3D World Architecture

**Status:** Proposed; advanced implementation deferred until core experience is stable.

## 1. Role of 3D
The 3D world provides atmosphere, discovery, and optional interaction. It is a presentation layer, not the source of truth for memories, permissions, or progress. The core letter, memory museum, and journey must remain usable without WebGL.

## 2. Proposed stack
- Three.js as the rendering engine.
- React Three Fiber as the React renderer.
- Drei for selected helpers where justified.
- Dynamic import for canvas and scene modules.
- Shared domain data/services remain outside the scene graph.

## 3. Separation of concerns
- **World shell:** world route, loading/error state, exit and fallback.
- **Scene registry:** maps approved scene identifiers to scene modules.
- **Scene composition:** lighting, environment, camera, geometry, and asset references.
- **Interaction layer:** maps accessible user actions to domain commands.
- **Content adapter:** loads only authorized content and exposes minimal scene data.
- **Fallback layer:** DOM/list/card experience for no-WebGL, reduced-motion, or low-capability contexts.

The scene must not query privileged data directly or decide whether the user is authorized.

## 4. Asset pipeline
- Track source asset, license/ownership, format, size, texture resolution, and optimization status.
- Prefer compressed, appropriately sized models and textures.
- Avoid loading the entire world at startup.
- Use level-of-detail and quality tiers where useful.
- Keep private photographs and personal media out of public 3D bundles.
- Document origin and rights for every third-party asset.

## 5. Runtime quality controls
- Detect WebGL availability and handle context loss.
- Cap device pixel ratio.
- Provide low/medium/high quality settings where justified.
- Lazy-load scene assets by entry point or proximity.
- Dispose geometry, materials, textures, renderer resources, and event listeners.
- Provide loading progress and a recoverable error state.
- Pause nonessential rendering when hidden or inactive.

## 6. Interaction and accessibility
- Every interactive object has a keyboard-accessible equivalent.
- Provide named controls and visible focus state.
- Expose points of interest in a DOM list or card collection.
- Do not encode essential information only in object position, color, or animation.
- Provide a clear exit/return-to-content route.
- Respect reduced motion and allow the viewer to skip immersive sequences.

## 7. Security and content integrity
- Scene IDs and object references are untrusted input.
- Server services authorize content before it enters the client scene.
- Do not embed private storage URLs or privileged keys in scene assets.
- Do not let client-side game/world events directly grant rewards.
- Use owner-approved assets and authentic content only.

## 8. Testing
- No-WebGL fallback.
- WebGL context loss and asset load failure.
- Low capability and mobile viewport.
- Keyboard-only interaction and screen-reader access to alternatives.
- Reduced-motion mode.
- Resource disposal on route changes.
- Access revocation and unauthorized asset reference.

## 9. Acceptance
3D is lazy-loaded, responsive to device capability, accessible through a non-3D route, secure against client-side authorization assumptions, and does not degrade core content performance.
