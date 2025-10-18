import {
  SocialLink,
  SocialMediaContainer,
  AuthorText,
  AuthorName,
  Copyright,
  SocialLinksWrapper,
} from "./styles";
import { GithubLogo, InstagramLogo, LinkedinLogo, Heart } from "phosphor-react";

export function SocialMediaLinks() {
  return (
    <SocialLinksWrapper>
      <AuthorText>
        Desenvolvido por <AuthorName>Mat</AuthorName>
        <Heart size={16} weight="fill" />
      </AuthorText>

      <SocialMediaContainer>
        <SocialLink
          href="https://github.com/mat17700"
          target="_blank"
          data-tooltip="GitHub"
        >
          <GithubLogo size={24} />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/mvteus1"
          target="_blank"
          data-tooltip="Instagram"
        >
          <InstagramLogo size={24} />
        </SocialLink>
        <SocialLink href="#" data-tooltip="LinkedIn">
          <LinkedinLogo size={24} weight="fill" />
        </SocialLink>
      </SocialMediaContainer>

      <Copyright>
        © {new Date().getFullYear()} - Todos os direitos reservados
      </Copyright>
    </SocialLinksWrapper>
  );
}
