import React from "react";
import { IoMdStarOutline } from "react-icons/io";


const Author = ( ) => {
    return (
        <>
        <div>
            <div>
            <div>
                <img 
                width={90}
                height={30}
                src="https://niksessentialoils.com/wp-content/uploads/2021/06/av4-430x323.jpg" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.</p>
                <div className="flex text-yellow-500 "><p><IoMdStarOutline /></p>
                <p><IoMdStarOutline /></p>
                <p><IoMdStarOutline /></p>
                <p><IoMdStarOutline /></p></div>
            </div>
            </div>
            <div>
                <img src="https://icossa.com/images/portrait.jpg" alt="" />
            </div>
            <div>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/318957317_531177275692110_8367955799292344248_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=IfhRObWZexEQ7kNvgF2tMXY&_nc_ht=scontent-los2-1.xx&oh=00_AYA-AedVVtGiKkYZIw-TKXGbyVFLIdH8gkgcjiXmQ-J3ng&oe=668CBD41" alt="" />
            </div>
            <div>
                <img src="https://assets.skool.com/f/65e59b79f6734c0882214d54f1ef2f9c/3c137c7912e741f089b10266cdce277f93023dcae71747ccb090fe51f164461b" alt="" />
            </div>
            <div>
                <img src="https://www.motife.org/uploads/7/4/4/2/7442086/published/motife-home-truth-3.jpg?1563053311" alt="" />
            </div>
            <div>
                <img src="https://c.superprof.com/i/m/28796959/160/20231130091355/28796959.webp" alt="" />
            </div>
        </div>
        </>
    )
}

export default Author;