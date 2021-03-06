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
            },
            color: {
              value: "#430099"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              }
            }
          }
        }}
      />
    </div>
  );
};
export default ParticlesElement;
