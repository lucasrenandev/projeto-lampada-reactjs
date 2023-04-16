import lampadaDesligada from "./assets/desligada.jpg"
import lampadaLigada from "./assets/ligada.jpg"
import lampadaQuebrada from "./assets/quebrada.jpg"
import { useState, useRef, useEffect } from "react"
import "./App.css"

export default function App() {
  const [lampOff, setLampOff] = useState(lampadaDesligada)
  const [button] = useState("Ligar")
  const [lamp] = useState("lamp")
  const lampRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    document.querySelector("#lamp").addEventListener("dblclick", Broken)
  }, [])

  useEffect(() => {
    document.querySelector("#lamp").addEventListener("mouseenter", On)
  }, [])

  useEffect(() => {
    document.querySelector("#lamp").addEventListener("mouseleave", Off)
  }, [])

  const lampBroken = () => {
    return lampRef.current.src.indexOf("quebrada") > -1
  }

  const Broken = () => {
    lampRef.current.src = lampadaQuebrada
  }

  const Off = () => {
    if(!lampBroken()) {
      setLampOff(lampRef.current.src = lampadaDesligada)
    }
  }

  const On = () => {
    if(!lampBroken()) {
      setLampOff(lampRef.current.src = lampadaLigada)
    }
  }

  const On_Off = () => {
    if(buttonRef.current.textContent === "Ligar") {
      On()
      buttonRef.current.textContent = "Desligar"
    }
    else {
      Off()
      buttonRef.current.textContent = "Ligar"
    }
  }

  return (
    <div className="app">
      <img ref={lampRef} src={lampOff} alt="Lâmpada desligada" id={lamp} />
      <button ref={buttonRef} type="button" onClick={On_Off}>{button}</button>
    </div>
  )
}