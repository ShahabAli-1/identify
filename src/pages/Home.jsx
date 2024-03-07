import Header from "../components/Header";
import banner from "../assets/banner.png";
import doc_teeth from "../assets/doc_teeth.png";
import idlogo_vert from "../assets/idlogo_vert.png";
import nust from "../assets/nust.png";
import Tech from "../components/Tech";
import react from "../assets/react.png";
import pytorch from "../assets/pytorch.png";
import langchain from "../assets/langchain.png";
import aston from "../assets/aston.png";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import easy from "../assets/easy.png";
import secure from "../assets/secure.png";
import convenient from "../assets/convenient.png";
import twofour from "../assets/twofour.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { redirect } from "react-router-dom";
const Home = () => {
  const user = useSelector(selectUser);
  console.log(user);
  if (!user) {
    return redirect("/signin");
  }
  return (
    <div className="pb-20">
      <div className="bg-black w-full h-full px-10">
        <Header />
        <div className="w-full flex flex-col items-center mt-4">
          <img src={banner} alt="" className="mb-6" />
          <p className="font-inter text-teal-600 text-4xl w-full text-center font-extrabold my-4">
            Monitoring Dental Health with Deep Learning
          </p>
          <button className="text-white px-10 bg-teal-700 py-2 rounded-lg font-inter">
            Get Started!
          </button>
        </div>
        <div className="flex items-center rounded-lg bg-slate-800 mt-10">
          <div
            style={{ width: "15%" }}
            className="bg-slate-700 flex justify-center items-center py-2"
          >
            <img src={idlogo_vert} alt="" className="w-14" />
          </div>
          <div style={{ width: "65%" }} className="text-white px-4 py-4">
            <p className="font-inter">
              Welcome to <span className="text-teal-600">iDentify</span>
            </p>
            <p className="text-xs font-inter mt-1">
              “iDentify - Monitoring Dental Health with Deep Learning” aims to
              revolutionize dental healthcare by leveraging advanced deep
              learning technologies, specifically tailored for dental radiology
              and diagnosis. The core objective is to enhance diagnostic
              accuracy, streamline treatment planning, and establish
              standardized, data-driven decision-making processes within the
              realm of dentistry. By focusing on Panoramic X-rays and their
              comprehensive analysis, the project aims to address critical
              challenges prevalent in dental healthcare, including misdiagnosis,
              lack of standardization in diagnoses, and the absence of efficient
              data-driven approaches.
            </p>
          </div>
          <div style={{ width: "20%" }} className="pr-4">
            <img src={doc_teeth} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full px-10 gap-3 flex mt-8 py-6 bg-slate-900 justify-center">
        <Tech img={nust} />
        <Tech img={react} />
        <Tech img={pytorch} />
        <Tech img={langchain} />
        <Tech img={aston} />
      </div>

      <div className="text-white flex px-10 my-10 gap-4 items-center justify-center">
        <div style={{ width: "50%" }}>
          <h2 className="mb-4 font-inter text-2xl font-bold border-b-2 border-b-teal-600 w-fit">
            Our Mission
          </h2>
          <p className="text-slate-300 font-inter">
            Our mission is to enhance diagnostic accuracy, streamline treatment
            planning, and establish standardized, data-driven decision-making
            processes within the field of dentistry. By focusing on Panoramic
            X-rays and their comprehensive analysis, we aim to address prevalent
            challenges, including misdiagnosis, lack of standardization, and the
            absence of efficient data-driven approaches, ultimately improving
            patient outcomes and well-being.
          </p>
        </div>
        <div>
          <img src={mission} alt="" className="w-72 object-contain" />
        </div>
      </div>
      <div className="text-white flex px-10 my-10 gap-4 items-center justify-center">
        <div>
          <img src={vision} alt="" className="w-72 object-contain" />
        </div>
        <div style={{ width: "50%" }}>
          <h2 className="mb-4 font-inter text-2xl font-bold border-b-2 border-b-teal-600 w-fit">
            Our Vision
          </h2>
          <p className="text-slate-300 font-inter">
            Our mission is to enhance diagnostic accuracy, streamline treatment
            planning, and establish standardized, data-driven decision-making
            processes within the field of dentistry. By focusing on Panoramic
            X-rays and their comprehensive analysis, we aim to address prevalent
            challenges, including misdiagnosis, lack of standardization, and the
            absence of efficient data-driven approaches, ultimately improving
            patient outcomes and well-being.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 mb-4">
        <h2 className="mb-4 font-inter text-white text-2xl font-bold border-b-2 border-b-teal-600 w-fit">
          Benefits
        </h2>
      </div>
      <div className="flex gap-8 items-center justify-center w-full">
        <div className="w-44 h-44 border flex flex-col justify-center items-center border-teal-600 rounded-md">
          <img src={easy} alt="" className="w-20" />
          <p className="text-white text-center font-inter mt-2">Easy to use</p>
        </div>
        <div className="w-44 h-44 border flex flex-col justify-center items-center border-teal-600 rounded-md">
          <img src={secure} alt="" className="w-16" />
          <p className="text-white text-center font-inter mt-2">
            Secure System
          </p>
        </div>
        <div className="w-44 h-44 border flex flex-col justify-center items-center border-teal-600 rounded-md">
          <img src={convenient} alt="" className="w-20" />
          <p className="text-white text-center font-inter mt-2">Convenient</p>
        </div>
        <div className="w-44 h-44 border flex flex-col justify-center items-center border-teal-600 rounded-md">
          <img src={twofour} alt="" className="w-16" />
          <p className="text-white text-center font-inter mt-2">24/7 Service</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
