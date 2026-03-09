import { useEffect, useRef, useState } from "react";

type Pose = "walk" | "wave" | "cap";

const POSES: Pose[] = ["walk", "wave", "cap"];

const POSE_SRCS: Record<Pose, string> = {
  walk: "/assets/generated/captain-walk-stride-transparent.png",
  wave: "/assets/generated/captain-wave-action-transparent.png",
  cap: "/assets/generated/captain-cap-tip-transparent.png",
};

const POSE_BUBBLES: Record<Pose, string | null> = {
  walk: null,
  wave: "Welcome aboard! 🙏",
  cap: "Your journey awaits! ✈️",
};

const DURATIONS: Record<Pose, number> = {
  walk: 8000,
  wave: 4000,
  cap: 4000,
};

export function HeroCaptain() {
  const [poseIdx, setPoseIdx] = useState(0);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [walkKey, setWalkKey] = useState(0);
  const poseIdxRef = useRef(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      const currentPose = POSES[poseIdxRef.current];
      timeoutId = setTimeout(() => {
        const nextIdx = (poseIdxRef.current + 1) % POSES.length;
        poseIdxRef.current = nextIdx;
        setPoseIdx(nextIdx);
        setBubbleKey((k) => k + 1);
        if (POSES[nextIdx] === "walk") {
          setWalkKey((k) => k + 1);
        }
        scheduleNext();
      }, DURATIONS[currentPose]);
    };

    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, []);

  const pose = POSES[poseIdx];
  const poseSrc = POSE_SRCS[pose];
  const bubbleText = POSE_BUBBLES[pose];
  const showBubble = bubbleText !== null;

  return (
    <div
      className="absolute bottom-16 left-0 w-full pointer-events-none z-20 overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Walking container — translates horizontally */}
      <div
        key={walkKey}
        className={`captain-walk-track ${pose === "walk" ? "captain-walking" : "captain-paused"}`}
        style={{ display: "inline-block", position: "relative" }}
      >
        {/* Speech bubble */}
        {showBubble && (
          <output
            key={`bubble-${bubbleKey}`}
            className="captain-speech-bubble"
            aria-live="polite"
          >
            {bubbleText}
            {/* Bubble tail */}
            <div className="captain-bubble-tail" />
          </output>
        )}

        {/* Character with bob animation */}
        <div
          className={`captain-body-bob ${pose === "walk" ? "captain-bob-anim" : "captain-idle-bob"}`}
          style={{ position: "relative" }}
        >
          <img
            key={`img-${pose}`}
            src={poseSrc}
            alt="SMV captain"
            className="captain-pose-img captain-pose-pop"
            draggable={false}
          />

          {/* Ground shadow */}
          <div className="captain-shadow captain-shadow-anim" />
        </div>
      </div>
    </div>
  );
}
