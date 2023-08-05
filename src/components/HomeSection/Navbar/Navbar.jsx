import NavLink from "../NavLink/NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h2 className="text-3xl font-semibold">My Next Project</h2>
      <ul className="flex justify-center items-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-3 text-lg" key={path}>
            <NavLink
              exact={path == "/"}
              activeClassName="text-orange-500 border border-b-2 border-b-orange-500"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
