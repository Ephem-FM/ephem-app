import { useEffect, useState } from 'react'
const Loading = () => {
  const [page, setPage] = useState(1)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(page + 1)
    }, 400)
    return () => clearTimeout(timer)
  })
  return (
    <div className="flex flex-col p-8 grow min-w-full heading-text text-red text-left gap-2">
      {page > 0 && <p>vibe_discovery.js init...</p>}
      {page > 1 && <p>0/1 vibrations sent, 0/1 vibration received...</p>}
      {page > 2 && <p>compiling vibration...</p>}
      {page > 3 && <p>sending vibration...</p>}
      {page > 4 && <p>512mib sent...</p>}
      {page > 5 && <p>512mib recieved...</p>}
      {page > 6 && <p>vibe: acquired...</p>}
    </div>
  )
}

export default Loading
