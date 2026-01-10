"use-client"

const FeaturesCard = ({img, title ,subtext}:{img:string, title:string, subtext:string})=>{
    return (
        <div className="flex flex-col h-fit">
            <div className="w-full mt-1 flex-row flex items-center">
                <img src={img} alt="icons" className="w-9 h-9"/>
                <p className=" text-black ml-3 text-[1.3rem] text-start">{title}</p>
            </div>
            <div className="flex ml-12 mt-3">
                <p className=" text-gray-500 text-start text-[1rem]">{subtext}</p>
            </div>
        </div>
    )
}


export default FeaturesCard