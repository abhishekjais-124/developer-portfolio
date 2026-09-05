import { GlyphRain, MorphBlob, OrbitGif, SignalGif, SparkGif, WavesGif } from "./loop-visuals";

const variants = {
  stars: () => <SparkGif count={22} />,
  orbit: () => (
    <>
      <SparkGif count={10} />
      <OrbitGif className="absolute right-[6%] top-[10%] opacity-50" size={168} />
      <OrbitGif className="absolute -left-8 bottom-[12%] opacity-30" size={220} />
    </>
  ),
  signal: () => (
    <>
      <SparkGif count={12} />
      <div className="absolute right-[8%] top-16 hidden opacity-70 sm:block">
        <SignalGif bars={9} />
      </div>
    </>
  ),
  waves: () => (
    <>
      <WavesGif className="absolute inset-x-0 top-10 h-28 w-full opacity-70" />
      <SparkGif count={8} />
    </>
  ),
  glyphs: () => <GlyphRain />,
  blob: () => (
    <>
      <MorphBlob className="absolute -right-16 top-10 hidden opacity-40 sm:block" />
      <MorphBlob className="absolute -left-20 bottom-8 hidden opacity-25 sm:block" />
      <SparkGif count={10} />
    </>
  ),
  grid: () => (
    <>
      <div className="moving-grid absolute inset-0 opacity-30" />
      <SparkGif count={8} />
    </>
  ),
};

export default function SectionFx({ variant = "stars" }) {
  const Layer = variants[variant] || variants.stars;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Layer />
    </div>
  );
}
