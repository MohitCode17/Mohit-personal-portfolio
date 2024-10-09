import About from "@/components/sub-components/About";
import Contact from "@/components/sub-components/Contact";
import Intro from "@/components/sub-components/Intro";
import Projects from "@/components/sub-components/Projects";
import Skills from "@/components/sub-components/Skills";
import Timeline from "@/components/sub-components/Timeline";
import { BACKEND_URL } from "@/util/service";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const [timelines, setTimelines] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  // FETCH USER
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${BACKEND_URL}/api/v1/user/me/portfolio`);
      const data = await res.json();

      if (data.success === true) {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  // FETCH TIMELINES
  useEffect(() => {
    const fetchTimeline = async () => {
      const res = await fetch(`${BACKEND_URL}/api/v1/timeline/getall`);
      const data = await res.json();

      if (data.success === true) {
        setTimelines(data.timelines);
      }
    };
    fetchTimeline();
  }, []);

  // FETCH SKILLS
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch(`${BACKEND_URL}/api/v1/skill/getall`);
      const data = await res.json();

      if (data.success === true) {
        setSkills(data.skills);
      }
    };
    fetchSkills();
  }, []);

  // FETCH PROJECTS
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/v1/project/getall`);
        const data = await res.json();

        if (data.success === true) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <Intro user={user} />
      <About user={user} />
      <Timeline timelines={timelines} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
    </div>
  );
};

export default Home;
