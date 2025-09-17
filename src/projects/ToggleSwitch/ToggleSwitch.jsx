import { useState } from "react"
import "./ToggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";


export const ToggleSwitch = () => {
const[isOn,setIsOn] = useState(false)
const handle = () => {
    setIsOn(!isOn)
}
const but = isOn ? "on": "off";
const buts = {backgroundColor: isOn ? "rgb(21, 220, 21)":"grey"};
return(
    <>
    <h1>Toggle <IoIosSwitch /> button </h1>
    <div className="toggle" style={buts}onClick={handle}>
        <div className={`switch ${but}`}>
            <span className="state">{but}</span>
        </div>
    </div>
   </>
)
}
