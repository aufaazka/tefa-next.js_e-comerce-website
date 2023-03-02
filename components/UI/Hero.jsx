import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/logoIphone.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">iPhone Indonesian Store</h2>
              <h5 className="mb-4">To your no. 1 Apple premium store destination</h5>
              <p>
              Welcome to the iPhone Store! We are an authorized store that sells Apple products, especially iPhones. We offer quality products at competitive prices. Here, you can find the latest iPhone models with complete color choices.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#about">About Us</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
