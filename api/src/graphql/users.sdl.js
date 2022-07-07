export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    alias: String!
    phone: String
    vibe: Vibe
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    alias: String!
    phone: String
  }

  input UpdateUserInput {
    alias: String
    phone: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
