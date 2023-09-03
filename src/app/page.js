"use client";

import ExternalLinks from "@/components/ExternalLinks";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/nav/Navbar";
import NavLink from "@/components/nav/NavLink";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SecretSection from "@/components/sections/SecretSection";
import Footer from "@/components/Footer";

import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function Home() {
  const aboutSectionRef = useRef();
  const experienceSectionRef = useRef();
  const projectsSectionRef = useRef();

  const { inViewport: aboutSectionInViewport } = useInViewport(
    aboutSectionRef,
    { disconnectOnLeave: false }
    // options,
    // (config = { disconnectOnLeave: false })
    // props
  );

  const { inViewport: experienceSectionInViewport } = useInViewport(
    experienceSectionRef,
    {
      disconnectOnLeave: false,
    }
  );
  const { inViewport: projectsSectionInViewport } = useInViewport(
    projectsSectionRef,
    {
      disconnectOnLeave: false,
    }
  );

  return (
    <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:max-h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:w-1/2 lg:py-24">
          <div>
            <MainHeader />
            <Navbar>
              {/* /# or # ? */}
              <NavLink to="#about" inViewport={aboutSectionInViewport}>
                About
              </NavLink>
              <NavLink
                to="#experience"
                inViewport={
                  !aboutSectionInViewport && experienceSectionInViewport
                }>
                Experience
              </NavLink>
              <NavLink
                to="#projects"
                inViewport={
                  !aboutSectionInViewport &&
                  !experienceSectionInViewport &&
                  projectsSectionInViewport
                }>
                Projects
              </NavLink>
            </Navbar>
          </div>
          <ExternalLinks />
        </header>
        <main id="content" className="pt-20 lg:py-24 lg:w-1/2">
          {/* forwardref */}
          <AboutSection reference={aboutSectionRef} />
          <ExperienceSection reference={experienceSectionRef} />
          <ProjectsSection reference={projectsSectionRef} />
          <SecretSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
