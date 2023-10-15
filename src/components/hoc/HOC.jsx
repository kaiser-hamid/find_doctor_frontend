import { TbDatabaseSearch } from "react-icons/tb";
import { MdOutlineSearchOff } from "react-icons/md";

export default function HOC({ children, data }) {
  const dataType = typeof data;
  let hasData = false;
  if (Array.isArray(data)) {
    hasData = !!data.length;
  } else if (dataType === "object") {
    const keysArray = Object.keys(data);
    hasData = !!keysArray.length;
  }
  if (hasData) {
    return children;
  }
  return (
    <div className="flex justify-center py-4">
      <MdOutlineSearchOff className="text-[7rem] text-slate-200" />
    </div>
  );
}
