"use client";
import { Typewriter } from "react-simple-typewriter";
export default () => {
  return (
    <div className="mb-7">
      <h1 className="md:text-6xl/tight text-4xl font-semibold text-gray-700 py-2">
        Welcome,
      </h1>
      <h2 className="inline-block text-xl md:text-3xl w-max">
        Find your doctor by
        <span className="text-primary">
          {" "}
          <Typewriter
            cursor={true}
            loop={false}
            words={["doctor name", "chamber", "speciality", "location"]}
          />
        </span>
      </h2>
    </div>
  );
};
