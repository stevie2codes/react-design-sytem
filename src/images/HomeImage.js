import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function HomeImage({ fill, ...props }) {
  return (
    <MoveSvg
      width={319}
      height={153}
      viewBox="0 0 319 153"
      fill="none"
      {...props}
    >
      <motion.path
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        d="M13.922 112.273c-.281 2.813-1.828 4.336-4.64 4.571-1.313 0-2.462-.422-3.446-1.266-.938-.89-1.406-1.992-1.406-3.305V78.945c.047-1.312.539-2.39 1.476-3.234.938-.89 2.063-1.336 3.375-1.336h29.461c.281 0 .563.023.844.07h.422c3.281.094 5.976.844 8.086 2.25 2.11 1.407 3.633 3.024 4.57 4.852.938 1.781 1.406 3.586 1.406 5.414 0 1.875-.468 3.727-1.406 5.555-.89 1.78-2.414 3.375-4.57 4.78-2.11 1.407-4.805 2.157-8.086 2.25H27.633c.375 2.345 1.148 4.079 2.32 5.204 1.125 1.125 2.555 1.688 4.29 1.688H49.43c1.312.046 2.39.539 3.234 1.476.89.938 1.336 2.063 1.336 3.375-.047 1.266-.516 2.344-1.406 3.234-.844.844-1.899 1.289-3.164 1.336H32.977c-3.47.047-6.61-1.312-9.422-4.078-2.813-2.765-4.524-6.047-5.133-9.843-.844-4.22-1.266-6.586-1.266-7.102 0-1.313.446-2.414 1.336-3.305.938-.937 2.063-1.406 3.375-1.406H40.43c.89-.047 1.617-.234 2.18-.563.609-.374 1.054-.773 1.335-1.195.282-.469.422-.937.422-1.406 0-.469-.14-.914-.422-1.336-.28-.469-.726-.867-1.336-1.195-.562-.375-1.289-.586-2.18-.633H15.75c-1.219.047-1.828.656-1.828 1.828v26.648zm62.156 3.586c-4.125-.14-7.242-1.101-9.351-2.882-2.11-1.829-3.633-3.868-4.57-6.118-.938-2.297-1.407-4.617-1.407-6.96 0-2.438.445-4.782 1.336-7.032.937-2.297 2.46-4.336 4.57-6.117 2.156-1.828 4.875-2.766 8.156-2.813h26.719c1.313 0 2.414.446 3.305 1.336.937.844 1.406 1.875 1.406 3.094 0 1.266-.469 2.344-1.406 3.235-.891.843-1.992 1.265-3.305 1.265H75.234c-1.03 0-1.945.352-2.742 1.055-.75.703-1.312 1.617-1.687 2.742a11.77 11.77 0 00-.493 3.305c0 1.172.165 2.32.493 3.445.375 1.125.937 2.039 1.687 2.742a4.532 4.532 0 002.742 1.055h26.297c1.313 0 2.414.422 3.305 1.266.937.843 1.406 1.851 1.406 3.023 0 1.219-.469 2.25-1.406 3.094-.891.844-1.992 1.265-3.305 1.265H76.078zm29.32-16.101c0 .89-.398 1.664-1.195 2.32-.703.61-1.594.914-2.672.914H78.539c-1.078 0-1.992-.304-2.742-.914-.75-.656-1.125-1.43-1.125-2.32 0-.844.375-1.594 1.125-2.25.75-.61 1.664-.914 2.742-.914h22.992c1.078 0 1.992.328 2.742.984.75.61 1.125 1.336 1.125 2.18zm48.235 12.375V95.188c0-1.172-.61-1.782-1.828-1.829h-24.61c-.89.047-1.664.446-2.32 1.196-.656.703-1.148 1.547-1.477 2.53a9.987 9.987 0 00-.421 2.884c0 .937.14 1.898.421 2.883a7.67 7.67 0 001.477 2.531c.656.703 1.43 1.055 2.32 1.055h18c1.313 0 2.414.468 3.305 1.406.938.89 1.406 1.992 1.406 3.304 0 1.313-.468 2.414-1.406 3.305-.891.938-1.992 1.406-3.305 1.406h-17.718c-3.282-.047-6-.961-8.157-2.742-2.109-1.828-3.632-3.867-4.57-6.117a19.474 19.474 0 01-1.336-7.102c0-2.343.469-4.64 1.406-6.89.938-2.297 2.461-4.336 4.571-6.117 2.109-1.829 5.226-2.813 9.351-2.954h29.531c1.313 0 2.438.446 3.375 1.336.938.844 1.43 1.922 1.477 3.235v23.625c0 1.312-.492 2.414-1.477 3.305-.937.843-2.062 1.265-3.375 1.265-2.812-.234-4.359-1.758-4.64-4.57zm32.836 3.726c-4.125-.14-7.242-1.101-9.352-2.882-2.109-1.829-3.633-3.868-4.57-6.118-.938-2.297-1.406-4.617-1.406-6.96 0-2.438.445-4.782 1.336-7.032.937-2.297 2.461-4.336 4.57-6.117 2.156-1.828 4.875-2.766 8.156-2.813h26.719c1.312 0 2.414.47 3.305 1.407.937.89 1.406 1.992 1.406 3.304 0 1.313-.469 2.438-1.406 3.375-.891.891-1.993 1.336-3.305 1.336h-27c-.891 0-1.664.375-2.32 1.125-.657.704-1.149 1.547-1.477 2.532a9.753 9.753 0 00-.422 2.812c0 .984.141 1.969.422 2.953.328.938.82 1.781 1.477 2.531.656.704 1.429 1.079 2.32 1.126h27c1.312 0 2.414.468 3.305 1.406.937.89 1.406 1.992 1.406 3.304 0 1.313-.469 2.414-1.406 3.305-.891.938-1.993 1.406-3.305 1.406h-25.453zm52.804-42.609c1.313 0 2.438.445 3.375 1.336.938.844 1.43 1.922 1.477 3.234v6.118h23.906c1.313 0 2.438.445 3.375 1.335.891.938 1.336 2.063 1.336 3.375 0 1.313-.469 2.438-1.406 3.375-.891.891-1.992 1.336-3.305 1.336h-23.906v1.407c-.047 1.921.07 3.703.352 5.343.328 1.594 1.078 3.024 2.25 4.289 1.171 1.266 2.648 1.946 4.429 2.04h17.156c1.313.046 2.391.539 3.235 1.476.891.938 1.336 2.063 1.336 3.375-.047 1.266-.516 2.344-1.406 3.234-.844.844-1.899 1.289-3.165 1.336h-19.546c-3.282-.187-6-1.289-8.157-3.304-2.109-2.063-3.632-4.571-4.57-7.524-.891-2.953-1.359-6.094-1.406-9.422v-2.25h-8.086c-1.313 0-2.414-.468-3.305-1.406-.937-.89-1.406-1.992-1.406-3.305 0-1.312.445-2.414 1.336-3.304.937-.938 2.062-1.406 3.375-1.406h8.086V77.82c.047-1.265.515-2.32 1.406-3.164.891-.89 1.969-1.36 3.234-1.406zM34.945 20.375c3.282.188 5.977 1.453 8.086 3.797a20.83 20.83 0 014.57 7.875 29.801 29.801 0 011.407 9.07c0 3.094-.469 6.117-1.406 9.07-.891 2.954-2.414 5.602-4.57 7.946-2.11 2.297-4.805 3.539-8.087 3.726H9.07c-1.265-.047-2.343-.492-3.234-1.336-.844-.89-1.29-1.968-1.336-3.234V39.852c.047-1.313.54-2.391 1.477-3.235.937-.89 2.062-1.336 3.375-1.336 1.265.047 2.343.516 3.234 1.407.89.843 1.36 1.898 1.406 3.164v10.687c0 1.266.656 1.898 1.969 1.898h16.594c1.78-.093 3.258-.773 4.43-2.039a11.433 11.433 0 002.53-4.289c.563-1.64.844-3.304.844-4.992 0-1.687-.28-3.328-.843-4.922a11.35 11.35 0 00-2.532-4.36c-1.172-1.265-2.648-1.944-4.43-2.038H9.07c-2.812-.235-4.336-1.758-4.57-4.57 0-1.313.422-2.438 1.266-3.375.89-.938 1.992-1.43 3.304-1.477h25.875zm36.14 41.484c-4.124-.14-7.241-1.101-9.35-2.882-2.11-1.829-3.633-3.868-4.57-6.118-.938-2.297-1.407-4.617-1.407-6.96 0-2.438.445-4.782 1.336-7.032.937-2.297 2.46-4.336 4.57-6.117 2.156-1.828 4.875-2.766 8.156-2.813h26.72c1.312 0 2.413.446 3.304 1.336.937.844 1.406 1.875 1.406 3.094 0 1.266-.469 2.344-1.406 3.235-.89.843-1.992 1.265-3.305 1.265H70.242c-1.031 0-1.945.352-2.742 1.055-.75.703-1.313 1.617-1.688 2.742a11.77 11.77 0 00-.492 3.305c0 1.172.164 2.32.493 3.445.374 1.125.937 2.04 1.687 2.742a4.529 4.529 0 002.742 1.055H96.54c1.313 0 2.414.422 3.305 1.266.937.843 1.406 1.851 1.406 3.023 0 1.219-.469 2.25-1.406 3.094-.89.843-1.992 1.265-3.305 1.265H71.086zm29.321-16.101c0 .89-.398 1.664-1.195 2.32-.703.61-1.594.914-2.672.914H73.547c-1.078 0-1.992-.304-2.742-.914-.75-.656-1.125-1.43-1.125-2.32 0-.844.375-1.594 1.125-2.25.75-.61 1.664-.914 2.742-.914h22.992c1.078 0 1.992.328 2.742.984.75.61 1.125 1.336 1.125 2.18zm53.578-11.742c0 1.172-.468 2.156-1.406 2.953-.89.75-1.992 1.125-3.305 1.125h-29.742c-.609 0-1.101.117-1.476.351-.375.235-.657.492-.844.774-.188.234-.281.445-.281.633 0 .234.093.492.281.773.187.234.469.469.844.703.375.188.867.305 1.476.352h22.992c2.954.047 5.391.633 7.313 1.758 1.922 1.078 3.281 2.367 4.078 3.867.844 1.453 1.266 2.93 1.266 4.43 0 1.453-.422 2.93-1.266 4.43-.844 1.452-2.226 2.741-4.148 3.866-1.875 1.078-4.289 1.617-7.243 1.617-.515.047-.89.07-1.125.07h-27.281c-1.312 0-2.437-.374-3.375-1.124-.89-.797-1.336-1.758-1.336-2.883 0-1.172.469-2.156 1.406-2.953.891-.75 1.993-1.125 3.305-1.125h28.969c.703.047 1.266-.047 1.687-.281.469-.235.821-.493 1.055-.774.234-.281.352-.562.352-.844 0-.14-.118-.375-.352-.703-.234-.375-.586-.656-1.055-.843-.421-.235-.984-.376-1.687-.422h-23.063c-2.718-.047-4.968-.61-6.75-1.688-1.781-1.125-3.046-2.414-3.796-3.867-.75-1.453-1.125-2.906-1.125-4.36 0-1.453.375-2.882 1.125-4.288.796-1.454 2.062-2.696 3.796-3.727 1.782-1.078 4.032-1.664 6.75-1.758.469-.047.821-.07 1.055-.07h28.195c1.313 0 2.415.398 3.305 1.195.938.75 1.406 1.688 1.406 2.813zm13.852-4.782c1.266.047 2.344.516 3.234 1.407.891.843 1.36 1.898 1.407 3.164v24.328c-.282 2.812-1.829 4.336-4.641 4.57-1.313 0-2.461-.422-3.445-1.266-.938-.89-1.407-1.992-1.407-3.304V33.805c.047-1.313.539-2.39 1.477-3.235.937-.89 2.062-1.336 3.375-1.336zm-5.906-9.14c0-1.313.562-2.438 1.687-3.375 1.125-.938 2.485-1.407 4.078-1.407 1.594 0 2.953.47 4.078 1.407 1.125.937 1.688 2.062 1.688 3.375 0 1.36-.563 2.508-1.688 3.445-1.125.938-2.484 1.406-4.078 1.406-1.593 0-2.953-.468-4.078-1.406-1.125-.937-1.687-2.086-1.687-3.445zm58.57 21.093c0-1.171-.609-1.78-1.828-1.828h-24.61c-.89.047-1.664.446-2.32 1.196-.656.703-1.148 1.547-1.476 2.53a9.954 9.954 0 00-.422 2.884c0 .937.14 1.898.422 2.883.328.937.82 1.78 1.476 2.53.656.704 1.43 1.056 2.32 1.056h18c1.313 0 2.415.468 3.305 1.406.938.89 1.406 1.992 1.406 3.304 0 1.313-.468 2.414-1.406 3.305-.89.938-1.992 1.406-3.305 1.406h-17.718c-3.282-.047-6-.96-8.156-2.742-2.11-1.828-3.633-3.867-4.571-6.117a19.495 19.495 0 01-1.336-7.102c0-2.343.469-4.64 1.407-6.89.937-2.297 2.46-4.336 4.57-6.117 2.109-1.828 5.226-2.813 9.351-2.953h29.532c1.312 0 2.437.445 3.375 1.335.937.844 1.429 1.922 1.476 3.235v22.219c0 3.75-.515 7.289-1.547 10.617-.937 2.953-2.484 5.437-4.64 7.453-2.11 2.062-4.805 3.187-8.086 3.375h-24.328c-1.266-.047-2.344-.516-3.235-1.406-.844-.844-1.289-1.899-1.336-3.164 0-1.313.422-2.438 1.266-3.375.891-.938 1.992-1.43 3.305-1.477h21.937c1.781-.094 3.258-.773 4.43-2.04a8.897 8.897 0 002.25-4.429c.328-1.687.492-3.867.492-6.539V41.188zm41.414-12.304c2.438 0 4.828.281 7.172.844a29.074 29.074 0 016.82 2.53 19.045 19.045 0 015.696 4.36c1.687 1.828 2.601 4.008 2.742 6.54V58.132c-.282 2.812-1.828 4.336-4.641 4.57-1.312 0-2.461-.422-3.445-1.266-.938-.89-1.406-1.992-1.406-3.304V45.336c-.094-1.453-.657-2.648-1.688-3.586a11.114 11.114 0 00-3.375-2.32 17.807 17.807 0 00-3.867-1.266 19.078 19.078 0 00-4.008-.422c-1.359 0-2.719.14-4.078.422a19.602 19.602 0 00-3.867 1.266 12.394 12.394 0 00-3.375 2.32c-.985.938-1.524 2.133-1.617 3.586V58.133c-.235 2.812-1.758 4.336-4.571 4.57-1.312 0-2.461-.422-3.445-1.266-.938-.89-1.406-1.992-1.406-3.304V43.156c.14-2.531 1.031-4.71 2.672-6.539a19.028 19.028 0 015.695-4.36 29.339 29.339 0 016.75-2.53 31.514 31.514 0 017.242-.844z"
      />
    </MoveSvg>
  );
}

const MoveSvg = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  fill: ${props => props.theme.colors.buttonText};
  padding: 0;
`;

const svgVariants = {
  hidden: { opacity: 0, transform: `scale(0)` },
  visible: { opacity: 1, transform: `scale(1)` }
};
export default HomeImage;
