// ═══════════════════════════════════════════════════════════
//  BARREL RE-EXPORTS
// ═══════════════════════════════════════════════════════════

// Math
export {
    lerp,
    clamp,
    inverseLerp,
    mapRange,
    remap,
    damp,
    smoothstep,
    easeIn,
    easeOut,
    easeInOut,
    lerpAngle,
    lerpAngleRad
} from '@zakkster/lite-lerp';

// Color
export {
    lerpOklch, toCssOklch, parseOklch, multiStopGradient, createGradient, reverseGradient, randomFromGradient
}from '@zakkster/lite-color';
export type
{
    OklchColor
}
from
'@zakkster/lite-color';

// Random
export {Random} from '@zakkster/lite-random';

// Object Pool
export {ObjectPool} from 'lite-object-pool';

// Particles
export {Emitter} from '@zakkster/lite-particles';

// SoA Engine
export {SoaParticleEngine} from '@zakkster/lite-soa-particle-engine';

// FX System
export {FXSystem, Presets, EmitterShape, Wind, GravityWell, Vortex, Turbulence, DragField} from '@zakkster/lite-fx';
export type
{
    FXRecipe, FXSpawnOptions
}
from
'@zakkster/lite-fx';

// Generative Art
export {SimplexNoise, FlowField, Shape, ArtCanvas, GenEngine, Pattern} from '@zakkster/lite-gen';
export type
{
    DrawContext
}
from
'@zakkster/lite-gen';

// UI
export {
    SmartObserver,
    ScrollReveal,
    Parallax,
    Magnetic,
    Spring,
    ScrollProgress,
    Tilt,
    ColorShift,
    ConfettiBurst,
    SparkleHover,
    destroyAll
} from '@zakkster/lite-ui';

// Theme
export {generateTheme, toCssVariables, createThemeCss} from '@zakkster/lite-theme-gen';
export type
{
    ThemePalette, ThemeOptions
}
from
'@zakkster/lite-theme-gen';

// Viewport, Ticker, FSM, FPS, Pointer, Assets, Audio
export {Viewport} from 'lite-viewport';
export {Ticker} from '@zakkster/lite-ticker';
export {FSM} from 'lite-states';
export {FPSMeter} from 'lite-fps-meter';
export {PointerTracker} from 'lite-pointer-tracker';

// ═══════════════════════════════════════════════════════════
//  v2.0 — NEW BARREL RE-EXPORTS
// ═══════════════════════════════════════════════════════════

// Animation primitives
export { easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInBack, easeOutBack, easeInOutBack, easeInElastic, easeOutElastic, easeInOutElastic, easeInBounce, easeOutBounce, easeInOutBounce, linear } from '@zakkster/lite-ease';
export { TweenManager } from '@zakkster/lite-tween';
export { Spring as SpringDamped, SpringPool } from '@zakkster/lite-spring';
export { Gradient } from '@zakkster/lite-gradient';
export { seedNoise, simplex2, simplex3, fbm2, fbm3, curl2 } from '@zakkster/lite-noise';
export { createTimeline } from '@zakkster/lite-timeline';

// Interaction + utility
export { GestureTracker } from '@zakkster/lite-gesture';
export { confetti, createConfetti } from '@zakkster/lite-confetti';
export { liteId } from '@zakkster/lite-id';
export { Vec2 } from '@zakkster/lite-vec';
export { Seek, Flee, Wander, Arrive, Pursuit, Evade, PathFollow, Separation, Alignment, Cohesion, Flock } from '@zakkster/lite-steer';

// Game layer
export { BitmapFont } from '@zakkster/lite-bmfont';
export { InputVectorizer } from '@zakkster/lite-gamepad';
export { CinematicCamera } from '@zakkster/lite-camera';
export { SpatialGrid } from '@zakkster/lite-spatial';
export { testPolygonPolygon, translatePoly, rotatePoly } from '@zakkster/lite-sat';
export { Pathfinder } from '@zakkster/lite-path';
export { VisibilityCaster } from '@zakkster/lite-shadow';
export { WFC } from '@zakkster/lite-wfc';
export { AudioPool } from '@zakkster/lite-audio-pool';

