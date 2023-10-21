import Image from "next/image";

export default function ChamberImage({ src, alt }) {
  const titleArray = alt.split(" ");
  let firstLetter = "";
  for (let i = 0; i < 3; i++) {
    firstLetter += titleArray[i] ? titleArray[i][0] : "";
  }
  const imgAlt = firstLetter.toUpperCase();
  return src ? (
    <img
      src={src}
      className="h-[74px] w-[74px] rounded-lg"
      alt={`${alt} logo`}
    />
  ) : (
    <div className="flex items-center justify-center h-[74px] rounded-lg w-full bg-gradient-to-r from-teal-300 to-blue-300">
      <p className="text-white font-bold text-2xl">{imgAlt}</p>
    </div>
  );
}
