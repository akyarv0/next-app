import React from 'react'
import GoBack from '@/components/GoBack'
import Link from 'next/link'

const Users = () => {
  return (
    <div>Users
      <nav className="flex flex-wrap gap-10">
        {[1,2,3,4,5,6,7,8,9,10].map((user) => <Link key={user} href={`/dashboard/users/${user}` } className="text-3xl font-bold underline">{user}</Link>)

}
      </nav>
           <GoBack />
    </div>
  )
}

export default Users