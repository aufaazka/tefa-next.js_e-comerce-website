import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from "../../public/images/About4.jpg";
import img02 from "../../public/images/About3.jpg";
import img03 from "../../public/images/About1.png";
import img04 from "../../public/images/About.jpg";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
        <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" width="100" height="100" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" weight="100" height="200"/>
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" weight="100" height="200" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" weight="100" height="200" />
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">Moh. Aufa Azka Fabian</h3>
            <p>
            We also complete the iPhone experience. We have a team that is experienced in providing the best solutions and after-sales service to ensure customer satisfaction.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Communication
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Teamwork 
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Adaptability
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="https://drive.google.com/file/d/18T0M80GQyUthsI5KfFPfh5OJK0L39_Mo/view?usp=share_link">Download CV</Link>
              </button>
            </div>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default About;
