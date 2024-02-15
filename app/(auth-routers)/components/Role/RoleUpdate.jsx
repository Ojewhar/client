"use client";
import Model from "@/app/Layouts/Model";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import noimage from "@/public/images/no-photo.svg";
import Upload from "@/public/images/Upload Image.png";
import Message from "@/public/icons/Message.svg";
import PhoneInput from "react-phone-input-2";
const RoleUpdate = ({ showModel, setShowModel, data }) => {
  const [updateEquipe, setUpdateEquipe] = useState();
  const isAdmin = true;
  useEffect(() => {
    if (data) {
      setUpdateEquipe(data);
    }
  }, [data]);

  console.log(data);

  return (
    <Model
      showModel={showModel}
      setShowModel={setShowModel}
      title={data?.title}
    >
      <div>
        <form className="px-10 py-7 overflow-hidden">
          <div className=" w-full md:flex justify-between items-center gap-6  ">
            <div className="md:w-1/2">
              <div className="mt-3">
                <select
                  className="py-4 w-full px-3 outline-none   transition-all  rounded-lg bg-slate-100 mt-1 "
                  id="kbis"
                  type="text"
                >
                  <option value="">Commercial</option>
                  <option value="">Commercial</option>
                  <option value="">Commercial</option>
                </select>
              </div>
              <div className="mt-3 relative">
                <label className="" htmlFor="code">
                  Email
                </label>
                <input
                  required
                  className="py-3 w-full pl-10 px-3 outline-none   transition-all  rounded-lg bg-slate-100  "
                  id="code"
                  type="email"
                  value={`${data?.category}@gmail.com`}
                  placeholder="unknowbrand@gmail.com"
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateEquipe,
                      email: e.target.value,
                    })
                  }
                />
                <Image
                  alt="message"
                  src={Message}
                  className=" absolute top-1/2   left-2.5 text-gray-500"
                />{" "}
              </div>
              <div className="mt-3 ">
                <label className="" htmlFor="code">
                  Téléphone (optionnel)
                </label>
                <PhoneInput
                  country={"us"}
                  placeholder="08065650633"
                  inputStyle={{
                    width: "100%",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                  inputClass="bg-slate-100"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                className=" rounded-xl"
                src={data ? data.thumbnail : Upload}
                width={400}
                height={400}
                alt="Upload"
              />
            </div>
          </div>
          <div className="mt-8 mb-4 text-center flex justify-center items-center gap-4">
            {!isAdmin ? (
              <>
                <Button className="text-white bg-red-500 hover:bg-red-400 px-8 font-normal rounded-lg">
                  Supprimer
                </Button>
                <Button className="text-white px-8 font-normal rounded-lg">
                  Enregistrer
                </Button>
              </>
            ) : (
              <Button className="text-white px-8 font-normal rounded-lg">
                Créer
              </Button>
            )}
          </div>
        </form>
      </div>
    </Model>
  );
};

export default RoleUpdate;
