import { useState } from 'react'
import { store } from '../lib/store'
import './install.css'

const KEY = 'installHintDismissed'

/** True when already launched as an installed app — no need to show the hint. */
function isStandalone(): boolean {
  try {
    return (
      window.matchMedia?.('(display-mode: standalone)').matches === true ||
      // iOS Safari exposes this on navigator when launched from the Home Screen
      (navigator as unknown as { standalone?: boolean }).standalone === true
    )
  } catch {
    return false
  }
}

/** iOS share glyph (square with an up arrow) as inline SVG. */
const ShareIcon = () => (
  <svg className="ih-ic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 15V3" /><path d="m8 7 4-4 4 4" />
    <path d="M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
  </svg>
)

/** A one-time banner shown on first open (until dismissed) explaining how to
 * install the app to the Home Screen on iPhone and Android. */
export function InstallHint() {
  const [show, setShow] = useState(() => !isStandalone() && !store.get<boolean>(KEY, false))
  if (!show) return null

  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  const isIOS = /iphone|ipad|ipod/i.test(ua)

  const dismiss = () => {
    store.set(KEY, true)
    setShow(false)
  }

  const ios = (
    <div className="ih-plat" key="ios">
      <div className="ih-os">On iPhone &amp; iPad — Safari</div>
      <ol>
        <li>Tap the <b>Share</b> button <ShareIcon /> in the toolbar.</li>
        <li>Scroll down and tap <b>Add to Home Screen</b>.</li>
        <li>Tap <b>Add</b> in the top corner.</li>
      </ol>
    </div>
  )
  const android = (
    <div className="ih-plat" key="android">
      <div className="ih-os">On Android — Chrome</div>
      <ol>
        <li>Tap the <b>⋮</b> menu (top-right).</li>
        <li>Tap <b>Add to Home screen</b> (or <b>Install app</b>).</li>
        <li>Tap <b>Add</b> to confirm.</li>
      </ol>
    </div>
  )

  return (
    <div className="ih" role="dialog" aria-label="Add to Home Screen">
      <button className="ih-x" onClick={dismiss} aria-label="Dismiss">×</button>
      <div className="ih-title">Add Foundations to your Home Screen</div>
      <div className="ih-sub">Install it like an app — full screen, works offline, one tap away.</div>
      <div className="ih-plats">
        {isIOS ? [ios, android] : [android, ios]}
      </div>
      <button className="ih-ok" onClick={dismiss}>Got it</button>
    </div>
  )
}
