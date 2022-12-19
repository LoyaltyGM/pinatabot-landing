import React from "react";
import { createRoot } from "react-dom/client";
// import CustomCursor from "custom-cursor-react";

import "./styles/globals.css";

function Landing() {
    return (
        <>
            <div className="scrollbar-hide">
                {/* <CustomCursor
                    targets={[".custom-cursor"]}
                    customClass="custom-cursor"
                    dimensions={45}
                    fill="#ABB8C3"
                    targetScale={2.5}
                    smoothness={{
                        movement: 0.17,
                        scale: 0.3,
                        opacity: 0.2,
                    }}
                    targetOpacity={0.5}
                /> */}
                <div className="p-3 flex gap-1 w-full">
                    <div className="w-3/4 bg-white h-60 rounded-lg text-center items-center">
                        <h1 className="text-black">LoyaltyGM</h1>
                    </div>
                    <div className="w-1/4 bg-white h-60 rounded-lg text-center items-center">
                        <h1 className="text-black">LoyaltyGM</h1>
                    </div>
                    <div className="w-1/4 flex flex-col justify-between h-60 rounded-lg text-right items-right">
                        <div className="">
                            <p className="text-white">Twitter</p>
                            <p className="text-white">Discord</p>
                            <p className="text-white">Medium</p>
                        </div>
                        <button className="bg-[#CB36A6] py-3 rounded-2xl text-2xl">Open app</button>
                    </div>
                </div>
                <h1>Hello!</h1>
            </div>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
