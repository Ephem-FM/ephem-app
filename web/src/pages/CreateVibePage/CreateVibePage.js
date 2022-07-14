import { useAuth } from '@redwoodjs/auth'
import { Form, Submit, NumberField, TextField, Label } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
const CREATE_VIBE = gql`
  mutation CreateVibeMutation($input: CreateVibeInput!) {
    createVibe(input: $input) {
      id
    }
  }
`

const CreateVibePage = () => {
  const [create, { data, loading, error }] = useMutation(CREATE_VIBE)
  const { currentUser } = useAuth()
  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
    fetch('https://ephem-api.herokuapp.com/preferences', {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        phone: currentUser.phone,
        valence: data.valence,
        energy: data.energy,
        danceability: data.danceability,
        popularity: data.popularity,
      }),
    })
      .then((res) => {
        // Handle response
        console.log('Response: ', res)
        navigate(routes.currentVibe())
      })
      .catch((err) => {
        // Handle error
        console.log('Error message: ', err)
      })
  }
  return (
    <>
      <MetaTags title="YR VIBE" description="your vibe page" />
      <p className="mx-auto heading-text text-red lg:text-4xl lg:mt-[10%] mt-[20%]">
        vibe selector 1.0
      </p>
      <Form
        onSubmit={onSubmit}
        className="text-grey flex flex-col gap-10 my-[10%] items-center outline-none"
      >
        <TextField name="userId" value={currentUser.id} className="hidden" />
        <div className="flex items-center gap-2">
          <Label
            htmlFor="valence"
            className="font-main font-bold text-yellow uppercase"
          >
            Valence
          </Label>
          <NumberField
            className="text-black font-main outline-none text-2xl rounded-sm border-red border-2"
            type="number"
            id="valence"
            name="valence"
            min="0"
            max="1"
            step=".1"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label
            htmlFor="energy"
            className="font-main font-bold text-yellow uppercase"
          >
            energy
          </Label>
          <NumberField
            className="text-black font-main outline-none text-2xl rounded-sm border-red border-2"
            type="number"
            id="energy"
            name="energy"
            min="0"
            max="1"
            step=".1"
          />
        </div>

        <div className="flex items-center gap-2">
          <Label
            htmlFor="danceability"
            className="font-main font-bold text-yellow uppercase"
          >
            danceability
          </Label>
          <NumberField
            className="text-black font-main outline-none text-2xl rounded-sm border-red border-2"
            type="number"
            id="danceability"
            name="danceability"
            min="0"
            max="1"
            step=".1"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label
            htmlFor="popularity"
            className="font-main font-bold text-yellow uppercase"
          >
            popularity
          </Label>
          <NumberField
            className="text-black font-main outline-none text-2xl rounded-sm border-red border-2"
            type="number"
            id="popularity"
            name="popularity"
            min="0"
            max="100"
            step="10"
          />
        </div>
        <Submit className="btn-yellow caption-text">create vibe</Submit>
      </Form>
    </>
  )
}

export default CreateVibePage
