import { Fragment } from "react";
import Hero from "../components/UI/Hero";

import About from "../components/UI/About";
import Favorite from "../components/UI/Favorite";

import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Favorite />
      <About />
      <Contact />
    </Fragment>
  );
}
