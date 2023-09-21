import { ThemeProvider } from "theme-ui";
import Theme from 'Theme/Index';
//Components
import Head from 'Utilis/Head'
import Header from "Section/Header";
import Hero from "Section/Hero";
import Service from "Section/Service";
import About from "Section/About";
import Features from "Section/Features";
import Get from "Section/Get";
import Questions from "Section/Questions";
import Award from "Section/Award";
import Contact from "Section/Contact ";
import Footer from "Section/Footer";
//Data
import NavData from "Data/NavData";
import HeroData from "Data/HeroData";
import ServiceData from "Data/ServiceData";
import AboutData from "Data/AboutData";
import FeaturesData from "Data/FeaturesData";
import GetData from "Data/GetData";
import QuestionsData from "Data/QuestionsData";
import AwardData from "Data/AwardData";
import ContactData from "Data/ContactData";
import FooterData from "Data/FooterData";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Head title="Personal portfolio- Next js" />
      <Header NavData={NavData} />
      <Hero HeroData={HeroData} />
      <Service ServiceData={ServiceData} />
      <About AboutData={AboutData} />
      <Features FeaturesData={FeaturesData} />
      <Get GetData={GetData} />
      <Questions QuestionsData={QuestionsData} />
      <Award AwardData={AwardData} />
      <Contact ContactData={ContactData} />
      <Footer FooterData={FooterData} />
    </ThemeProvider>
  )
}
