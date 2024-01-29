// eslint-disable-next-line no-unused-vars
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Style.css";

export const WorkWithUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div className="bg-black text-white p-4">
      <p
        ref={ref}
        className={`w-main-text ${
          inView ? "animate-featured" : ""
        } text-center text-9xl font-bold`}
      >
        WORK WITH US
      </p>
      <div className="wwithus-box flex justify-between p-3">
        <div className="my-4 flex place-items-center">
          <video autoPlay loop muted controls={false} className="w-full h-full">
            <source
              src="https://moonbase.nyc3.cdn.digitaloceanspaces.com/ADMILK/milkball/milkball.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <div className="wwithus-text text-xl my-8">
            <p>
            Power up your brand with ALPHA ZEAL! We collaborate with companies of all sizes and specialise in creating original content that not only stands out but also delivers impactful results
              <br />
            </p>
            <p className="my-3">
            Whether you're starting or soaring, ALPHA ZEAL creates standout content that resonates and makes an impact that leaves a lasting impression on your audience.
            </p>
          </div>
          <div className="my-3">
            <Link
              to={"/about"}
              className="mx-1 border-solid border-2 border-white rounded-xl px-2"
            >
              Read More &#8594;
            </Link>
            <Link
              to={"/work"}
              className="mx-1 border-solid border-2 border-white rounded-xl px-2"
            >
              Contact Our Team &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
