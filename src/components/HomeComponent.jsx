import React, { useEffect, useState } from 'react'

function HomeComponent() {

  const [colour, setColour] = useState("#acacac")

  const style = { backgroundColor: colour }

  const randomColour = Math.floor(Math.random() * 16777215).toString(16);

  function changeColour() {
    setColour(`#${randomColour}`)
  }

  return (<>
    <button onClick={changeColour} id='welcomeBtn'><h1 style={style} className='welcomeText'>Welcome</h1></button>
    <h5>Click to change colour</h5>
  </>
  )
}

export default HomeComponent