// VFX engines
export { FireworksEngine } from '@zakkster/lite-fireworks';
export { SparkEngine } from '@zakkster/lite-sparks';
export { RainEngine } from '@zakkster/lite-rain';
export { SnowEngine } from '@zakkster/lite-snow';
export { EmberEngine } from '@zakkster/lite-embers';
export { SmokeEngine } from '@zakkster/lite-smoke';


// ═══════════════════════════════════════════════════════════
//  RECIPE TYPES
// ═══════════════════════════════════════════════════════════

import type {OklchColor} from '@zakkster/lite-color';
import type {FXSystem} from '@zakkster/lite-fx';
import type {GenEngine, FlowField, SimplexNoise} from '@zakkster/lite-gen';
import type {Magnetic, ColorShift, ConfettiBurst, Spring} from '@zakkster/lite-ui';
import type {ThemePalette} from '@zakkster/lite-theme-gen';
import type {Random} from '@zakkster/lite-random';
import type {Emitter} from '@zakkster/lite-particles';
import type {Ticker} from '@zakkster/lite-ticker';
import type {Viewport} from 'lite-viewport';
import type {FSM} from 'lite-states';
import type {FPSMeter} from 'lite-fps-meter';
import type {PointerTracker} from 'lite-pointer-tracker';
import type {BitmapFont} from '@zakkster/lite-bmfont';
import type {CinematicCamera} from '@zakkster/lite-camera';
import type {SpatialGrid} from '@zakkster/lite-spatial';
import type {EmberEngine} from '@zakkster/lite-embers';
import type {SmokeEngine} from '@zakkster/lite-smoke';
import type {RainEngine} from '@zakkster/lite-rain';
import type {SnowEngine} from '@zakkster/lite-snow';
import type {SparkEngine} from '@zakkster/lite-sparks';
import type {FireworksEngine} from '@zakkster/lite-fireworks';
import type {GestureTracker} from '@zakkster/lite-gesture';
import type {createTimeline} from '@zakkster/lite-timeline';

/** All recipes return at least a destroy() method. */
interface Destroyable {
    destroy(): void;
}

export interface BrandedBackgroundResult extends Destroyable {
    gen: GenEngine;
    field: FlowField;
    theme: ThemePalette;
    gradient: (t: number) => OklchColor;
}

export interface PremiumButtonResult extends Destroyable {
    magnetic: Magnetic;
    colorShift: ColorShift;
    confetti: ConfettiBurst;
}

export interface BlackHoleResult extends Destroyable {
    fx: FXSystem;

    explode(x: number, y: number): void;

    moveTo(x: number, y: number): void;
}

export interface ScrollStoryResult extends Destroyable {
    instances: Destroyable[];
}

export interface ParticleCursorResult extends Destroyable {
    emitter: Emitter;
    tracker: PointerTracker;
    ticker: Ticker;
}

export interface StarfieldResult extends Destroyable {
    viewport: Viewport;
    ticker: Ticker;
    stars: Array<{ x: number; y: number; size: number; speed: number; phase: number; hue: number; bright: boolean }>;
}

export interface SpringMenuResult extends Destroyable {
    fsm: FSM;
    spring: Spring;

    open(): void;

    close(): void;

    toggle(): void;
}

export interface NoiseHeatmapResult extends Destroyable {
    gen: GenEngine;
    gradient: (t: number) => OklchColor;

    reseed(seed?: number): void;
}

export interface FireworkShowResult extends Destroyable {
    fx: FXSystem;
    ticker: Ticker;

    stop(): void;

    resume(): void;

    manualBurst(x: number, y: number): void;
}

export interface SnowfallResult extends Destroyable {
    fx: FXSystem;
    ticker: Ticker;

    setWind(strength: number): void;
}

