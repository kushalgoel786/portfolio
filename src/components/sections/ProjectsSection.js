import CardHeading from "@/components/card/CardHeading";
import CardBodyList from "@/components/card/CardBodyList";
import CardSkillsList from "@/components/card/CardSkillsList";
import CardSkill from "@/components/card/CardSkill";
import Card from "@/components/card/Card";
import SectionHeading from "@/components/SectionHeading";

const ProjectsSection = ({ reference }) => {
  return (
    <section id="projects" ref={reference} className="mb-16 lg:scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <ul>
        <li className="mb-12">
          <Card>
            <div className="z-10 sm:col-span-1 uppercase mt-1 font-semibold tracking-wide text-xs text-slate-500">
              Jul - Aug 2023
            </div>
            {/* <div className="sm:col-span-1">Image</div> */}
            <div className="z-10 sm:col-span-3">
              <CardHeading href="https://cloud-x.vercel.app/">
                CloudX · File Management Application
              </CardHeading>
              <CardBodyList>
                <li>
                  Developed a feature-rich file storage and sharing app, with a
                  user-friendly dashboard utilizing React and React Router
                </li>
                <li>
                  Facilitated seamless file uploads and downloads from Google
                  Cloud Storage using pre-signed URLs with temporary
                  permissions, resulting in 50% faster data transfers and
                  increased server efficiency
                </li>
                <li>
                  Implemented robust user authentication using JWT tokens, HTTP
                  cookies, and Bcrypt for hashing passwords
                </li>
                <li>
                  Created RESTful API endpoints in Express.js, with PostgreSQL
                  and Sequelize ORM for data storage
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
              May - Jun 2023
            </div>
            {/* <div className="sm:col-span-1">Photo</div> */}
            <div className="z-10 sm:col-span-3">
              <CardHeading href="https://investo-1-c6704315.deta.app/">
                Investo · Mutual Funds Backend Application
              </CardHeading>
              <CardBodyList>
                <li>
                  Built a backend application to fetch and analyze data for over
                  10,000 mutual fund schemes
                </li>
                <li>
                  Created multiple endpoints to retrieve scheme information
                  spread over 10+ years with daily updates
                </li>
                <li>
                  Calculated cumulative and absolute mutual fund returns for
                  various years through multiple techniques
                </li>
              </CardBodyList>
              <CardSkillsList>
                <CardSkill>Python</CardSkill>
                <CardSkill>FastAPI</CardSkill>
              </CardSkillsList>
            </div>
          </Card>
        </li>
        <li className="mb-12">
          <Card>
            <div className="z-10 sm:col-span-1 uppercase mt-1 font-semibold tracking-wide text-xs text-slate-500">
              Apr 2023
            </div>
            {/* <div className="sm:col-span-1">Photo</div> */}
            <div className="z-10 sm:col-span-3">
              <CardHeading href="https://chrome.google.com/webstore/detail/youtube-shorts-to-video-p/dldgokjmoecpkdfdoniidbjaoginamko?hl=en-GB&authuser=0">
                YouTube Shorts to Video Player · Chrome Extension
              </CardHeading>
              <CardBodyList>
                <li>
                  Designed a Chrome extension with 200+ users to enhance user
                  functionality while watching YouTube shorts
                </li>
                <li>
                  Facilitated playback controls by redirecting to the video
                  player, addressing limitations in rewinding and skipping
                </li>
              </CardBodyList>
              <CardSkillsList>
                <CardSkill>JavaScript</CardSkill>
                <CardSkill>Chrome Browser APIs</CardSkill>
                <CardSkill>HTML</CardSkill>
                <CardSkill>CSS</CardSkill>
              </CardSkillsList>
            </div>
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsSection;
