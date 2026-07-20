import { useState } from "react"
import axios from "axios"

function Weather() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    const [error, setError] = useState("")

    function handleInput(event) {
        setCity(event.target.value)
    }


    function getWeather() {
        debugger
        var watherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6dd7d7e85f46ed151b92f0ca0cbc9dc2`)
        watherData.then(function (success) {
            setTemp(success.data.main.temp)
            setDesc(success.data.weather[0].description)
            setWeather(success.data.weather[0].main)
        }).catch(function () {
            setError("City not found")
            setWeather("");
            setTemp("");
            setDesc("");
        })
    }

    return (
        <>
            <div className="bg-black p-10" >
                <div className="bg-green-500  p-10">
                    <h1 className="text-2xl font-medium">Wather Report</h1>
                    <p>I can give you a weather report about your city!</p>
                    <div className="flex flex-col items-start gap-3 mt-4">
                        <input type="text" className="border bg-white rounded-md p-1 w-50" placeholder="Enter your city name" onChange={handleInput}></input>
                        <span className="text-red-500 text-semibold">{error}</span>
                        <button className="bg-black text-white p-1  rounded-md" onClick={getWeather}>Get Report</button>
                    </div>
                    <div className="font-semibold mt-2">
                        <p>Wather: {weather}</p>
                        <p>Temperature: {temp}</p>
                        <p>Description: {desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weather
