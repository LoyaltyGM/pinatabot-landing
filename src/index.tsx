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
    DOCS_URL,
    MAIL_TO_URL,
    TELEGRAM_URL,
    TWITTER_URL,
    WEB_APP_SITE_URL,
} from "./constants";

function Landing() {
    // useEffect(() => {
    //     new CircleType(document.getElementById("circle_animation"));
    // }, []);

    // const animationText: string = "🍩🍩🍩🍩🍩🍩";

    return (
        <>
            <div className="scrollbar-hide lg:h-[100vh] w-[100vw]">
                {/* First Row */}
                <div className="lg:flex px-3 pt-3 pb-1 gap-1 h-1/3 w-full">
                    <div className="w-full lg:w-1/2 bg-white px-4 h-[10vh] lg:h-full flex lg:bg-white rounded-lg lg:justify-center lg:items-center items-center justify-between">
                        <div>
                            <Logo />
                            <p
                                className={
                                    "text-darkBlue font-onest mt-0 lg:text-2xl"
                                }
                            >
                                Telegram bot for manage assets on Sui network
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/4 lg:mt-0 lg:h-full h-[40vh] bg-darkPurple mt-1 relative rounded-xl text-center flex flex-col">
                        <p className="text-4xl font-onestMedium text-left pt-3 lg:pb-2 pb-4 lg:pl-8 pl-4">
                            Monitor token price
                        </p>
                        <div className="flex-grow flex items-end">
                            <img
                                src={ASSETS.MonitorTokenPrice}
                                className="w-full rounded-b-2xl object-fit"
                                alt="Monitor token price image"
                            />
                        </div>
                    </div>

                    <div className="lg:mt-0 lg:flex-col lg:justify-between lg:w-1/4 w-full mt-1 flex rounded-lg text-right items-right">
                        <SocialNetworks />
                        <a
                            href={WEB_APP_SITE_URL}
                            target={"_blank"}
                            rel="noreferrer"
                            className="w-full"
                        >
                            <button className="bg-darkPink w-full flex py-4 rounded-2xl text-2xl tracking-[0.030em] items-center justify-center gap-1">
                                <p>Open app</p>
                                <ArrowUp />
                            </button>
                        </a>
                    </div>
                </div>
                {/* Second Row */}
                <div className="px-3 pb-1 lg:flex w-full lg:h-2/3 gap-1">
                    <div className="lg:w-1/2 h-full gap-1">
                        <div className="lg:h-2/3 pb-1 lg:flex gap-1">
                            <div className="h-full lg:w-1/2 bg-darkPink rounded-2xl p-3 lg:flex flex-col justify-center items-center">
                                <p className="text-4xl font-onestMedium">
                                    Create wallet using your Google account
                                </p>
                                <img
                                    src={ASSETS.Google_Account}
                                    className="w-3/4 h-1/2 object-contain"
                                />
                            </div>
                            <div className="h-full lg:mt-0 mt-1 lg:w-1/2 bg-darkPurple w-full rounded-2xl">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="lg:h-full h-[35vh] lg:text-3xl text-2xl flex items-center justify-center overflow-hidden">
                                        <div className="flex-grow flex items-end p-4">
                                            <img
                                                src={ASSETS.SquadImage}
                                                className="w-full object-fit object-cover"
                                                alt="Squad Image"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href={WEB_APP_SITE_URL}
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        <button className="bg-blueLight tracking-[0.030em] w-full py-4 rounded-2xl text-2xl flex gap-1 items-center justify-center content-center">
                                            <p className={"mt-1"}>
                                                Create Squad
                                            </p>
                                            <ArrowUp />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:h-1/3 pb-10 w-full pr-2 bg-white rounded-2xl">
                            <MyTabs />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 mt-1 relative bg-white h-full rounded-lg">
                        <a href={""} target={"_blank"} rel="noreferrer">
                            <img
                                src={ASSETS.MainPinata}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 text-darkBlue lg:pl-8 pl-4">
                                <div className="lg:text-9xl text-6xl pt-6 font-onestMedium">
                                    TAP&EARN
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="lg:hidden flex h-[10vh] justify-between font-onest px-3 gap-1">
                    <div className={"flex flex-col w-1/2 gap-1"}>
                        <a
                            href={MAIL_TO_URL}
                            className={
                                "w-full flex content-center items-center justify-center bg-darkPink rounded-md h-1/2"
                            }
                        >
                            info@pinatabot.com
                        </a>
                        <a
                            href={DOCS_URL}
                            target={"_blank"}
                            rel="noreferrer"
                            className={
                                "w-full flex content-center items-center justify-center bg-darkPurple rounded-md h-1/2"
                            }
                        >
                            Docs
                        </a>
                    </div>
                    <div className={"flex flex-col w-1/2 gap-1"}>
                        <a
                            href={TWITTER_URL}
                            className={
                                "w-full flex content-center items-center justify-center bg-blueLight rounded-md h-1/2"
                            }
                        >
                            Twitter
                        </a>
                        <a
                            href={TELEGRAM_URL}
                            className={
                                "w-full flex content-center items-center justify-center bg-darkGreen rounded-md h-1/2"
                            }
                        >
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
