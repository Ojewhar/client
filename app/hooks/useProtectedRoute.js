import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useProtectedRoute = (url) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const redirectUrl = url ? url : "/";
  useEffect(() => {
    const checkAccessToken = async () => {
      const access_token = Cookies.get("access_token");

      if (!access_token) {
        router.push(redirectUrl);
      } else {
        setLoading(false);
      }
    };
    checkAccessToken();
  }, [router, redirectUrl]);

  return loading;
};

export default useProtectedRoute;
