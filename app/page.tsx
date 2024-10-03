import About from "@/components/about/About";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className={styles.mainContent}>
        <Hero />
        <About />
        <Skills />
        <Experience/>
        <Projects/>
    </div>
  );
}
