import LoginPasswordLess from "@/app/components/LoginPasswordLess/LoginPasswordLess";

export const metadata = {
  title: "Medical Certificates Online | Only $19.95 | Real Aussie Doctors",
  description:
    "Medical Certificates Online | Only $19.95 | Real Aussie Doctors",
};
const passwordless = () => {
  return (
    <section>
      <div>
        <LoginPasswordLess />
      </div>
    </section>
  );
};

export default passwordless;
