import {ReactElement} from "react";
import {GSelect} from "@/components/ui/inputs/GSelect";
import {SupportedCity} from "@/components/_shared/SupportedCity";

export const SideMenu = (): ReactElement => {
    return (
        <div className="side-menu">
            <div className="Search-section">
                 <GSelect name="city" options={SupportedCity} />
            </div>
        </div>
    )
}
