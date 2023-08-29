export default () => {
  return (
    <h1 className="md:text-5xl/tight text-3xl font-semibold text-gray-700 mb-7">
      Search your doctor
      <br /> based on
      <span
        className="typewrite capitalize relative after:absolute after:inset-x-0 after:bottom-2 after:bg-green-400/40 after:h-5 after:w-full after:-z-10"
        data-period={2000}
        data-type='["doctor name", "hospital", "chamber", "speciality","location"]'
      >
        <span className="wrap" />
      </span>
    </h1>
  );
};
