import {
  BriefcaseBusiness,
  Github,
  LucideIcon,
  AtSign,
  Map,
  MapPinned,
} from "lucide-react";
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
    <div className="flex space-y-8 flex-col">
      {/* <div className="text-4xl font-extrabold">Jackson Rakena</div> */}

      <div className="flex flex-col space-y-3">
        <SocialLink icon={Github} href="https://github.com/jacksonrakena">
          jacksonrakena
        </SocialLink>
        <SocialLink icon={AtSign} href="mailto:jackson@rakena.com.au">
          jackson@rakena.com.au
        </SocialLink>
        <SocialLink icon={MapPinned}>Sydney, Australia</SocialLink>
        <SocialLink icon={BriefcaseBusiness}>Atlassian</SocialLink>
      </div>
    </div>
  );
};
