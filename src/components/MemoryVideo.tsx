import { useEffect, useRef, useState } from "react";

type VideoFrame = "film-strip" | "rounded-glow";

interface Props {
  src: string;
  caption?: string;
  frame?: VideoFrame;
}

const MemoryVideo = ({ src, caption, frame = "film-strip" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const frameClass =
    frame === "film-strip"
      ? "border-y-[12px] border-x-[6px] border-foreground/80 rounded-md shadow-xl relative before:absolute before:inset-y-0 before:left-0 before:w-[6px] before:bg-[repeating-linear-gradient(to_bottom,transparent,transparent_6px,hsl(var(--background))_6px,hsl(var(--background))_10px)] after:absolute after:inset-y-0 after:right-0 after:w-[6px] after:bg-[repeating-linear-gradient(to_bottom,transparent,transparent_6px,hsl(var(--background))_6px,hsl(var(--background))_10px)]"
      : "rounded-3xl shadow-[0_0_30px_hsl(var(--birthday-pink)/0.25)] border-2 border-birthday-light-pink/40";

  return (
    <div ref={ref} className="my-10">
      <div
        className={`overflow-hidden transition-all duration-700 ${frameClass}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) rotate(0deg)" : "scale(0.85) rotate(2deg)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          muted
          preload="metadata"
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <p
          className="font-display text-sm text-muted-foreground text-center mt-3 transition-opacity duration-500"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "200ms" }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export default MemoryVideo;
