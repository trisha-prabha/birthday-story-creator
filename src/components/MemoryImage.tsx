import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const MemoryImage = ({ src, alt, caption, className = "" }: Props) => {
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
    <div ref={ref} className={`my-8 ${className}`}>
      <div
        className="overflow-hidden rounded-2xl shadow-lg transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) rotate(0deg)" : "scale(0.9) rotate(-2deg)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
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

export default MemoryImage;