export interface TiltGalleryResult extends Destroyable {
    instances: Destroyable[];
}

export interface ReplaySystemResult extends Destroyable {
    fx: FXSystem;
    fsm: FSM;

    registerRecipe(name: string, preset: Function): void;

    startRecording(): void;

    recordEvent(x: number, y: number, recipeName: string): void;

    stopRecording(): Array<{ time: number; x: number; y: number; recipeId: number }>;

    replay(): void;

    stopReplay(): void;
}

export interface ThemePlaygroundResult extends Destroyable {
    readonly palette: ThemePalette;

    setBrand(brand: OklchColor): void;

    setMode(mode: 'light' | 'dark'): void;

    toggleMode(): void;

    getCss(): string;
}

export interface GameCanvasResult extends Destroyable {
    viewport: Viewport;
    ctx: CanvasRenderingContext2D;
    ticker: Ticker;
    rng: Random;
    fsm: FSM;
    fx: FXSystem;
    meter: FPSMeter | null;
    readonly width: number;
    readonly height: number;
    readonly state: string;

    onUpdate(fn: (dt: number) => void): () => void;

    setState(state: string): void;

    start(): void;
}

export declare const Recipes: {
    brandedBackground(canvas: HTMLCanvasElement, brandColor: OklchColor, options?: { seed?: number; animate?: boolean }): BrandedBackgroundResult;
    premiumButton(buttonSelector: HTMLElement | string, overlayCanvas: HTMLCanvasElement, options?: { brandColor?: OklchColor; hoverColor?: OklchColor; confettiColors?: OklchColor[]; magneticStrength?: number }): PremiumButtonResult;
    blackHole(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, options?: { maxParticles?: number; seed?: number; wellStrength?: number; vortexStrength?: number; vortexPull?: number }): BlackHoleResult;
    scrollStory(options?: { heroSelector?: string; heroSpeed?: number; cardSelector?: string; imageSelector?: string; titleSelector?: string; progressBar?: HTMLElement; onProgress?: (t: number) => void }): ScrollStoryResult;
    particleCursor(canvas: HTMLCanvasElement, options?: { maxParticles?: number; trailColor?: OklchColor; fadeColor?: OklchColor; spawnRate?: number }): ParticleCursorResult;
    starfield(canvas: HTMLCanvasElement, options?: { seed?: number; starCount?: number; twinkleSpeed?: number }): StarfieldResult;
    springMenu(menuSelector: HTMLElement | string, toggleSelector: HTMLElement | string, options?: { openColor?: OklchColor; closedColor?: OklchColor; stiffness?: number; damping?: number }): SpringMenuResult;
    noiseHeatmap(canvas: HTMLCanvasElement, options?: { seed?: number; scale?: number; cellSize?: number; animate?: boolean; gradient?: OklchColor[] }): NoiseHeatmapResult;
    fireworkShow(ctx: CanvasRenderingContext2D, width: number, height: number, options?: { maxParticles?: number; seed?: number; burstInterval?: number }): FireworkShowResult;
    snowfall(ctx: CanvasRenderingContext2D, width: number, height: number, options?: { maxParticles?: number; seed?: number; windStrength?: number; turbulenceStrength?: number }): SnowfallResult;
    tiltGallery(cardSelector: string | NodeListOf<Element>, overlayCanvas: HTMLCanvasElement, options?: { maxAngle?: number; sparkleColor?: OklchColor; sparkleRate?: number; revealStagger?: number }): TiltGalleryResult;
    replaySystem(ctx: CanvasRenderingContext2D, options?: { maxParticles?: number; seed?: number }): ReplaySystemResult;
    themePlayground(options?: { initialBrand?: OklchColor; mode?: 'light' | 'dark'; prefix?: string; onThemeChange?: (palette: ThemePalette, css: string) => void }): ThemePlaygroundResult;
    gameCanvas(canvas: HTMLCanvasElement, options?: { fps?: boolean; fpsPosition?: string; seed?: number; maxParticles?: number; states?: Record<string, string[]> }): GameCanvasResult;

    // v2.0 recipes
    retroArcadeText(ctx: CanvasRenderingContext2D, fontImage: HTMLImageElement, fontData: object, options?: { seed?: number; maxNumbers?: number }): RetroArcadeTextResult;
    proceduralWorld(canvas: HTMLCanvasElement, options?: { seed?: number; cellSize?: number; scale?: number }): ProceduralWorldResult;
    dungeonGenerator(options?: { width?: number; height?: number; seed?: number }): DungeonGeneratorResult;
    campfireScene(canvas: HTMLCanvasElement, options?: { fireX?: number; fireY?: number; fireW?: number; fireH?: number; maxEmbers?: number; maxSmoke?: number; dpr?: number }): CampfireSceneResult;
    weatherSystem(canvas: HTMLCanvasElement, options?: { mode?: 'rain' | 'snow'; maxParticles?: number }): WeatherSystemResult;
    boidsSimulation(canvas: HTMLCanvasElement, options?: { count?: number; seed?: number }): BoidsSimulationResult;
    gestureCarousel(container: HTMLElement | string, slides: (HTMLElement | string)[], options?: { stiffness?: number; damping?: number }): GestureCarouselResult;
    timelineShowcase(elements: string | NodeListOf<Element>, overlayCanvas?: HTMLCanvasElement, options?: { brandColor?: OklchColor }): TimelineShowcaseResult;
    sparkImpact(canvas: HTMLCanvasElement, options?: { maxSparks?: number; maxFireworks?: number; shakeIntensity?: number }): SparkImpactResult;
    audioReactiveVFX(canvas: HTMLCanvasElement, options?: { maxEmbers?: number }): AudioReactiveVFXResult;
};

