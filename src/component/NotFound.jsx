import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loader from "/logo.svg";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Not Found | Godcrfts";
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-black">
      <i
        onClick={() => navigate(-1)}
        className="absolute top-1 left-1 text-5xl text-white ri-arrow-left-fill cursor-pointer"
      ></i>
      <img className="md:h-[80%] object-cover" src={loader} alt="Not Found" />
      <h1 className="md:hidden text-xl text-white mt-4">Not Found</h1>
    </div>
  );
};

export default NotFound;
