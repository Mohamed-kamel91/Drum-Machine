import React, {useState} from "react"
const Context = React.createContext()

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

function ContextProvider(props) {
  const [power, setPower] = useState(true)
  const [bankKit, setBankbankKit] = useState(bankOne)
  const [bankKitText, setBankKitText] = useState("Heater Kit")
  const [volumeNum, setVolumeNum] = useState(0.5)
  const [displayVolumeNum, setDisplayVolumeNum] = useState(50)
  const [displayAudioText, setDisplayAudioText] = useState("") 
  const [padId, setPadId] = useState("")
  const [drumPadStyle, setDrumPadStyle] = useState("")
  
  // Power Click handler to swith power on/off and reset Display
  function powerOn() {
    if(power) {
      setPower(!power)
      setBankbankKit(bankOne)
      setBankKitText("Heater Kit")
      setDisplayAudioText("")
    } else {
      setPower(!power)
    }
  }

  // Bank Click handler to toggle between bank kits
  function changeBankKit() {
    if(power) {
      setBankbankKit(bankKit === bankOne ? bankTwo : bankOne)
      setTimeout(() => {
      setBankKitText(bankKitText === "Heater Kit" ? "Piano Kit" : "Heater Kit")
      }, 100)
    }
  }

  // Volume Change Handle to adjust volume
  function adjustVolume(e) {
    if(power) {
      const {value} = e.target
      const volume = Math.round(value * 100)
      setVolumeNum(value)
      setDisplayVolumeNum(volume)
    }
  }

  // Style drumpad on Click
  function styleDrumpad(id,className) {
    setDrumPadStyle(className)
    setTimeout(() => {
      setDrumPadStyle("")
    }, 100)
    setPadId(id)
  } 

  // Sound Effect Click Handler to play sound when clicking drum pad
  function playSound(keyTrigger, id, className) {
    if(power) {
      const drumId = document.getElementById(keyTrigger)
      drumId.currentTime = 0
      drumId.play()
      styleDrumpad(id, className)
      setDisplayAudioText(id.replace(/-/g, " "))
    }
  }

  return (
    <Context.Provider 
      value={{power,
              powerOn,
              bankKit,
              changeBankKit,
              bankKitText,
              playSound,
              volumeNum,
              adjustVolume,
              displayVolumeNum,
              displayAudioText,
              drumPadStyle,
              padId
            }}
    >
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}