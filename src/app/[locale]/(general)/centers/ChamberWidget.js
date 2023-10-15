"use client";
import { useEffect } from "react";
import Aos from "aos";
import Chamber from "@/components/cards/Chamber";

//aos css
import "aos/dist/aos.css";

export default function ChamberWidget({ chamber, t }) {
  useEffect(() => {
    initAos();
  }, []);
  const initAos = () => {
    Aos.init({
      offset: 100,
      duration: 300,
      easing: "ease-in-sine",
      delay: 100,
    });
  };
  return (
    <>
      <div data-aos="fade-up">
        <Chamber chamber={chamber} t={t} />
      </div>
    </>
  );
}
