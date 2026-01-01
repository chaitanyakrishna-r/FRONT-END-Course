import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        
        <h1>Contact of Users</h1>
        <ul>
            <li><Link href='user/ckr'>User 1</Link></li>
            <li><Link href='user/2'>user 2</Link></li>
            <li><Link href='user/3'>user 3</Link></li>
            <li><Link href='user/4'>user 4</Link></li>
        </ul>   
    </div>
  )
}

export default page