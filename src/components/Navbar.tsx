import {
    AboutIcon,
    HomeIcon,
    ExoneraLogo,
    NewsIcon,
    GithubIcon,
    LicitaAbertaBlueLogo
} from "@/assets/svgs/icons";
import clsx from "clsx";
import Link from "next/link";

interface NavbarProps {
    activeButton: "Home" | "About" | "News";
}

export default function Navbar({ activeButton }: NavbarProps) {
    return (
        <nav className="flex items-center justify-between w-full bg-[#4a7ba3] p-4 shadow-lg">
            <div className="flex items-center">
                <LicitaAbertaBlueLogo className="w-16 h-auto" />
            </div>

            <div className="flex items-center space-x-8">
                <Link href="/">
                    <HomeIcon
                        className={clsx(
                            activeButton === "Home"
                                ? "fill-[#1A1A1A] w-6 h-6"
                                : "fill-[#152544] hover:fill-gray-600 w-6 h-6"
                        )}
                    />
                </Link>
                <Link href="/sobre">
                    <AboutIcon
                        className={clsx(
                            activeButton === "About"
                                ? "fill-[#1A1A1A] w-6 h-6"
                                : "fill-[#152544] hover:fill-gray-600 w-6 h-6"
                        )}
                    />
                </Link>
                <Link href="https://github.com/exoonero/extrator" target="_blank">
                    <GithubIcon className="fill-[#152544] hover:fill-gray-600 w-8 h-auto" />
                </Link>
            </div>
        </nav>
    );
}
