// Regenerates src/assets/og/bg.png — the shared background for the auto-
// generated OG cards (src/pages/og/[...route].ts). It mirrors the look of
// public/og-image.png: a dark card with a warm ember glow in the top-left
// corner (minus the phone mockup). Tweak the glow values below and rerun:
//
//   node scripts/generate-og-bg.mjs
//
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { default: init } = await import("canvaskit-wasm/full");
const CanvasKit = await init({
  locateFile: (f) => require.resolve(`canvaskit-wasm/bin/full/${f}`),
});

const W = 1200,
  H = 630;
const surface = CanvasKit.MakeSurface(W, H);
const canvas = surface.getCanvas();
const rect = CanvasKit.XYWHRect(0, 0, W, H);
const fill = (shader) => {
  const p = new CanvasKit.Paint();
  p.setShader(shader);
  canvas.drawRect(rect, p);
  p.delete();
};

// Base: subtle vertical warm-to-black so the card has depth top-to-bottom.
fill(
  CanvasKit.Shader.MakeLinearGradient(
    [0, 0],
    [0, H],
    [CanvasKit.Color(20, 12, 9, 1), CanvasKit.Color(8, 7, 9, 1)],
    [0, 1],
    CanvasKit.TileMode.Clamp,
  ),
);

// Main ember glow radiating from the top-left corner. Kept tight and dim so the
// text area stays near-black and the orange title reads clearly over it.
fill(
  CanvasKit.Shader.MakeRadialGradient(
    [70, -30],
    560,
    [CanvasKit.Color(210, 70, 18, 0.5), CanvasKit.Color(210, 70, 18, 0.0)],
    [0, 1],
    CanvasKit.TileMode.Clamp,
  ),
);

// Hotter core near the very corner for a touch more intensity.
fill(
  CanvasKit.Shader.MakeRadialGradient(
    [40, -60],
    300,
    [CanvasKit.Color(238, 108, 42, 0.4), CanvasKit.Color(238, 108, 42, 0.0)],
    [0, 1],
    CanvasKit.TileMode.Clamp,
  ),
);

// Domain footer, bottom-left in bold orange — mirrors og-image's URL. Baked
// into the background so every card shares it (the card text sits above it).
const fontData = new Uint8Array(fs.readFileSync("src/assets/og/Inter-Bold.ttf"));
const typeface = CanvasKit.Typeface.MakeFreeTypeFaceFromData(fontData.buffer);
const font = new CanvasKit.Font(typeface, 36);
font.setSubpixel(true);
const textPaint = new CanvasKit.Paint();
textPaint.setColor(CanvasKit.Color(217, 71, 19, 1));
textPaint.setAntiAlias(true);
canvas.drawText("kittycodecreative.com", 70, H - 58, textPaint, font);

const img = surface.makeImageSnapshot();
const png = img.encodeToBytes();
fs.writeFileSync("src/assets/og/bg.png", Buffer.from(png));
console.log("wrote src/assets/og/bg.png", png.length, "bytes");
