import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

  return (
    <div
      role="tablist"
      className="tabs tabs-boxed w-full flex flex-col items-center gap-6"
    >
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-[#09080F99] font-semibold btn bg-slate-200 rounded-3xl ${
              isActive ? "tab-active" : ""
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
