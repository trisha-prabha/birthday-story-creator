import { useState, useEffect } from "react";
import BirthdayPopup from "@/components/BirthdayPopup";
import FloatingHearts from "@/components/FloatingHearts";
import MemoryBlock from "@/components/MemoryBlock";
import MemoryImage from "@/components/MemoryImage";
import MemoryVideo from "@/components/MemoryVideo";

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
              🎉 Happy Birthday, Aishwarya Shivakumar! 🎉
            </p>
            <p className="font-story text-lg text-muted-foreground mt-3 italic">
              Ammu (or Kuttan 😜) - Scroll slow, feel every memory. Here's to your next chapter of magic! 💖
            </p>
          </MemoryBlock>

          {/* ITI Childhood */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              Aishwarya grew up in Bangalore's ITI locality – those aesthetic streets lined with quiet charm, 
              where <em>daddy's little princess</em> learned to bloom. She was the nicest soul around, 
              turning rainy evenings into laughter with her soft giggles.
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/iti-aesthetic.jpg" 
            alt="Bangalore ITI locality" 
            caption="Aesthetic streets that shaped her ✨" 
            frame="polaroid" 
            entry="zoom-rotate" 
          />

          {/* Empathy & First Memory */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              She's <strong>empathy in human form</strong> – feeling your lows before your voice cracks, 
              her eyes locking on with that steady gaze saying <em>"I've got you"</em> louder than words.
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/pistachio-green-top.jpg" 
            alt="First memory - pistachio green top" 
            caption="My FIRST memory of her 💚" 
            frame="tilt-right" 
            entry="flip" 
          />

          {/* First Meeting Story */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              That pistachio green top moment – my very first memory. Her firing nerdy questions like a curious professor. 
              Thought she was <em>padip</em>. Wrong. Ethnic day changed everything – our first real laugh syncing like puzzle pieces.
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/ethnic-day.jpg" 
            alt="Ethnic day magic" 
            caption="Ethnic day – where friendship began 🥻" 
            frame="tape" 
            entry="slide-left" 
          />

          {/* Snickers & Bus Days */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              She'd sneak Snickers (<em>dad's sacred favorite</em>) from home, slipping them with a sly <em>"don't tell."</em> 
              That missed bus day? Me crying, phone dead – she thrust hers into my palm instantly.
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/bus-stop-days.jpg" 
            alt="Bus stop family" 
            caption="Daily drops + appa's paneer butter masala 🥘" 
            frame="stamp" 
            entry="drop" 
          />

          {/* Pondi Memories */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              Pondi sealed it: endless bike rides through beach roads, salty wind whipping hair, waves crashing like applause. 
              Gelato ice cream melting as we laughed under orange sunsets. Pure freedom.
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/pondi-beach.jpg" 
            alt="Pondi adventures" 
            caption="Bike rides, waves, gelato magic 🌊🍦" 
            frame="circle-peek" 
            entry="slide-right" 
          />

          {/* Unbreakable Bond */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              What holds us? We never quit. She's my <strong>HOME</strong> – safe space to ugly-cry, be messy without judgment. 
              My #1 cheerleader hyping tiniest wins: <em>"Nailed that interview? QUEEN."</em>
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/best-friends.jpg" 
            alt="Unbreakable bond" 
            caption="My HOME, my cheerleader 🩷" 
            frame="rounded-glow" 
            entry="fade-up" 
          />

          {/* MBBS Journey */}
          <MemoryBlock>
            <p className="font-story text-lg leading-relaxed text-foreground">
              Now MBBS in Pondi – far from ITI lanes, daddy's hugs, paneer masala Sundays. Away from everyone but 
              forging wings from princess to life-saver. Every homesick ache? Worth it.
            </p>
          </MemoryBlock>

          <MemoryImage 
            src="/images/mbbs-life.jpg" 
            alt="Doctor in the making" 
            caption="From princess to life-saver 🩺" 
            frame="tilt-left" 
            entry="zoom-rotate" 
          />

          {/* Closing Hugs */}
          <MemoryBlock className="text-center mt-16 mb-8">
            <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg border border-birthday-light-pink/30">
              <p className="font-display text-2xl sm:text-3xl text-birthday-pink mb-4">
                Biggest hugs, Ammu! 🫂💖
              </p>
              <p className="font-story text-lg text-foreground italic leading-relaxed">
                Happy Birthday again – can't wait to celebrate you in person soon! 
                Keep soaring – Bangalore waits, but the world needs your light. 🚀
              </p>
              <p className="font-display text-4xl mt-6 animate-gentle-bob">🎂✨🎀</p>
            </div>
          </MemoryBlock>

          {/* Footer */}
          <MemoryBlock className="text-center mt-12 pb-8">
            <p className="font-display text-sm text-muted-foreground">
              Made with ❤️ for Ammu | 2026
            </p>
          </MemoryBlock>
        </main>
      )}
    </div>
  );
};

export default Index;
