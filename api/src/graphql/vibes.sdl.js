export const schema = gql`
  type Vibe {
    id: String!
    createdAt: DateTime!
    updated: DateTime!
    compositeScore: Float!
    popularity: Float!
    valence: Float!
    danceability: Float!
    energy: Float!
    instrumentalness: Float!
    genre: String!
    user: User!
    userId: String!
  }

  type Query {
    vibes: [Vibe!]! @requireAuth
    vibe(userId: String!): Vibe @requireAuth
  }

  input CreateVibeInput {
    popularity: Float!
    valence: Float!
    danceability: Float!
    energy: Float!
    userId: String!
  }

  input UpdateVibeInput {
    updated: DateTime!
    popularity: Float
    valence: Float
    danceability: Float
    energy: Float
    userId: String
  }

  type Mutation {
    createVibe(input: CreateVibeInput!): Vibe! @requireAuth
    updateVibe(id: String!, input: UpdateVibeInput!): Vibe! @requireAuth
    deleteVibe(id: String!): Vibe! @requireAuth
  }
`
