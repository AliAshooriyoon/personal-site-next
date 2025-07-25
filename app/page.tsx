import Experices from "@/components/Experices";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Services />
        <Projects />
        <Experices />
      </div>
    </>
  );
}
