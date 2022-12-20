import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import CustomCursor from "custom-cursor-react";
import ASSETS from "assets";
import "./styles/globals.css";
import CircleType from "circletype";
import ArrowUp from "components/icons/ArrowUp";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Landing() {
    useEffect(() => {
        new CircleType(document.getElementById("circle_animation"));
    }, []);

    const animationText = "Proof-of-loyalty NFT💳 ";

    return (
        <>
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
                className="mt-0 pt-0"
            /> */}
            <div className="scrollbar-hide h-[100vh] w-[100vw]">
                <div className="px-3 pt-3 pb-1 flex gap-1 h-1/3 w-full">
                    <div className="w-1/2 flex bg-white rounded-lg justify-center items-center">
                        <h1 className="text-black font-bungee text-7xl">
                            <span className="text-[#9747FF]">L</span>
                            <span className="text-[#C447FF]">O</span>
                            <span className="text-[#E547FF]">Y</span>
                            <span className="text-[#FF47B5]">A</span>
                            <span className="text-[#477BFF]">L</span>
                            <span className="text-[#47A7FF]">T</span>
                            <span className="text-[#FF6847]">Y</span>
                            <span className="text-[#6874E3]">G</span>
                            <span className="text-[#6874E3]">M</span>
                        </h1>
                    </div>
                    <div className="w-1/4 relative rounded-xl text-center items-center">
                        <img src={ASSETS.LBOX} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 pb-2 pl-4">Mystery Box</div>
                    </div>
                    <div className="w-1/4 flex flex-col justify-between rounded-lg text-right items-right">
                        <div className="font-light">
                            <p className="text-white  hover:text-[#CB36A6] cursor-pointer">
                                <a
                                    href="https://twitter.com/Loyalty_GM"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Twitter
                                </a>
                            </p>

                            <p className="text-white py-3 hover:text-[#CB36A6] cursor-not-allowed">
                                Discord
                            </p>
                            <p className="text-white hover:text-[#CB36A6] cursor-pointer">
                                <a
                                    href="https://medium.com/@loyaltygm"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Medium
                                </a>
                            </p>
                        </div>
                        <button className="bg-[#CB36A6] flex py-3 rounded-2xl text-2xl font-bebas items-center justify-center gap-1">
                            Open app <ArrowUp />
                        </button>
                    </div>
                </div>
                <div className="px-3 pb-1 flex w-full h-2/3 gap-1">
                    <div className="w-1/2 h-full gap-1">
                        <div className="h-2/3 pb-1 flex gap-1">
                            <div className="h-full w-1/2 bg-[#CB36A6] rounded-2xl p-6 flex flex-col justify-center items-center">
                                <img src={ASSETS.QR} className="w-3/4 h-1/2 object-contain" />
                                <p className="text-xl font-light">SCAN ME</p>
                            </div>
                            <div className="h-full w-1/2 rounded-2xl">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="h-3/4 flex items-center justify-center">
                                        <div id="circle_animation" className="mt-4">
                                            {animationText}
                                        </div>
                                    </div>
                                    <button className="bg-[#616FE8] font-bebas w-full py-4 rounded-2xl text-2xl flex gap-1 items-center justify-center">
                                        APPLY FOR A FORM
                                        <ArrowUp />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-1/3 w-full bg-white rounded-2xl">
                            <div>ggg</div>
                        </div>
                    </div>
                    <div className="w-1/2 relative bg-white h-full rounded-lg">
                        <img src={ASSETS.Card_LGM} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 text-black pl-8">
                            <div className="text-9xl pt-6 font-bebas">GM!</div>
                            <p className="">Loyalty NFT and bonus points</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
