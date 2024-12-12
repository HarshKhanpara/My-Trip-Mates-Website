"use client";

import { useEffect, useState } from "react";

const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const STAR_COUNT = 20;
const LIGHT_COUNT = 30;

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [hues] = useState(() => new Array(3).fill(0).map(() => randomInRange(70, 300)));
  const [alphas] = useState(() => new Array(3).fill(0).map(() => Math.random()));
  const [stars] = useState(() =>
    new Array(STAR_COUNT).fill(0).map(() => ({
      size: Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: randomInRange(5, 10),
      delay: randomInRange(4, 10),
    }))
  );
  const [lights] = useState(() =>
    new Array(LIGHT_COUNT).fill(0).map(() => ({
      duration: randomInRange(5, 15),
      delay: randomInRange(4, 10),
      x: randomInRange(0, 5),
      y: randomInRange(0, 10),
      scale: Math.random() / 10,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-10">
      <main className="h-full overflow-hidden bg-[hsl(220,100%,5%)]">
        <div
          className="relative h-full w-full"
          style={{
            "--hue-1": hues[0],
            "--hue-2": hues[1],
            "--hue-3": hues[2],
            "--alpha-1": alphas[0],
            "--alpha-2": alphas[1],
            "--alpha-3": alphas[2],
          }}
        >
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-[flicker_var(--duration)_var(--delay)_infinite_steps(1)] opacity-50"
              style={{
                "--size": star.size,
                "--x": star.x,
                "--y": star.y,
                "--duration": `${star.duration}s`,
                "--delay": `${star.delay}s`,
                width: `calc(var(--size) * 1px)`,
                height: `calc(var(--size) * 1px)`,
                left: `calc(var(--x) * 1vw)`,
                top: `calc(var(--y) * 1vh)`,
                background: "hsl(55, 100%, 50%)",
                boxShadow: "0 0 5px 1px hsl(55, 100%, 85%)",
                zIndex: 1,
              }}
            />
          ))}
          <div className="fixed bottom-0 left-0 h-[25vmin] w-[68vmin] rounded-tr-full bg-[hsl(220,100%,2%)]">
            <div className="absolute bottom-0 left-0 h-[15vmin] w-[50vmax] rounded-tr-full bg-[hsl(220,100%,2%)]" />
          </div>
          <div className="absolute left-0 top-0 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(0,10%,75%)] blur-[10px] shadow-[0_0_50px_10px_hsl(0,0%,55%)]" />
          <div className="absolute left-1/2 top-0 flex h-[100vmax] w-[200vmax] -translate-x-[20%] -translate-y-[55%] rotate-[30deg] blur-[75px]">
            {lights.map((light, i) => (
              <div
                key={i}
                className="flex-1 bg-no-repeat animate-[shift_var(--duration)_var(--delay)_infinite_ease]"
                style={{
                  "--duration": `${light.duration}s`,
                  "--delay": `${light.delay * -1}s`,
                  "--x": light.x,
                  "--y": light.y,
                  "--up": `calc(var(--y) * 2vmax)`,
                  "--left": `calc(var(--x) * 2vmax)`,
                  backgroundImage: `linear-gradient(0deg, transparent, hsla(var(--hue-1),100%,50%,var(--alpha-1)) 10%, transparent, hsla(var(--hue-2),100%,50%,var(--alpha-2)) 40%, transparent, hsla(var(--hue-3),100%,50%,var(--alpha-3)) 60%)`,
                  backgroundSize: "100% 40vmax",
                  backgroundPosition: "center bottom",
                  transform: "translate(var(--left), var(--up)) scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
