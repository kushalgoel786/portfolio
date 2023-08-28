import CardHeading from "@/components/card/CardHeading";
import CardBodyList from "@/components/card/CardBodyList";
import CardSkillsList from "@/components/card/CardSkillsList";
import CardSkillsItem from "@/components/card/CardSkillsItem";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-16 lg:mb-36 md:mb-24 lg:scroll-mt-24">
      <ol>
        <li>
          <div className="grid sm:grid-cols-4">
            <div className="sm:col-span-1 uppercase mt-1 font-semibold tracking-wide text-xs text-slate-500">
              May - Aug 2023
            </div>
            <div className="sm:col-span-3">
              <CardHeading>
                Backend Software Engineer Intern · PayNearby
              </CardHeading>
              <CardBodyList>
                <li>
                  Revamped PayNearby&apos;s authentication infrastructure by
                  consolidating multiple APIs into a single microservice written
                  in Java, resulting in a remarkable 90% enhancement in
                  authentication time and response speed.
                </li>
                <li>
                  Contributed to the development of User Store API using
                  Quarkus, adhering to OAuth 2.0 standards. Developed and
                  conducted unit testing of the OTP Store API, covering 95% of
                  the code.
                </li>
                <li>
                  Ensured data security by implementing AES encryption for
                  storing sensitive data in the database. Implemented a thread
                  pool executor script for encrypting existing data.
                </li>
                <li>
                  Built a Java SDK client to consume APIs using HTTP connection
                  pooling to improve scalability, resulting in handling 80% more
                  concurrent database connections. Deployed using a CI/CD
                  Jenkins pipeline.
                </li>
              </CardBodyList>
              <CardSkillsList>
                <CardSkillsItem>Java</CardSkillsItem>
                <CardSkillsItem>Spring Boot</CardSkillsItem>
                <CardSkillsItem>REST APIs</CardSkillsItem>
                <CardSkillsItem>MySQL</CardSkillsItem>
                <CardSkillsItem>Jenkins</CardSkillsItem>
                <CardSkillsItem>AWS</CardSkillsItem>
                <CardSkillsItem>JUnit</CardSkillsItem>
                <CardSkillsItem>Git</CardSkillsItem>
                <CardSkillsItem>Ubuntu</CardSkillsItem>
                <CardSkillsItem>Agile SDLC</CardSkillsItem>
              </CardSkillsList>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
};
export default ExperienceSection;
