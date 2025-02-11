import Image from "next/image";

interface ShowcasedProject {
  id: number;
  name: string;
  description: string;
  link: string;
  icon?: string;
  tags: string[];
}

const projects: ShowcasedProject[] = [
  {
    id: 0,
    name: "Gradekeeper",
    description:
      "The all-in-one course and grade management app, used by 600+ students at 15+ universities across the world",
    link: "https://gradekeeper.xyz",
    icon: "https://app.gradekeeper.xyz/icons/android-chrome-512x512.png",
    tags: ["Next.js", "Prisma", "MySQL"],
  },
  // {
  //   id: 2,
  //   name: "Jacksonbot",
  //   description:
  //     "A Discord chat-bot that can play blackjack and show you pictures of cats. Serves over 50,000 users.",
  //   link: "https://github.com/jacksonrakena/jacksonbot",
  //   icon: "https://d.lu.je/avatar/679925967153922055",
  //   tags: ["Rust", "Diesel", "PostgreSQL"],
  // },
  // {
  //   id: 1,
  //   name: "Ace In The Hole",
  //   description:
  //     "An online, multiplayer casino game with Texas Hold 'Em poker, blackjack, and 3-card poker.",
  //   link: "https://github.com/jacksonrakena/ace-in-the-hole",
  //   icon: "/assets/king_spades_white.png",
  //   tags: ["Unity", "Networking", "C#"],
  // },
];

export const ShowcasedProjects = () => {
  return (
    <>
      <div className="flex mt-8 flex-col space-y-4 align-baseline">
        {projects
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              className="transition-all hover:cursor-pointer hover:border-gray-400 items-center p-4 flex border-solid border border-gray-300 rounded-lg"
            >
              <div>
                <div className="font-semibold">{project.name}</div>
                <span>{project.description}</span>
                <div className="flex mt-2 space-x-4">
                  {project.tags?.map((t) => (
                    <div
                      className="bg-gray-100 rounded-lg p-1 px-1.5 text-xs text-gray-500 font-semibold"
                      key={t}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              {project.icon && (
                <div>
                  <Image alt="" src={project.icon} width={100} height={100} />
                </div>
              )}
            </a>
          ))}
      </div>
    </>
  );
};
