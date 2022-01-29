import Image from "next/image";
import Headeritem from "./Headeritem";
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl ">
                <Headeritem title="Home" Icon={HomeIcon} />
                <Headeritem title="Trending" Icon={LightningBoltIcon} />
                <Headeritem title="Verified" Icon={BadgeCheckIcon} />
                <Headeritem title="Collections" Icon={CollectionIcon} />
                <Headeritem title="Search" Icon={SearchIcon} />
                <Headeritem title="Account" Icon={UserIcon} />
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={150} height={80} alt="" />
        </header>
    );
}

export default Header;
