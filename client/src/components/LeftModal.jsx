import React from "react";

function LeftModal({
  isOpen,
  setOpen,
  task: { title, description, author, src },
}) {
  return (
    <div
      className={`${
        isOpen ? "flex translate-x-0" : "hidden translate-x-7"
      } bg-white absolute right-0 top-[150px] h-[80%] p-4 shadow  w-[40%] z-20 flex-col `}
    >
      <div className="mb-4">
        <h1 className="font-semibold">{title}</h1>
        <div className="my-2 w-7 h-1 px-1 bg-[#329C89]"></div>
      </div>
      <form className="flex flex-col gap-5 text-[13px] ">
        <div className="flex items-center gap-4">
          <span className="text-[#6B6B6B] w-[30%]">Created By</span>
          <div className="w-[60%] flex items-center gap-3">
            <img src={src} alt="" className="w-6 h-6" />
            <p>{author}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#6B6B6B] w-[30%]">Description</span>
          <p className="w-[60%] font-light text-[13px]">{description}</p>
        </div>
      </form>
      <button className="p-2  my-10  w-[100px] px-3 text-sm text-white bg-green-700 rounded-sm">
        Close
      </button>
    </div>
  );
}

export default LeftModal;
