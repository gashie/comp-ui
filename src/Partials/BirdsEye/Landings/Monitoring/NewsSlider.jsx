import Carousel from "react-multi-carousel";
// Import Swiper styles
import img from "./bg-min.png";

import "react-multi-carousel/lib/styles.css";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
const Sli = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        <div className="container mt-5">
          <Card style={{ border: "none" }}>
            <CardImg
              top
              width="100"
              src={img}
              alt="Card image cap"
              height="300"
            />
            <CardBody>
              <CardTitle tag="h5">November 2023 Economic Update</CardTitle>
              <h6>
                November saw a tapestry of economic events unfolding globally.
                In the Americas, the US experienced a welcome decrease in
                inflation, buoying Wall Street stocks and leading to a pause in
                the Federal rate hikes. Meanwhile, Canada responded by ramping
                up investments in green energy, seeking to stay competitive with
                its southern neighbour.
              </h6>
              <p style={{ color: "#e3bd29" }}>Read more</p>
            </CardBody>
          </Card>
        </div>
        <div className="container mt-5">
          <Card style={{ border: "none" }}>
            <CardImg
              top
              width="100"
              src={img}
              alt="Card image cap"
              height="300"
            />
            <CardBody>
              <CardTitle tag="h5">November 2023 Economic Update</CardTitle>
              <h6>
                November saw a tapestry of economic events unfolding globally.
                In the Americas, the US experienced a welcome decrease in
                inflation, buoying Wall Street stocks and leading to a pause in
                the Federal rate hikes. Meanwhile, Canada responded by ramping
                up investments in green energy, seeking to stay competitive with
                its southern neighbour.
              </h6>
              <p style={{ color: "#e3bd29" }}>Read more</p>
            </CardBody>
          </Card>
        </div>
        <div className="container mt-5">
          <Card style={{ border: "none" }}>
            <CardImg
              top
              width="100"
              src={img}
              alt="Card image cap"
              height="300"
            />
            <CardBody>
              <CardTitle tag="h5">November 2023 Economic Update</CardTitle>
              <h6>
                November saw a tapestry of economic events unfolding globally.
                In the Americas, the US experienced a welcome decrease in
                inflation, buoying Wall Street stocks and leading to a pause in
                the Federal rate hikes. Meanwhile, Canada responded by ramping
                up investments in green energy, seeking to stay competitive with
                its southern neighbour.
              </h6>
              <p style={{ color: "#e3bd29" }}>Read more</p>
            </CardBody>
          </Card>
        </div>
        <div className="container mt-5">
          <Card style={{ border: "none" }}>
            <CardImg
              top
              width="100"
              src={img}
              alt="Card image cap"
              height="300"
            />
            <CardBody>
              <CardTitle tag="h5">November 2023 Economic Update</CardTitle>
              <h6>
                November saw a tapestry of economic events unfolding globally.
                In the Americas, the US experienced a welcome decrease in
                inflation, buoying Wall Street stocks and leading to a pause in
                the Federal rate hikes. Meanwhile, Canada responded by ramping
                up investments in green energy, seeking to stay competitive with
                its southern neighbour.
              </h6>
              <p style={{ color: "#e3bd29" }}>Read more</p>
            </CardBody>
          </Card>
        </div>
      </Carousel>
    </>
  );
};

export default Sli;
