import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { tabsContentTitle, tabsContent } from "../constants";

const MyTabs = () => {
    const tabInActive = "text-gray px-4";
    const tabActive = "bg-[#E6E6E6] text-[#E22BB5] rounded-2xl py-1 px-4 focus:outline-none ";
    return (
        <Tab.Group>
            <div className="flex items-center">
                <Tab.List className="px-4 pt-4">
                    <div className="flex py-2 px-2 border rounded-3xl border-[#E6E6E6]">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? tabActive : tabInActive}>01</button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? tabActive : tabInActive}>02</button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? tabActive : tabInActive}>03</button>
                            )}
                        </Tab>
                    </div>
                </Tab.List>
                <div className="text-pink pt-4 tracking-[0.030em] lg:text-3xl text-2xl font-bebas">
                    Loyalty System for Projects
                </div>
            </div>
            <Tab.Panels className={"pt-2 pl-4 text-black"}>
                <Tab.Panel>
                    <div className="text-lg font-semibold">{tabsContentTitle[0]}</div>
                    <div>{tabsContent[0]}</div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="text-lg font-semibold">{tabsContentTitle[1]}</div>
                    <div>{tabsContent[1]}</div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="text-lg font-semibold">{tabsContentTitle[2]}</div>
                    <div>{tabsContent[2]}</div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
};

export default MyTabs;
