import React, { useState } from 'react'

function Counter() {
  const initState = {
    counter: 0,
    imageUrl: 'https://picsum.photos/200',
  }
  const [state, setState] = useState(initState)
  const formatCounter = state.counter === 0 ? 'Zero' : state.counter
  const style = {
    fontSize: 10,
    fontWeight: 'bold',
    fontColor: 'red',
  }
  const btnClick = () => setState({ ...state, counter: state.counter + 1 })
  return (
    <div className="container">
      <button className={getCN()} style={style}>
        {formatCounter}
      </button>
      <br />
      <img src={state.imageUrl} alt='randomImage' />
      <br />
      <button onClick={btnClick} className='btn btn-secondary btn-sm'>
        Inc
      </button>
    </div>
  )

  function getCN() {
    //get class name
    let CN = 'btn btn-sm btn-'
    CN += state.counter === 0 ? 'warning' : 'primary'
    return CN
  }
}

export default Counter
