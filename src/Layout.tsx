import { Link } from "react-router-dom";
import { projectsLinks } from "./lib/projectLinks";

function Layout() {
  return (
    <section className=" max-w-5xl mx-auto w-[90%] min-h-screen">
      <h1>Just building some react projects</h1>
      <div className="  flex flex-wrap gap-4">
        {projectsLinks.map(({ to, label }) => (
          <Link key={label} to={to}>
            <div className="px-3 py-1 text-2xl hover:text-blue-500 duration-300">
              {label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Layout;
