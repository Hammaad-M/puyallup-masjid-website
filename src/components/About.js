import React from "react";
import PrimaryButton from "./PrimaryButton";

const About = () => {
  return (
    <div
      id="about"
      className="section bg-primary relative w-full py-6 text-white m-auto"
    >
      <h1 className="heading text-white">About</h1>
      <p className="desc text-center text-lg ">
        A driven masjid serving the rapidly growing muslim community in
        Puyallup.
      </p>
      <div className="relative w-full m-auto py-3 md:w-9/12 xl:w-8/12 h-min">
        <video
          src="intro.mp4"
          className="h-72 sm:h-auto"
          preload="auto"
          autoPlay
          controls
          loop
          playsInline
          webkit-playsinline
          x5-playsinline
        ></video>
      </div>
      <div className="mt-3 w-max relative m-auto">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/groups/664727081179860/?ref=share"
        >
          <PrimaryButton inversed={true} text={"Visit our Facebook page!"} />
        </a>
      </div>
    </div>
  );
};

export default About;
