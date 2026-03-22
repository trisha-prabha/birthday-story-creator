import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  caption?: string;
}

const MemoryVideo = ({ src, caption }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-8">
      <div
        className="overflow-hidden rounded-2xl shadow-lg transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.9)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      {caption && (
        <p className="font-display text-sm text-muted-foreground text-center mt-3"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "200ms" }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export default MemoryVideo;
