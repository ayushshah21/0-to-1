import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Page() {
    const session = await getServerSession();

  return (
    <div>
        User cmp:
        {JSON.stringify(session)}
    </div>
  )
}