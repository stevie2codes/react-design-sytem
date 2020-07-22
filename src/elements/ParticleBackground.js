import React from "react";

import { Particles } from "react-particles-js";
export const ParticleBackground = ({ style }) => {
  return (
    <Particles
      style={style}
      width="100vw"
      height="100vh"
      params={{
        particles: {
          number: {
            value: 60
          },
          size: {
            value: 3,
            random: true
          },
          color: {
            value: "#430099"
          },
          shape: {
            type: ["image", "circle"],
            image: [
              {
                src: "../logo.svg",
                height: 20,
                width: 20
              }
            ]
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#430099",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },

        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
              resize: true
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};
