import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
