import Register from "@/app/admin/views/Register/Register";

export const metadata = {
  title: "Login - Updoc",
  description:
    "Its a login form for login admin and doctors only not for patients",
};

const page = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default page;
