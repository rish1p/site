import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
hey, <br/> im rishi
    </SectionTitle>
    <SectionText>
      I am a software engineer, social entrepreneur and good at coding.
    </SectionText>
    <Button onClick={() => window.location = 'https://instagram.com/indian'}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;