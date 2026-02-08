import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeroSection from "../landing-page/home/HeroSection.jsx";
import { describe, expect, test } from "vitest";

describe("hero component", () => {
  test("Render Hero Image", () => {
    render(<HeroSection />);
    const heroImage = screen.getByAltText("HomeHero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "../media/images/homeHero.png");
  });
});
