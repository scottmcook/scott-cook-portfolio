import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import "@fontsource-variable/open-sans";

export default function IndexPage() {
  return (
    <>
      <Seo title="RunninCode" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="philosophy" heading="Philosophy" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
