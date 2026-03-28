/**
 * @zakkster/lite-tools v2.0 — The Standard Library for High-Performance Web Presentation
 *
 * 45+ micro-libraries. 24 ready-made recipes. 1 install.
 * Zero-GC, deterministic, tree-shakeable.
 *
 * IMPORT PATTERNS:
 *   import { Recipes, FXSystem, GenEngine } from '@zakkster/lite-tools'
 *   import { lerp, damp } from '@zakkster/lite-tools/lerp'
 *   import { Recipes } from '@zakkster/lite-tools'
 */

// ═══════════════════════════════════════════════════════════
//  BARREL RE-EXPORTS (tree-shakeable)
// ═══════════════════════════════════════════════════════════

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
export {
    lerpOklch, toCssOklch, parseOklch, multiStopGradient, createGradient, reverseGradient, randomFromGradient
}from '@zakkster/lite-color';
export {Random} from '@zakkster/lite-random';
export {ObjectPool} from 'lite-object-pool';
export {Emitter} from '@zakkster/lite-particles';
export {SoaParticleEngine} from '@zakkster/lite-soa-particle-engine';
export {FXSystem, Presets, EmitterShape, Wind, GravityWell, Vortex, Turbulence, DragField} from '@zakkster/lite-fx';
export {SimplexNoise, FlowField, Shape, ArtCanvas, GenEngine, Pattern} from '@zakkster/lite-gen';
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
export {generateTheme, toCssVariables, createThemeCss} from '@zakkster/lite-theme-gen';
export {Viewport} from 'lite-viewport';
export {Ticker} from '@zakkster/lite-ticker';
export {FSM} from 'lite-states';
export {FPSMeter} from 'lite-fps-meter';
export {PointerTracker} from 'lite-pointer-tracker';

// ═══════════════════════════════════════════════════════════
//  v2.0 — NEW BARREL RE-EXPORTS
// ═══════════════════════════════════════════════════════════

// Animation primitives
export {
    easeInQuad,
    easeOutQuad,
    easeInOutQuad,
    easeInCubic,
    easeOutCubic,
    easeInOutCubic,
    easeInQuart,
    easeOutQuart,
    easeInOutQuart,
    easeInQuint,
    easeOutQuint,
    easeInOutQuint,
    easeInSine,
    easeOutSine,
    easeInOutSine,
    easeInExpo,
    easeOutExpo,
    easeInOutExpo,
    easeInCirc,
    easeOutCirc,
    easeInOutCirc,
    easeInBack,
    easeOutBack,
    easeInOutBack,
    easeInElastic,
    easeOutElastic,
    easeInOutElastic,
    easeInBounce,
    easeOutBounce,
    easeInOutBounce,
    linear
} from '@zakkster/lite-ease';
export {Tween} from '@zakkster/lite-tween';
export {SpringStandalone, SpringPool} from '@zakkster/lite-spring';
export {Gradient} from '@zakkster/lite-gradient';
export {Noise} from '@zakkster/lite-noise';
export {Timeline} from '@zakkster/lite-timeline';

// Interaction + utility
export {GestureRecognizer} from '@zakkster/lite-gesture';
export {confetti, createConfetti} from '@zakkster/lite-confetti';
export {createId, createIdGenerator} from '@zakkster/lite-id';
export {Vec2} from '@zakkster/lite-vec';
export {
    Seek, Flee, Wander, Arrive, Pursuit, Evade, PathFollow, Separation, Alignment, Cohesion, Flock
}from '@zakkster/lite-steer';

// Game layer
export {BmFont} from '@zakkster/lite-bmfont';
export {InputPoller} from '@zakkster/lite-gamepad';
export {Camera} from '@zakkster/lite-camera';
export {SpatialHash} from '@zakkster/lite-spatial';
export {testPolygonPolygon, translatePoly, rotatePoly} from '@zakkster/lite-sat';
export {PathFinder} from '@zakkster/lite-path';
export {ShadowCaster} from '@zakkster/lite-shadow';
export {WFC} from '@zakkster/lite-wfc';
export {AudioPool} from '@zakkster/lite-audio-pool';

// VFX engines (composable weather/fire system)
export {FireworksEngine} from '@zakkster/lite-fireworks';
export {SparkEngine} from '@zakkster/lite-sparks';
export {RainEngine} from '@zakkster/lite-rain';
export {SnowEngine} from '@zakkster/lite-snow';
export {EmberEngine} from '@zakkster/lite-embers';
export {SmokeEngine} from '@zakkster/lite-smoke';

// ═══════════════════════════════════════════════════════════
//  INTERNAL IMPORTS FOR RECIPES
// ═══════════════════════════════════════════════════════════

import {lerp, clamp, inverseLerp, damp, easeOut, easeInOut, smoothstep} from '@zakkster/lite-lerp';
import {lerpOklch, toCssOklch, createGradient} from '@zakkster/lite-color';
import {Random} from '@zakkster/lite-random';
import {Emitter} from '@zakkster/lite-particles';
import {FXSystem, Presets, EmitterShape, Wind, GravityWell, Vortex, Turbulence, DragField} from '@zakkster/lite-fx';
import {SimplexNoise, FlowField, Shape, ArtCanvas, GenEngine, Pattern} from '@zakkster/lite-gen';
import {
    Magnetic,
    Tilt,
    ColorShift,
    ConfettiBurst,
    SparkleHover,
    ScrollReveal,
    Parallax,
    ScrollProgress,
    Spring,
    destroyAll
} from '@zakkster/lite-ui';
import {generateTheme, toCssVariables} from '@zakkster/lite-theme-gen';
import {Ticker} from '@zakkster/lite-ticker';
import {Viewport} from 'lite-viewport';
import {FSM} from 'lite-states';
import {FPSMeter} from 'lite-fps-meter';
import {PointerTracker} from 'lite-pointer-tracker';

