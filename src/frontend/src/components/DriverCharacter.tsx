import { useCallback, useEffect, useState } from "react";

type Phase = 0 | 1 | 2 | 3;

interface PhotoData {
  src: string;
  label: string;
  sublabel: string;
}

const PHOTOS: PhotoData[] = [
  {
    src: "/assets/generated/destination-agra.dim_600x400.jpg",
    label: "Agra",
    sublabel: "Taj Mahal",
  },
  {
    src: "/assets/generated/destination-ladakh.dim_600x400.jpg",
    label: "Ladakh",
    sublabel: "Land of Passes",
  },
  {
    src: "/assets/generated/destination-kerala.dim_600x400.jpg",
    label: "Kerala",
    sublabel: "God's Own Country",
  },
];

function SpeechBubble({ text, visible }: { text: string; visible: boolean }) {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (visible) {
      setAnimKey((k) => k + 1);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <output
      key={animKey}
      className="speech-bubble-right driver-speech-pop absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-semibold text-gray-700 max-w-[11rem] w-44 z-10 border border-orange-100"
      aria-live="polite"
    >
      {text}
    </output>
  );
}

function PhotoCard({
  photo,
  visible,
}: {
  photo: PhotoData | null;
  visible: boolean;
}) {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (visible && photo) {
      setAnimKey((k) => k + 1);
    }
    // photo object reference changes when phase changes, tracking visible is sufficient
  }, [visible, photo]);

  if (!visible || !photo) return null;

  return (
    <div
      key={animKey}
      className="driver-photo-reveal absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-2xl w-44 border-2 border-orange-200 z-10"
      style={{ transformOrigin: "right center" }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={photo.src}
          alt={photo.label}
          className="w-full h-28 object-cover rounded-lg"
          loading="lazy"
        />
        {/* Polaroid-style shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg pointer-events-none" />
      </div>
      <div className="mt-1.5 text-center">
        <p className="text-xs font-bold text-gray-800 leading-tight">
          {photo.label}
        </p>
        <p className="text-[10px] text-orange-500 font-medium">
          {photo.sublabel}
        </p>
      </div>
    </div>
  );
}

/** Returns the correct image src and animation class per phase */
function getCharacterConfig(phase: Phase): {
  src: string;
  animClass: string;
} {
  switch (phase) {
    case 0:
      return {
        src: "/assets/generated/smv-captain-idle-v2.dim_400x500.png",
        animClass: "driver-idle",
      };
    case 1:
      return {
        src: "/assets/generated/smv-captain-wave-v3.dim_400x500.png",
        animClass: "driver-wave",
      };
    case 2:
      return {
        src: "/assets/generated/smv-captain-thumbsup-v3.dim_400x500.png",
        animClass: "driver-thumbsup",
      };
    case 3:
      return {
        src: "/assets/generated/smv-captain-wave-v3.dim_400x500.png",
        animClass: "driver-wave",
      };
  }
}

export function DriverCharacter() {
  const [phase, setPhase] = useState<Phase>(0);
  const [photoKey, setPhotoKey] = useState(0);

  const getPhase = useCallback((scrollRatio: number): Phase => {
    if (scrollRatio < 0.25) return 0;
    if (scrollRatio < 0.5) return 1;
    if (scrollRatio < 0.75) return 2;
    return 3;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = docHeight > 0 ? scrollTop / docHeight : 0;
      const newPhase = getPhase(scrollRatio);
      setPhase((prev) => {
        if (prev !== newPhase) {
          setPhotoKey((k) => k + 1);
          return newPhase;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [getPhase]);

  const { src: charSrc, animClass: characterAnimClass } =
    getCharacterConfig(phase);

  const showSpeech = phase === 0 || phase === 3;
  const speechText =
    phase === 0
      ? "🙏 Welcome to SMV Tours Hub!"
      : "✨ Book your dream trip today!";

  const showPhoto = phase === 1 || phase === 2;
  const currentPhoto = phase === 1 ? PHOTOS[0] : phase === 2 ? PHOTOS[1] : null;

  return (
    <div
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center w-48"
      aria-label="SMV Tours Hub captain mascot"
      role="complementary"
    >
      {/* Floating base platform glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-orange-300/30 rounded-full blur-md" />

      {/* Character wrapper — relative so bubble/photo can be absolutely positioned */}
      <div className="relative flex items-center justify-center w-full">
        {/* Speech bubble (phases 0 and 3) */}
        <SpeechBubble
          key={`speech-${phase}`}
          text={speechText}
          visible={showSpeech}
        />

        {/* Photo card (phases 1 and 2) */}
        <PhotoCard
          key={`photo-${photoKey}`}
          photo={currentPhoto}
          visible={showPhoto}
        />

        {/* The captain character image — swaps per phase */}
        <img
          key={`char-${phase}`}
          src={charSrc}
          alt="SMV Tours Hub captain mascot"
          className={`w-36 h-auto select-none driver-char-enter ${characterAnimClass}`}
          style={{
            filter:
              "drop-shadow(0 8px 24px oklch(0.65 0.18 45 / 0.35)) drop-shadow(0 2px 8px oklch(0 0 0 / 0.15))",
            background: "transparent",
          }}
          draggable={false}
        />
      </div>

      {/* Phase indicator dots */}
      <div className="flex gap-1.5 mt-2" aria-hidden="true">
        {([0, 1, 2, 3] as Phase[]).map((p) => (
          <div
            key={p}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              phase === p ? "bg-orange-500 scale-125" : "bg-orange-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
