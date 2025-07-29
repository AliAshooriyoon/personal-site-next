import { getDictionary } from "../lib/getDictionary";
import Contact from "@/components/Contact";
import Experices from "@/components/Experices";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div>
      <Header dict={dict.header} />
      <Main dict={dict.main} />
      <Services dict={dict.services} />
      <Projects dict={dict.projects} />
      <Experices dict={dict.experices} />
      <Contact dict={dict.contact} />
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "de"].map((locale) => ({ locale }));
}
