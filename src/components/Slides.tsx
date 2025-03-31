import { Data } from "@/app/page";
import React from "react";
import SliderCard from "./SliderCard";


type Props = {
    dataS: Data[];
}

function Slides({ dataS }: Props) {
    return (
        <div className="flex w-full gap-6">
            {dataS.map((data) => {
                return <SliderCard key={data.img} data={data} />;
            })}
        </div>
    );
}

export default Slides;