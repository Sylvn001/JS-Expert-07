const { GestureDescription, Finger, FingerCurl } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down') // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up') // 🖐
const MetalGesture = new GestureDescription("metal") // 🤘 

// Scroll Down
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

//Metal
MetalGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5)
MetalGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
MetalGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.5)
MetalGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
MetalGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5)
console.log(MetalGesture)

// ScrollUp
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}


const knownGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
  MetalGesture
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'metal': '🤘'
}

export {
  knownGestures,
  gestureStrings
}