import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, Chart,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)



const customBorder = {
    id: 'customBorder',
    beforeDatasetsDraw(chart: Chart, args: { cancelable: true }, options: any): boolean | void {
        const {
            ctx,
            chartArea: { left,right, top, width, height, bottom },
            scales: { y },
        } = chart
        ctx.save()
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.strokeStyle = '#d9deda'
        ctx.roundRect(left, top-10, width+10, height+10, 5)
        ctx.stroke()


    }
}
export const options = {
    maintainAspectRatio: false,
    responsive: true,
    pointRadius: 0,
    borderColor: '#e9c583',
    borderWidth: 1,
    scales: {
        y: {
            grid: {
                display: false,
            },
            ticks: {
                display: true,
                color: '#d9deda',
            }

        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                display: true,
            }
        },
    },
    plugins:
        {
            legend: {
                display: false,
                position: 'top' as const,
            },
        }
    ,
}

const plugins = [
    customBorder
]

type TemperatureProps = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    }[];
}

const TemperatureChart = ( temperatureData :TemperatureProps ) => {
    const _datasets = temperatureData?.datasets?.map((value: any) => ({
        ...value,
        borderWidth: 1.4,
    }))

    const data = {
        labels: temperatureData?.labels,
        datasets: _datasets,
    }

    return (
        <div className="bg-transparent shadow-none">
            <Line height="100%" options={options} data={data} plugins={plugins} />
        </div>
    )
}

export default TemperatureChart
