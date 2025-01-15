import { AboutMe, SocialLink } from "./components/AboutMe";
import { ShowcasedProjects } from "./components/ShowcasedProjects";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <AboutMe />
        <ShowcasedProjects />
        <hr className="my-6" />
        <div className="flex flex-row space-x-1">
          <SocialLink href="https://status.rakena.co.nz/">
            Service status
          </SocialLink>
          <span>&bull;</span>
          <SocialLink href="https://jackson.url.lol/discord">
            My Discord server
          </SocialLink>
        </div>
      </div>
    </>
  );
}
