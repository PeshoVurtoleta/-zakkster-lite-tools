/** @vitest-environment jsdom */
import {describe, it, expect, vi, beforeEach, afterEach} from 'vitest';

// ── Mock all dependencies ──
let ioCallback;
globalThis.IntersectionObserver = vi.fn(function (cb) {
    ioCallback = cb;
    this.observe = vi.fn();
    this.unobserve = vi.fn();
    this.disconnect = vi.fn();
});
HTMLElement.prototype.animate = vi.fn(() => ({onfinish: null, cancel: vi.fn(), reverse: vi.fn()}));

vi.mock('@zakkster/lite-lerp', () => ({
    lerp: (a, b, t) => a + (b - a) * t,
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    inverseLerp: (a, b, v) => a === b ? 0 : (v - a) / (b - a),
    damp: (a, b, l, dt) => a,
    easeOut: t => t,
    easeIn: t => t,
    easeInOut: t => t,
    smoothstep: (a, b, v) => v,
    mapRange: (v, a, b, c, d) => c + (d - c) * ((v - a) / (b - a)),
    remap: (a, b, c, d, v) => c + (d - c) * ((v - a) / (b - a)),
    lerpAngle: (a, b, t) => a,
    lerpAngleRad: (a, b, t) => a,
}));
vi.mock('@zakkster/lite-color', () => ({
    lerpOklch: (a, b, t) => ({l: a.l + (b.l - a.l) * t, c: a.c, h: a.h}),
    toCssOklch: () => 'oklch(0.5 0.1 0)', parseOklch: () => ({l: 0.5, c: 0.1, h: 0}),
    createGradient: (c) => (t) => c[0] || {l: 0.5, c: 0.1, h: 0},
    multiStopGradient: () => () => ({}), reverseGradient: (g) => g, randomFromGradient: () => ({}),
}));
vi.mock('@zakkster/lite-random', () => {
    class R {
        constructor(s) {
            this._s = s || 1;
            this._i = 0;
        }

        next() {
            return ((++this._i * 0.618) % 1);
        }

        range(a, b) {
            return a + this.next() * (b - a);
        }

        int(a, b) {
            return Math.floor(this.range(a, b + 1));
        }

        chance(p) {
            return this.next() < p;
        }

        pick(a) {
            return a[0];
        }

        reset(s) {
            this._s = s;
            this._i = 0;
        }
    }

    return {default: R, Random: R};
});
vi.mock('lite-object-pool', () => ({
    ObjectPool: class {
        acquire() {
            return {};
        }

        release() {
        }

        destroy() {
        }
    }
}));
vi.mock('@zakkster/lite-particles', () => {
    class E {
        constructor() {
            this.activeCount = 0;
        }

        emit() {
            this.activeCount++;
        }

        emitBurst(n, fn) {
            for (let i = 0; i < n; i++) fn(i);
        }

        update() {
        }

        draw() {
        }

        destroy() {
        }
    }

    return {Emitter: E};
});
vi.mock('@zakkster/lite-soa-particle-engine', () => {
    class M {
        constructor(n) {
            this.max = n;
            this._onTick = null;
            this._isRunning = false;
        }

        onTick(cb) {
            this._onTick = cb;
        }

        emit() {
        }

        start() {
            this._isRunning = true;
        }

        stop() {
            this._isRunning = false;
        }

        clear() {
        }

        destroy() {
            this._isRunning = false;
        }
    }

    return {SoaParticleEngine: M};
});
vi.mock('@zakkster/lite-fx', () => {
    class MiniRng {
        constructor() {
            this._i = 0;
        }

        next() {
            return ((++this._i * 0.618) % 1);
        }

        range(a, b) {
            return a + this.next() * (b - a);
        }

        int(a, b) {
            return Math.floor(this.range(a, b + 1));
        }

        pick(a) {
            return a[0];
        }

        reset() {
            this._i = 0;
        }
    }

    const W = class {
        constructor() {
            this.enabled = true;
        }

        apply() {
        }
    };
    const GW = class {
        constructor(x, y, s, r) {
            this.px = x;
            this.py = y;
            this.radius = r;
            this.enabled = true;
        }

        apply() {
        }
    };
    const V = class {
        constructor() {
            this.enabled = true;
        }

        apply() {
        }
    };
    const T = class {
        constructor() {
            this.enabled = true;
        }

        apply() {
        }
    };
    const DF = class {
        constructor() {
            this.enabled = true;
        }

        apply() {
        }
    };
    let rid = 0;

    class FX {
        constructor(ctx, opts) {
            this.ctx = ctx;
            this._isRunning = false;
            this.forces = [];
            this._recipes = [];
            this.rng = new MiniRng();
            rid = 0;
        }

        register(r) {
            const o = typeof r === 'function' ? {...r()} : {...r};
            o.id = rid++;
            this._recipes.push(o);
            return o;
        }

        addForce(f) {
            this.forces.push(f);
            return () => {
                const i = this.forces.indexOf(f);
                if (i !== -1) this.forces.splice(i, 1);
            };
        }

        spawn() {
        }

        start() {
            this._isRunning = true;
        }

        stop() {
            this._isRunning = false;
        }

        clear() {
        }

        resetSeed() {
        }

        destroy() {
            this._isRunning = false;
        }
    }

    return {
        FXSystem: FX,
        Presets: {
            fire: () => ({
                count: [1, 2],
                life: [0.5, 1],
                speed: [50, 100],
                angle: [0, 1],
                gravity: -100,
                friction: 0.95,
                size: [4, 0],
                colorFn: () => ({l: 0.5, c: 0.1, h: 0}),
                blendMode: 'screen',
                shape: 'circle'
            }),
            sparks: () => ({
                count: [1, 2],
                life: [0.2, 0.5],
                speed: [100, 200],
                angle: [0, 6.28],
                gravity: 400,
                friction: 0.9,
                size: [3, 1],
                colorFn: () => ({l: 0.9, c: 0.1, h: 50}),
                blendMode: 'screen',
                shape: 'rect'
            }),
            explosion: () => ({
                count: [10, 20],
                life: [0.3, 0.8],
                speed: [100, 300],
                angle: [0, 6.28],
                gravity: 150,
                friction: 0.93,
                size: [5, 1],
                colorFn: () => ({l: 0.8, c: 0.2, h: 30}),
                blendMode: 'screen',
                shape: 'circle'
            })
        },
        EmitterShape: {circle: () => ({x: 0, y: 0}), line: () => ({x: 0, y: 0})},
        Wind: W,
        GravityWell: GW,
        Vortex: V,
        Turbulence: T,
        DragField: DF
    };
});
vi.mock('@zakkster/lite-gen', () => {
    class MiniRng {
        constructor(s) {
            this._i = s || 0;
        }

        next() {
            return ((++this._i * 0.618) % 1);
        }

        range(a, b) {
            return a + this.next() * (b - a);
        }

        chance(p) {
            return this.next() < p;
        }

        reset(s) {
            this._i = s || 0;
        }
    }

    class SN {
        noise2D() {
            return 0.5;
        }

        noise3D() {
            return 0.5;
        }

        fbm() {
            return 0.3;
        }
    }

    class FF {
        constructor() {
            this._time = 0;
        }

        sample() {
            return {vx: 1, vy: 0};
        }

        update(dt) {
            this._time += dt;
        }

        applyTo() {
        }
    }

    class AC {
        constructor(c) {
            this.canvas = c;
            this.ctx = c.getContext?.('2d') || {};
            this.width = 100;
            this.height = 100;
            this.dpr = 1;
        }

        resize() {
        }

        background() {
        }

        clear() {
        }

        dot() {
        }

        line() {
        }

        path() {
        }

        toDataURL() {
            return '';
        }

        save() {
        }
    }

    class GE {
        constructor(c, o) {
            this.art = new AC(c);
            this.rng = new MiniRng(o?.seed);
            this.noise = new SN();
            this.width = 100;
            this.height = 100;
            this._fn = null;
            this._destroyed = false;
        }

        draw(fn) {
            this._fn = fn;
            return this;
        }

        render() {
            if (!this._destroyed && this._fn) this._fn({
                art: this.art,
                ctx: this.art.ctx,
                rng: this.rng,
                noise: this.noise,
                width: this.width,
                height: this.height,
                time: 0,
                dt: 0.016
            });
        }

        start() {
        }

        stop() {
        }

        seed(s) {
            this.rng.reset(s);
        }

        resize() {
        }

        clear() {
        }

        save() {
        }

        destroy() {
            this._destroyed = true;
        }
    }

    return {
        SimplexNoise: SN,
        FlowField: FF,
        Shape: {},
        ArtCanvas: AC,
        GenEngine: GE,
        Pattern: {flowTrace: vi.fn(), noiseDots: vi.fn(), flowLines: vi.fn()}
    };
});
vi.mock('@zakkster/lite-smart-observer', () => {
    class SO {
        constructor(o) {
            this.opts = o;
        }

        observe() {
        }

        destroy() {
        }
    }

    return {default: SO, SmartObserver: SO};
});
vi.mock('@zakkster/lite-ui', () => ({
    SmartObserver: class {
        constructor(o) {
            this.opts = o;
        }

        observe() {
        }

        destroy() {
        }
    },
    ScrollReveal: {
        fadeUp: (s, o) => ({
            destroy() {
            }
        }), fadeIn: (s, d, o) => ({
            destroy() {
            }
        }), scaleIn: (s, o) => ({
            destroy() {
            }
        }), fade: (s, o) => ({
            destroy() {
            }
        }), cascade: (s, o) => ({
            destroy() {
            }
        })
    },
    Parallax: class {
        constructor() {
        }

        destroy() {
        }
    },
    Magnetic: class {
        constructor() {
        }

        destroy() {
        }
    },
    Spring: class {
        constructor(v, o) {
            this.value = v || 0;
            this.target = v || 0;
            this.settled = true;
        }

        set(t) {
            this.target = t;
            this.settled = false;
        }

        update(dt) {
            this.value = this.target;
            this.settled = true;
            return this.value;
        }

        snap(v) {
            this.value = v;
            this.target = v;
            this.settled = true;
        }
    },
    ScrollProgress: class {
        constructor(o) {
            o?.onChange?.(0);
        }

        destroy() {
        }
    },
    Tilt: class {
        constructor() {
        }

        destroy() {
        }
    },
    ColorShift: class {
        constructor() {
        }

        destroy() {
        }
    },
    ConfettiBurst: class {
        constructor() {
        }

        fire() {
        }

        attach() {
        }

        destroy() {
        }
    },
    SparkleHover: class {
        constructor() {
        }

        destroy() {
        }
    },
    destroyAll: (arr) => {
        for (const a of arr) a?.destroy?.();
        arr.length = 0;
    },
}));
vi.mock('@zakkster/lite-theme-gen', () => ({
    generateTheme: (b, o) => ({
        mode: o?.mode || 'light',
        brand: b,
        bg: {l: 0.95, c: 0.01, h: 0},
        bgMuted: {l: 0.9, c: 0.01, h: 0},
        surface: {l: 0.85, c: 0.01, h: 0},
        accent: b,
        text: {l: 0.1, c: 0.02, h: 0},
        textMuted: {l: 0.4, c: 0.01, h: 0},
        textOnAccent: {l: 0.95, c: 0, h: 0},
        'neutral-50': {l: 0.95, c: 0, h: 0},
        'neutral-500': {l: 0.5, c: 0, h: 0},
        'accent-50': {l: 0.9, c: 0.1, h: b.h},
        'accent-500': b
    }),
    toCssVariables: () => ':root { --lt-bg: oklch(0.95 0.01 0); }',
    createThemeCss: (b, o) => ({palette: {}, cssVars: ':root {}'}),
}));
vi.mock('lite-viewport', () => ({
    Viewport: class {
        constructor() {
            this.ctx = {};
            this.width = 800;
            this.height = 600;
        }

        destroy() {
        }
    }
}));
vi.mock('@zakkster/lite-ticker', () => {
    class T {
        constructor() {
            this.time = 0;
            this._fns = [];
        }

        add(fn) {
            this._fns.push(fn);
            return () => {
            };
        }

        setInterval(fn, ms) {
            return () => {
            };
        }

        start() {
        }

        stop() {
        }

        pause() {
        }

        destroy() {
        }
    }

    return {Ticker: T};
});
vi.mock('lite-states', () => {
    class F {
        constructor(init, map) {
            this.current = init;
            this._map = map;
        }

        is(s) {
            return this.current === s;
        }

        set(s) {
            this.current = s;
        }

        onEnter() {
            return () => {
            };
        }

        onLeave() {
            return () => {
            };
        }

        onChange() {
            return () => {
            };
        }

        destroy() {
        }
    }

    return {FSM: F};
});
vi.mock('lite-fps-meter', () => ({
    FPSMeter: class {
        constructor() {
        }

        destroy() {
        }
    }
}));
vi.mock('lite-pointer-tracker', () => ({
    PointerTracker: class {
        constructor() {
        }

        destroy() {
        }
    }
}));

