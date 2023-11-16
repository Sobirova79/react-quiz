import React from 'react'
type NavbarProps = {
    total:number,
    score:number
}

function Navbar({total,score}:NavbarProps) {
  return (
    <nav className='navbar'>
        <div className="container">
            <h1 className="navbar__title">React Quiz</h1>
            <p className="navbar__score">Score: {score}</p>
            <p className="navbar__total">Total Questions: {total}</p>
        </div>
    </nav>
  )
}

export default Navbar