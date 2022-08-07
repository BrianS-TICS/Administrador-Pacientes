import { useState, useEffect } from "react"

const Error = ({children}) => {
  return (
        <div className='bg-red-700 p-4 rounded-md mb-3'>
          <p className=' text-white font-bold uppercase text-center'>{children}</p>
        </div>
  )
}

export default Error
