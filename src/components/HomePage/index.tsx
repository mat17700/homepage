import {
  AvatarContainer,
  ButtonContainer,
  Container,
  LargeSpace,
  ProfileName,
  Space,
} from "./styles";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { SocialMediaLinks } from "../SocialMediaLinks";
import { WhatsappLogo } from "phosphor-react";

export function HomePage() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          src="https://github.com/mat17700.png"
          alt="avatarImg"
          title="Porque Deus amou o mundo de tal maneira, que deu o Seu Filho Unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
          - João 3:16"
        />
        <ProfileName>@mat</ProfileName>
      </AvatarContainer>

      <Space />

      <ButtonContainer>
        <Button
          href="https://www.instagram.com/nazareno.manepa/"
          target="_blank"
        >
          Ajude a Espalhar a Palavra
        </Button>
        <Button href="#" showTooltip>
          Veja Meu Portifólio
        </Button>
        <Button 
          href="https://pe.olx.com.br/grande-recife/servicos/servicos-de-informatica-mateus-1447809558?utm_medium=shared_link&utm_source=direct"
          target="_blank"
        >
          Meus Serviços(TI)
        </Button>
        <Button href="https://wa.me/5581997072752" target="_blank">
          Entre Em Contato
          <WhatsappLogo size={26} weight="fill" />
        </Button>
      </ButtonContainer>

      <LargeSpace />

      <SocialMediaLinks />
    </Container>
  );
}
