"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import bannerImg from "../../public/images/subscription-banner-main-image.png";
import Link from "next/link";
import img3 from "../../public/images/MedCert.png";
import GenCons from "../../public/images/GenCons.png";
import { LinkButton } from "@/app/components/buttons/LinkButton";
import ProfileSec from "@/app/components/HomePage/ProfileSec";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./components/Loader/Loading";
import axios from "axios";
import { BASE_URL } from "./admin/url-manager/url-manager";
import { getFormOne } from "./admin/api-requests/form";
import { access_token } from "./admin/access-token/access_token";

// export const metadata = {
//   title: "Telehealth Consultation Form | updoc ",
//   description: "Telehealth Consultation Form | updoc",
// };

export default function Home() {
  //const formsData = useSelector((state) => state.certificate.allfields);
  const [loading, setLoading] = useState(false);
  const [cookieInfo, setCookieInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // get access token from cookie
  const router = useRouter();
  useEffect(() => {
    const isCookie = Cookies.get("access_token");
    if (!isCookie) {
      window.location.replace("/login-passwordless");
    } else {
      setCookieInfo(isCookie);
    }
    setLoading(false);
  }, [router]);

  function handleLoggout() {
    Cookies.remove("access_token");
    setTimeout(() => {
      window.location.replace("/");
    }, [1000]);
  }

  async function getUserInfo() {
    try {
      setLoading(true);
      const res = await getFormOne();
      setUserInfo(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {cookieInfo ? (
        <section className="bg-pink-50 min-h-screen">
          <div>
            <div className="w-[80%] mx-auto py-20 ">
              <div>
                <div className="flex justify-between pb-4 border-b border-slate-300">
                  <div>
                    <Image src={logo} width={120} height={50} alt="logo" />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleLoggout}
                      className="text-xl font-bold outline-none"
                    >
                      Log out
                    </button>
                  </div>
                </div>
                <div className="mt-8 bg-upurple  rounded flex p-10 md:p-0 ">
                  <div className=" hidden md:flex ml-4  items-end ">
                    <Image
                      src={bannerImg}
                      alt="banner-main-img"
                      width={125}
                      height={125}
                    />
                  </div>
                  <div className="md:ml-12 md:py-5 md:flex items-center text-white">
                    <div>
                      <h5 className="font-semibold">Upgrade to Updoc Plus</h5>
                      <p className="text-sm py-2">
                        Unlock unlimited consultation requests for just
                        $19.95/month.
                      </p>

                      <div className="py-3">
                        {loading ? (
                          <Link
                            href="/"
                            className="py-4 md:inline-block block text-center px-20 bg-uorange hover:opacity-85 transition-all text-white font-semibold rounded"
                          >
                            Loading....
                          </Link>
                        ) : (
                          <Link
                            href="/"
                            className="py-4 px-20 md:inline-block block text-center bg-uorange hover:opacity-85 transition-all text-white font-semibold rounded"
                          >
                            {userInfo ? "Start trial" : "Upgrade Now"}
                          </Link>
                        )}
                      </div>
                      <p className="text-sm pt-2">
                        Unlock unlimited consultation requests for just
                        $19.95/month.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:grid grid-cols-3 gap-5 py-4">
                  <div className="col-span-2">
                    <h2 className="font-semibold text-2xl text-ublack">
                      Consultations
                    </h2>
                    <h3 className="font-semibold text-xl text-ublack mt-3">
                      Start a new consultation with a partner practitioner who,
                      if applicable, can provide an outcome which includes
                    </h3>

                    <div className="md:grid grid-cols-2 gap-5 py-6">
                      <div className="p-5 bg-white border border-slate-300 rounded">
                        <h3 className="font-semibold text-xl text-ublack">
                          Medical Certificate
                        </h3>
                        <div className="grid grid-cols-3 py-6">
                          <p className="col-span-2 text-sm text-ublack opacity-70">
                            Request a consultation with a Partner Doctor who can
                            provide outcomes including: medical certificates,
                            sick notes, doctors notes.
                          </p>
                          <Image
                            className="col-span-1 mx-auto"
                            src={img3}
                            width={70}
                            alt="image-3"
                          />
                        </div>

                        <LinkButton
                          href="/form"
                          title="Request A Consultation Now"
                          className="bg-uorangedark text-white rounded"
                        />
                      </div>

                      <div className="p-5 bg-white border border-slate-300 rounded mt-6 md:mt-0">
                        <h3 className="font-semibold text-xl text-ublack ">
                          Telehealth Consultation
                        </h3>
                        <div className="grid grid-cols-3 py-6">
                          <p className="col-span-2 text-sm  text-ublack opacity-70">
                            The easiest way to speak to a registered medical
                            practitioner for advice or a prescription.
                          </p>
                          <Image
                            className="col-span-1 mx-auto"
                            src={GenCons}
                            width={70}
                            alt="image-4"
                          />
                        </div>

                        <LinkButton
                          href="/request-telehealth-consultation"
                          title="Request A Call Now"
                          className=" bg-uorangedark text-white rounded"
                        />
                      </div>

                      <div className="p-5 bg-white border border-slate-300 rounded mt-6 md:mt-0">
                        <h3 className="font-semibold text-xl text-ublack ">
                          Medical Certificate
                        </h3>
                        <div className="grid grid-cols-3 py-6">
                          <p className="col-span-2 text-sm  text-ublack opacity-70">
                            The easiest way to speak to a registered medical
                            practitioner for advice or a prescription.
                          </p>
                          <Image
                            className="col-span-1 mx-auto"
                            src={img3}
                            width={70}
                            alt="image-4"
                          />
                        </div>

                        <LinkButton
                          href="/request-telehealth-consultation"
                          title="Request A Call Now"
                          className=" bg-uorangedark text-white rounded"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <ProfileSec userInfo={userInfo} />
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading height="100vh" />
      )}
    </>
  );
}
