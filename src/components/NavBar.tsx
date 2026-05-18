"use client";

import Image from "next/image";
import React from "react";

type NavBarProps = {
    servicesRef: React.RefObject<HTMLElement | null>;
    experienceRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
};

export default function NavBar({
    servicesRef,
    experienceRef,
    contactRef,
}: NavBarProps) {
    const scrollToSection = (
        ref: React.RefObject<HTMLElement | null>,
    ) => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <div className="flex h-full items-center">
                    <div className="relative flex h-12 w-12 items-center">
                        <Image
                            src="/portfolio.png"
                            alt="RS logo"
                            width={112}
                            height={48}
                            priority
                            className="h-auto max-h-full w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
                    <button
                        onClick={() => scrollToSection(servicesRef)}
                        className="cursor-pointer transition-colors hover:text-zinc-200"
                    >
                        Solutions
                    </button>

                    <button
                        onClick={() => scrollToSection(experienceRef)}
                        className="cursor-pointer transition-colors hover:text-zinc-200"
                    >
                        Timeline
                    </button>

                    <button
                        onClick={() => scrollToSection(contactRef)}
                        className="cursor-pointer rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-200 transition-all hover:bg-zinc-800"
                    >
                        Contact
                    </button>
                </div>

            </div>
        </nav>
    );
}