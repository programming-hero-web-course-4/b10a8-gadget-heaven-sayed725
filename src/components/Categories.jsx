import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

  return (
    <div
      role="tablist"
      className="tabs  w-full flex flex-col items-center gap-10 rounded-xl shadow-xl py-10 bg-white"
    >
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-[#09080F99] hover:bg-[#9538E2] hover:text-white  rounded-3xl font-semibold btn ${
              isActive ? "tab-active bg-[#9538E2] text-white" : ""
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
