import { useEffect, useRef, useState } from "react";

type FrameStyle = "polaroid" | "tape" | "stamp" | "tilt-left" | "tilt-right" | "circle-peek";
type EntryAnimation = "fade-up" | "slide-left" | "slide-right" | "zoom-rotate" | "flip" | "drop";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  frame?: FrameStyle;
  entry?: EntryAnimation;
}

const frameClasses: Record<FrameStyle, string> = {
  polaroid:
      "bg-white p-3 pb-14 shadow-[4px_6px_20px_rgba(0,0,0,0.12)] rounded-sm rotate-[1.5deg]",
  tape:
      "rounded-2xl shadow-lg border-4 border-dashed border-birthday-light-pink/60",
  stamp:
      "rounded-[2px] shadow-md border-[6px] border-white outline outline-2 outline-birthday-pink/30",
  "tilt-left":
      "rounded-3xl shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500",
  "tilt-right":
      "rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500",
  "circle-peek":
      "rounded-[40%_60%_55%_45%/50%_40%_60%_50%] shadow-xl border-4 border-birthday-cream",
};

const entryStyles: Record<
    EntryAnimation,
    { hidden: React.CSSProperties; visible: React.CSSProperties }
> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(32px)", filter: "blur(6px)" },
    visible: { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
  },
  "slide-left": {
    hidden: { opacity: 0, transform: "translateX(-60px) rotate(-4deg)" },
    visible: { opacity: 1, transform: "translateX(0) rotate(0deg)" },
  },
  "slide-right": {
    hidden: { opacity: 0, transform: "translateX(60px) rotate(4deg)" },
    visible: { opacity: 1, transform: "translateX(0) rotate(0deg)" },
  },
  "zoom-rotate": {
    hidden: { opacity: 0, transform: "scale(0.6) rotate(-8deg)" },
    visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
  },
  flip: {
    hidden: { opacity: 0, transform: "perspective(800px) rotateY(90deg)" },
    visible: { opacity: 1, transform: "perspective(800px) rotateY(0deg)" },
  },
  drop: {
    hidden: { opacity: 0, transform: "translateY(-40px) scale(1.1)" },
    visible: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
};

const MemoryImage = ({
                       src,
                       alt,
                       caption,
                       className = "",
                       frame = "polaroid",
                       entry = "fade-up",
                     }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setVisible(true);
        },
        { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const anim = entryStyles[entry];

  return (
      <div ref={ref} className={`my-10 relative ${className}`}>
        <div
            className={`overflow-hidden transition-all duration-700 ${frameClasses[frame]}`}
            style={{
              ...(visible ? anim.visible : anim.hidden),
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