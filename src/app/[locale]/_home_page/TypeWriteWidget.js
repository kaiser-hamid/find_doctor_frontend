"use client";
import { Typewriter } from "react-simple-typewriter";
export default function TypeWriteWidget({ t }) {
  return (
    <div className="mb-7">
      <h1 className="md:text-4xl text-3xl font-extralight text-gray-700 py-2">
        {t["Welcome"]}
      </h1>
      <h2 className="inline-block font-light text-lg md:text-xl w-max">
        {t["Find your doctor by"]}
        <span className="text-primary">
          {" "}
          <Typewriter
            cursor={true}
            loop={false}
            words={[t["doctor name"], t["location"], t["chamber"]]}
          />
        </span>
      </h2>
    </div>
  );
}
