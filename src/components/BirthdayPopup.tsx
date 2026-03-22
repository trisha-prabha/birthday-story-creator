import { useState, useEffect } from "react";

interface Props {
  onEnter: () => void;
}

const BirthdayPopup = ({ onEnter }: Props) => {
  const [showLetters, setShowLetters] = useState(false);
  const name = "Aishwarya Shivakumar";

  useEffect(() => {
    const t = setTimeout(() => setShowLetters(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-birthday-cream">
      {/* Confetti dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 6 + Math.random() * 8,
              height: 6 + Math.random() * 8,
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              backgroundColor: ["hsl(330,100%,71%)", "hsl(300,47%,75%)", "hsl(40,100%,70%)", "hsl(350,100%,88%)"][i % 4],
              animation: `confetti-fall ${3 + Math.random() * 4}s ${Math.random() * 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative text-center px-6 max-w-lg">
        <div className="text-5xl mb-6 animate-gentle-bob">🎂</div>

        <p className="font-display text-xl text-birthday-pink mb-4 animate-wobble-in">
          🎉 Happy Birthday 🎉
        </p>

        {/* Bouncy name reveal */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6 min-h-[4rem]">
          {showLetters &&
            name.split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block animate-bounce-letter"
                style={{ animationDelay: `${i * 0.05 + 0.3}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
        </h1>

        <p
          className="font-story text-lg text-muted-foreground italic mb-10 animate-fade-up-blur"
          style={{ animationDelay: "1.8s", opacity: 0, animationFillMode: "forwards" }}
        >
          Ammu (Kuttan 😜) — your memory lane awaits!
        </p>

        <button
          onClick={onEnter}
          className="font-display text-lg px-10 py-4 rounded-full bg-birthday-pink text-primary-foreground 
            hover:scale-110 active:scale-95 transition-transform duration-200 
            animate-pulse-glow animate-fade-up-blur cursor-pointer
            shadow-lg"
          style={{ animationDelay: "2.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          ✨ Start Adventure ✨
        </button>
      </div>
    </div>
  );
};

export default BirthdayPopup;
