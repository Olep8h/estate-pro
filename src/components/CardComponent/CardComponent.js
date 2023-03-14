import React from "react";

const CardComponent = ({photo, price, description}) => {
    return (
        <div className="min-w-[14rem]">
            <div>
                <img src={photo} className="w-52 h-42"/>
            </div>
            <p>{description}</p>
            <div className="flex justify-between mt-2">
                <p className="text-[14px] font-medium">{price}</p>
            </div>
            <div>

            </div>
        </div>

    )
};


export default CardComponent;