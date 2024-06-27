import { MdSupervisedUserCircle } from "react-icons/md";

const card = () => {
  return (
    <div className="flex bg-backSoft p-5 rounded-[10px] gap-5 cursor-pointer w-full hover:bg-hoverColor">
        <MdSupervisedUserCircle size={24} />
        <div className="flex flex-col gap-5">
            <span>Total Usesr</span>
            <span className="text-2xl font-medium"> 10.924</span>
            <span className="text-sm font-light">
                <span className="text-[lime]"> 12% </span>
                 more than previous weeks
            </span>
        </div>
    </div>
  )
}

export default card