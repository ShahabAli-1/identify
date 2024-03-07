import React from "react";
import History from "../components/History";
import upload from "../assets/upload.png";
import { useState } from "react";
import xray1 from "../assets/xray1.png";
import xray2 from "../assets/xray2.png";
import xray3 from "../assets/xray3.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log(selectedFile);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Display image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setSelectedFile(file);

    // Additional file handling logic can be added here
  };
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);

  //   // Additional file handling logic can be added here
  // };
  return (
    <div style={{ width: "100%" }} className="flex">
      <div style={{ width: "30%" }} className="px-3 bg-slate-900 h-screen">
        <div className="py-2 flex justify-between items-center">
          <p className="font-inter text-white">New Upload</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
        </div>
        <h2 className="text-white font-inter text-2xl ">
          <span className="text-teal-600 font-inter font-bold">
            Dr. Kanwal's
          </span>
          <br /> Patient History
        </h2>
        <div>
          <History
            name="Jon Doe"
            scans={[
              "Tooth Decay Monday",
              "Tooth Decay Tuesday",
              "Tooth Decay Wednesday",
            ]}
          />
        </div>
      </div>
      <div style={{ width: "70%" }} className="bg-black px-4 pt-2">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-inter text-2xl ">
            Welcome
            <span className="text-teal-600 font-inter font-bold text-3xl">
              {" "}
              Dr. Kanwal
            </span>
          </h2>
          <Link to={"/home"}>
            <button className="text-white px-2 py-1 bg-teal-700 rounded-lg font-inter text-sm">
              Home
            </button>
          </Link>
        </div>

        <div className="w-full h-36 border border-teal-600 rounded-md mt-4 flex flex-col justify-center items-center">
          {selectedFile && imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="image"
                className="w-44 object-contain"
              />
              <div className="flex gap-2">
                <button
                  className="text-white px-2 py-1 mt-2 bg-teal-700 rounded-lg font-inter text-sm"
                  onClick={() => setSelectedFile(null)}
                >
                  Deselect
                </button>
                <button className="text-white px-4 mt-2 border border-teal-700 py-1 rounded-lg font-inter text-sm">
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              <img src={upload} alt="" className="w-16" />
              {/* <input type="file" alt="" /> */}
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <button
                className="text-white px-4 mt-2 bg-teal-700 py-1 rounded-lg font-inter"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Browse Files
              </button>
            </>
          )}
        </div>
        <div>
          <h1
            className="text-white  mt-4 mb-1 font-inter"
            style={{ width: "100%" }}
          >
            DMFT Analysis
          </h1>
          <div className="w-full h-36 border border-teal-600 rounded-md flex justify-center gap-4 items-center">
            {/* <img src={xray1} alt="" /> */}
            <img style={{ width: "30%", height: "60%" }} src={xray2} alt="" />
            <img style={{ width: "30%", height: "60%" }} src={xray2} alt="" />
            <img style={{ width: "30%", height: "60%" }} src={xray3} alt="" />
          </div>
        </div>
        <div>
          <h1
            className="text-white  mt-4 mb-1 font-inter"
            style={{ width: "100%" }}
          >
            Report
          </h1>
          <div className="w-full h-36 border border-teal-600 rounded-md flex justify-center gap-4 items-center">
            {/* <img src={xray1} alt="" /> */}
            <p className="text-white px-4 py-2">
              Following issues are diagnosed: Teeth # 1, 16 and 13 are impacted.
              Teeth # 18 is decayed. Teeth #4 and #13 exhibit early stages of
              malocclusion, suggesting a developing misalignment that may impact
              overall dental health. Tooth #11 shows signs of enamel hypoplasia,
              a condition that requires careful monitoring due to weakened
              enamel formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
