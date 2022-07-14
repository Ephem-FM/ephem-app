import { useQuery } from '@apollo/client'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GET_VIBES = gql`
  query GetVibe($userId: String!) {
    vibe(userId: $userId) {
      id
      popularity
      valence
      energy
      danceability
      createdAt
    }
  }
`

const CurrentVibePage = () => {
  const { currentUser } = useAuth()
  const { loading, error, data } = useQuery(GET_VIBES, {
    variables: { userId: currentUser.id },
  })

  if (loading) return null
  if (error) return <p>Error! {error}</p>
  if (data) {
    const { vibe } = data
    return (
      <>
        <MetaTags title="VIBE" description="current vibe page" />
        <div className="flex flex-col mt-[20%] lg:mt-[10%] grow min-w-full text-center gap-4">
          <p className="text-yellow heading-text">VIBE_{vibe.id.slice(0, 5)}</p>
          <p className="text-red caption-text">popularity: {vibe.popularity}</p>
          <p className="text-red caption-text">valence: {vibe.valence}</p>
          <p className="text-red caption-text">energy: {vibe.energy}</p>
          <p className="text-red caption-text">
            danceability:{vibe.danceability}
          </p>
        </div>
      </>
    )
  }
}

export default CurrentVibePage
