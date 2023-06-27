import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="RunninCode" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Philosophy" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
