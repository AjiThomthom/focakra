"use client";

import { HeroSection } from "./pw.hero";
import { CreditSection } from "./pw.credit";
import { WhatsOnSection } from "./pw.whatson";
import { FaQSection } from "./pw.faq";
import { RegisterSection } from "./pw.register";
import { FooterSection } from "./pw.footer";
import { Container } from "@mui/material";

export default function PublicWelcomeFeature() {
  return (
    <Container maxWidth={"xl"}>
      <HeroSection />
      <CreditSection />
      <WhatsOnSection />
      <FaQSection />
      <RegisterSection />
      <FooterSection />
    </Container>
  );
}
