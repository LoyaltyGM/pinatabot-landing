import React from "react";
import { TWITTER_URL, TELEGRAM_URL, DOCS_URL } from "../constants";

const SocialNetworks = () => {
    const TwitterButton = () => {
        return (
            <p className="text-white text-xl hover:text-pink font-onest cursor-pointer">
                <a href={TWITTER_URL} target="_blank" rel="noreferrer">
                    Twitter / X
                </a>
            </p>
        );
    };

    const TelegramButton = () => {
        return (
            <p className="text-white text-xl py-3 font-onest hover:text-pink">
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                    Telegram
                </a>
            </p>
        );
    };

    const DocsButton = () => {
        return (
            <p className="text-white text-xl font-onest hover:text-pink cursor-pointer">
                <a href={DOCS_URL} target="_blank" rel="noreferrer">
                    Docs
                </a>
            </p>
        );
    };

    return (
        <div className="hidden lg:block font-light">
            <TwitterButton />
            <TelegramButton />
            <DocsButton />
        </div>
    );
};

export default SocialNetworks;
