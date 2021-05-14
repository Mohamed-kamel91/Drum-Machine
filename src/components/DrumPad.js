import React, {useState, useEffect, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

function DrumPad({className,drumPad}) {
  const {power, playSound, volumeNum, drumPadStyle, padId} = useContext(Context) 

  // Set realtime volume for all Audio Tags
  const clips = [].slice.call(document.getElementsByClassName('drum-pad-audio'));
  clips.forEach(sound => {
    sound.volume = volumeNum;
  });

  // Add "keypress" event listener to play audio
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  })

  function handleKeyPress(e) {
    if(power) {
      if (e.keyCode === drumPad.keyCode) {
        playSound(drumPad.keyTrigger, drumPad.id, className[1])
      }
    }
  }

  return (
    <div className={`drum-pad ${className[0]}${padId === drumPad.id ? drumPadStyle : ""}`}
         id={drumPad.id}
         onClick={() => playSound(drumPad.keyTrigger, drumPad.id, className[1])}
    >
      <audio className="drum-pad-audio" src={power ? drumPad.url : "#"} id={drumPad.keyTrigger}></audio>
      <span className="drum-pad-text">{drumPad.keyTrigger}</span>
    </div>
  )
}

// Checking Types of props in "drumPad" Obj
DrumPad.propTypes = {
  drumPad: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
  })
}

export default DrumPad