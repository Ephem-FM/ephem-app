import { useQuery } from '@apollo/client'

import { Form, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_USER = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`
// const GET_USER = gql`
//   query GetUser {
//     user {
//       phone: "8478481884"
//     }
//   }
// `
const NewUserPage = () => {
  // const { load, error, data } = useQuery(GET_USER)
  // if (load) <p>'Loading...' </p>
  // if (error) <p> `Error! ${error.message}` </p>
  // if (data) <p>`${data}`</p>

  const [create, { loading }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      toast.success('VIBE: CREATED')
      navigate(routes.inputPrefs())
    },
    onError: () => {
      toast.error('VIBE: BAD')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="NU VIBE" description="new vibe page" />
      <Toaster />
      <Form
        onSubmit={onSubmit}
        className="text-grey mx-auto font-main flex flex-col gap-8 my-12 px-4 lg:mx-auto lg:max-w-fit lg:min-w-[50vw]"
      >
        <div className="flex flex-col gap-2">
          <label className="font-bold font-main text-yellow" htmlFor="alias">
            ALIAS
          </label>
          <TextField
            className="bg-transparent border-b-2 border-yellow outline-none font-mono"
            name="alias"
          ></TextField>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-bold font-main text-yellow">
            TEL
          </label>
          <TextField
            name="phone"
            className="bg-transparent border-b-2 border-yellow outline-none font-mono"
            validation={{
              required: true,
            }}
          ></TextField>
          <FieldError name="phone" className="font-main text-red text-xs" />
        </div>
        <Submit
          disabled={loading}
          className="bg-yellow rounded-sm px-2 py-1 shadow-yellow-glow mt-8 hover:shadow-yellow-glow-lg transition-shadow ease-in-out max-w-fit mx-auto"
        >
          <p className="font-main font-bold text-black uppercase">beam me up</p>
        </Submit>
      </Form>
    </>
  )
}

export default NewUserPage
