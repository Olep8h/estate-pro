import React from "react";
import house from "../../assets/house.jpg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";
import house4 from "../../assets/house4.jpg";
import house5 from "../../assets/house5.jpg";
import house6 from "../../assets/house6.jpg";
import house7 from "../../assets/house7.jpg";
import house8 from "../../assets/house8.jpg";
import CardComponent from "../CardComponent/CardComponent";

const NewListings = () => {
    const cards = [
        {photo: house, price: "$236,910", description: "Condominium"},
        {photo: house2, price: "$346,410", description: "Single-Family Home"},
        {photo: house3, price: "$800,910", description: "Tiny Home"},
        {photo: house4, price: "$196,910", description: "Manufactured home"},
        {photo: house5, price: "$286,910", description: "Duplexes"},
        {photo: house6, price: "$446,410", description: "Single-Family Home"},
        {photo: house7, price: "$700,910", description: "Condominium"},
        {photo: house8, price: "$291,910", description: "Single-Family Home"},
    ];
    return (
        <div className="mx-8">
            <div className="mx-8 mt-10  ">
                <p className="text-[18.5px] font-medium ">
                    New Listings in Spoken, WA
                </p>
                <p className="text-blue-600 text-[15px]">View All 160 New Listings</p>
            </div>
            <div className="flex flex-nowrap pt-4 overflow-x-auto space-x-2 w-full pb-4">
                {cards.map((card) => (
                    <CardComponent photo={card.photo} price={card.price} description={card.description}/>
                ))}
            </div>
        </div>
    );
};

export default NewListings;
