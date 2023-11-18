import {ReactElement} from "react";

type TemperatureProps = {
    degree: number;
    wind: number;
    yesterday: number;
}
const TemperatureCard = ({ degree, yesterday,wind }: TemperatureProps):ReactElement => {
    return (
        <div className="flex justify-center items-center px-1 py-4 gap-2 w-full">

            <div className="flex flex-col w-2/3 flex-1 items-start h-[10rem]">
                <div className="flex justify-between">
                    <div className="text-9xl font-light">{degree}</div>
                    <div className="text-4xl font-light">°</div>
                </div>
                <div className="flex w-full items-start">
                    <div className="text-4xl font-extralight">
                        {((degree - yesterday) / yesterday * 100).toFixed(1)} %
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-1/3 justify-between items-start h-[10rem] w-fit">
                <div className="flex h-full justify-between items-center">
                    <div className="text-2xl font-light flex justify-center items-center">
                        <span className="" style={{ position: 'relative', top: '-0.5rem' }}>+</span>
                        <span className="px-[1px]" style={{ position: 'relative', top: '-0.2rem' }}>/</span>
                        <span className="" style={{ position: 'relative', top: '0.35rem' }}>-</span>
                    </div>
                    <div className="text-6xl font-light pl-2">{degree - yesterday}</div>
                </div>
                <div className="flex h-full justify-between items-end">
                    <div className="text-lg font-extralight pr-1">wind: </div>
                    <div className="text-lg font-extralight">{wind} mph</div>
                </div>
            </div>

        </div>

    )
}

export default TemperatureCard
