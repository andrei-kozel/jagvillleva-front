import Link from "next/link";

const Button = ({ color, path, children }) => {
  return (
    <Link href={path}>
      <a className="mt-3 py-2 px-4 bg-yellow-100 font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 cursor-pointer text-center w-fit text-zinc-700 hover:text-white ">
        {children}
      </a>
    </Link>
  );
};

export default Button;
