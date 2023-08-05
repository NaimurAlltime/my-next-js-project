import NavLink from "@/components/HomeSection/NavLink/NavLink";

const sideLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage product",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="mr-12">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <ul>
        {sideLinks.map(({ path, title }) => (
          <li className="my-2" key={path}>
            <NavLink exact activeClassName="text-orange-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
