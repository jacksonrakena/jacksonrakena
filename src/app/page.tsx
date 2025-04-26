import { AboutMe, SocialLink } from "./components/AboutMe";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <AboutMe />
      {/* <ShowcasedProjects /> */}
      {/* <hr className="my-6" /> */}
      <div className="my-6 flex flex-row space-x-1 mx-auto text-sm text-gray-500">
        <SocialLink href="https://status.rakena.co.nz/">
          Service status
        </SocialLink>
        {/* <span>&bull;</span>
          <SocialLink href="https://jackson.url.lol/discord">
            My Discord server
          </SocialLink> */}
      </div>
    </div>
  );
}
