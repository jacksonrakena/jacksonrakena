import { Briefcase, Github, LucideIcon, Mail, Map } from "lucide-react";
import Image from "next/image";
import { PropsWithChildren } from "react";

export const SocialLink = (
  props: PropsWithChildren<{ icon?: LucideIcon; href?: string }>
) => {
  return (
    <div className="flex space-x-2 items-center">
      {props.icon && <props.icon strokeWidth={2} size={16} />}
      {props.href ? (
        <a className="hover:text-primary hover:underline" href={props.href}>
          {props.children}
        </a>
      ) : (
        <span>{props.children}</span>
      )}
    </div>
  );
};

export const AboutMe = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-y-8 flex-col items-start">
        <div className="text-4xl font-extrabold">Jackson Rakena</div>

        <div className="text-lg">
          <div className="flex flex-col space-y-1">
            <SocialLink icon={Github} href="https://github.com/jacksonrakena">
              jacksonrakena
            </SocialLink>
            <SocialLink icon={Mail} href="mailto:jackson@rakena.com.au">
              jackson@rakena.com.au
            </SocialLink>
            <SocialLink icon={Map}>Sydney</SocialLink>
            <SocialLink icon={Briefcase}>Atlassian</SocialLink>
          </div>
        </div>
      </div>
      <Image
        src="https://avatars.githubusercontent.com/u/44521335?v=4"
        alt=""
        className="rounded-full"
        width={150}
        height={150}
      />
    </div>
  );
};
