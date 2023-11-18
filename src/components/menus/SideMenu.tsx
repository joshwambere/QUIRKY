import {ReactElement} from "react";
import {GSelect} from "@/components/ui/inputs/GSelect";
import {SupportedCity} from "@/components/_shared/SupportedCity";
import TemperatureCard from "@/components/ui/cards/TemperatureCard";
import TemperatureChart from "@/components/ui/charts/TemperatureChart";
import ChartWrapper from "@/components/ui/charts/ChartWrapper";


const tempData={
    degree: 20,
    difference: 19,
    wind: 9
}
const dailyTempData= {
    labels: [

        '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm', '9pm', '10pm'
    ],
    datasets: [{
        label: 'Temperature Change',
        data: [
            20, 24, 21, 23, 24, 25, 26, 31, 28, 29, 39
        ],
        backgroundColor: 'rgba(147,164,164,0.2)',
        borderColor: '##e9c583',
        borderWidth: 1
    }]
}
export const SideMenu = (): ReactElement => {

    return (
        <div className=" foreground side-menu border-2 bg-[#000] bg-opacity-20 border-[#d9deda] h-screen start-0 px-8 py-6 rounded-br-2xl rounded-tr-2xl border-l-0 border-t-0 border-b-0">
            <div className="Search-section">
                 <GSelect name="city" options={SupportedCity} />
            </div>
            <div className="temperature-section py-6">
                <TemperatureCard wind={tempData.wind} degree={tempData.degree} yesterday={tempData.difference} />
            </div>
            <div className="temp-graph-section">
                <ChartWrapper >
                    <TemperatureChart datasets={dailyTempData.datasets}  labels={dailyTempData.labels}  />
                </ChartWrapper>
            </div>
        </div>
    )
}
