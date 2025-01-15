import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BsGit, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons/lib";

export const SocialLink = (
  props: PropsWithChildren<{ icon?: () => IconType; href?: string }>
) => {
  return (
    <span className="space-x-2 items-center flex">
      {props.href ? (
        <a className="hover:text-primary hover:underline" href={props.href}>
          {props.children}
        </a>
      ) : (
        props.children
      )}
    </span>
  );
};

export const AboutMe = () => {
  return (
    //pb={16} alignItems={"center"} justifyContent={"space-between"}
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <div className="text-3xl font-extrabold">Jackson Rakena</div>
        </div>
        <div className="text-lg">
          <div className="flex flex-col space-y-1">
            <SocialLink icon={BsGithub} href="https://github.com/jacksonrakena">
              jacksonrakena
            </SocialLink>
            <SocialLink icon={FiMail} href="mailto:jackson@rakena.co.nz">
              jackson@rakena.co.nz
            </SocialLink>
            <SocialLink icon={IoLocationOutline}>
              Sydney &bull; Wellington
            </SocialLink>
            <SocialLink icon={MdWorkOutline}>Atlassian</SocialLink>
          </div>
        </div>
      </div>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/44521335?v=4" />
        <AvatarFallback>JR</AvatarFallback>
      </Avatar>
    </div>
  );
};
