import CardHeading from "@/components/card/CardHeading";
import CardBodyList from "@/components/card/CardBodyList";
import CardSkillsList from "@/components/card/CardSkillsList";
import CardSkill from "@/components/card/CardSkill";
import Card from "@/components/card/Card";
import SectionHeading from "@/components/SectionHeading";

const ExperienceSection = ({ reference }) => {
  return (
    <section
      id="experience"
      ref={reference}
      className="mb-16 lg:mb-36 md:mb-24 lg:scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>
      <ol>
        <li>
          <Card>
            <div className="z-10 sm:col-span-1 uppercase mt-1 font-semibold tracking-wide text-xs text-slate-500">
              May - Aug 2023
            </div>
            <div className="z-10 sm:col-span-3">
              <CardHeading>
                Backend Software Engineer Intern · PayNearby
              </CardHeading>
              <CardBodyList>
                <li>
                  Revamped PayNearby&apos;s authentication infrastructure using
                  Java and Spring Boot by consolidating scattered APIs into
                  microservices, resulting in a 90% improvement in
                  authentication time
                </li>
                <li>
                  Contributed to the development of User Store API, adhering to
                  OAuth 2.0 standards, to efficiently manage user data
                </li>
                <li>
                  Developed the OTP Store API to generate, fetch, and verify
                  one-time passwords and conducted thorough unit testing of the
                  API using JUnit, covering 95% of the code
                </li>
                <li>
                  Ensured data security by implementing AES encryption using a
                  thread pool for storing sensitive data in the database
                </li>
                <li>
                  Built a Java SDK client to consume REST APIs using HTTP
                  connection pooling, handling 80% more concurrent database
                  connections and enhancing scalability
                </li>
              </CardBodyList>
              <CardSkillsList>
                <CardSkill>Java</CardSkill>
                <CardSkill>Spring Boot</CardSkill>
                <CardSkill>REST APIs</CardSkill>
                <CardSkill>MySQL</CardSkill>
                <CardSkill>Jenkins</CardSkill>
                <CardSkill>AWS</CardSkill>
                <CardSkill>JUnit</CardSkill>
                <CardSkill>Git</CardSkill>
                <CardSkill>Ubuntu</CardSkill>
                <CardSkill>Agile SDLC</CardSkill>
              </CardSkillsList>
            </div>
          </Card>
        </li>
      </ol>
    </section>
  );
};
export default ExperienceSection;
