import { useRef } from "react";
import song from "@/assets/Song.mp3";

const IntroScreen = ({ onStart }) => {
    const audioRef = useRef(null);

    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
            audioRef.current.play();
        }
        onStart();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-birthday-cream z-50">

            {/* 🎵 Audio */}
            <audio ref={audioRef} loop>
                <source src={song} type="audio/mpeg" />
            </audio>

            <button
                onClick={handleClick}
                className="text-2xl px-10 py-5 rounded-full bg-birthday-pink text-white
        animate-pulse-glow shadow-xl hover:scale-110 transition"
            >
                🎁 Click Meeee
            </button>
        </div>
    );
};

export default IntroScreen;