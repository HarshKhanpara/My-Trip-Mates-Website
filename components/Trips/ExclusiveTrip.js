"use client";                                                                          

import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'

export function ExclusiveTrip() {
  const ref = useRef(null)

  const toggle = () => {
    if (!ref.current) return
    if (ref.current.isRunning) {
      ref.current.stop()
    } else {
      ref.current.start()
    }
  }

  return (
    <>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.3, mouse:{click:true} }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
    </>
  )
}

export default ExclusiveTrip