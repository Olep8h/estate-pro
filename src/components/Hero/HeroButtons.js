import React from "react";

const HeroButtons = ({title, underline, css}) => {
    return (
        <div className={`${css} relative group`}>
            <div className="text-white font-semi-bold px-1.5 text-[14px]  ">
                <button>{title}</button>
            </div>
            <div
                className={`absolute h-[2.5px] group-hover:bg-[#e20112] ${underline}  w-full duration-200 ease-out`}
            ></div>
        </div>
    );
};

export default HeroButtons;