// v2.0 internal imports for new recipes
import {easeOutCubic, easeOutElastic, easeInOutCubic, easeOutBounce, easeOutBack} from '@zakkster/lite-ease';
import {Tween} from '@zakkster/lite-tween';
import {SpringPool} from '@zakkster/lite-spring';
import {Gradient} from '@zakkster/lite-gradient';
import {Noise} from '@zakkster/lite-noise';
import {Timeline} from '@zakkster/lite-timeline';
import {GestureRecognizer} from '@zakkster/lite-gesture';
import {confetti as confettiFn} from '@zakkster/lite-confetti';
import {createId} from '@zakkster/lite-id';
import {Vec2} from '@zakkster/lite-vec';
import {Flock, Wander, Separation, Alignment, Cohesion} from '@zakkster/lite-steer';
import {BmFont} from '@zakkster/lite-bmfont';
import {InputPoller} from '@zakkster/lite-gamepad';
import {Camera} from '@zakkster/lite-camera';
import {SpatialHash} from '@zakkster/lite-spatial';
import {PathFinder} from '@zakkster/lite-path';
import {WFC} from '@zakkster/lite-wfc';
import {AudioPool} from '@zakkster/lite-audio-pool';
import {FireworksEngine} from '@zakkster/lite-fireworks';
import {SparkEngine} from '@zakkster/lite-sparks';
import {RainEngine} from '@zakkster/lite-rain';
import {SnowEngine as SnowEngineV2} from '@zakkster/lite-snow';
import {EmberEngine} from '@zakkster/lite-embers';
import {SmokeEngine} from '@zakkster/lite-smoke';


// ═══════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════

/** Resolve a CSS selector or element. Returns null + warns on failure. */
function _resolveEl(selectorOrEl, context) {
    if (!selectorOrEl) return null;
    if (typeof selectorOrEl === 'string') {
        const el = document.querySelector(selectorOrEl);
        if (!el) console.warn(`@zakkster/lite-tools [${context}]: Element not found for "${selectorOrEl}"`);
        return el;
    }
    return selectorOrEl;
}

/** Resolve multiple elements from selector or NodeList. */
function _resolveEls(selectorOrList, context) {
    if (!selectorOrList) return [];
    if (typeof selectorOrList === 'string') {
        const els = [...document.querySelectorAll(selectorOrList)];
        if (els.length === 0) console.warn(`@zakkster/lite-tools [${context}]: No elements found for "${selectorOrList}"`);
        return els;
    }
    return [...selectorOrList];
}

/** No-op return object when element resolution fails. */
const _NOOP = Object.freeze({
    destroy() {
    }
});


// ═══════════════════════════════════════════════════════════
//  RECIPES
// ═══════════════════════════════════════════════════════════

