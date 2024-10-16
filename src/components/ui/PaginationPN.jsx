export default function PaginationNP({ t }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex items-center">
        <a
          href="javascript:void(0)"
          className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3 capitalize"
        >
          <i className="fa-solid fa-arrow-left me-2" /> {t["prev"]}
        </a>
      </div>
      <div className="flex items-center">
        <a
          href="javascript:void(0)"
          className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3 capitalize"
        >
          {t["next"]} <i className="fa-solid fa-arrow-right ms-2" />
        </a>
      </div>
    </div>
  );
}
