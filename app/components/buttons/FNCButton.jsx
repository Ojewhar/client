export const FNCButton = ({ title, className, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full font-semibold my-3 block py-3 border-2 rounded-lg shadow-sm ${
        className ? className : ""
      }`}
    >
      {title}
    </button>
  );
};
