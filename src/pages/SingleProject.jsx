import { BACKEND_URL } from "@/util/service";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/v1/project/get/${id}`);
        const data = await res.json();

        if (data.success === true) {
          setProjectDetails(data.project);
        }
      } catch (error) {}
    };
    fetchProjectDetails();
  }, []);

  return (
    <section className="mt-16 sm:mt-28 mb-10 sm:mb-40">
      <div className="flex justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4">
        <div className="w-[100%] px-5 md:w-[1000px] pb-5">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex items-end justify-end mt-10 sm:mt-0">
                <Link
                  className="bg-gray-900 hover:bg-gray-950 transition duration-300 px-4 py-2 rounded-full"
                  to={"/"}
                >
                  Go back to home
                </Link>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <div className="w-full sm:col-span-4">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-8 mt-4 text-center">
                    {projectDetails?.title}
                  </h1>
                  <img
                    src={
                      projectDetails?.projectBanner &&
                      `${projectDetails.projectBanner.url}`
                    }
                    alt="projectBanner"
                    className="w-full h-[250px] sm:h-[450px] object-cover object-top rounded-lg"
                  />
                </div>

                <div className="w-full sm:col-span-4 mt-4">
                  <p className="text-2xl mb-2">Description of Project</p>
                  <div
                    className="text-lg py-2 text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html:
                        projectDetails?.description &&
                        projectDetails?.description,
                    }}
                  ></div>
                </div>

                <div className="w-full sm:col-span-4 mt-4">
                  <p className="text-2xl mb-2">Technology Use</p>
                  <div className="py-2 flex flex-wrap gap-2">
                    {projectDetails?.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-800 text-gray-100 px-2 py-1 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full sm:col-span-4 mt-4">
                  <p className="text-2xl mb-2">Stack</p>
                  <p className="text-gray-400">{projectDetails?.stack}</p>
                </div>

                <div className="w-full sm:col-span-4 mt-4">
                  <p className="text-2xl mb-2">Github Repository</p>
                  <Link
                    className="text-sky-500"
                    target="_blank"
                    to={projectDetails?.gitRepoLink}
                  >
                    {projectDetails?.gitRepoLink}
                  </Link>
                </div>

                <div className="w-full sm:col-span-4 mt-4">
                  <p className="text-2xl mb-2">Live Project</p>
                  <Link
                    className="text-sky-500"
                    target="_blank"
                    to={projectDetails?.projectLink}
                  >
                    {projectDetails?.projectLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
