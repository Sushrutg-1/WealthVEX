import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeroSection from "../landing-page/pricing/HeroSection.jsx";
import { describe, expect, test } from "vitest";

describe("hero component of pricing", () => {
  test("Render Hero Image in pricing", () => {
    render(<HeroSection />);
    const heroImage = screen.getByAltText("Pricing");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "../media/images/pricingEquity.svg");
  });
});
