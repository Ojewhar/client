import Login from "@/app/admin/views/Login/Login";

export const metadata = {
  title: "Login - Updoc",
  description:
    "Its a login form for login admin and doctors only not for patients",
};

const page = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default page;
