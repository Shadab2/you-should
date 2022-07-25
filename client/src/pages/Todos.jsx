import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsChatDots, BsCalendarDate, BsSearch, BsFilter } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import DraggableContainer from "../components/DraggableContainer";
import LeftModal from "../components/LeftModal";

function Todos() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[100vh] min-h-screen bg-white">
      <div className="w-[100%] h-[100%] flex">
        <div className="w-[20%] h-[100%] max-h-screen flex flex-col gap-[50px] p-8 pr-0 border-r border-r-[#F0F0F0]">
          <h1 className="text-xl font-medium">.taskez</h1>
          <div className="h-[70vh] flex flex-col justify-between">
            <ul
              className="flex flex-col gap-5  text-[#9A9A9A]
"
            >
              <li className="flex items-center gap-3 text-sm">
                <AiOutlineHome size={18} />
                OverView
              </li>
              <li className="flex items-center gap-3 text-sm">
                <IoMdStats size={18} />
                Stats
              </li>
              <li className="flex items-center gap-3 text-sm border-r-[3px] font-semibold text-black border-[#329C89]">
                <AiOutlineFolderOpen size={18} />
                Projects
              </li>
              <li className="flex items-center gap-3 text-sm">
                <BsChatDots size={16} />
                Chats
              </li>
              <li className="flex items-center gap-3 text-sm">
                <BsCalendarDate size={16} />
                Calendar
              </li>
            </ul>
            <ul className="  flex flex-col gap-5 mb-10 text-[#9A9A9A]">
              <li className="flex items-center gap-3 text-sm">
                <FiSettings size={16} />
                Settings
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiLogOut size={16} />
                Log out
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[80%] min-h-[100%] flex flex-col gap-[40px] p-8 pb-0 relative">
          <div className="flex items-center w-[100%] justify-between">
            <div className="flex gap-4 w-[250px]  text-[#9A9A9A] items-center">
              <BsSearch size={16} />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm"
              />
            </div>
            <div className="relative flex">
              <img
                src="/assets/1.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/2.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/3.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/4.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/5.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/avatar.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <p>Hi Saundarya</p>
              <img src="assets/6.png" alt="avatar" className="w-10 h-10" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Projects</h1>
              <div className="flex items-center">
                <BsFilter />
                <span className="mr-2">Filter</span>
              </div>
            </div>
            <DraggableContainer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <LeftModal
            isOpen={isOpen}
            task={{
              id: "1",
              title: "Design - App",
              description:
                "Modifying Career, Scholarship and Entrance exam screen Acc to new design pattern ",
              src: "/assets/1.png",
              author: "Suniti",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Todos;
