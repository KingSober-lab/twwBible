import { Children } from "react";

function Button({ children }) {
  return (
    <div>
      <button className=" hover:bg-[#9575cd] py-2 mt-3 px-5 border-solid rounded-lg text-white bg-[#512da8]">
        {children}
      </button>
    </div>
  );
}

export default Button;
