export function getClass(i) {
  if (i === 0 || i === 1 || i === 2) {
    return ['drum-pad-top', ' drum-pad-top-clicked'];
  }
  else if (i === 3 || i === 4 || i === 5) {
    return ['drum-pad-mid', ' drum-pad-mid-clicked']
  } 
  else {
    return ['drum-pad-bottom', ' drum-pad-bottom-clicked']
  }
}
