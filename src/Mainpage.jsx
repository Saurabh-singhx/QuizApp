import React, { useState } from 'react'

// Main component accepting props: data (questions), number (current question index), setnumber (function to update index)
function Mainpage({ data, number, setnumber }) {

  // State to track if an option was clicked
  const [clicked, setclicked] = useState(false)
  // State to track whether the answer is correct or not
  const [ans, setans] = useState('')
  // State to track total score
  const [score, setscore] = useState(0)

  // If data is not loaded yet, show loading
  if (!data || data.length === 0) {
    return <div className="text-center text-xl p-10">Loading...</div>;
  }

  // Move to the next question and reset option click state
  const handlenextQuestion = () => {
    setnumber(number += 1);
    setclicked(false)
    setans('')
  }

  // Reset quiz to initial state
  const reset = () => {
    setnumber(0);
    setscore(0);
  }

  // Handle selection of first option
  const handlefirstoption = () => {
    setclicked(true);
    // Check if the selected option is correct
    if (data[number].answer === data[number].options[0]) {
      setscore(prev => prev + 10); // Increase score
      setans(true)
    } else {
      setans(false)
    }
  }

  // Handle selection of second option
  const handlesecondoption = () => {
    setclicked(true);
    if (data[number].answer === data[number].options[1]) {
      setscore(prev => prev + 10);
      setans(true)
    } else {
      setans(false)
    }
  }

  // Handle selection of third option
  const handlethirdoption = () => {
    setclicked(true);
    if (data[number].answer === data[number].options[2]) {
      setscore(prev => prev + 10);
      setans(true)
    } else {
      setans(false)
    }
  }

  // Handle selection of fourth option
  const handlefourthoption = () => {
    setclicked(true);
    if (data[number].answer === data[number].options[3]) {
      setscore(prev => prev + 10);
      setans(true)
    } else {
      setans(false)
    }
  }

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center p-5'>

      {
        // If questions are left, show the quiz
        number < data.length ? <div className='bg-green-200 flex flex-col p-10 gap-2'>

          {/* Show current question */}
          <button className='font-bold font-sans'>{data[number].question}</button>

          {/* Option 1 */}
          <button
            disabled={clicked}
            onClick={handlefirstoption}
            className={`text-lg font-bold text-white font-sans p-1 text-left optionbtn 
              ${clicked && data[number].options[0] === data[number].answer ? 'bg-green-600' : clicked ? 'bg-red-500' : ''}`}
          >
            {data[number].options[0]}
          </button>

          {/* Option 2 */}
          <button disabled={clicked} onClick={handlesecondoption}
            className={`text-lg font-bold text-white font-sans hover:bg-green-600 p-1 text-left optionbtn 
              ${clicked && data[number].options[1] === data[number].answer ? 'bg-green-600' : clicked ? 'bg-red-500' : ''}`}>
            {data[number].options[1]}
          </button>

          {/* Option 3 */}
          <button disabled={clicked} onClick={handlethirdoption}
            className={`text-lg font-bold text-white font-sans hover:bg-green-600 p-1 text-left optionbtn 
              ${clicked && data[number].options[2] === data[number].answer ? 'bg-green-600' : clicked ? 'bg-red-500' : ''}`}>
            {data[number].options[2]}
          </button>

          {/* Option 4 */}
          <button disabled={clicked} onClick={handlefourthoption}
            className={`text-lg font-bold text-white font-sans hover:bg-green-600 p-1 text-left optionbtn 
              ${clicked && data[number].options[3] === data[number].answer ? 'bg-green-600' : clicked ? 'bg-red-500' : ''}`}>
            {data[number].options[3]}
          </button>

          {/* Next button */}
          <button onClick={handlenextQuestion}
            className='bg-sky-400 mt-5 w-fit ml-auto mr-auto pt-2 pb-2 pl-6 pr-6 rounded-lg'>Next</button>

        </div> : <div className='flex justify-center items-center flex-col'>
          {/* Final Score and Reset button after quiz ends */}
          <div className='text-green-500 font-bold'>Total Score {score}</div>
          <button onClick={reset}
            className='bg-red-400 pt-2 pb-2 pr-6 pl-6 rounded-lg text-lg font-bold text-white'>reset</button>
        </div>
      }

    </div>
  )
}

export default Mainpage
