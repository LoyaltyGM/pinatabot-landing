import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { tabsContentTitle, tabsContent } from "../constants";

const MyTabs = () => {
    const tabInActive: string = "text-gray px-4";
    const tabActive: string =
        "bg-darkPink text-white rounded-xl py-1 px-4 focus:outline-none ";
    return (
        <Tab.Group>
            <div className="flex items-center ">
                <Tab.List className="px-4 pt-4">
                    <div className="flex rounded-xl border border-[#E6E6E6] py-2 px-2">
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
                <div className="pt-4 font-onest text-xl tracking-[0.030em] text-pink lg:text-3xl lg:leading-7">
                    How pre-market works?
                </div>
            </div>
            <Tab.Panels className={"pt-2 pl-4 text-black lg:text-2xl"}>
                <Tab.Panel>
                    <div className="font-semibold">{tabsContentTitle[0]}</div>
                    <div>{tabsContent[0]}</div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="font-semibold">{tabsContentTitle[1]}</div>
                    <div>{tabsContent[1]}</div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="font-semibold">{tabsContentTitle[2]}</div>
                    <div>{tabsContent[2]}</div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
};

export default MyTabs;
