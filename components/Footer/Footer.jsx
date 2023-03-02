import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>Created by Aufa</h6>
            </div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Website Portfolio Aufa.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
