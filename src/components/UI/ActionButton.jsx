import React from 'react'

const ActionButton = ({ children, onClick }) => {
  return (
    <button
      className="mx-auto px-4 text-black group relative overflow-hidden py-2 w-full text-center border-2 h-fit border-black text-sm font-bold uppercase hover:text-white tracking-wide before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-500 cursor-pointer flex"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ActionButton