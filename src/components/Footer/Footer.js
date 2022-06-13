import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:me@r1shi.com">me(at)r1shi.com</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Resume</LinkTitle>
    <LinkItem href="https://resume">Resume</LinkItem>
    </LinkColumn>

    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Creating value.</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href = "https://github.com/rish1p">
<AiFillGithub size = "3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://linkedin.com/in/rishipadmanabhan">
<AiFillLinkedin size = "3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://instagram.com/indian">
<AiFillInstagram size = "3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://twitter.com/rishi____1">
<AiFillTwitterCircle size = "3rem"/>
  </SocialIcons>
  </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
