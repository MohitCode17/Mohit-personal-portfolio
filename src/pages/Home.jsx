import About from "@/components/sub-components/About";
import Intro from "@/components/sub-components/Intro";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <About />
    </div>
  );
};

export default Home;
