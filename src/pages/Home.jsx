import About from "@/components/sub-components/About";
import Intro from "@/components/sub-components/Intro";
import Skills from "@/components/sub-components/Skills";
import Timeline from "@/components/sub-components/Timeline";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Timeline />
      <Skills />
    </div>
  );
};

export default Home;
