import {
    AboutIcon,
    HomeIcon,
    ExoneraLogo,
    NewsIcon,
    GithubIcon,
} from "@/assets/svgs/icons";
import clsx from "clsx";
import Link from "next/link";

interface NavbarProps {
    activeButton: "Home" | "About" | "News";
}

export default function Navbar({ activeButton }: NavbarProps) {
    return (
        <nav className="flex items-center justify-between w-full bg-[#f0f4f8] p-4 shadow-lg">
            {/* Logotipo à esquerda */}
            <div className="flex items-center">
                <ExoneraLogo className="w-16 h-auto" />
            </div>

            {/* Links + Github Ícone juntos no lado direito */}
            <div className="flex items-center space-x-8">
                <Link href="/">
                    <HomeIcon
                        className={clsx(
                            activeButton === "Home"
                                ? "fill-[#1A1A1A] w-6 h-6"
                                : "fill-[#8BE2C0] hover:fill-gray-600 w-6 h-6"
                        )}
                    />
                </Link>
                <Link href="/sobre">
                    <AboutIcon
                        className={clsx(
                            activeButton === "About"
                                ? "fill-[#1A1A1A] w-6 h-6"
                                : "fill-[#8BE2C0] hover:fill-gray-600 w-6 h-6"
                        )}
                    />
                </Link>
                {/* Ícone do Github no final */}
                <Link href="https://github.com/exoonero/extrator" target="_blank">
                    <GithubIcon className="fill-[#8BE2C0] hover:fill-gray-600 w-8 h-auto" />
                </Link>
            </div>
        </nav>
    );
}
