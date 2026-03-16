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
export {Ticker} from 'lite-ticker';
export {FSM} from 'lite-fsm';
export {FPSMeter} from 'lite-fps-meter';
export {PointerTracker} from 'lite-pointer-tracker';


// ═══════════════════════════════════════════════════════════
//  RECIPE TYPES
// ═══════════════════════════════════════════════════════════

import type {OklchColor} from '@zakkster/lite-color';
import type {FXSystem} from '@zakkster/lite-fx';
import type {GenEngine, FlowField, SimplexNoise} from '@zakkster/lite-gen';
import type {Magnetic, ColorShift, ConfettiBurst, Spring} from '@zakkster/lite-ui';
import type {ThemePalette} from '@zakkster/lite-theme-gen';
import type

Random
from
'@zakkster/lite-random';
import type {Emitter} from '@zakkster/lite-particles';
import type {Ticker} from 'lite-ticker';
import type {Viewport} from 'lite-viewport';
import type {FSM} from 'lite-fsm';
import type {FPSMeter} from 'lite-fps-meter';
import type {PointerTracker} from 'lite-pointer-tracker';

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
};

export default Recipes;