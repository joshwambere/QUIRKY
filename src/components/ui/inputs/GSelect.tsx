import {ReactElement} from "react";
import {CiTempHigh} from "react-icons/ci";


type GSelectProps = {
    name: string;
    options: any[];
}
export const GSelect = (props: GSelectProps): ReactElement => {

    // function to handle the change in the select
    const handleChange = (e: any) => {
        console.log('e', e.target.value);
    }


    return (
        <div className="g-select border-2 border-[#d9deda] flex justify-between border-t-0 border-r-0 border-l-0 px-2 py-1">
            <label htmlFor={props.name} className="pr-3">
                <CiTempHigh className="text-2xl" />
            </label>
            <select name={props.name} id={props.name} className="bg-transparent !outline-none pr-3" onChange={handleChange} >
                {
                    props.options.map((option, index) => (
                        <option key={index} value={option.city}>{option.city}</option>
                    ))
                }
            </select>
        </div>
    )
}
