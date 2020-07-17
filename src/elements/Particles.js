import React from "react";
import Particles from "react-particles-js";

const ParticlesElement = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 10
            },
            size: {
              value: 5
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </div>
  );
};
export default ParticlesElement;
