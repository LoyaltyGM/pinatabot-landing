import React from "react";
import { TWITTER_URL, MEDIUM_URL } from "../constants";

const SocialNetworks = () => {
    return (
        <div className="hidden lg:block font-light">
            <p className="text-white  hover:text-pink cursor-pointer">
                <a href={TWITTER_URL} target="_blank" rel="noreferrer">
                    Twitter
                </a>
            </p>

            <p className="text-white py-3 hover:text-pink cursor-not-allowed">Discord</p>

            <p className="text-white hover:text-pink cursor-pointer">
                <a href={MEDIUM_URL} target="_blank" rel="noreferrer">
                    Medium
                </a>
            </p>
        </div>
    );
};

export default SocialNetworks;
