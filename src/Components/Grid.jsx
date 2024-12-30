import React, { useState } from "react";
import Box from "./Box"

const Grid = () => {
    const defaultColors = Array(9).fill("bg-white");
    const [boxColors, setBoxColors] = useState(defaultColors);
    const [clickOrder, setClickOrder] = useState([]);

    const handleBoxClick = (index) => {
        if (boxColors[index] === "bg-green-500" || boxColors[index] === "bg-orange-500") return;

        const updatedColors = [...boxColors];
        updatedColors[index] = "bg-green-500";
        setBoxColors(updatedColors);

        setClickOrder([...clickOrder, index]);

        if (index === 8) {
            setTimeout(() => {
                clickOrder.forEach((boxIndex, delay) => {
                    setTimeout(() => {
                        updatedColors[boxIndex] = "bg-orange-500";
                        setBoxColors([...updatedColors]);
                    }, delay * 500);
                });
            }, 500);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
            {boxColors.map((color, index) => (
                <Box key={index} color={color} onClick={() => handleBoxClick(index)} />
            ))}
        </div>
    );
};

export default Grid;