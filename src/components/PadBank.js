import React, {useContext} from "react"
import DrumPad from "./DrumPad"
import {Context} from "../Context"
import {getClass} from "../utils"

function PadBank() {
  const {bankKit} = useContext(Context)

  const drumPads = bankKit.map((drumPad, i) => (
    <DrumPad key={drumPad.id} drumPad={drumPad} className={getClass(i)}/>
  ))

  return (
    <div className="pad-bank-container">
      {drumPads}
    </div>
  )
}

export default PadBank