import {Recipes} from './LiteEngine.js';

// ── Helpers ──
function mockCanvas() {
    const c = document.createElement('canvas');
    c.width = 800;
    c.height = 600;
    c.getContext = vi.fn(() => ({
        fillRect: vi.fn(), clearRect: vi.fn(), fillStyle: '', globalAlpha: 1,
        globalCompositeOperation: '', beginPath: vi.fn(), arc: vi.fn(), fill: vi.fn(),
        rect: vi.fn(), stroke: vi.fn(), moveTo: vi.fn(), lineTo: vi.fn(),
        createRadialGradient: vi.fn(() => ({addColorStop: vi.fn()})),
        strokeStyle: '', lineWidth: 1, font: '', fillText: vi.fn(),
        setTransform: vi.fn(), scale: vi.fn(),
    }));
    return c;
}

function mockCtx() {
    return mockCanvas().getContext('2d');
}

const brand = {l: 0.6, c: 0.2, h: 260};

// ═══════════════════════════════════════════════════════════
//  TESTS
// ═══════════════════════════════════════════════════════════

describe('🛠️ LiteTools Recipes', () => {
    beforeEach(() => {
        vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation(() => 1);
        vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {
        });
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    // ── Validation & Safety ──

    describe('DOM validation', () => {
        it('premiumButton returns noop on missing selector', () => {
            const spy = vi.spyOn(console, 'warn').mockImplementation(() => {
            });
            const r = Recipes.premiumButton('.nonexistent', mockCanvas());
            expect(r.destroy).toBeTypeOf('function');
            r.destroy(); // should not throw
            spy.mockRestore();
        });

        it('blackHole returns noop on null ctx', () => {
            const spy = vi.spyOn(console, 'warn').mockImplementation(() => {
            });
            const r = Recipes.blackHole(null, 0, 0);
            expect(r.destroy).toBeTypeOf('function');
            spy.mockRestore();
        });

        it('particleCursor returns noop on null canvas', () => {
            const spy = vi.spyOn(console, 'warn').mockImplementation(() => {
            });
            const r = Recipes.particleCursor(null);
            expect(r.destroy).toBeTypeOf('function');
            spy.mockRestore();
        });

        it('springMenu returns noop on missing elements', () => {
            const spy = vi.spyOn(console, 'warn').mockImplementation(() => {
            });
            const r = Recipes.springMenu('.nope', '.nah');
            expect(r.destroy).toBeTypeOf('function');
            spy.mockRestore();
        });

        it('tiltGallery returns noop on empty selector', () => {
            const spy = vi.spyOn(console, 'warn').mockImplementation(() => {
            });
            const r = Recipes.tiltGallery('.nonexistent', mockCanvas());
            expect(r.destroy).toBeTypeOf('function');
            spy.mockRestore();
        });
    });

    // ── Every recipe returns destroy() ──

    describe('destroy() contract', () => {
        it('brandedBackground', () => {
            const r = Recipes.brandedBackground(mockCanvas(), brand);
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('blackHole', () => {
            const r = Recipes.blackHole(mockCtx(), 400, 300);
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('scrollStory', () => {
            const r = Recipes.scrollStory({});
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('particleCursor', () => {
            const r = Recipes.particleCursor(mockCanvas());
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('starfield', () => {
            const r = Recipes.starfield(mockCanvas());
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('noiseHeatmap', () => {
            const r = Recipes.noiseHeatmap(mockCanvas());
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('fireworkShow', () => {
            const r = Recipes.fireworkShow(mockCtx(), 800, 600);
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('snowfall', () => {
            const r = Recipes.snowfall(mockCtx(), 800, 600);
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('replaySystem', () => {
            const r = Recipes.replaySystem(mockCtx());
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('themePlayground', () => {
            const r = Recipes.themePlayground();
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });

        it('gameCanvas', () => {
            const r = Recipes.gameCanvas(mockCanvas());
            expect(r.destroy).toBeTypeOf('function');
            r.destroy();
        });
    });

    // ── Recipe behavior ──

    describe('brandedBackground', () => {
        it('returns gen + theme + gradient', () => {
            const r = Recipes.brandedBackground(mockCanvas(), brand, {animate: false});
            expect(r.gen).toBeDefined();
            expect(r.theme).toBeDefined();
            expect(r.gradient).toBeTypeOf('function');
            r.destroy();
        });
    });

    describe('blackHole', () => {
        it('returns explode + moveTo', () => {
            const r = Recipes.blackHole(mockCtx(), 400, 300);
            expect(r.explode).toBeTypeOf('function');
            expect(r.moveTo).toBeTypeOf('function');
            r.explode(200, 200); // should not throw
            r.moveTo(100, 100);
            r.destroy();
        });
    });

    describe('starfield', () => {
        it('generates deterministic stars', () => {
            const r1 = Recipes.starfield(mockCanvas(), {seed: 42, starCount: 100});
            const r2 = Recipes.starfield(mockCanvas(), {seed: 42, starCount: 100});
            expect(r1.stars[0].x).toBe(r2.stars[0].x);
            expect(r1.stars[0].hue).toBe(r2.stars[0].hue);
            r1.destroy();
            r2.destroy();
        });
    });

    describe('noiseHeatmap', () => {
        it('provides reseed method', () => {
            const r = Recipes.noiseHeatmap(mockCanvas(), {animate: false});
            expect(r.reseed).toBeTypeOf('function');
            r.reseed(999); // should not throw
            r.destroy();
        });
    });

    describe('fireworkShow', () => {
        it('provides stop/resume/manualBurst', () => {
            const r = Recipes.fireworkShow(mockCtx(), 800, 600);
            expect(r.stop).toBeTypeOf('function');
            expect(r.resume).toBeTypeOf('function');
            expect(r.manualBurst).toBeTypeOf('function');
            r.stop();
            r.resume();
            r.manualBurst(400, 300);
            r.destroy();
        });
    });

    describe('snowfall', () => {
        it('provides setWind method', () => {
            const r = Recipes.snowfall(mockCtx(), 800, 600);
            expect(r.setWind).toBeTypeOf('function');
            r.setWind(-50);
            r.destroy();
        });
    });

    describe('replaySystem', () => {
        it('records and replays', () => {
            const r = Recipes.replaySystem(mockCtx(), {seed: 42});
            r.registerRecipe('boom', () => ({
                count: [1, 2],
                life: [0.5, 1],
                speed: [50, 100],
                angle: [0, 1],
                gravity: 100,
                friction: 0.95,
                size: [4, 0],
                colorFn: () => ({l: 0.5, c: 0.1, h: 0}),
                blendMode: 'screen',
                shape: 'circle'
            }));
            r.startRecording();
            expect(r.fsm.is('recording')).toBe(true);
            r.recordEvent(100, 200, 'boom');
            const events = r.stopRecording();
            expect(events.length).toBe(1);
            r.replay();
            expect(r.fsm.is('replaying')).toBe(true);
            r.stopReplay();
            r.destroy();
        });
    });

    describe('themePlayground', () => {
        it('injects CSS variables and toggles mode', () => {
            const fn = vi.fn();
            const r = Recipes.themePlayground({onThemeChange: fn});
            expect(fn).toHaveBeenCalled();
            r.toggleMode();
            expect(fn).toHaveBeenCalledTimes(2);
            expect(r.getCss()).toContain(':root');
            r.destroy();
        });
    });

    describe('gameCanvas', () => {
        it('provides full game API', () => {
            const r = Recipes.gameCanvas(mockCanvas());
            expect(r.viewport).toBeDefined();
            expect(r.ticker).toBeDefined();
            expect(r.rng).toBeDefined();
            expect(r.fsm).toBeDefined();
            expect(r.fx).toBeDefined();
            expect(r.onUpdate).toBeTypeOf('function');
            expect(r.setState).toBeTypeOf('function');
            r.destroy();
        });
    });
});