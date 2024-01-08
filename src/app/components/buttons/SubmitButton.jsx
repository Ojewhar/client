export const SubmitButton = ({ title, className, disable }) => {
  return (
    <button
      type="submit"
      className={`w-full font-semibold my-3 block py-3  rounded-lg shadow-sm ${
        className ? className : ""
      }`}
      disabled={disable}
    >
      {title}
    </button>
  );
};
