import Image from "next/image";

export default () => {
  return (
    <section className="pt-36 bg-teal-100 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/photos/5.jpg')]">
      <div className="container">
        <div className="flex justify-center">
          <div className="flex justify-center items-center relative -bottom-28 h-56 w-56 rounded-full overflow-hidden border-2 border-slate-300 bg-slate-100">
            <Image
              src="/assets/images/hero/portfolio1.png"
              className="h-full w-full"
              alt="Doctor image"
              width={170}
              height={170}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
