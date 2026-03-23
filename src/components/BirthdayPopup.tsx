import { useState, useEffect } from "react";
import songUrl from "../assets/Song.mp3"; // ✅ keep song in assets

interface Props {
  onEnter: () => void;
}

const BirthdayPopup = ({ onEnter }: Props) => {
  const [showLetters, setShowLetters] = useState(false);

  const firstName = "AISHWARYA";
  const lastName = "SHIVAKUMAR";

  // Show letters shortly after mount
  useEffect(() => {
    const t = setTimeout(() => setShowLetters(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    // Play music reliably
    const audio = new Audio(songUrl);
    audio.volume = 0.3;
    audio.loop = true;
    audio
        .play()
        .then(() => console.log("Music started 🎵"))
        .catch((err) => console.error("Music failed:", err));

    onEnter(); // Navigate to memory page
  };

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-birthday-cream">

        {/* Confetti */}
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
                    backgroundColor: [
                      "hsl(330,100%,71%)",
                      "hsl(300,47%,75%)",
                      "hsl(40,100%,70%)",
                      "hsl(350,100%,88%)"
                    ][i % 4],
                    animation: `confetti-fall ${3 + Math.random() * 4}s ${Math.random() * 3}s linear infinite`,
                  }}
              />
          ))}
        </div>

        {/* Content */}
        <div className="relative text-center px-6 max-w-lg">
          <div className="text-5xl mb-6 animate-gentle-bob">🎂</div>

          <p className="font-display text-xl text-birthday-pink mb-4 animate-wobble-in">
            🎉 Happy Birthday 🎉
          </p>

          {/* Name animation */}
          <div className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6 min-h-[8rem]">
            {showLetters && (
                <>
                  <div className="mb-2">
                    {firstName.split("").map((letter, i) => (
                        <span
                            key={`first-${i}`}
                            className="inline-block animate-bounce-letter"
                            style={{ animationDelay: `${i * 0.04}s` }}
                        >
                    {letter}
                  </span>
                    ))}
                  </div>
                  <div>
                    {lastName.split("").map((letter, i) => (
                        <span
                            key={`last-${i}`}
                            className="inline-block animate-bounce-letter"
                            style={{ animationDelay: `${i * 0.04 + 0.3}s` }}
                        >
                    {letter}
                  </span>
                    ))}
                  </div>
                </>
            )}
          </div>

          {/* Subtitle */}
          <p className="font-story text-lg text-muted-foreground italic mb-10 animate-fade-up-blur opacity-100">
            Ammu (Kuttan 😜) — your memory lane awaits!
          </p>

          {/* Click Me Button */}
          <button
              type="button"
              onClick={handleClick}
              className="font-display text-lg px-10 py-4 rounded-full bg-birthday-pink text-primary-foreground
          hover:scale-110 active:scale-95 transition-transform duration-200
          animate-pulse-glow cursor-pointer shadow-lg"
          >
            ✨ Click Me! ✨
          </button>
        </div>
      </div>
  );
};

export default BirthdayPopup;