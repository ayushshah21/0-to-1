"use client"
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GlobalError = ({error}: {error: Error & {digest? : string };}) => {
  return (
    <html>
        <body>
            <h2>Global Error</h2>
        </body>
    </html>
  )
}

export default GlobalError