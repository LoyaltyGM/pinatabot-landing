import React from "react";
import { createRoot } from "react-dom/client";
import ASSETS from "assets";
import "./styles/globals.css";
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
    return (
        <>
            <div className="scrollbar-hide w-[100vw] lg:h-[100vh]">
                {/* First Row */}
                <div className="h-1/3 w-full gap-1 px-3 pt-3 pb-1 lg:flex">
                    <div className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-4 lg:h-full lg:w-1/2 lg:items-center lg:justify-center lg:bg-white">
                        <div>
                            <Logo />
                            <p className={"mt-0 font-onest text-darkBlue lg:text-2xl"}>
                                The best Pre-market and OTC market on Sui Network
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-1 flex h-[40vh] flex-col rounded-xl bg-darkPurple text-center lg:mt-0 lg:h-full lg:w-1/4">
                        <p className="pt-3 pb-4 pl-4 text-left font-onestMedium text-4xl lg:pb-2 lg:pl-8">
                            Buy tokens before the launch
                        </p>
                        <div className="flex flex-grow items-end">
                            <img
                                src={ASSETS.MonitorTokenPrice}
                                className="object-fit w-full rounded-b-2xl"
                                alt="Monitor token price image"
                            />
                        </div>
                    </div>

                    <div className="items-right mt-1 flex w-full rounded-lg text-right lg:mt-0 lg:w-1/4 lg:flex-col lg:justify-between">
                        <SocialNetworks />
                        <a
                            href={WEB_APP_SITE_URL}
                            target={"_blank"}
                            rel="noreferrer"
                            className="z-10 w-full"
                        >
                            <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-darkPink py-4 text-2xl tracking-[0.030em]">
                                <p>Open app</p>
                                <ArrowUp />
                            </button>
                        </a>
                    </div>
                </div>
                {/* Second Row */}
                <div className="w-full gap-1 px-3 pb-1 lg:flex lg:h-2/3">
                    <div className="h-full gap-1 lg:w-1/2">
                        <div className="gap-1 pb-1 lg:flex lg:h-2/3">
                            <div className="h-full flex-col items-center justify-center rounded-2xl bg-darkPink p-3 lg:flex lg:w-1/2">
                                <p className="font-onestMedium text-4xl">
                                    OTC market for secure token trading with friends
                                </p>
                            </div>
                            <div className="mt-1 h-full w-full rounded-2xl bg-darkPurple lg:mt-0 lg:w-1/2">
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex h-[35vh] items-center justify-center overflow-hidden text-2xl lg:h-full lg:text-3xl">
                                        <div className="flex flex-grow items-end p-4">
                                            Over $1.6M in offers and 4 successful launches
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-2xl bg-white pb-10 pr-2 lg:h-1/3">
                            <MyTabs />
                        </div>
                    </div>
                    <div className="relative mt-1 h-full rounded-lg bg-white lg:mt-0 lg:w-1/2">
                        <a href={""} target={"_blank"} rel="noreferrer">
                            <img
                                src={ASSETS.MainPinata}
                                className="h-full w-full object-cover"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex justify-between gap-1 px-3 pb-5 font-onest lg:hidden">
                    <div className={"flex h-[100px] w-1/2 flex-col gap-1"}>
                        <a
                            href={MAIL_TO_URL}
                            className={
                                "flex h-1/2  w-full content-center items-center justify-center rounded-md bg-darkPink"
                            }
                        >
                            info@pinatabot.com
                        </a>
                        <a
                            href={DOCS_URL}
                            target={"_blank"}
                            rel="noreferrer"
                            className={
                                "flex h-1/2 w-full content-center items-center justify-center rounded-md bg-darkPurple"
                            }
                        >
                            Docs
                        </a>
                    </div>
                    <div className={"flex h-[100px] w-1/2 flex-col gap-1"}>
                        <a
                            href={TWITTER_URL}
                            className={
                                "flex h-1/2 w-full content-center items-center justify-center rounded-md bg-blueLight"
                            }
                        >
                            Twitter
                        </a>
                        <a
                            href={TELEGRAM_URL}
                            className={
                                "flex h-1/2 w-full content-center items-center justify-center rounded-md bg-darkGreen"
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
