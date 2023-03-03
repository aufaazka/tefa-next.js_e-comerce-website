import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/favorite.module.css";
import FavoriteItem from "./FavoriteItem";

import favoriteData from "../data/favorite";

const Favorite = () => {
  const [filter, setFilter] = useState("New Product");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "New Product") {
      const filteredData = favoriteData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Limited Edition") {
      const filteredData = favoriteData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="favorite">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" Our Product" />
            <h4 className="mt-4">Some of my works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${filter === "New Product" ? active : ""} secondary__btn text-white`}
                onClick={() => setFilter("New Product")}
              >
                New Product
              </button>
              <button
                className={`${filter === "Limited Edition" ? active : ""} secondary__btn text-white`}
                onClick={() => setFilter("Limited Edition")}
              >
                Limited Edition
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id}>
              <FavoriteItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Favorite;
