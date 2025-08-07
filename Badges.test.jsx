import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Badges from "./Badges";
import Image from "next/image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));


describe("Badges Component", () => {
  const mockImage = (src) => ({ src, alt: "mock-alt" });

  it("Initial Render: Renders without errors and displays the expected initial state", () => {
    render(<Badges />);
    expect(screen.getByRole("region", { name: /badges/i })).toHaveStyle("opacity: 0");
  });


  it("Animation: Fade-in animation occurs after 200ms delay", async () => {
    render(<Badges />);
    expect(screen.getByRole("region", { name: /badges/i })).toHaveStyle("opacity: 0");
    await waitFor(() => expect(screen.getByRole("region", { name: /badges/i })).toHaveStyle("opacity: 1"));
  });


  it("Professional Certificates Rendering: All certificate categories and badges render correctly", () => {
    render(<Badges />);
    const certificatesSection = screen.getByText(/professional certificates/i);
    expect(certificatesSection).toBeInTheDocument();

    Object.entries(Badges().certificates).forEach(([categoryName, certs]) => {
      const categoryElement = screen.getByText(categoryName);
      expect(categoryElement).toBeInTheDocument();
      certs.forEach((cert) => {
        expect(screen.getByAltText(cert.title)).toBeInTheDocument();
        expect(screen.getByText(cert.issuer)).toBeInTheDocument();
        expect(screen.getByText(cert.description)).toBeInTheDocument();
      });
    });
  });


  it("Google Cloud Skill Badges Rendering: All skill badge categories and badges render correctly", () => {
    render(<Badges />);
    const skillBadgesSection = screen.getByText(/google cloud skill badges/i);
    expect(skillBadgesSection).toBeInTheDocument();
    Object.entries(Badges().skillBadges).forEach(([categoryName, badges]) => {
      const categoryElement = screen.getByText(categoryName);
      expect(categoryElement).toBeInTheDocument();
      badges.forEach((badge) => {
        expect(screen.getByAltText(badge.alt)).toBeInTheDocument();
        expect(screen.getByText(badge.title)).toBeInTheDocument();
      });
    });
  });


  it("Empty Categories Handling: Handles empty categories gracefully", () => {
    const emptySkillBadges = { ...Badges().skillBadges };
    delete emptySkillBadges["AI & Machine Learning"];
    const emptyCertificates = { ...Badges().certificates };
    delete emptyCertificates["Industry Simulations & Professional Development"];
    const { container } = render(<Badges skillBadges={emptySkillBadges} certificates={emptyCertificates}/>);
    expect(container.querySelectorAll('.mb-14')).toHaveLength(3); //check for proper rendering
  });


  it("Image Loading Errors: Handles invalid image URLs gracefully", () => {
    const brokenSkillBadges = { ...Badges().skillBadges };
    brokenSkillBadges["AI & Machine Learning"][0].image = "broken-url";
    const { container } = render(<Badges skillBadges={brokenSkillBadges} />);
    // Add assertions to check for placeholder or fallback image if implemented
    expect(container.querySelectorAll("img")).toHaveLength(Badges().allSkillBadges.length);
  });


  it("Component Structure and Styling: Conforms to the expected layout", () => {
    render(<Badges />);
    expect(screen.getByTestId("badges")).toBeInTheDocument(); // Assuming a testId is added to the main div
    // Add more specific assertions for structure and styling based on expected CSS classes
  });


  it("Edge Case: Missing properties in skillBadges or certificates", () => {
    const malformedSkillBadges = { ...Badges().skillBadges };
    malformedSkillBadges["AI & Machine Learning"][0].title = undefined;
    const malformedCertificates = { ...Badges().certificates };
    malformedCertificates["Industry Simulations & Professional Development"][0].description = null;

    const { container } = render(<Badges skillBadges={malformedSkillBadges} certificates={malformedCertificates}/>);
    // Add assertions to check for graceful degradation (e.g., missing title or description)
    expect(container.querySelectorAll(".line-clamp-2")).toHaveLength(Badges().certificates["Industry Simulations & Professional Development"].length);
  });


  it("Edge Case: Extremely long titles or descriptions", () => {
    const longTitleCertificates = { ...Badges().certificates };
    longTitleCertificates["Industry Simulations & Professional Development"][0].title = "This is a very very very very long title that should be truncated";
    render(<Badges certificates={longTitleCertificates} />);
    // Add assertions to verify text wrapping and truncation with line-clamp
  });


  it("Edge Case: Large number of badges - performance and responsiveness", () => {
    const expandedSkillBadges = { ...Badges().skillBadges };
    for (let i = 0; i < 20; i++) {
      expandedSkillBadges["AI & Machine Learning"].push({ id: `ai-${i+3}`, image: "/google_badges/placeholder.png", title: `AI Badge ${i + 3}`, alt: `AI Badge ${i + 3}` });
    }
    render(<Badges skillBadges={expandedSkillBadges}/>);
    // Add assertions related to performance and responsiveness (e.g., using performance metrics)
  });
});