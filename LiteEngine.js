/**
 * @zakkster/lite-tools v2.1 — The Standard Library for High-Performance Web Presentation
 *
 * 45+ micro-libraries. 27 ready-made recipes. 1 install.
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
export {TweenManager} from '@zakkster/lite-tween';
export {Spring as SpringDamped, SpringPool} from '@zakkster/lite-spring';
export {Gradient} from '@zakkster/lite-gradient';
export {seedNoise, simplex2, simplex3, fbm2, fbm3, curl2} from '@zakkster/lite-noise';
export {createTimeline} from '@zakkster/lite-timeline';

// Interaction + utility
export {GestureTracker} from '@zakkster/lite-gesture';
export {confetti, createConfetti} from '@zakkster/lite-confetti';
export {liteId} from '@zakkster/lite-id';
export {vec2} from '@zakkster/lite-vec';
export {
    seek,
    flee,
    wander,
    arrive,
    followFlow,
    wrap,
    bounce,
    avoidEdges,
    orbit,
    swirlToward,
    alignment,
    cohesion,
    separation,
    curl,
    projectToSegment,
    followPath
}from '@zakkster/lite-steer';

export {SpriteCache} from '@zakkster/lite-sprite-cache';
export {FastBit32, BitMapper} from '@zakkster/lite-fastbit32';

// Game layer
export {BitmapFont} from '@zakkster/lite-bmfont';
export {InputVectorizer} from '@zakkster/lite-gamepad';
export {CinematicCamera} from '@zakkster/lite-camera';
export {SpatialGrid} from '@zakkster/lite-spatial';
export {testPolygonPolygon, translatePoly, rotatePoly} from '@zakkster/lite-sat';
export {Pathfinder} from '@zakkster/lite-path';
export {VisibilityCaster} from '@zakkster/lite-shadow';
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
import {TweenManager} from '@zakkster/lite-tween';
import {SpringPool} from '@zakkster/lite-spring';
import {Gradient} from '@zakkster/lite-gradient';
import {seedNoise, fbm2} from '@zakkster/lite-noise';
import {createTimeline} from '@zakkster/lite-timeline';
import {GestureTracker} from '@zakkster/lite-gesture';
import {confetti as confettiFn} from '@zakkster/lite-confetti';
import {liteId} from '@zakkster/lite-id';
import {vec2} from '@zakkster/lite-vec';
import {separation, wander, alignment, cohesion} from '@zakkster/lite-steer';
import {BitmapFont} from '@zakkster/lite-bmfont';
import {InputVectorizer} from '@zakkster/lite-gamepad';
import {CinematicCamera} from '@zakkster/lite-camera';
import {SpatialGrid} from '@zakkster/lite-spatial';
import {Pathfinder} from '@zakkster/lite-path';
import {WFC} from '@zakkster/lite-wfc';
import {AudioPool} from '@zakkster/lite-audio-pool';
import {FireworksEngine} from '@zakkster/lite-fireworks';
import {SparkEngine} from '@zakkster/lite-sparks';
import {RainEngine} from '@zakkster/lite-rain';
import {SnowEngine as SnowEngineV2} from '@zakkster/lite-snow';
import {EmberEngine} from '@zakkster/lite-embers';
import {SmokeEngine} from '@zakkster/lite-smoke';

import {SpriteCache} from '@zakkster/lite-sprite-cache';
import {
    FastBit32,
    BitMapper,
    forEachArray,
    forEachMapped,
    forEachMappedObject,
    forEachMaskDiff,
    forEachMaskPair,
    forEachMaskUnion,
    forEachObject
} from '@zakkster/lite-fastbit32';


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
        const grad = new Gradient([theme.bg, theme.bgMuted, theme.surface, theme.accent]);
        const gen = new GenEngine(canvas, {seed});
        const field = new FlowField({noise: gen.noise, scale: 0.004, strength: 3, zSpeed: 0.2});

        if (animate) {
            // 1. LIGHTER FADE: Change 0.05 to 0.01 or 0.02.
            // This allows lines to stay on screen for ~50-100 frames instead of 20.
            const bgFillStr = toCssOklch({l: theme.bg.l, c: theme.bg.c, h: theme.bg.h, a: 0.01});

            const tempColor = {l: 0, c: 0, h: 0, a: 0.15}; // 2. HIGHER LINE ALPHA: 0.08 -> 0.15

            gen.draw(({art, rng, dt}) => {
                art.ctx.fillStyle = bgFillStr;
                art.ctx.fillRect(0, 0, art.width, art.height);

                field.update(dt / 1000); // Ensure dt is in seconds!

                // 3. MORE SEEDS: Increase i < 3 to i < 15
                // This spawns more "life" into the field per frame.
                for (let i = 0; i < 15; i++) {
                    let px = rng.range(0, art.width), py = rng.range(0, art.height);
                    art.ctx.beginPath();
                    art.ctx.moveTo(px, py);

                    for (let s = 0; s < 40; s++) {
                        const {vx, vy} = field.sample(px, py);
                        px += vx * 2.0; // Slightly faster steps
                        py += vy * 2.0;
                        if (px < 0 || px > art.width || py < 0 || py > art.height) break;
                        art.ctx.lineTo(px, py);
                    }

                    grad.at(rng.next(), tempColor);
                    art.ctx.strokeStyle = toCssOklch(tempColor);
                    art.ctx.lineWidth = 1 + rng.next() * 1.5;
                    art.ctx.stroke();
                }
            });
            gen.start();
        } else {
            gen.draw(({art, rng}) => {
                art.background(theme.bg);
                const _c = {l: 0, c: 0, h: 0};
                Pattern.flowTrace(art, {
                    field, rng,
                    particleCount: 800, steps: 300, stepSize: 1.5,
                    colorFn: (_, t) => {
                        grad.at(t, _c);
                        return _c;
                    },
                    lineWidth: 0.6, alpha: 0.12
                });
            });
            gen.render();
        }

        return {
            gen, field, theme, gradient: grad, destroy() {
                gen.destroy();
                grad.destroy();
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
        const well = new GravityWell(centerX, centerY, wellStrength, 600);
        const vortex = new Vortex(centerX, centerY, vortexStrength, vortexPull, 600);
        fx.addForce(well);
        fx.addForce(vortex);
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
                // FXSystem's GravityWell/Vortex store coordinates as .px/.py — NOT .x/.y.
                // Mutate the actual fields the physics loop reads, in place — zero allocations.
                well.px = x;
                well.py = y;
                vortex.px = x;
                vortex.py = y;
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
        maxParticles = 1000,
        trailColor = {l: 0.8, c: 0.2, h: 280},
        fadeColor = {l: 0.5, c: 0.1, h: 220},
        spawnRate = 3,
    } = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [particleCursor]: canvas required');
            return _NOOP;
        }
        const ctx = canvas.getContext('2d');
        const emitter = new Emitter({maxParticles});
        const tracker = new PointerTracker(canvas);
        const ticker = new Ticker();

        // Pre-compute palette of CSS strings (runs once at init)
        const palette = [];
        for (let i = 0; i <= 10; i++) {
            palette.push(toCssOklch(lerpOklch(trailColor, fadeColor, i / 10)));
        }

        // Pre-allocate a single spawn config object (mutated per-emit, zero GC)
        const spawnConfig = {
            x: 0, y: 0, vx: 0, vy: 0, gravity: -15, drag: 0.96,
            life: 0, maxLife: 1.0, size: 0, color: ''
        };

        let mx = 0, my = 0, active = false;
        // Named handlers — kept as references so destroy() can remove them.
        const onMouseMove = (e) => {
            mx = e.offsetX;
            my = e.offsetY;
            active = true;
        };
        const onMouseLeave = () => {
            active = false;
        };
        const onTouchMove = (e) => {
            const t = e.touches[0], r = canvas.getBoundingClientRect();
            mx = t.clientX - r.left;
            my = t.clientY - r.top;
            active = true;
        };
        const onTouchEnd = () => {
            active = false;
        };
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseleave', onMouseLeave);
        canvas.addEventListener('touchmove', onTouchMove, {passive: true});
        canvas.addEventListener('touchend', onTouchEnd);

        ticker.add((dt) => {
            // 1. PATCH: Convert the ticker's milliseconds into seconds
            const dtSec = dt / 1000;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (active) {
                for (let i = 0; i < spawnRate; i++) {
                    spawnConfig.x = mx + (Math.random() - 0.5) * 10;
                    spawnConfig.y = my + (Math.random() - 0.5) * 10;
                    spawnConfig.vx = (Math.random() - 0.5) * 40;
                    spawnConfig.vy = -Math.random() * 30 - 10;
                    spawnConfig.life = 0.5 + Math.random() * 0.5;
                    spawnConfig.size = 2 + Math.random() * 4;
                    spawnConfig.color = palette[Math.floor(Math.random() * palette.length)];
                    emitter.emit(spawnConfig);
                }
            }

            // 2. PATCH: Pass the seconds into the physics update!
            emitter.update(dtSec);

            ctx.globalCompositeOperation = 'screen';
            emitter.draw(ctx, (c, p, life) => {
                c.fillStyle = p.color;
                c.globalAlpha = life;
                c.beginPath();
                c.arc(p.x, p.y, p.size * life, 0, Math.PI * 2);
                c.fill();
            });
            ctx.globalCompositeOperation = 'source-over';
        });

        ticker.start();

        return {
            emitter, tracker, ticker, destroy() {
                canvas.removeEventListener('mousemove', onMouseMove);
                canvas.removeEventListener('mouseleave', onMouseLeave);
                canvas.removeEventListener('touchmove', onTouchMove);
                canvas.removeEventListener('touchend', onTouchEnd);
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

    starfield(canvas, {seed = 42, starCount = 400, twinkleSpeed = 2} = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [starfield]: canvas required');
            return _NOOP;
        }
        const ctx = canvas.getContext('2d');
        const viewport = new Viewport({canvas, autoResize: true});
        const rng = new Random(seed);
        const stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: rng.next(), y: rng.next(),
                size: 0.5 + rng.next() * 2,
                speed: 0.5 + rng.next() * 3,
                phase: rng.next() * Math.PI * 2,
                hue: rng.next() < 0.1 ? rng.range(200, 280) : rng.range(40, 70),
                bright: rng.next() < 0.05,
            });
        }
        // Pre-allocate a single color object for all stars (zero GC in hot path)
        const _tc = {l: 0, c: 0, h: 0, a: 0};
        const ticker = new Ticker();
        let t0 = performance.now();

        ticker.add(() => {
            const time = (performance.now() - t0) / 1000;
            const {width: W, height: H} = viewport;
            ctx.fillStyle = '#04040a';
            ctx.fillRect(0, 0, W, H);
            for (let i = 0; i < starCount; i++) {
                const s = stars[i];
                const tw = (Math.sin(time * s.speed * twinkleSpeed + s.phase) + 1) / 2;
                _tc.l = s.bright ? 0.85 + tw * 0.15 : 0.5 + tw * 0.3;
                _tc.c = s.bright ? 0.05 : 0.02;
                _tc.h = s.hue;
                _tc.a = 0.3 + tw * 0.7;
                ctx.fillStyle = toCssOklch(_tc);
                ctx.beginPath();
                ctx.arc(s.x * W, s.y * H, s.size * (0.8 + tw * 0.4), 0, Math.PI * 2);
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
        const onToggleClick = () => fsm.set(fsm.is('closed') ? 'open' : 'closed');
        toggleEl.addEventListener('click', onToggleClick);

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
                toggleEl.removeEventListener('click', onToggleClick);
                if (rafId) cancelAnimationFrame(rafId);
                fsm.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  🗺️ 8. Noise Terrain Heatmap
    //  lite-noise + lite-gradient + lite-color
    // ─────────────────────────────────────────────

    noiseHeatmap(canvas, {
        seed = 42, scale = 0.02, cellSize = 4, animate = false,
        gradient: gradientColors = [
            {l: 0.15, c: 0.10, h: 240}, {l: 0.35, c: 0.15, h: 210},
            {l: 0.50, c: 0.18, h: 130}, {l: 0.60, c: 0.08, h: 50},
            {l: 0.92, c: 0.02, h: 0},
        ],
    } = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [noiseHeatmap]: canvas required');
            return _NOOP;
        }
        const ctx = canvas.getContext('2d');
        const grad = new Gradient(gradientColors);
        // Pre-allocate a single color object (saves 30,000+ allocs/frame on large canvases)
        const _tc = {l: 0, c: 0, h: 0};
        let currentSeed = seed;
        let t = 0, rafId;

        function render(timeOff) {
            seedNoise(currentSeed);
            const w = canvas.width, h = canvas.height;
            const cols = Math.ceil(w / cellSize), rows = Math.ceil(h / cellSize);
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const n = fbm2(c * scale, r * scale + timeOff, 4, 2.0, 0.5);
                    const val = clamp(n * 0.5 + 0.5, 0, 1);
                    grad.at(val, _tc);
                    ctx.fillStyle = toCssOklch(_tc);
                    ctx.fillRect(c * cellSize, r * cellSize, cellSize + 1, cellSize + 1);
                }
            }
        }

        if (animate) {
            let lt = performance.now();
            const loop = (now) => {
                const dt = Math.min((now - lt) / 1000, 0.1);
                lt = now;
                t += dt * 0.5;
                render(t);
                rafId = requestAnimationFrame(loop);
            };
            rafId = requestAnimationFrame(loop);
        } else {
            render(0);
        }

        return {
            gradient: grad,
            reseed(s) {
                currentSeed = s ?? (Date.now() | 0);
                if (!animate) render(0);
            },
            destroy() {
                if (rafId) cancelAnimationFrame(rafId);
                grad.destroy();
            }
        };
    },


    // ─────────────────────────────────────────────
    //  🎆 9. Choreographed Firework Show
    //  lite-fireworks + lite-ticker + lite-random
    // ─────────────────────────────────────────────

    fireworkShow(ctx, width, height, {maxParticles = 8000, seed = 42, burstInterval = 800} = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [fireworkShow]: ctx required');
            return _NOOP;
        }
        const engine = new FireworksEngine(maxParticles, {seed});
        const ticker = new Ticker();
        const rng = new Random(seed);
        let timeSinceLastBurst = 0, isAuto = true;

        ticker.add((dt) => {
            ctx.fillStyle = 'rgba(10,10,10,0.2)';
            ctx.fillRect(0, 0, width, height);

            if (isAuto) {
                timeSinceLastBurst += dt;
                if (timeSinceLastBurst >= burstInterval) {
                    timeSinceLastBurst = 0;
                    engine.launch(
                        width * 0.2 + rng.next() * width * 0.6,
                        height,
                        height * 0.1 + rng.next() * height * 0.4
                    );
                }
            }
            engine.updateAndDraw(ctx, dt / 1000, width, height);
        });
        ticker.start();

        return {
            fx: engine, ticker,
            stop() {
                isAuto = false;
            },
            resume() {
                isAuto = true;
            },
            manualBurst(x, y) {
                engine.launch(x, height, y);
            },
            destroy() {
                ticker.destroy();
                engine.destroy();
            },
        };
    },


    // ─────────────────────────────────────────────
    //  ❄️ 10. Cinematic Snowfall
    //  lite-snow + lite-ticker
    // ─────────────────────────────────────────────

    snowfall(ctx, width, height, {maxParticles = 8000, seed = 42, windStrength = 100, turbulenceStrength = 20} = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [snowfall]: ctx required');
            return _NOOP;
        }
        const snow = new SnowEngineV2(maxParticles, {seed, wind: windStrength, turbulence: turbulenceStrength});
        const ticker = new Ticker();

        ticker.add((dt) => {
            ctx.clearRect(0, 0, width, height);
            snow.spawn(dt, width, height);
            snow.updateAndDraw(ctx, dt, width, height);
        });
        ticker.start();

        return {
            fx: snow, ticker,
            setWind(w) {
                snow.config.wind = w;
            },
            destroy() {
                ticker.destroy();
                snow.destroy();
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

    replaySystem(ctx, {maxParticles = 5000, seed = Date.now(), maxFrames = 3600} = {}) {
        if (!ctx) {
            console.warn('@zakkster/lite-tools [replaySystem]: ctx required');
            return _NOOP;
        }
        const fx = new FXSystem(ctx, {maxParticles, seed});
        // Pre-allocated recording tape: [x, y, time, recipeId] per frame — zero GC during recording
        const tape = new Float32Array(maxFrames * 4);
        let tapeHead = 0, tapeLen = 0;
        let startTime = 0, replayRaf = null;
        const fsm = new FSM('idle', {idle: ['recording', 'replaying'], recording: ['idle'], replaying: ['idle']});
        const registeredRecipes = {};
        // Local id-indexed array — avoids reaching into fx._recipes (engine internals).
        const recipesById = [];

        return {
            fx, fsm,
            registerRecipe(name, preset) {
                const r = fx.register(preset);
                registeredRecipes[name] = r;
                recipesById[r.id] = r;
            },
            startRecording() {
                tapeHead = 0;
                tapeLen = 0;
                startTime = performance.now();
                fx.resetSeed(seed);
                fx.clear();
                fsm.set('recording');
                fx.start();
            },
            recordEvent(x, y, name) {
                if (!fsm.is('recording')) return;
                const r = registeredRecipes[name];
                if (!r || tapeHead >= maxFrames * 4) return;
                tape[tapeHead++] = x;
                tape[tapeHead++] = y;
                tape[tapeHead++] = performance.now() - startTime;
                tape[tapeHead++] = r.id ?? 0;
                tapeLen = tapeHead / 4;
                fx.spawn(x, y, r);
            },
            stopRecording() {
                fsm.set('idle');
                return tapeLen;
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
                    while (idx < tapeLen) {
                        const off = idx * 4;
                        if (tape[off + 2] > t) break;
                        const rId = tape[off + 3];
                        const r = recipesById[rId];
                        if (r) fx.spawn(tape[off], tape[off + 1], r);
                        idx++;
                    }
                    if (idx < tapeLen) replayRaf = requestAnimationFrame(step); else fsm.set('idle');
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

        // Ticker runs continuously — FSM state is queried per-tick (no closure leaks)
        fx.start();

        return {
            viewport, ctx: viewport.ctx, ticker, rng, fsm, fx, meter,
            get width() {
                return viewport.width;
            },
            get height() {
                return viewport.height;
            },
            onUpdate(fn) {
                // Wraps user callback to only fire during 'playing' state
                return ticker.add((dt) => {
                    if (fsm.current === 'playing') fn(dt);
                });
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
                ticker.start();
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
        const font = new BitmapFont(fontImage, fontData);
        const numbers = [];
        let score = 0;
        let scoreStr = 'SCORE: 0'; // Cached — only rebuilt when score changes

        function addDamage(x, y, value) {
            numbers.push({
                id: liteId(), x, y, value: String(value),
                startY: y, t: 0, life: 1.2, alpha: 1,
            });
            score += value;
            scoreStr = 'SCORE: ' + score; // Rebuild once per event, not per frame
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
            font.draw(ctx, scoreStr, 10, 10, 1.5);
        }

        return {
            addDamage, update, getScore: () => score, resetScore() {
                score = 0;
                scoreStr = 'SCORE: 0';
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
        if (!canvas) {
            console.warn('@zakkster/lite-tools [proceduralWorld]: canvas required');
            return _NOOP;
        }
        const {seed = 42, cellSize = 8, scale = 0.02} = options;
        const ctx = canvas.getContext('2d');
        const rng = new Random(seed);
        seedNoise(seed);
        const w = canvas.width || 800, h = canvas.height || 600;
        const cam = new CinematicCamera(w, h, w * 4, h * 4, seed);
        cam.lerpSpeed = 5.0;
        cam.deadzoneX = 40;
        cam.deadzoneY = 40;
        const gradient = new Gradient([
            {l: 0.2, c: 0.15, h: 220}, // deep water
            {l: 0.4, c: 0.2, h: 200},  // shallow
            {l: 0.55, c: 0.15, h: 130}, // lowland
            {l: 0.45, c: 0.2, h: 110},  // forest
            {l: 0.65, c: 0.08, h: 60},  // mountain
            {l: 0.95, c: 0.02, h: 0},   // snow
        ]);
        const _colorOut = {l: 0, c: 0, h: 0};
        // Pre-allocate the camera target so moveTo() doesn't allocate per call.
        const target = {x: w * 2, y: h * 2};

        function render(dt) {
            cam.update(dt, target.x, target.y);
            const camX = cam.pos[0], camY = cam.pos[1];
            const cols = Math.ceil(w / cellSize) + 2;
            const rows = Math.ceil(h / cellSize) + 2;
            const offX = Math.floor(camX / cellSize);
            const offY = Math.floor(camY / cellSize);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const wx = (offX + c) * scale;
                    const wy = (offY + r) * scale;
                    const n = fbm2(wx, wy, 5, 2.0, 0.5) * 0.5 + 0.5;
                    gradient.at(clamp(n, 0, 1), _colorOut);
                    ctx.fillStyle = toCssOklch(_colorOut);
                    ctx.fillRect((c - (camX / cellSize - offX)) * cellSize, (r - (camY / cellSize - offY)) * cellSize, cellSize + 1, cellSize + 1);
                }
            }
        }

        return {
            render, cam,
            moveTo(x, y) {
                // Mutate in place — zero allocations even when called every frame.
                target.x = x;
                target.y = y;
            },
            reseed(s) {
                seedNoise(s);
            },
            destroy() {
                cam.destroy();
                gradient.destroy();
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
        const spatial = new SpatialGrid(width * 4, height * 4, 32, 1000);

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

        // --- PATCHED PATHFINDING LOGIC ---

        // 1. Instantiate ONCE to take advantage of the O(1) epoch reset
        // Assuming Pathfinder takes (cols, rows, grid) based on the engine source
        const finder = new Pathfinder(width, height, grid);

        // 2. Pre-allocate the Zero-GC buffer for the engine to write into
        // Max possible path length is width * height. 2 floats (x,y) per waypoint.
        const pathBuffer = new Float32Array(width * height * 2);
        // Reusable result array — cleared and re-populated on each findPath call.
        // Avoids allocating a new outer array per pathfinding query.
        const pathResult = [];

        function findPath(sx, sy, ex, ey) {
            const waypointCount = finder.findPath(sx, sy, ex, ey, pathBuffer);
            // Trim or grow the cached array to match waypoint count.
            pathResult.length = waypointCount;
            for (let i = 0; i < waypointCount; i++) {
                // Reuse existing tuple slot if present, else create a new one.
                const slot = pathResult[i];
                if (slot) {
                    slot[0] = pathBuffer[i * 2];
                    slot[1] = pathBuffer[(i * 2) + 1];
                } else {
                    pathResult[i] = [pathBuffer[i * 2], pathBuffer[(i * 2) + 1]];
                }
            }
            return pathResult;
        }

        // ---------------------------------

        function renderToCanvas(ctx, tileSize = 16) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    ctx.fillStyle = grid[y * width + x] === 1 ? '#2d2d3d' : '#0d0d12';
                    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
                }
            }
        }

        return {
            grid, width, height, spatial, isWalkable, findPath, pathBuffer, renderToCanvas,
            destroy() {
                spatial.destroy();
                pathResult.length = 0;
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
        if (!canvas) {
            console.warn('@zakkster/lite-tools [boidsSimulation]: canvas required');
            return _NOOP;
        }
        const {count = 100, seed = 42} = options;
        const ctx = canvas.getContext('2d');
        const rng = new Random(seed);
        const w = canvas.width, h = canvas.height;
        const spatial = new SpatialGrid(w, h, 64, count);
        // SpatialGrid.queryBox SILENTLY TRUNCATES at outBuffer.length.
        // Sizing to `count` guarantees we never miss a neighbor in a dense flock.
        const _queryBuf = new Int32Array(count);
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
            for (const a of agents) spatial.insert(a.id, a.x, a.y);

            for (const a of agents) {
                const n = spatial.queryRadius(a.x, a.y, 60, _queryBuf, true);
                let sx = 0, sy = 0, ax = 0, ay = 0, cx = 0, cy = 0, nc = 0;
                for (let j = 0; j < n; j++) {
                    const nId = _queryBuf[j];
                    if (nId === a.id) continue;
                    const nb = agents[nId];
                    nc++;
                    const dx = a.x - nb.x, dy = a.y - nb.y;
                    const d = Math.sqrt(dx * dx + dy * dy) || 1;
                    if (d < 25) {
                        sx += dx / d;
                        sy += dy / d;
                    }
                    ax += nb.vx;
                    ay += nb.vy;
                    cx += nb.x;
                    cy += nb.y;
                }
                if (nc > 0) {
                    ax /= nc;
                    ay /= nc;
                    cx /= nc;
                    cy /= nc;
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
                spatial.destroy();
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
        if (!el) {
            console.warn('@zakkster/lite-tools [gestureCarousel]: container not found');
            return {
                goTo() {
                },
                getCurrentIndex() {
                    return 0;
                },
                destroy() {
                }
            };
        }
        let currentIndex = 0, offsetX = 0;
        const slideWidth = el.clientWidth || 300;

        function goTo(idx) {
            currentIndex = clamp(idx, 0, slides.length - 1);
            const targetX = -currentIndex * slideWidth;
            const startX = offsetX;
            const tl = createTimeline();
            tl.add({
                delay: 0, duration: 400, onUpdate(t) {
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

        const gesture = GestureTracker(el, {
            onPanMove(e) {
                offsetX = -currentIndex * slideWidth + e.dx;
                renderSlides();
            },
            onPanEnd(e) {
                if (e.vx < -300 || e.dx < -slideWidth * 0.3) goTo(currentIndex + 1);
                else if (e.vx > 300 || e.dx > slideWidth * 0.3) goTo(currentIndex - 1);
                else goTo(currentIndex);
            },
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
        const tl = createTimeline({loop: false});

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
        if (!canvas) {
            console.warn('@zakkster/lite-tools [sparkImpact]: canvas required');
            return _NOOP;
        }
        const {maxSparks = 5000, maxFireworks = 3000, shakeIntensity = 0.6} = options;
        const ctx = canvas.getContext('2d');
        const sparks = new SparkEngine(maxSparks);
        const fireworks = new FireworksEngine(maxFireworks);
        const cam = new CinematicCamera(canvas.width, canvas.height, canvas.width, canvas.height, 42);
        cam.lerpSpeed = 20.0;
        cam.shakeMaxOffset = 12;

        function explodeAt(x, y) {
            sparks.burst(x, y, 80, 0, Math.PI * 2, 200, 800, 0.3, 1.0);
            fireworks.explode(x, y, Math.floor(Math.random() * fireworks.colors.length));
            cam.addTrauma(shakeIntensity);
        }

        function update(dt) {
            // Read canvas dims live so resize works.
            const w = canvas.width, h = canvas.height;
            cam.update(dt, w * 0.5, h * 0.5);
            ctx.save();
            cam.apply(ctx);
            // ORDER MATTERS: SparkEngine.updateAndDraw unconditionally clears the canvas.
            // Run sparks FIRST so it clears, then fireworks composites its fade-trail
            // overlay + 'lighter'-blended particles on top — both effects stay visible.
            sparks.updateAndDraw(ctx, dt, w, h);
            fireworks.updateAndDraw(ctx, dt, w, h);
            ctx.restore();
        }

        return {
            explodeAt, update, sparks, fireworks, cam, destroy() {
                sparks.destroy();
                fireworks.destroy();
                cam.destroy();
            }
        };
    },

    /**
     * 24. Audio Reactive VFX — Particles respond to audio beats.
     * Composes: lite-audio-pool + lite-embers + lite-ease + lite-gradient
     */
    audioReactiveVFX(canvas, options = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [audioReactiveVFX]: canvas required');
            return _NOOP;
        }
        const {maxEmbers = 4000} = options;
        const ctx = canvas.getContext('2d');
        const embers = new EmberEngine(maxEmbers, {buoyancy: 200, driftAmplitude: 40});
        let audioCtx = null, analyser = null, freqData = null, srcNode = null;

        function connectAudio(sourceNode) {
            if (!audioCtx) audioCtx = sourceNode.context;
            // Disconnect any previous source so destroy() can leave the graph clean.
            if (srcNode && analyser) {
                try {
                    srcNode.disconnect(analyser);
                } catch {
                }
            }
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            freqData = new Uint8Array(analyser.frequencyBinCount);
            sourceNode.connect(analyser);
            srcNode = sourceNode;
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
            connectAudio, update, embers,
            destroy() {
                // Tear down the audio graph so we don't leak AnalyserNodes
                // or hold the user's source node hostage on SPA unmount.
                if (srcNode && analyser) {
                    try {
                        srcNode.disconnect(analyser);
                    } catch {
                    }
                }
                if (analyser) {
                    try {
                        analyser.disconnect();
                    } catch {
                    }
                }
                analyser = null;
                freqData = null;
                srcNode = null;
                audioCtx = null;
                embers.destroy();
            }
        };
    },

    // ═══════════════════════════════════════════════════════════
    //  v2.1 — SpriteCache + FastBit32 Recipes (25–27)
    // ═══════════════════════════════════════════════════════════

    /**
     * 25. Tile Map Streamer — Pannable tiled world with FastBit32 diff-based chunk streaming.
     *
     * Tracks the visible chunk set as a 32-bit mask. Each frame, an XOR against the previous
     * mask isolates *only* the chunks that crossed the viewport boundary — those alone trigger
     * `cache.load()` (entered) or `cache.dispose()` (exited). Stationary chunks are never touched.
     * O(k) per frame on chunks-changed, not on chunks-visible.
     *
     * Composes: lite-sprite-cache (LRU + ref-counting + dedup) + lite-fastbit32 (XOR diff + forEach)
     */
    tileMapStreamer(canvas, options = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [tileMapStreamer]: canvas required');
            return _NOOP;
        }
        const {
            tileSize = 128,
            gridCols = 8,
            gridRows = 4,
            tileUrl = (bit) => `/tiles/tile_${bit}.png`,
            maxMemoryMB = 100,
            fallbackColor = {l: 0.18, c: 0.04, h: 240},
            gridLineColor = {l: 0.4, c: 0.06, h: 240, a: 0.25},
            showGrid = false
        } = options;

        const totalTiles = Math.min(32, gridCols * gridRows);
        if (gridCols * gridRows > 32) {
            console.warn('@zakkster/lite-tools [tileMapStreamer]: cols*rows>32, capped to 32 (FastBit32 width)');
        }

        const ctx = canvas.getContext('2d');
        const cache = new SpriteCache({maxMemoryMB});

        const current = new FastBit32(0);
        const previous = new FastBit32(0);
        const diff = new FastBit32(0);

        const fallbackCss = toCssOklch(fallbackColor);
        const gridCss = toCssOklch(gridLineColor);

        let panX = 0, panY = 0;

        function _maskFromPan() {
            let mask = 0;
            for (let i = 0; i < totalTiles; i++) {
                const tx = (i % gridCols) * tileSize - panX;
                const ty = Math.floor(i / gridCols) * tileSize - panY;
                if (tx + tileSize > 0 && tx < canvas.width &&
                    ty + tileSize > 0 && ty < canvas.height) {
                    mask |= (1 << i);
                }
            }
            return mask >>> 0;
        }

        function setActiveMask(mask) {
            previous.value = current.value;
            current.value = mask >>> 0;
            diff.value = current.value ^ previous.value;
            if (diff.isEmpty()) return;

            // O(k) — iterate only the bits that changed state, not all visible.
            diff.forEach(bit => {
                if (current.has(bit)) cache.load(`tile-${bit}`, tileUrl(bit));
                else cache.dispose(`tile-${bit}`);
            });
        }

        function panTo(x, y) {
            panX = x;
            panY = y;
            setActiveMask(_maskFromPan());
        }

        function panBy(dx, dy) {
            panTo(panX + dx, panY + dy);
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // O(k) over visible chunks only — never iterate the full grid.
            current.forEach(bit => {
                const bmp = cache.get(`tile-${bit}`);
                const tx = (bit % gridCols) * tileSize - panX;
                const ty = Math.floor(bit / gridCols) * tileSize - panY;

                if (bmp) {
                    ctx.drawImage(bmp, tx, ty, tileSize, tileSize);
                } else {
                    // Procedural fallback while async fetch resolves
                    ctx.fillStyle = fallbackCss;
                    ctx.fillRect(tx, ty, tileSize, tileSize);
                }

                if (showGrid) {
                    ctx.strokeStyle = gridCss;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(tx + 0.5, ty + 0.5, tileSize - 1, tileSize - 1);
                }
            });
        }

        // Bootstrap initial mask
        setActiveMask(_maskFromPan());

        return {
            cache, panTo, panBy, setActiveMask, render,
            get visibleCount() {
                return current.count();
            },
            get loadedCount() {
                return cache.stats().items;
            },
            get stats() {
                return cache.stats();
            },
            destroy() {
                cache.clearAll();
            }
        };
    },

    /**
     * 26. Asset Preloader — Animated load screen with FastBit32 progress tracking.
     *
     * Each asset gets a bit. Completion is `loadState.hasAll(totalMask)` — O(1), branch-free.
     * Progress is `loadState.count() / total` — O(1) Hamming weight, no array scan.
     * Renders an OKLCH progress arc and per-slot tick marks driven straight off the bitmask.
     *
     * Composes: lite-sprite-cache (parallel loadAll + ref-counting) + lite-fastbit32 (BitMapper + popcount)
     */
    assetPreloader(canvas, assets, options = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [assetPreloader]: canvas required');
            return _NOOP;
        }
        if (!Array.isArray(assets) || assets.length === 0) {
            console.warn('@zakkster/lite-tools [assetPreloader]: assets[] required');
            return _NOOP;
        }
        if (assets.length > 32) {
            console.warn('@zakkster/lite-tools [assetPreloader]: max 32 assets per preloader (FastBit32 width)');
            return _NOOP;
        }

        const {
            brandColor = {l: 0.7, c: 0.22, h: 280},
            bgColor = {l: 0.1, c: 0.02, h: 280},
            onProgress,
            onComplete
        } = options;

        const ctx = canvas.getContext('2d');
        const cache = new SpriteCache();

        const names = assets.map(a => a.id);
        const mapper = new BitMapper(names);
        const loadState = new FastBit32(0);
        const totalMask = names.length === 32 ? 0xFFFFFFFF >>> 0 : ((1 << names.length) - 1) >>> 0;

        let isComplete = false;
        let cancelled = false;
        let lastReportedProgress = -1;

        // Fire all loads in parallel; SpriteCache will dedup any shared URLs.
        for (const a of assets) {
            cache.load(a.id, a.url).then(bmp => {
                if (cancelled || !bmp) return;
                loadState.add(mapper.get(a.id));
                if (!isComplete && loadState.hasAll(totalMask)) {
                    isComplete = true;
                    onComplete?.();
                }
            });
        }

        const brandCss = toCssOklch(brandColor);
        const dimBrandCss = toCssOklch({l: brandColor.l, c: brandColor.c, h: brandColor.h, a: 0.18});
        const bgCss = toCssOklch(bgColor);

        function render() {
            const w = canvas.width, h = canvas.height;
            ctx.fillStyle = bgCss;
            ctx.fillRect(0, 0, w, h);

            const loaded = loadState.count();
            const progress = loaded / names.length;

            if (progress !== lastReportedProgress) {
                lastReportedProgress = progress;
                onProgress?.(progress);
            }

            const cx = w * 0.5, cy = h * 0.5;
            const r = Math.min(w, h) * 0.18;

            // Track ring
            ctx.strokeStyle = dimBrandCss;
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();

            // Progress arc
            ctx.strokeStyle = brandCss;
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(cx, cy, r, -Math.PI * 0.5, -Math.PI * 0.5 + progress * Math.PI * 2);
            ctx.stroke();

            // Centered counter
            ctx.fillStyle = brandCss;
            ctx.font = `bold ${Math.floor(r * 0.45)}px ui-monospace, monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${loaded}/${names.length}`, cx, cy);

            // Per-slot tick marks driven directly off the bitmask — purely O(k)
            const tickRadius = r * 1.35;
            const slotAngleStep = (Math.PI * 2) / names.length;
            for (let i = 0; i < names.length; i++) {
                const a = -Math.PI * 0.5 + i * slotAngleStep;
                const tx = cx + Math.cos(a) * tickRadius;
                const ty = cy + Math.sin(a) * tickRadius;
                ctx.fillStyle = loadState.has(i) ? brandCss : dimBrandCss;
                ctx.beginPath();
                ctx.arc(tx, ty, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        return {
            cache, mapper, loadState, render,
            get progress() {
                return loadState.count() / names.length;
            },
            get isComplete() {
                return isComplete;
            },
            getSprite(name) {
                return cache.get(name);
            },
            destroy() {
                cancelled = true;
                cache.clearAll();
            }
        };
    },

    /**
     * 27. VRAM Sprite Pool — Zero-GC sprite swarm pinned to a single cached texture.
     *
     * Active slots tracked in a FastBit32. Spawn finds a free slot via O(1) `nextClearBit()` —
     * NO allocations in hot path. Update + render iterate active bits via popcount-style loop.
     * Single shared ImageBitmap, ref-counted by SpriteCache. Bounce + gravity + life decay built-in.
     *
     * Composes: lite-sprite-cache (single VRAM-pinned bitmap) + lite-fastbit32 (alloc-free pool slots)
     */
    vramSpritePool(canvas, textureUrl, options = {}) {
        if (!canvas) {
            console.warn('@zakkster/lite-tools [vramSpritePool]: canvas required');
            return _NOOP;
        }
        if (!textureUrl) {
            console.warn('@zakkster/lite-tools [vramSpritePool]: textureUrl required');
            return _NOOP;
        }

        const {
            maxSprites = 32,
            gravity = 600,
            bounce = 0.7,
            lifeMs = 4000,
            size = 32,
            angularJitter = 8
        } = options;

        if (maxSprites > 32) {
            console.warn('@zakkster/lite-tools [vramSpritePool]: max 32 sprites per pool (FastBit32 width); capping');
        }
        const cap = Math.min(Math.max(1, maxSprites | 0), 32);

        const ctx = canvas.getContext('2d');
        const cache = new SpriteCache();
        let texture = null;
        cache.load('pool-texture', textureUrl).then(bmp => {
            texture = bmp;
        });

        // Zero-GC SoA pool — Float32Arrays + 32-bit active mask
        const activeMask = new FastBit32(0);
        const x = new Float32Array(cap);
        const y = new Float32Array(cap);
        const vx = new Float32Array(cap);
        const vy = new Float32Array(cap);
        const life = new Float32Array(cap);
        const rot = new Float32Array(cap);
        const angVel = new Float32Array(cap);

        function spawn(startX, startY, startVx = 0, startVy = -300) {
            // O(1), allocation-free free-slot lookup.
            const slot = activeMask.nextClearBit();
            if (slot === -1 || slot >= cap) return -1;

            activeMask.add(slot);
            x[slot] = startX;
            y[slot] = startY;
            vx[slot] = startVx;
            vy[slot] = startVy;
            life[slot] = lifeMs;
            rot[slot] = 0;
            angVel[slot] = (Math.random() - 0.5) * angularJitter;
            return slot;
        }

        function kill(slot) {
            activeMask.remove(slot);
        }

        function clear() {
            activeMask.clear();
        }

        function update(dt) {
            if (activeMask.isEmpty()) return;
            const w = canvas.width, h = canvas.height;
            const dtSec = dt * 0.001;
            const half = size * 0.5;

            // O(k) — iterate ONLY active bits.
            let active = activeMask.value;
            while (active !== 0) {
                const i = Math.clz32(active & -active) ^ 31;
                active &= active - 1;

                life[i] -= dt;
                if (life[i] <= 0) {
                    activeMask.remove(i);
                    continue;
                }

                vy[i] += gravity * dtSec;
                x[i] += vx[i] * dtSec;
                y[i] += vy[i] * dtSec;
                rot[i] += angVel[i] * dtSec;

                // Floor
                if (y[i] > h - half) {
                    y[i] = h - half;
                    vy[i] *= -bounce;
                    vx[i] *= 0.95;
                }
                // Walls
                if (x[i] < half) {
                    x[i] = half;
                    vx[i] *= -bounce;
                } else if (x[i] > w - half) {
                    x[i] = w - half;
                    vx[i] *= -bounce;
                }
            }
        }

        function render() {
            if (!texture || activeMask.isEmpty()) return;
            const half = size * 0.5;

            let active = activeMask.value;
            while (active !== 0) {
                const i = Math.clz32(active & -active) ^ 31;
                active &= active - 1;

                ctx.save();
                ctx.translate(x[i], y[i]);
                ctx.rotate(rot[i]);
                ctx.globalAlpha = life[i] < 500 ? life[i] / 500 : 1;
                ctx.drawImage(texture, -half, -half, size, size);
                ctx.restore();
            }
            ctx.globalAlpha = 1;
        }

        return {
            spawn, kill, clear, update, render, cache,
            get count() {
                return activeMask.count();
            },
            get capacity() {
                return cap;
            },
            get isFull() {
                return activeMask.count() >= cap;
            },
            get textureLoaded() {
                return texture !== null;
            },
            destroy() {
                cache.dispose('pool-texture');
                cache.clearAll();
                activeMask.clear();
            }
        };
    },
};
export default Recipes;
