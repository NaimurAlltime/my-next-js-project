import Link from "next/link";

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
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
