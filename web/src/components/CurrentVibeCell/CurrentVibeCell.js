export const QUERY = gql`
  query CurrentVibe {
    currentVibe: users {
      id
      phone
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ currentVibe }) => {
  return <div>{JSON.stringify(currentVibe)}</div>
}
