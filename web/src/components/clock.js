import { useState, useEffect } from 'react'

const Clock = ({ ...props }) => {
  let [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  })
  return (
    <p className="text-yellow font-bold caption-text text-center">
      {date.toTimeString()}
    </p>
  )
}

export default Clock
