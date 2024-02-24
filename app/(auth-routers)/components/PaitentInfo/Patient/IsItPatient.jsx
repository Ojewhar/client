import React, { useEffect, useState } from "react";
import Image from "next/image";
import bannerImg from "@/public/images/subscription-banner-main-image.png";
import patientImg from "@/public/images/patient.jpg";
import ProfileSec from "./ProfileSec";
import ConsultationForm from "./ConsultationForm/ConsultationForm";
import { getASingleUser } from "@/app/Services/api-requests/auth";
import TableFooter from "../../Global/TableFooter";
import { pageItems } from "@/app/data/PageItem";

const IsItPatient = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [itemsPerPage, setItemPerPage] = useState(pageItems);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [data, itemsPerPage, currentPage]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await getASingleUser();
        setUserInfo(res.data);
        setData(res.data.forms);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="p-5">
      <div>
        <div className=" bg-upurple  flex md:p-0  ">
          <div className=" hidden md:flex  items-end  ">
            <Image
              src={patientImg}
              alt="banner-main-img"
              width={175}
              height={175}
            />
          </div>
          <div className="md:ml-12 md:flex items-center text-white md:py-8">
            <div>
              <h5 className="font-semibold text-2xl leading-normal">
                Hello {userInfo?.name} . Welcome to certnow healthcare
              </h5>
              <p className="text-sm pt-2">
                Unlock unlimited consultation requests for just{" "}
                <strong>$29.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-8 py-4 mt-8">
          <div className="col-span-2">
            <h2 className="font-semibold text-2xl text-ublack">
              Consultations
            </h2>
            <h3 className="font-semibold text-xl text-ublack mt-3">
              Start a new consultation . Here is list of your consultation
            </h3>

            <div className="md:grid grid-cols-2 gap-5 py-6">
              {currentData ? (
                currentData.map((item, index) => {
                  return (
                    <div key={index}>
                      <ConsultationForm item={item} />
                    </div>
                  );
                })
              ) : (
                <div className=" h-[200px] flex justify-center items-center">
                  <p className="font-bold text-uorange">Loading........</p>
                </div>
              )}
            </div>

            <div>
              <TableFooter
                data={data}
                setItemPerPage={setItemPerPage}
                pagename="Patient Info"
                currentPage={currentPage}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>

          <div className="col-span-1">
            <ProfileSec userInfo={userInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsItPatient;
