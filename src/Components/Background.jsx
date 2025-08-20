import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#030014",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: {
              min: 0.05,
              max: 0.4,
            },
            animation: {
              enable: true,
              speed: 2,
              startValue: "random",
            },
          },
          size: {
            value: 1,
          },
          links: {
            enable: true,
            distance: 30,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: "bounce",
          },
        },
        polygon: {
          draw: {
            enable: true,
            stroke: {
              color: {
                value: "rgba(255, 255, 255, 0.2)",
              },
              width: 1,
            },
          },
          enable: true,
          inline: {
            arrangement: "equidistant",
          },
          move: {
            radius: 10,
            type: "path",
          },
          scale: 0.5,
          type: "inline",
          url: "https://particles.js.org/images/smalldeer.svg",
          position: {
            x: 50,
            y: 50,
          },
        },
      }}
    />
  );
};

export default Background;