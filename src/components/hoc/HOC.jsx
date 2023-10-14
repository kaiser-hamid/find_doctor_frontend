import { TbDatabaseSearch } from "react-icons/tb";
import { MdOutlineSearchOff } from "react-icons/md";

export default function HOC({ children, data }) {
  if (data) {
    return children;
  }
  return (
    <div className="flex justify-center py-4">
      <MdOutlineSearchOff className="text-[7rem] text-slate-200" />
    </div>
  );
}
