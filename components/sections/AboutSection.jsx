import { BsArrowRight } from "react-icons/bs";
import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="lg:mb-36 md:mb-24 mb-16 lg:scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <div>
        <p className="mb-4">
          I&apos;m currently a sophomore at the
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            className="font-medium text-slate-200 hover:text-teal-300">
            &nbsp;University of Waterloo&nbsp;
          </a>
          studying Computer Science as my major. I have strong technical skills
          and an academic background in computer science, mathematics, and
          statistics with in-depth industry experience acquired through
          internships.
        </p>
        <p className="mb-4">
          In my latest work experience, which was a co-op (internship) at
          <a
            href="https://paynearby.in/"
            target="_blank"
            className="font-medium text-slate-200 hover:text-teal-300">
            &nbsp;PayNearby&nbsp;
          </a>
          as a Backend Software Developer, I was a part of the authentication
          team and was responsible for rebuilding PayNearby&apos;s
          authentication system. I worked in Java and Spring Boot consolidating
          multiple APIs into a single microservice, resulting in a 90%
          improvement in authentication time and response speed.
        </p>
        <p>
          I have mentored over 200 students to learn to code, specifically
          building cross-platform mobile applications using Flutter and Dart. I
          also run a
          <a
            href="https://medium.com/flutterfever"
            target="_blank"
            className="font-medium text-slate-200 hover:text-teal-300">
            &nbsp;blog&nbsp;
          </a>
          on App Development with 300+ monthly views.
        </p>
      </div>
      <div className="mt-12">
        <a
          className="font-semibold leading-tight text-slate-200 flex items-center"
          href="/resume.pdf">
          <span className="border-b pb-px border-transparent hover:border-teal-300 transition">
            View Full Résumé
          </span>
          <BsArrowRight className="inline-block ml-1 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
