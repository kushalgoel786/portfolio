import CardHeading from "@/components/card/CardHeading";
import CardBodyList from "@/components/card/CardBodyList";
import CardSkillsList from "@/components/card/CardSkillsList";
import CardSkill from "@/components/card/CardSkill";
import Card from "@/components/card/Card";

const ProjectsSection = () => {
  return (
    <section id="projects" className="lg:scroll-mt-24">
      <ul>
        <li className="mb-12">
          <Card>
            <div className="z-10 sm:col-span-1 uppercase mt-1 font-semibold tracking-wide text-xs text-slate-500">
              July 2023
            </div>
            {/* <div className="sm:col-span-1">Image</div> */}
            <div className="z-10 sm:col-span-3">
              <CardHeading>CloudX</CardHeading>
              <CardBodyList>
                <li>
                  Developed a feature-rich file storage and sharing platform
                  like Google Drive, using the MERN stack with a user-friendly
                  and intuitive dashboard utilizing React components and React
                  Router.
                </li>
                <li>
                  Facilitated seamless file uploads and downloads using
                  pre-signed URLs with temporary permissions, resulting in 50%
                  faster data transfers and increased server efficiency.
                </li>
                <li>
                  Implemented robust user authentication using JWT tokens, HTTP
                  cookies, and Bcrypt for hashing passwords.
                </li>
                <li>
                  Created RESTful API endpoints in Express.js, with PostgreSQL
                  and Sequelize for data storage.
                </li>
              </CardBodyList>
              <CardSkillsList>
                <CardSkill>JavaScript</CardSkill>
                <CardSkill>Express.js</CardSkill>
                <CardSkill>NodeJS</CardSkill>
                <CardSkill>React</CardSkill>
                <CardSkill>React Router</CardSkill>
                <CardSkill>Sequelize</CardSkill>
                <CardSkill>PostgreSQL</CardSkill>
                <CardSkill>TailwindCSS</CardSkill>
                <CardSkill>Axios</CardSkill>
                <CardSkill>Google Cloud</CardSkill>
              </CardSkillsList>
            </div>
          </Card>
        </li>
        <li className="mb-12">
          <Card>
            <div className="z-10 sm:col-span-1 uppercase mt-1 font-semibold tracking-wide text-xs text-slate-500">
              June 2023
            </div>
            {/* <div className="sm:col-span-1">Photo</div> */}
            <div className="z-10 sm:col-span-3">
              <CardHeading>Investo</CardHeading>
              <CardBodyList>
                <li>
                  Built a web application using FastAPI (Python) to fetch and
                  analyze mutual fund data from an external API.
                </li>
                <li>
                  Created 10+ API endpoints to retrieve scheme information, and
                  calculate returns through multiple techniques.
                </li>
              </CardBodyList>
              <CardSkillsList>
                <CardSkill>Python</CardSkill>
                <CardSkill>FastAPI</CardSkill>
              </CardSkillsList>
            </div>
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsSection;
