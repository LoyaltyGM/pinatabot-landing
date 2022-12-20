import React, { useEffect, Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import CustomCursor from "custom-cursor-react";
import ASSETS from "assets";
import "./styles/globals.css";
import CircleType from "circletype";
import ArrowUp from "components/icons/ArrowUp";
import { Tab } from "@headlessui/react";

function Landing() {
    useEffect(() => {
        new CircleType(document.getElementById("circle_animation"));
    }, []);

    const animationText = "Proof-of-loyalty NFT💳 ";
    const tabInActive = "text-[#CCCCCC] px-4";
    const tabActive = "bg-[#E6E6E6] text-[#E22BB5] rounded-2xl py-1 px-4 focus:outline-none ";

    const MyTabs = () => {
        return (
            <Tab.Group>
                <div className="flex items-center">
                    <Tab.List className={"px-4 pt-4"}>
                        <div className="flex py-2 px-2 border rounded-3xl border-[#E6E6E6]">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button className={selected ? tabActive : tabInActive}>
                                        01
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button className={selected ? tabActive : tabInActive}>
                                        02
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button className={selected ? tabActive : tabInActive}>
                                        03
                                    </button>
                                )}
                            </Tab>
                        </div>
                    </Tab.List>
                    <div className="text-black pt-4">Loyalty System for Projects</div>
                </div>
                <Tab.Panels className={"pt-2 pl-4 text-black"}>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        );
    };

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
            <div className="scrollbar-hide lg:h-[100vh] w-[100vw]">
                <div className="lg:flex px-3 pt-3 pb-1 gap-1 h-1/3 w-full">
                    <div className="w-full lg:w-1/2 flex lg:bg-white rounded-lg justify-center items-center">
                        <h1 className="text-black font-bungee lg:text-7xl text-4xl">
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
                    <div className="lg:w-1/4 relative rounded-xl text-center items-center">
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
                            <div className="hidden h-full w-1/2 bg-[#CB36A6] rounded-2xl p-6 lg:flex flex-col justify-center items-center">
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
                            <MyTabs />
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
