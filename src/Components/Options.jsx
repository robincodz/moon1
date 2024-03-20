import React, { useEffect, useState } from "react";

function Options() {
  const [selectedOption, setSelectedOption] = useState("");

  const[isPlaying,setIsPlaying]=useState(false);

    useEffect(()=>{
        setIsPlaying(selectedOption==="1080p")
    },[selectedOption])

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="bg-black h-screen flex flex-col ">
      <div className=" flex justify-center  ">
        <p className=" mt-10 text-5xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center ">
          Select an <br /> Option
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-40 gap-24 ">
        <div>
          {selectedOption === "240p" && (
            <img
              src="../../Images/moon240p.png"
              alt=""
              className="w-[200px] h-[200px]"
            />
          )}
          {selectedOption === "360p" && (
            <img
              src="../../Images/moon360p.jpg"
              alt=""
              className="w-[200px] h-[250px]"
            />
          )}
          {selectedOption === "720p" && (
            <img
              src="../../Images/moon720p.png"
              alt=""
              className="w-[300px] h-[300px]"
            />
          )}
          {selectedOption === "1080p" && (
            <>
              <img
                src="../../Images/moon1080p.png"
                alt=""
                className="w-[216.5px] h-[288.5px] rounded-2xl"
              />
              <img src="" alt="" />
            </>
          )}
        </div>
        <div>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="p-4 text-xl rounded-lg  "
          >
            <option value="">Select</option>
            <option value="240p">240p</option>
            <option value="360p">360p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>
        </div>
      </div>
      {isPlaying && (
        <audio  autoPlay>
          <source src="../../Images/song.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Options;
