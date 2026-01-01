import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
      <>
            <h1 className='text-3xl bg-teal-400'> Contact Nav header</h1>
            <div>{children}</div>
            <h1 className='text-3xl bg-slate-800'> Contact Nav footer</h1>
      </>
  )
}

export default layout