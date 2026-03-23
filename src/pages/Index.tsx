import { useState } from "react";
import BirthdayPopup from "@/components/BirthdayPopup";
import FloatingHearts from "@/components/FloatingHearts";
import MemoryBlock from "@/components/MemoryBlock";
import MemoryImage from "@/components/MemoryImage";
import MemoryVideo from "@/components/MemoryVideo";
import video1 from "../assets/video-1.mp4"; // adjust path
import video2 from "../assets/video-2.mp4"; // adjust path

const Index = () => {
    const [entered, setEntered] = useState(false);

    const handleEnter = () => {
        setEntered(true);
    };

    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden">

            {/* 🎉 ALWAYS SHOW POPUP FIRST */}
            {!entered && <BirthdayPopup onEnter={handleEnter} />}

            <FloatingHearts />

            {/* 🌸 MAIN CONTENT */}
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
                            Aishu — straight out of Bangalore’s ITI lanes, where everything feels a little softer, a little calmer… just like her energy. Daddy’s little princess, but also the kind of person who makes everyone feel like they matter.
                            <br /> <br />
                            She’s not loud about it, but somehow she turns the simplest moments into something special — especially those rainy evenings that end up filled with her soft giggles and random laughter. Being around her just feels easy… like comfort, like home, like something you never want to lose. 💗
                        </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="src\assets\photo-garden.jpg"
                        alt="Bangalore ITI locality"
                        caption="In quiet streets and soft rains, a beautiful soul learned how to shine. 🌧️✨"
                        frame="polaroid"
                        entry="zoom-rotate"
                    />

                    {/* Empathy */}
                    <MemoryBlock>
                        <p className="font-story text-lg leading-relaxed text-foreground">
                            She's <strong>empathy in human form</strong> – feeling your lows before your voice cracks,
                            her eyes locking on with that steady gaze saying <em>"I've got you"</em> louder than words.
                        </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="src\assets\photo-selfie.jpg"
                        alt="First memory"
                        caption="If lost, return to each other. 💚"
                        frame="tilt-right"
                        entry="flip"
                    />

                    {/* First Meeting */}
                    <MemoryBlock>
                        <p className="font-story text-lg leading-relaxed text-foreground">
                            That pistachio green top moment – my very first memory. Her firing nerdy questions like a curious professor.
                            Thought she was <em>Padipsss</em>. Wrong. Ethnic day changed everything – our first real laugh syncing like puzzle pieces.
                        </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="src\assets\photo-closeup.jpg"
                        alt="Ethnic day"
                        caption="Some first memories don’t fade… they stay, glowing softly forever 💚"
                        frame="tape"
                        entry="slide-left"
                    />

                    {/* Snickers */}
                    <MemoryBlock>
                        <p className="font-story text-lg leading-relaxed text-foreground">
                            She'd sneak Snickers (<em>dad's sacred favorite</em>) from home, slipping them with a sly <em>"don't tell."</em>
                            That missed bus day? Me crying – she thrust her phone into my palm instantly "Dont't worry Chottu! And ever since I didn't have to worry about anything - she got my back <strong>ALWAYS </strong>"                </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="\src\assets\photo-seaside.jpg"
                        alt="Bus days"
                        caption= "In the smallest gestures, she gave the biggest kind of love 💫"
                        frame="stamp"
                        entry="drop"
                    />

                    {/* Pondi */}
                    <MemoryBlock>
                        <p className="font-story text-lg leading-relaxed text-foreground">
                            Pondi sealed it: endless bike rides through beach roads, salty wind whipping hair, waves crashing like applause.
                            Gelato ice cream melting as we laughed under orange sunsets. Pure freedom.
                        </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="src\assets\img1711546354438.jpg"
                        alt="Pondi"
                        caption="Between waves and sunsets, we found pieces of forever 🌊🌅"
                        frame="circle-peek"
                        entry="slide-right"
                    />

                    <MemoryVideo
                        src={video2}
                        caption="She cooks for me… and yes, I brag about it😎🍲"
                        frame="film-strip"
                    />

                    {/* Bond */}
                    <MemoryBlock>
                        <p className="font-story text-lg leading-relaxed text-foreground">
                            What holds us? We never quit. She's my <strong>HOME</strong> – safe space to ugly-cry, be messy without judgment.
                            My #1 cheerleader hyping tiniest wins: <em>"Nailed it da!!"</em>
                        </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="\src\assets\photo-hug.jpg"
                        alt="Bond"
                        caption="My HOME, my cheerleader 🩷"
                        frame="rounded-glow"
                        entry="fade-up"
                    />

                    {/* MBBS */}
                    <MemoryBlock>
                        <p className="font-story text-lg leading-relaxed text-foreground">
                            Now MBBS in Pondi – far from ITI lanes, daddy's hugs, paneer masala Sundays. Away from everyone but
                            forging wings from princess to life-saver. Every homesick ache? Worth it.
                        </p>
                    </MemoryBlock>

                    <MemoryImage
                        src="\src\assets\IMG_20260322_184006.jpg"
                        alt="MBBS"
                        caption="From someone’s little princess to someone’s life-saving miracle✨🩺"
                        frame="tilt-left"
                        entry="zoom-rotate"
                    />

                    {/* Closing */}
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