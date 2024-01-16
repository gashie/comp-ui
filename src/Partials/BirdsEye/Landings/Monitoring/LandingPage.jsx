import { Button, Col, Container, Row } from "reactstrap";
import Sli from "./Slider";
import NewsSlider from "./NewsSlider";
import conto from "../../../../assets/images/contours.png";
import "./landing.css";
import sc from "./scr.png";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";


function LandingPage() {
  return (
    <>
     <Row1 />
     <Row2 />
     <Row3 />
     <Row4 />
     <Row5 />
    </>
  );
}

export default LandingPage;
