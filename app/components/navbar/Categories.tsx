"use client";

import Container from "../Container";
import {FaSkiing} from "react-icons/fa"
import {IoDiamond} from "react-icons/io5"
import {BsSnow} from "react-icons/bs"
import {TbBeach, TbMountain, TbPool} from "react-icons/tb"
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "This Property is close to beach!"
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "This Property has windmill!"
    },
    {
        label: "Modren",
        icon: MdOutlineVilla,
        description: "This Property look like villa!"
    },
    {
        label: "Countryside",
        icon: TbMountain,
        description: "This Property is in the countryside!"
    },
    {
        label: "Pool",
        icon: TbPool,
        description: "This Property has a pool!"
    },
    {
        label: "Island",
        icon: GiIsland,
        description: "This Property is on an island!"
    },
    {
        label: "Lake",
        icon: GiBoatFishing,
        description: "This Property is close to a lake!"
    },
    {
        label: "Skiing",
        icon: FaSkiing,
        description: "This Property has skiing activities!"
    },
    {
        label: "Castles",
        icon: GiCastle,
        description: "This Property is in a castle!"
    },
    {
        label: "Camping",
        icon: GiForestCamp,
        description: "This Property has a camping activities!"
    },
    {
        label: "Arctic",
        icon: BsSnow,
        description: "This Property is in snow!"
    },
    {
        label: "Cave",
        icon: GiCaveEntrance,
        description: "This Property is a cave!"
    },
    {
        label: "Desert",
        icon: GiCactus,
        description: "This Property in a desert!"
    },
    {
        label: "Barns",
        icon: GiBarn,
        description: "This Property is a luxurious!"
    },
    {
        label: "Lux",
        icon: IoDiamond,
        description: "This Property !"
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname==='/';


    return (
        <Container>
            <div
                className="
                    flex
                    pt-4
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item)=>(
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories;