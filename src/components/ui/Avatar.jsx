import Image from "next/image";

export default function ({ src, sex, className, width, height, alt }) {
  const avatar =
    sex.toLowerCase() == "female"
      ? "/assets/images/avatars/doctor-female.jpg"
      : "/assets/images/avatars/doctor-male.jpg";
  const path = src || avatar;
  return (
    <Image
      width={width}
      height={height}
      src={path}
      className={className}
      alt={alt}
    />
  );
}
