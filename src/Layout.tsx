import { Link } from "react-router-dom";
import { projectsLinks } from "./lib/projectLinks";

function Layout() {
  return (
    <section className=" max-w-5xl mx-auto w-[90%] min-h-screen">
      <h1>Just building some react projects</h1>
      <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-16 lg:pe-0">
        {projectsLinks.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            className="border border-gray-500 rounded-lg flex justify-center items-center">
            <p className="px-3 py-1 text-2xl hover:text-blue-500 duration-300">
              {label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Layout;
