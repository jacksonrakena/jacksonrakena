import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BriefcaseBusiness,
  Github,
  LucideIcon,
  AtSign,
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

      <div className=" px-10 border-gray-100  rounded-xl">
        <div className="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div>Jackson Rakena</div>
            <div className="text-muted-foreground text-sm">Atlassian</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <SocialLink icon={Github} href="https://github.com/jacksonrakena">
          jacksonrakena
        </SocialLink>
        <SocialLink icon={AtSign} href="mailto:jackson@rakena.com.au">
          jackson@rakena.com.au
        </SocialLink>
        <SocialLink icon={MapPinned}>
          <div>
            <div>Sydney, Australia</div>
            <div className="text-muted-foreground text-sm">
              (also Wellington, New Zealand)
            </div>
          </div>
        </SocialLink>
      </div>
    </div>
  );
};
