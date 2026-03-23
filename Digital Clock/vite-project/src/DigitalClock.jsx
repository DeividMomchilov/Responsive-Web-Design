import { useEffect, useState } from "react"
import "./DigitalClock.css";

export default function DigitalClock(){
    const [time, setTime] = useState(new Date())

    useEffect(() =>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return clearInterval(()=> intervalId)
    },[])

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(time){
        return (time < 10 ? "0" : "") + time;
    }

    return (
        <div className="digital-clock-container">
            <div className="digital-clock">
                <span className="digital-clock-time">{formatTime()}</span>
            </div>
        </div>
    )
}