// ═══════════════════════════════════════════════════════════
//  v2.0 RECIPE RESULT TYPES
// ═══════════════════════════════════════════════════════════

export interface RetroArcadeTextResult extends Destroyable {
    addDamage(x: number, y: number, value: number): void;
    update(dt: number): void;
    getScore(): number;
    resetScore(): void;
}

export interface ProceduralWorldResult extends Destroyable {
    cam: CinematicCamera;
    render(dt: number): void;
    moveTo(x: number, y: number): void;
    reseed(s?: number): void;
}

export interface DungeonGeneratorResult extends Destroyable {
    grid: Uint8Array;
    width: number;
    height: number;
    spatial: SpatialGrid;
    isWalkable(x: number, y: number): boolean;
    findPath(sx: number, sy: number, ex: number, ey: number): Array<{ x: number; y: number }> | null;
    renderToCanvas(ctx: CanvasRenderingContext2D, tileSize?: number): void;
}

export interface CampfireSceneResult extends Destroyable {
    embers: EmberEngine;
    smoke: SmokeEngine;
    update(dt: number, w: number, h: number): void;
}

export interface WeatherSystemResult extends Destroyable {
    update(dt: number, w: number, h: number): void;
    setWind(v: number): void;
    setMode(m: 'rain' | 'snow'): void;
    getMode(): string;
}

export interface BoidsSimulationResult extends Destroyable {
    agents: Array<{ id: number; x: number; y: number; vx: number; vy: number; hue: number }>;
    update(dt: number): void;
}

export interface GestureCarouselResult extends Destroyable {
    goTo(index: number): void;
    getCurrentIndex(): number;
}

export interface TimelineShowcaseResult extends Destroyable {
    timeline: Timeline;
    play(): void;
}

export interface SparkImpactResult extends Destroyable {
    sparks: SparkEngine;
    fireworks: FireworksEngine;
    cam: CinematicCamera;
    explodeAt(x: number, y: number): void;
    update(dt: number): void;
}

export interface AudioReactiveVFXResult extends Destroyable {
    embers: EmberEngine;
    connectAudio(sourceNode: AudioNode): void;
    update(dt: number, w: number, h: number): void;
}

export default Recipes;