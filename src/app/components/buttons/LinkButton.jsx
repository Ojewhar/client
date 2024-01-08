import Link from "next/link";
export const LinkButton = ({ title, className, href }) => {
  return (
    <Link
      href={href ? href : "#"}
      className={`w-full font-semibold my-3 block py-3 rounded text-center t shadow-sm ${
        className ? className : ""
      }`}
    >
      {title}
    </Link>
  );
};
