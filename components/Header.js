//header icons
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon,} from "@heroicons/react/outline"

import HeaderItem from "./HeaderItem"


function Header() {

    const navI = [
        {
            icon:"",
            title:"",
        }
    ]

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl ">
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
            <HeaderItem title="SEARCH" Icon={SearchIcon}/>
            <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>
        <h1 className="font-bold text-xl">Hulu</h1>
    </header>
  )
}

export default Header