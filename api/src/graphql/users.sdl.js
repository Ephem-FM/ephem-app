export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    username: String!
    hashedPassword: String!
    phone: String!
    vibe: Vibe
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    hashedPassword: String
  }

  input UpdateUserInput {
    username: String
    hashedPassword: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
