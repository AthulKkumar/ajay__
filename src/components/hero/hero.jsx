import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/Ajay_photo.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            {/* <h1 className="weight800 font60">Hey There</h1> */}
            <h1 className="weight800 font60">
             I'am Ajay K A
            </h1>
            <p className="font12">
              I am an actor with a deep passion for storytelling and a commitment to bringing authentic, compelling characters to life. Whether on screen or stage, I strive to captivate audiences with every performance.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