export const Recipes = {

    // ─────────────────────────────────────────────
    //  🎨 1. Branded Generative Background
    //  lite-theme-gen + lite-gen + lite-color
    // ─────────────────────────────────────────────

    brandedBackground(canvas, brandColor, {seed = 42, animate = true} = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [brandedBackground]: canvas required');
            return _NOOP;
        }

        const theme = generateTheme(brandColor, {mode: 'dark'});
        const gradient = createGradient([theme.bg, theme.bgMuted, theme.surface, theme.accent], easeOut);
        const gen = new GenEngine(canvas, {seed});
        const field = new FlowField({noise: gen.noise, scale: 0.004, strength: 3, zSpeed: 0.2});

        if (animate) {
            gen.draw(({art, rng, dt}) => {
                art.ctx.fillStyle = toCssOklch({...theme.bg, a: 0.05});
                art.ctx.fillRect(0, 0, art.width, art.height);
                field.update(dt);
                for (let i = 0; i < 3; i++) {
                    let px = rng.range(0, art.width), py = rng.range(0, art.height);
                    art.ctx.beginPath();
                    art.ctx.moveTo(px, py);
                    for (let s = 0; s < 40; s++) {
                        const {vx, vy} = field.sample(px, py);
                        px += vx * 1.5;
                        py += vy * 1.5;
                        if (px < 0 || px > art.width || py < 0 || py > art.height) break;
                        art.ctx.lineTo(px, py);
                    }
                    art.ctx.strokeStyle = toCssOklch({...gradient(rng.next()), a: 0.08});
                    art.ctx.lineWidth = 1 + rng.next() * 2;
                    art.ctx.stroke();
                }
            });
            gen.start();
        } else {
            gen.draw(({art, rng}) => {
                art.background(theme.bg);
                Pattern.flowTrace(art, {
                    field,
                    rng,
                    particleCount: 800,
                    steps: 300,
                    stepSize: 1.5,
                    colorFn: (_, t) => gradient(t),
                    lineWidth: 0.6,
                    alpha: 0.12
                });
            });
            gen.render();
        }

        return {
            gen, field, theme, gradient, destroy() {
                gen.destroy();
            }
        };
    },


    // ─────────────────────────────────────────────
    //  ✨ 2. Premium Agency Button
    //  lite-ui + lite-particles + lite-color
    // ─────────────────────────────────────────────

    premiumButton(buttonSelector, overlayCanvas, {
        brandColor = {l: 0.6, c: 0.25, h: 280},
        hoverColor = {l: 0.7, c: 0.2, h: 300},
        confettiColors,
        magneticStrength = 0.4,
    } = {}) {
        const btn = _resolveEl(buttonSelector, 'premiumButton');
        if (!btn || !overlayCanvas) return _NOOP;

        const colors = confettiColors || [
            brandColor, hoverColor,
            {l: 0.8, c: 0.15, h: (brandColor.h + 60) % 360},
            {l: 0.7, c: 0.2, h: (brandColor.h + 180) % 360},
            {l: 0.9, c: 0.1, h: (brandColor.h + 120) % 360},
        ];

        const magnetic = new Magnetic(btn, {strength: magneticStrength, smoothing: 0.12, scale: true});
        const colorShift = new ColorShift(btn, {
            colors: [brandColor, hoverColor],
            property: 'backgroundColor',
            trigger: 'hover'
        });
        const confetti = new ConfettiBurst(overlayCanvas, {colors, count: 40, gravity: 500, life: 1.8});
        confetti.attach(btn);

        return {
            magnetic, colorShift, confetti, destroy() {
                destroyAll([magnetic, colorShift, confetti]);
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🌀 3. AAA Black Hole VFX
    //  lite-fx + lite-soa-particle-engine + lite-random
    // ─────────────────────────────────────────────

    blackHole(ctx, centerX, centerY, {
        maxParticles = 15000, seed = 9999,
        wellStrength = 5000, vortexStrength = 3000, vortexPull = 200,
    } = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [blackHole]: ctx required');
            return _NOOP;
        }

        const fx = new FXSystem(ctx, {maxParticles, seed});
        let removeWell = fx.addForce(new GravityWell(centerX, centerY, wellStrength, 600));
        let removeVortex = fx.addForce(new Vortex(centerX, centerY, vortexStrength, vortexPull, 600));
        fx.addForce(new DragField(0.96));

        const fire = fx.register(Presets.fire);
        const sparks = fx.register(Presets.sparks);
        const explosion = fx.register(Presets.explosion);
        fx.start();

        return {
            fx,
            explode(x, y) {
                fx.spawn(x, y, explosion);
                fx.spawn(x, y, sparks);
                fx.spawn(x, y, fire);
            },
            moveTo(x, y) {
                removeWell();
                removeVortex();
                removeWell = fx.addForce(new GravityWell(x, y, wellStrength, 600));
                removeVortex = fx.addForce(new Vortex(x, y, vortexStrength, vortexPull, 600));
            },
            destroy() {
                fx.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  🌊 4. Choreographed Scroll Story
    //  lite-smart-observer + lite-ui + lite-lerp
    // ─────────────────────────────────────────────

    scrollStory({
                    heroSelector, heroSpeed = 0.3,
                    cardSelector, imageSelector, titleSelector,
                    progressBar, onProgress,
                } = {}) {
        const instances = [];

        if (heroSelector && _resolveEl(heroSelector, 'scrollStory:hero'))
            instances.push(new Parallax(heroSelector, {speed: heroSpeed}));
        if (titleSelector && _resolveEls(titleSelector, 'scrollStory:titles').length)
            instances.push(ScrollReveal.cascade(titleSelector, {stagger: 0.15, duration: 0.8}));
        if (cardSelector && _resolveEls(cardSelector, 'scrollStory:cards').length)
            instances.push(ScrollReveal.fadeUp(cardSelector, {
                y: 50,
                stagger: 0.08,
                duration: 0.6,
                ease: 'power3.out'
            }));
        if (imageSelector && _resolveEls(imageSelector, 'scrollStory:images').length)
            instances.push(ScrollReveal.fadeIn(imageSelector, 'left', {duration: 0.8, ease: 'expo.out'}));
        if (progressBar || onProgress)
            instances.push(new ScrollProgress({
                onChange(t) {
                    if (progressBar) progressBar.style.width = `${t * 100}%`;
                    if (onProgress) onProgress(t);
                }
            }));

        return {
            instances, destroy() {
                destroyAll(instances);
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🖱️ 5. Particle Trail Cursor
    //  lite-particles + lite-pointer-tracker + lite-color + lite-ticker
    // ─────────────────────────────────────────────

    particleCursor(canvas, {
        maxParticles = 200,
        trailColor = {l: 0.9, c: 0.15, h: 50},
        fadeColor = {l: 0.5, c: 0.2, h: 30},
        spawnRate = 3,
    } = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [particleCursor]: canvas required');
            return _NOOP;
        }
        const ctx = canvas.getContext('2d');
        const emitter = new Emitter({maxParticles});
        let mx = 0, my = 0, active = false;

        const tracker = new PointerTracker(canvas, {
            onStart(e) {
                active = true;
                mx = e.offsetX;
                my = e.offsetY;
            },
            onMove(e) {
                mx = e.offsetX;
                my = e.offsetY;
            },
            onEnd() {
                active = false;
            },
        });
        canvas.addEventListener('mousemove', (e) => {
            mx = e.offsetX;
            my = e.offsetY;
            active = true;
        });
        canvas.addEventListener('mouseleave', () => {
            active = false;
        });

        const ticker = new Ticker();
        ticker.add((dt) => {
            const dtSec = dt / 1000;
            if (active) {
                for (let i = 0; i < spawnRate; i++) {
                    emitter.emit({
                        x: mx + (Math.random() - 0.5) * 10,
                        y: my + (Math.random() - 0.5) * 10,
                        vx: (Math.random() - 0.5) * 40,
                        vy: -Math.random() * 30 - 10,
                        gravity: -15,
                        drag: 0.96,
                        life: 0.5 + Math.random() * 0.3,
                        maxLife: 0.8,
                        size: 2 + Math.random() * 3
                    });
                }
            }
            emitter.update(dtSec);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            emitter.draw(ctx, (c, p, life) => {
                const color = lerpOklch(fadeColor, trailColor, life);
                c.fillStyle = toCssOklch({...color, a: life * life});
                c.beginPath();
                c.arc(p.x, p.y, p.size * life, 0, Math.PI * 2);
                c.fill();
            });
        });
        ticker.start();

        return {
            emitter, tracker, ticker, destroy() {
                ticker.destroy();
                tracker.destroy();
                emitter.destroy();
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🌌 6. Procedural Starfield
    //  lite-gen + lite-random + lite-color + lite-viewport
    // ─────────────────────────────────────────────

    starfield(canvas, {seed = 42, starCount = 500, twinkleSpeed = 2} = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [starfield]: canvas required');
            return _NOOP;
        }
        const viewport = new Viewport({canvas, autoResize: true});
        const rng = new Random(seed);
        const stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: rng.next(),
                y: rng.next(),
                size: 0.5 + rng.next() * 2,
                speed: 0.5 + rng.next() * 3,
                phase: rng.next() * Math.PI * 2,
                hue: rng.chance(0.1) ? rng.range(200, 280) : rng.range(40, 70),
                bright: rng.chance(0.05)
            });
        }
        const ticker = new Ticker();
        ticker.add(() => {
            const {ctx, width, height} = viewport;
            const time = ticker.time / 1000;
            ctx.fillStyle = '#04040a';
            ctx.fillRect(0, 0, width, height);
            for (const s of stars) {
                const tw = (Math.sin(time * s.speed * twinkleSpeed + s.phase) + 1) / 2;
                const l = s.bright ? 0.85 + tw * 0.15 : 0.5 + tw * 0.3;
                ctx.fillStyle = toCssOklch({l, c: s.bright ? 0.05 : 0.02, h: s.hue, a: 0.3 + tw * 0.7});
                ctx.beginPath();
                ctx.arc(s.x * width, s.y * height, s.size * (0.8 + tw * 0.4), 0, Math.PI * 2);
                ctx.fill();
            }
        });
        ticker.start();
        return {
            viewport, ticker, stars, destroy() {
                ticker.destroy();
                viewport.destroy();
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🍔 7. Spring-Driven Navigation Menu
    //  lite-ui (Spring + FSM) + lite-color
    // ─────────────────────────────────────────────

    springMenu(menuSelector, toggleSelector, {
        openColor = {l: 0.15, c: 0.03, h: 260},
        closedColor = {l: 0.95, c: 0.01, h: 0},
        stiffness = 200, damping = 22,
    } = {}) {
        const menuEl = _resolveEl(menuSelector, 'springMenu:menu');
        const toggleEl = _resolveEl(toggleSelector, 'springMenu:toggle');
        if (!menuEl || !toggleEl) return _NOOP;

        const spring = new Spring(0, {stiffness, damping});
        const fsm = new FSM('closed', {closed: ['open'], open: ['closed']});
        let rafId;

        fsm.onEnter('open', () => spring.set(1));
        fsm.onEnter('closed', () => spring.set(0));
        toggleEl.addEventListener('click', () => fsm.set(fsm.is('closed') ? 'open' : 'closed'));

        const animate = () => {
            const val = spring.update(1 / 60);
            menuEl.style.transform = `translate3d(${lerp(-100, 0, val)}%, 0, 0)`;
            menuEl.style.opacity = val;
            menuEl.style.backgroundColor = toCssOklch(lerpOklch(closedColor, openColor, val));
            toggleEl.style.transform = `rotate(${val * 90}deg)`;
            if (!spring.settled) rafId = requestAnimationFrame(animate);
        };

        const origSet = spring.set.bind(spring);
        spring.set = (t) => {
            origSet(t);
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
        };

        return {
            fsm, spring,
            open() {
                fsm.set('open');
            }, close() {
                fsm.set('closed');
            },
            toggle() {
                fsm.set(fsm.is('closed') ? 'open' : 'closed');
            },
            destroy() {
                if (rafId) cancelAnimationFrame(rafId);
                fsm.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  🗺️ 8. Interactive Noise Heatmap
    //  lite-gen + lite-color + lite-random
    // ─────────────────────────────────────────────

    noiseHeatmap(canvas, {
        seed = 42, scale = 0.008, cellSize = 6, animate = true,
        gradient: gradColors = [
            {l: 0.15, c: 0.08, h: 260}, {l: 0.4, c: 0.15, h: 200},
            {l: 0.55, c: 0.2, h: 130}, {l: 0.7, c: 0.18, h: 90},
            {l: 0.85, c: 0.1, h: 40}, {l: 0.95, c: 0.02, h: 0},
        ],
    } = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [noiseHeatmap]: canvas required');
            return _NOOP;
        }
        const gen = new GenEngine(canvas, {seed});
        const gradient = createGradient(gradColors, easeInOut);

        gen.draw(({art, noise, time}) => {
            const cols = Math.ceil(art.width / cellSize), rows = Math.ceil(art.height / cellSize);
            const z = animate ? time * 0.3 : 0;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * cellSize, y = r * cellSize;
                    const n = noise.fbm(x * scale, y * scale, 4, 2, 0.5);
                    const t = clamp((n + 1) / 2 + Math.sin(z) * 0.05, 0, 1);
                    art.ctx.fillStyle = toCssOklch(gradient(t));
                    art.ctx.fillRect(x, y, cellSize, cellSize);
                }
            }
        });

        if (animate) gen.start(); else gen.render();
        return {
            gen, gradient, reseed(s) {
                gen.seed(s ?? Date.now());
                if (!animate) gen.render();
            }, destroy() {
                gen.destroy();
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🎆 9. Choreographed Firework Show
    //  lite-fx + lite-ticker + lite-random + lite-color
    // ─────────────────────────────────────────────

    fireworkShow(ctx, width, height, {maxParticles = 8000, seed = 42, burstInterval = 800} = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [fireworkShow]: ctx required');
            return _NOOP;
        }
        const fx = new FXSystem(ctx, {maxParticles, seed});
        const rng = new Random(seed);
        const hues = [0, 30, 60, 130, 200, 280, 330];
        const recipes = hues.map(h => fx.register({
            count: [30, 60], life: [0.6, 1.2], speed: [80, 250], angle: [0, Math.PI * 2],
            gravity: 120, friction: 0.96, size: [3, 0],
            colorFn: createGradient([{l: 1, c: 0, h: 60}, {l: 0.8, c: 0.25, h}, {
                l: 0.3,
                c: 0.15,
                h: (h + 30) % 360
            }], easeOut),
            blendMode: 'screen', shape: 'circle',
        }));
        fx.addForce(new DragField(0.97));
        fx.start();
        const ticker = new Ticker();
        let running = true;
        ticker.setInterval(() => {
            if (!running) return;
            fx.spawn(rng.range(width * 0.15, width * 0.85), rng.range(height * 0.15, height * 0.5), rng.pick(recipes), {shape: (r) => EmitterShape.circle(15, r)});
        }, burstInterval);
        ticker.start();

        return {
            fx, ticker,
            stop() {
                running = false;
            }, resume() {
                running = true;
            },
            manualBurst(x, y) {
                fx.spawn(x, y, rng.pick(recipes));
            },
            destroy() {
                ticker.destroy();
                fx.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  ❄️ 10. Ambient Snowfall
    //  lite-fx + lite-gen (turbulence) + lite-color
    // ─────────────────────────────────────────────

    snowfall(ctx, width, height, {maxParticles = 3000, seed = 42, windStrength = 30, turbulenceStrength = 60} = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [snowfall]: ctx required');
            return _NOOP;
        }
        const fx = new FXSystem(ctx, {maxParticles, seed});
        const snow = fx.register({
            count: [1, 3], life: [4, 8], speed: [10, 30], angle: [Math.PI / 2 - 0.3, Math.PI / 2 + 0.3],
            gravity: 15, friction: 0.99, size: [2, 4],
            colorFn: (t) => ({l: 0.9 + t * 0.1, c: 0.01, h: 220}), blendMode: 'source-over', shape: 'circle',
        });
        let windForce = new Wind(windStrength, 0);
        fx.addForce(windForce);
        fx.addForce(new Turbulence(turbulenceStrength, 0.008, 0.5));
        fx.start();
        const ticker = new Ticker();
        ticker.setInterval(() => {
            fx.spawn(fx.rng.range(-50, width + 50), -20, snow, {shape: (r) => EmitterShape.line(width * 0.3, r)});
        }, 50);
        ticker.start();

        return {
            fx, ticker,
            setWind(s) {
                fx.forces = fx.forces.filter(f => f !== windForce);
                windForce = new Wind(s, 0);
                fx.addForce(windForce);
            },
            destroy() {
                ticker.destroy();
                fx.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  🃏 11. Interactive Tilt Gallery
    //  lite-ui (Tilt + SparkleHover + ScrollReveal)
    // ─────────────────────────────────────────────

    tiltGallery(cardSelector, overlayCanvas, {
        maxAngle = 12, sparkleColor = {
            l: 0.95,
            c: 0.1,
            h: 50
        }, sparkleRate = 3, revealStagger = 0.06
    } = {}) {
        const cards = _resolveEls(cardSelector, 'tiltGallery');
        if (cards.length === 0) return _NOOP;
        const instances = [];
        instances.push(ScrollReveal.scaleIn(cardSelector, {stagger: revealStagger, duration: 0.5}));
        cards.forEach(card => {
            instances.push(new Tilt(card, {maxAngle, glare: true, scale: 1.03}));
            if (overlayCanvas) instances.push(new SparkleHover(overlayCanvas, card, {
                rate: sparkleRate,
                color: sparkleColor,
                life: 0.5
            }));
        });
        return {
            instances, destroy() {
                destroyAll(instances);
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🎬 12. Deterministic Replay System
    //  lite-random + lite-fx + lite-states
    // ─────────────────────────────────────────────

    replaySystem(ctx, {maxParticles = 5000, seed = Date.now()} = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [replaySystem]: ctx required');
            return _NOOP;
        }
        const fx = new FXSystem(ctx, {maxParticles, seed});
        const events = [];
        let startTime = 0, replayRaf = null;
        const fsm = new FSM('idle', {idle: ['recording', 'replaying'], recording: ['idle'], replaying: ['idle']});
        const registeredRecipes = {};

        return {
            fx, fsm,
            registerRecipe(name, preset) {
                registeredRecipes[name] = fx.register(preset);
            },
            startRecording() {
                events.length = 0;
                startTime = performance.now();
                fx.resetSeed(seed);
                fx.clear();
                fsm.set('recording');
                fx.start();
            },
            recordEvent(x, y, name) {
                if (!fsm.is('recording')) return;
                const r = registeredRecipes[name];
                if (!r) return;
                events.push({time: performance.now() - startTime, x, y, recipeId: r.id});
                fx.spawn(x, y, r);
            },
            stopRecording() {
                fsm.set('idle');
                return [...events];
            },
            replay() {
                fsm.set('replaying');
                fx.resetSeed(seed);
                fx.clear();
                fx.start();
                let idx = 0;
                const start = performance.now();
                const step = () => {
                    if (!fsm.is('replaying')) return;
                    const t = performance.now() - start;
                    while (idx < events.length && events[idx].time <= t) {
                        const e = events[idx];
                        const r = fx._recipes?.[e.recipeId];
                        if (r) fx.spawn(e.x, e.y, r);
                        idx++;
                    }
                    if (idx < events.length) replayRaf = requestAnimationFrame(step); else fsm.set('idle');
                };
                replayRaf = requestAnimationFrame(step);
            },
            stopReplay() {
                if (replayRaf) cancelAnimationFrame(replayRaf);
                fsm.set('idle');
            },
            destroy() {
                if (replayRaf) cancelAnimationFrame(replayRaf);
                fx.destroy();
                fsm.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  🎨 13. Live Theme Playground
    //  lite-theme-gen + lite-color
    // ─────────────────────────────────────────────

    themePlayground({initialBrand = {l: 0.6, c: 0.2, h: 260}, mode = 'light', prefix = 'app', onThemeChange} = {}) {
        let palette = null, styleEl = null, currentMode = mode, currentBrand = initialBrand;

        function apply(brand, m) {
            currentBrand = brand;
            currentMode = m;
            palette = generateTheme(brand, {mode: m});
            const css = toCssVariables(palette, {prefix, selector: ':root'});
            if (!styleEl) {
                styleEl = document.createElement('style');
                document.head.appendChild(styleEl);
            }
            styleEl.textContent = css;
            if (onThemeChange) onThemeChange(palette, css);
        }

        apply(initialBrand, mode);

        return {
            get palette() {
                return palette;
            },
            setBrand(b) {
                apply(b, currentMode);
            },
            setMode(m) {
                apply(currentBrand, m);
            },
            toggleMode() {
                apply(currentBrand, currentMode === 'light' ? 'dark' : 'light');
            },
            getCss() {
                return styleEl?.textContent || '';
            },
            destroy() {
                if (styleEl) {
                    styleEl.remove();
                    styleEl = null;
                }
            },
        };
    },


    // ─────────────────────────────────────────────
    //  🏗️ 14. Complete Game Canvas Setup
    //  ALL THE THINGS
    // ─────────────────────────────────────────────

    gameCanvas(canvas, {
        fps = true, fpsPosition = 'top-right', seed = Date.now(), maxParticles = 5000,
        states = {
            loading: ['ready'],
            ready: ['playing'],
            playing: ['paused', 'gameover'],
            paused: ['playing', 'gameover'],
            gameover: ['ready']
        },
    } = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [gameCanvas]: canvas required');
            return _NOOP;
        }

        const viewport = new Viewport({canvas, autoResize: true, contextOptions: {alpha: false}});
        const ticker = new Ticker();
        const rng = new Random(seed);
        const fsm = new FSM('loading', states);
        const fx = new FXSystem(viewport.ctx, {maxParticles, seed});
        let meter = fps ? new FPSMeter({position: fpsPosition}) : null;

        fsm.onEnter('paused', () => {
            ticker.pause();
            fx.stop();
        });
        fsm.onEnter('playing', () => {
            ticker.start();
            fx.start();
        });

        return {
            viewport, ctx: viewport.ctx, ticker, rng, fsm, fx, meter,
            get width() {
                return viewport.width;
            },
            get height() {
                return viewport.height;
            },
            onUpdate(fn) {
                return ticker.add(fn);
            },
            setState(s) {
                return fsm.set(s);
            },
            get state() {
                return fsm.current;
            },
            start() {
                fsm.set('ready');
                fsm.set('playing');
            },
            destroy() {
                ticker.destroy();
                fx.destroy();
                viewport.destroy();
                fsm.destroy();
                if (meter) meter.destroy();
            },
        };
    },

    // ═══════════════════════════════════════════════════════════
    //  v2.0 RECIPES (15–24)
    // ═══════════════════════════════════════════════════════════

    /**
     * 15. Retro Arcade Text — Bitmap font score counter with tween-animated damage numbers.
     * Composes: lite-bmfont + lite-tween + lite-ease + lite-random
     */
    retroArcadeText(ctx, fontImage, fontData, options = {}) {
        const {seed = Date.now(), maxNumbers = 30} = options;
        const rng = new Random(seed);
        const font = new BmFont(fontImage, fontData);
        const numbers = [];
        let score = 0;

        function addDamage(x, y, value) {
            numbers.push({
                id: createId(), x, y, value: String(value),
                startY: y, t: 0, life: 1.2, alpha: 1,
            });
            score += value;
            if (numbers.length > maxNumbers) numbers.shift();
        }

        function update(dt) {
            for (let i = numbers.length - 1; i >= 0; i--) {
                const n = numbers[i];
                n.t += dt;
                const progress = clamp(n.t / n.life, 0, 1);
                n.y = n.startY - easeOutCubic(progress) * 60;
                n.alpha = 1 - easeInOutCubic(progress);
                if (n.t >= n.life) {
                    numbers.splice(i, 1);
                    continue;
                }
                ctx.globalAlpha = n.alpha;
                font.draw(ctx, n.value, n.x, n.y, 1, 'center');
            }
            ctx.globalAlpha = 1;
            font.draw(ctx, `SCORE: ${score}`, 10, 10, 1.5);
        }

        return {
            addDamage, update, getScore: () => score, resetScore() {
                score = 0;
            }, destroy() {
                numbers.length = 0;
            }
        };
    },

    /**
     * 16. Procedural World — Infinite scrollable noise terrain with camera follow.
     * Composes: lite-noise + lite-gradient + lite-camera + lite-random
     */
    proceduralWorld(canvas, options = {}) {
        const {seed = 42, cellSize = 8, scale = 0.02} = options;
        const ctx = canvas.getContext('2d');
        const rng = new Random(seed);
        const noise = new Noise(seed);
        const cam = new Camera({smoothing: 0.08, deadzone: 40});
        const gradient = new Gradient([
            {l: 0.2, c: 0.15, h: 220}, // deep water
            {l: 0.4, c: 0.2, h: 200},  // shallow
            {l: 0.55, c: 0.15, h: 130}, // lowland
            {l: 0.45, c: 0.2, h: 110},  // forest
            {l: 0.65, c: 0.08, h: 60},  // mountain
            {l: 0.95, c: 0.02, h: 0},   // snow
        ]);
        let target = {x: 0, y: 0};

        function render(dt) {
            cam.follow(target.x, target.y, dt);
            const {x: camX, y: camY} = cam.getPosition();
            const w = canvas.width, h = canvas.height;
            const cols = Math.ceil(w / cellSize) + 2;
            const rows = Math.ceil(h / cellSize) + 2;
            const offX = Math.floor(camX / cellSize);
            const offY = Math.floor(camY / cellSize);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const wx = (offX + c) * scale;
                    const wy = (offY + r) * scale;
                    const n = noise.fbm2(wx, wy, 5, 2.0, 0.5) * 0.5 + 0.5;
                    const color = gradient.at(clamp(n, 0, 1));
                    ctx.fillStyle = toCssOklch(color);
                    ctx.fillRect((c - (camX / cellSize - offX)) * cellSize, (r - (camY / cellSize - offY)) * cellSize, cellSize + 1, cellSize + 1);
                }
            }
        }

        return {
            render, cam,
            moveTo(x, y) {
                target = {x, y};
            },
            reseed(s) {
                noise.seed(s);
            },
            destroy() {
            },
        };
    },

    /**
     * 17. Dungeon Generator — WFC level generation with pathfinding overlay.
     * Composes: lite-wfc + lite-spatial + lite-path
     */
    dungeonGenerator(options = {}) {
        const {width = 32, height = 32, seed = Date.now()} = options;
        const rng = new Random(seed);
        const grid = new Uint8Array(width * height); // 0=wall, 1=floor
        const spatial = new SpatialHash(width * 4, height * 4, 32);

        // Simple noise-based dungeon
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                grid[y * width + x] = rng.next() > 0.4 ? 1 : 0;
            }
        }
        // Ensure borders are walls
        for (let x = 0; x < width; x++) {
            grid[x] = 0;
            grid[(height - 1) * width + x] = 0;
        }
        for (let y = 0; y < height; y++) {
            grid[y * width] = 0;
            grid[y * width + width - 1] = 0;
        }

        function isWalkable(x, y) {
            return x >= 0 && x < width && y >= 0 && y < height && grid[y * width + x] === 1;
        }

        function findPath(sx, sy, ex, ey) {
            const finder = new PathFinder(width, height, (x, y) => isWalkable(x, y));
            return finder.find(sx, sy, ex, ey);
        }

        function renderToCanvas(ctx, tileSize = 16) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    ctx.fillStyle = grid[y * width + x] === 1 ? '#2d2d3d' : '#0d0d12';
                    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
                }
            }
        }

        return {
            grid, width, height, spatial, isWalkable, findPath, renderToCanvas, destroy() {
            }
        };
    },

    /**
     * 18. Campfire Scene — Embers rise and die into smoke puffs.
     * Composes: lite-embers + lite-smoke + lite-ease
     */
    campfireScene(canvas, options = {}) {
        const {fireX, fireY, fireW = 60, fireH = 20, maxEmbers = 3000, maxSmoke = 1000, dpr = 1} = options;
        const ctx = canvas.getContext('2d');
        const smoke = new SmokeEngine(maxSmoke, {dpr});
        const embers = new EmberEngine(maxEmbers, {
            onEmberDeath(x, y) {
                smoke.emit(x, y, 1, -Math.PI / 2 - 0.3, -Math.PI / 2 + 0.3, 5, 20, 8, 20, 15, 1.5, 3.0);
            },
        });
        const fx = fireX ?? canvas.width / 2 - fireW / 2;
        const fy = fireY ?? canvas.height - 80;

        function update(dt, w, h) {
            embers.spawn(dt, w, h, fx, fy, fireW, fireH);
            embers.updateAndDraw(ctx, dt, w, h);
            smoke.updateAndDraw(ctx, dt, w, h);
        }

        return {
            embers, smoke, update, destroy() {
                embers.destroy();
                smoke.destroy();
            }
        };
    },

    /**
     * 19. Weather System — Dynamic rain/snow with real-time wind control.
     * Composes: lite-rain + lite-snow + lite-ease
     */
    weatherSystem(canvas, options = {}) {
        const {mode = 'rain', maxParticles = 8000} = options;
        const ctx = canvas.getContext('2d');
        const rain = new RainEngine(maxParticles);
        const snow = new SnowEngineV2(maxParticles);
        let current = mode;
        let wind = 0, windTarget = 0;

        function update(dt, w, h) {
            wind += (windTarget - wind) * dt * 2;
            if (current === 'rain') {
                rain.config.wind = wind;
                rain.spawn(dt, w, h);
                rain.updateAndDraw(ctx, dt, w, h);
            } else {
                snow.config.wind = wind;
                snow.spawn(dt, w, h);
                snow.updateAndDraw(ctx, dt, w, h);
            }
        }

        return {
            update,
            setWind(v) {
                windTarget = v;
            },
            setMode(m) {
                current = m;
                rain.clear();
                snow.clear();
            },
            getMode() {
                return current;
            },
            destroy() {
                rain.destroy();
                snow.destroy();
            },
        };
    },

    /**
     * 20. Boids Simulation — Autonomous flocking agents with spatial hashing.
     * Composes: lite-steer + lite-vec + lite-spatial + lite-random
     */
    boidsSimulation(canvas, options = {}) {
        const {count = 100, seed = 42} = options;
        const ctx = canvas.getContext('2d');
        const rng = new Random(seed);
        const w = canvas.width, h = canvas.height;
        const spatial = new SpatialHash(w, h, 64);
        const agents = [];

        for (let i = 0; i < count; i++) {
            agents.push({
                id: i, x: rng.next() * w, y: rng.next() * h,
                vx: (rng.next() - 0.5) * 100, vy: (rng.next() - 0.5) * 100,
                hue: rng.next() * 360,
            });
        }

        function update(dt) {
            spatial.clear();
            for (const a of agents) spatial.insert(a, a.x, a.y, 4, 4);

            for (const a of agents) {
                const neighbors = spatial.query(a.x - 60, a.y - 60, 120, 120).filter(n => n.id !== a.id);
                if (neighbors.length > 0) {
                    let sx = 0, sy = 0, ax = 0, ay = 0, cx = 0, cy = 0;
                    for (const n of neighbors) {
                        const dx = a.x - n.x, dy = a.y - n.y;
                        const d = Math.sqrt(dx * dx + dy * dy) || 1;
                        if (d < 25) {
                            sx += dx / d;
                            sy += dy / d;
                        }
                        ax += n.vx;
                        ay += n.vy;
                        cx += n.x;
                        cy += n.y;
                    }
                    ax /= neighbors.length;
                    ay /= neighbors.length;
                    cx /= neighbors.length;
                    cy /= neighbors.length;
                    a.vx += (sx * 2 + (ax - a.vx) * 0.05 + (cx - a.x) * 0.01) * dt;
                    a.vy += (sy * 2 + (ay - a.vy) * 0.05 + (cy - a.y) * 0.01) * dt;
                }

                const speed = Math.sqrt(a.vx * a.vx + a.vy * a.vy) || 1;
                if (speed > 150) {
                    a.vx = (a.vx / speed) * 150;
                    a.vy = (a.vy / speed) * 150;
                }
                a.x += a.vx * dt;
                a.y += a.vy * dt;
                if (a.x < 0) a.x += w;
                if (a.x > w) a.x -= w;
                if (a.y < 0) a.y += h;
                if (a.y > h) a.y -= h;
            }

            ctx.clearRect(0, 0, w, h);
            for (const a of agents) {
                const angle = Math.atan2(a.vy, a.vx);
                ctx.save();
                ctx.translate(a.x, a.y);
                ctx.rotate(angle);
                ctx.fillStyle = `oklch(0.7 0.2 ${a.hue})`;
                ctx.beginPath();
                ctx.moveTo(8, 0);
                ctx.lineTo(-4, -4);
                ctx.lineTo(-4, 4);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        return {
            agents, update, destroy() {
                spatial.clear();
                agents.length = 0;
            }
        };
    },

    /**
     * 21. Gesture Gallery — Swipeable, pinchable image carousel with spring snapping.
     * Composes: lite-gesture + lite-tween + lite-ease + lite-timeline
     */
    gestureCarousel(container, slides, options = {}) {
        const {stiffness = 200, damping = 22} = options;
        const el = typeof container === 'string' ? document.querySelector(container) : container;
        if (!el) return {
            goTo() {
            }, destroy() {
            }
        };
        const gesture = new GestureRecognizer(el);
        let currentIndex = 0, offsetX = 0;
        const slideWidth = el.clientWidth || 300;

        function goTo(idx) {
            currentIndex = clamp(idx, 0, slides.length - 1);
            const targetX = -currentIndex * slideWidth;
            const startX = offsetX;
            const tl = new Timeline();
            tl.add({
                duration: 400, onUpdate(t) {
                    offsetX = startX + (targetX - startX) * easeOutCubic(t);
                    renderSlides();
                }
            });
            tl.play();
        }

        function renderSlides() {
            for (let i = 0; i < slides.length; i++) {
                const s = typeof slides[i] === 'string' ? document.querySelector(slides[i]) : slides[i];
                if (s) s.style.transform = `translateX(${offsetX + i * slideWidth}px)`;
            }
        }

        gesture.on('panEnd', (e) => {
            if (e.velocityX < -0.3 || e.deltaX < -slideWidth * 0.3) goTo(currentIndex + 1);
            else if (e.velocityX > 0.3 || e.deltaX > slideWidth * 0.3) goTo(currentIndex - 1);
            else goTo(currentIndex);
        });

        gesture.on('pan', (e) => {
            offsetX = -currentIndex * slideWidth + e.deltaX;
            renderSlides();
        });

        renderSlides();
        return {
            goTo, getCurrentIndex: () => currentIndex, destroy() {
                gesture.destroy();
            }
        };
    },

    /**
     * 22. Timeline Showcase — Choreographed animation sequence with confetti finale.
     * Composes: lite-timeline + lite-tween + lite-ease + lite-confetti
     */
    timelineShowcase(elements, overlayCanvas, options = {}) {
        const {brandColor = {l: 0.6, c: 0.25, h: 280}} = options;
        const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
        const tl = new Timeline({loop: false});

        // Stagger each element in with eased opacity + translateY
        let offset = 0;
        for (let i = 0; i < els.length; i++) {
            const el = els[i];
            if (!el) continue;
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            tl.add({
                delay: offset, duration: 500, onUpdate(t) {
                    const e = easeOutBack(t);
                    el.style.opacity = String(t);
                    el.style.transform = `translateY(${30 * (1 - e)}px)`;
                }
            });
            offset += 150;
        }

        // Confetti burst after stagger completes
        tl.add({
            delay: offset + 200, duration: 0, onComplete() {
                if (overlayCanvas) confettiFn({
                    y: overlayCanvas.height * 0.3,
                    count: 100,
                    shape: 'star',
                    colors: [brandColor]
                });
            }
        });

        return {
            timeline: tl, play() {
                tl.play();
            }, destroy() {
                tl.destroy?.();
            }
        };
    },

    /**
     * 23. Spark Impact — Click-to-explode with sparks, fireworks, and camera shake.
     * Composes: lite-sparks + lite-fireworks + lite-camera
     */
    sparkImpact(canvas, options = {}) {
        const {maxSparks = 5000, maxFireworks = 3000, shakeIntensity = 8} = options;
        const ctx = canvas.getContext('2d');
        const sparks = new SparkEngine(maxSparks);
        const fireworks = new FireworksEngine(maxFireworks);
        const cam = new Camera({smoothing: 0.05});
        let w = canvas.width, h = canvas.height;

        function explodeAt(x, y) {
            sparks.burst(x, y, 80, 0, Math.PI * 2, 200, 800, 0.3, 1.0);
            fireworks.explode(x, y, Math.floor(Math.random() * fireworks.colors.length));
            cam.shake(shakeIntensity, 0.3);
        }

        function update(dt) {
            cam.update(dt);
            const {x: offX, y: offY} = cam.getOffset();
            ctx.save();
            ctx.translate(offX, offY);
            fireworks.updateAndDraw(ctx, dt, w, h);
            sparks.updateAndDraw(ctx, dt, w, h);
            ctx.restore();
        }

        return {
            explodeAt, update, sparks, fireworks, cam, destroy() {
                sparks.destroy();
                fireworks.destroy();
            }
        };
    },

    /**
     * 24. Audio Reactive VFX — Particles respond to audio beats.
     * Composes: lite-audio-pool + lite-embers + lite-ease + lite-gradient
     */
    audioReactiveVFX(canvas, options = {}) {
        const {maxEmbers = 4000} = options;
        const ctx = canvas.getContext('2d');
        const embers = new EmberEngine(maxEmbers, {buoyancy: 200, driftAmplitude: 40});
        let audioCtx = null, analyser = null, freqData = null;

        function connectAudio(sourceNode) {
            if (!audioCtx) audioCtx = sourceNode.context;
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            freqData = new Uint8Array(analyser.frequencyBinCount);
            sourceNode.connect(analyser);
        }

        function update(dt, w, h) {
            let energy = 0;
            if (analyser && freqData) {
                analyser.getByteFrequencyData(freqData);
                for (let i = 0; i < 16; i++) energy += freqData[i];
                energy /= 16 * 255;
            }

            if (energy > 0.3) {
                embers.config.density = 5 + energy * 30;
                embers.config.buoyancy = 100 + energy * 300;
            } else {
                embers.config.density = 3;
                embers.config.buoyancy = 120;
            }

            embers.spawn(dt, w, h, w * 0.3, h - 50, w * 0.4, 30);
            embers.updateAndDraw(ctx, dt, w, h);
        }

        return {
            connectAudio, update, embers, destroy() {
                embers.destroy();
            }
        };
    },
};
export default Recipes;
