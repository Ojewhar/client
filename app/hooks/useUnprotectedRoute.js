import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useUnprotectedRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAccessToken = async () => {
      const access_token = Cookies.get("access_token");
      if (access_token) {
        router.push("/dashboard");
      }
    };
    checkAccessToken();
  }, [router]);
};

export default useUnprotectedRoute;
