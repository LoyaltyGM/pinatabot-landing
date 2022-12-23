import React, { useEffect, Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import CustomCursor from "custom-cursor-react";
import ASSETS from "assets";
import "./styles/globals.css";
import CircleType from "circletype";
import ArrowUp from "components/icons/ArrowUp";
import MyTabs from "components/tabs";
import Logo from "components/logo";
import SocialNetworks from "components/socialNetworks";
import {
    TWITTER_URL,
    MYSTERY_BOX_URL,
    APPLY_WL_FORM,
    REF_LOYALTY_URL,
    MEDIUM_URL,
} from "./constants";

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
            <div className="scrollbar-hide lg:h-[100vh] w-[100vw]">
                {/* First Row */}
                <div className="lg:flex px-3 pt-3 pb-1 gap-1 h-1/3 w-full">
                    <div className="w-full lg:w-1/2 flex lg:bg-white rounded-lg lg:justify-center lg:items-center items-center justify-between">
                        <Logo />
                        <div className="lg:hidden text-right">
                            <a href={TWITTER_URL} target="_blank" rel="noreferrer">
                                Twitter
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/4 lg:mt-0 mt-4 relative rounded-xl text-center items-center">
                        <a href={MYSTERY_BOX_URL} target={"_blank"} rel="noreferrer">
                            <img
                                src={ASSETS.LBOX}
                                className="lg:w-full lg:h-full w-full h-[50vh] rounded-xl object-cover"
                            />

                            <div className="absolute bottom-0 left-0 lg:pb-2 pb-4 lg:pl-8 pl-4">
                                Mystery Box
                            </div>

                            <div
                                className="absolute lg:hidden bottom-0 right-0 text-white py-7 px-3 underline decoration-solid 
 rounded-full mb-8 mr-6 bg-white/50 cursor-pointer"
                            >
                                Get Box
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-1/4 w-full flex lg:mt-0 mt-1 lg:flex-col lg:justify-between rounded-lg text-right items-right">
                        <SocialNetworks />
                        <button
                            className="bg-gray w-full flex py-4 rounded-2xl text-2xl font-bebas items-center justify-center gap-1"
                            disabled
                        >
                            {"Open app (JAN 2023)"} <ArrowUp />
                        </button>
                    </div>
                </div>
                {/* Second Row */}
                <div className="px-3 pb-1 lg:flex w-full lg:h-2/3 gap-1">
                    <div className="lg:w-1/2 h-full gap-1">
                        <div className="lg:h-2/3 pb-1 flex gap-1">
                            <div className="hidden h-full w-1/2 bg-pink rounded-2xl p-6 lg:flex flex-col justify-center items-center">
                                <img src={ASSETS.QR} className="w-3/4 h-1/2 object-contain" />
                                <p className="text-xl font-normal">SCAN ME</p>
                            </div>
                            <div className="h-full lg:w-1/2 w-full rounded-2xl">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="lg:h-3/4 h-[35vh] lg:text-3xl text-2xl flex items-center justify-center">
                                        <div id="circle_animation" className="lg:mt-4">
                                            {animationText}
                                        </div>
                                    </div>
                                    <a href={APPLY_WL_FORM} target={"_blank"} rel="noreferrer">
                                        <button className="bg-blue font-bebas w-full py-4 rounded-2xl text-2xl flex gap-1 items-center justify-center">
                                            WL FORM FOR YOUR COMPANY
                                            <ArrowUp />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:h-1/3 h-[35vh] w-full pr-2 bg-white rounded-2xl">
                            <MyTabs />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 mt-1 relative bg-white h-full rounded-lg">
                        <a href={REF_LOYALTY_URL} target={"_blank"} rel="noreferrer">
                            <img src={ASSETS.Card_LGM} className="w-full h-full object-cover" />
                            <div className="absolute top-0 left-0 text-black lg:pl-8 pl-4">
                                <div className="text-9xl pt-6 font-bebas">GM!</div>
                                <p className="">Loyalty NFT and bonus points</p>
                            </div>

                            <div
                                className="absolute lg:hidden bottom-0 right-0 text-white py-7 px-2 underline decoration-solid 
 rounded-full mb-8 mr-6 bg-black/50 cursor-pointer"
                            >
                                Get NFT
                            </div>
                        </a>
                    </div>
                </div>
                <div className="lg:hidden flex h-[10vh] justify-between px-4 pt-6">
                    <a href="mailto: info@loyaltygm.com">info@loyaltygm.com</a>
                    <a href={MEDIUM_URL} target={"_blank"} rel="noreferrer">
                        Medium
                    </a>
                </div>
            </div>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
