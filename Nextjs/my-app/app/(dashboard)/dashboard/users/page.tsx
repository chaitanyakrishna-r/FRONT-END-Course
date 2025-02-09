import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div>
        User
        <ul>
            <li>
                <Link href="/dashboard/users/1">User1</Link>
            </li>
            <li>
                <Link href="users/2">User2</Link>
            </li>
            <li>
                <Link href="users/3">User3</Link>
            </li>
            <li>
                <Link href="users/4">User4</Link>
            </li>
            <li>
                <Link href="
                
                199users/5">User5</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default page;