import React from 'react'
import Admin from "@repo/ui/admin"
import InputBox from "@repo/ui/input-box"

const page = () => {
  return (
    <div>
        <h1>Hi from the Admin page</h1>
        <Admin />
        <InputBox />
    </div>
  )
}

export default page