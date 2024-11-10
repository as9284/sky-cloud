import React from "react";

import { Landing } from "../components/Landing";
import { Features } from "../components/Features";
import { Plans } from "../components/Plans";
import { Privacy } from "../components/Privacy";
import { Faq } from "../components/Faq";

export const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Plans />
      <Privacy />
      <Faq />
    </>
  );
};
