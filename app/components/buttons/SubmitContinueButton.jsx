import React from 'react'

const SubmitContinueButton = ({title}) => {
  return (
    <>
    <button type='submit' className="border-2 text-white bg-upurple px-4 w-full font-semibold my-3 block py-3 rounded shadow-sm border-upurple ">{title}</button>
    </>
  )
}

export default SubmitContinueButton