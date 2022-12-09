import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-slide>div {
    background-color: rgb(40,44,52);
    width: 90%;
    height:auto;
    margin: 0 auto;
  }
`;
export { StyledSlider };
