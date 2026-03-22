import { useState, useEffect } from "react";
import BirthdayPopup from "@/components/BirthdayPopup";
import FloatingHearts from "@/components/FloatingHearts";
import MemoryBlock from "@/components/MemoryBlock";
import MemoryImage from "@/components/MemoryImage";
import MemoryVideo from "@/components/MemoryVideo";

import photoSeaside from "@/assets/photo-seaside.jpg";
import photoHug from "@/assets/photo-hug.jpg";
import photoSelfie from "@/assets/photo-selfie.jpg";
import photoGarden from "@/assets/photo-garden.jpg";
import photoSchool from "@/assets/photo-school.jpg";
import photoCloseup from "@/assets/photo-closeup.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [popupSeen, setPopupSeen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("bday-popup-seen");
    if (seen) {
      setPopupSeen(true);
      setEntered(true);
    }
  }, []);

  const handleEnter = () => {
    setEntered(true);
    setPopupSeen(true);
    localStorage.setItem("bday-popup-seen", "true");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {!popupSeen && !entered && <BirthdayPopup onEnter={handleEnter} />}

      <FloatingHearts />

      {entered && (
        <main className="relative z-10 max-w-2xl mx-auto px-5 py-16 sm:py-24">
          {/* Opening */}
          <MemoryBlock className="text-center mb-16">
            <p className="font-display text-3xl sm:text-4xl text-birthday-pink leading-snug">
              🎉 For Aishwarya 🎉
            </p>
            <p className="font-story text-lg text-muted-foreground mt-3 italic">
              A little walk down memory lane…
            </p>
          </MemoryBlock>

          {/* Story flows naturally with images interwoven */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              Aishwarya grew up in Bangalore's ITI locality — those aesthetic streets where daddy's little princess learned to bloom. She's empathy in human form — feeling your lows before words, her eyes saying <em>"I've got you."</em>
            </p>
          </MemoryBlock>

          <MemoryImage src={photoCloseup} alt="Aishwarya closeup" caption="Those eyes that say everything 💫" frame="polaroid" entry="zoom-rotate" />

          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              My first memory? That pistachio green top, her firing nerdy questions. Thought she was <em>padip</em>. Wrong. Ethnic day changed everything — our first real laugh. She'd sneak dad's Snickers for me, daily bus stop drops with appa's paneer butter masala.
            </p>
          </MemoryBlock>

          <MemoryImage src={photoSchool} alt="School days" caption="School days & sweet surprises 🎁" frame="tape" entry="slide-left" />

          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              From awkward classmates to inseparable souls. The kind of friendship where silence is comfortable and laughter is medicine. Every moment together felt like coming home.
            </p>
          </MemoryBlock>

          <MemoryImage src={photoSelfie} alt="Best friends selfie" caption="Us being us 🩷" frame="tilt-right" entry="flip" />

          <MemoryVideo src={video2} caption="Our favourite chaos 🎶" frame="rounded-glow" />

          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              Pondi sealed it: bike rides, beach waves, gelato under orange sunsets. She's my <strong>HOME</strong> — safe space, #1 cheerleader. The kind of person who makes ordinary days feel like tiny celebrations.
            </p>
          </MemoryBlock>

          <MemoryImage src={photoSeaside} alt="Seaside memories" caption="Pondi vibes & salty air 🌊" frame="circle-peek" entry="slide-right" />

          <MemoryImage src={photoGarden} alt="Garden moment" caption="Flower girl forever 🌺" frame="stamp" entry="drop" />

          <MemoryVideo src={video1} caption="Goofy moments we live for 😂" frame="film-strip" />

          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              Now MBBS in Pondi, away from everyone but forging wings. From princess to life-saver. No matter the distance, she carries home in her heart — and we carry her in ours.
            </p>
          </MemoryBlock>

          <MemoryImage src={photoHug} alt="Best friends hugging" caption="Distance means nothing 🫂" frame="tilt-left" entry="fade-up" />

          {/* Closing */}
          <MemoryBlock className="text-center mt-16 mb-8">
            <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg border border-birthday-light-pink/30">
              <p className="font-display text-2xl sm:text-3xl text-birthday-pink mb-4">
                Biggest hugs, Ammu! 🫂💖
              </p>
              <p className="font-story text-lg text-foreground italic leading-relaxed">
                Happy Birthday again. You deserve every beautiful thing this world has to offer. Keep shining, keep healing, keep being unapologetically you.
              </p>
              <p className="font-display text-4xl mt-6 animate-gentle-bob">🎂✨🎀</p>
            </div>
          </MemoryBlock>

          {/* Footer */}
          <MemoryBlock className="text-center mt-12 pb-8">
            <p className="font-display text-sm text-muted-foreground">
              Made with love for Ammu ❤️ 2026
            </p>
          </MemoryBlock>
        </main>
      )}
    </div>
  );
};

export default Index;
