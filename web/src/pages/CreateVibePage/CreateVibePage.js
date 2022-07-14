import { RangeField, Form, Submit, NumberField, Label } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CREATE_VIBE = gql`
  mutation CreateVibeMutation($input: CreateVibeInput!) {
    createVibe(input: $input) {
      id
    }
  }
`

const CreateVibePage = () => {
  return (
    <>
      <MetaTags title="YR VIBE" description="your vibe page" />
      <p className="mx-auto heading-text text-red lg:text-4xl lg:mt-[10%] mt-[20%]">
        vibe selector 1.0
      </p>
      <Form className="text-grey flex flex-col gap-10 my-[10%] items-center outline-none">
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
            htmlFor="instrumentalness"
            className="font-main font-bold text-yellow uppercase"
          >
            instrumentalness
          </Label>
          <NumberField
            className="text-black font-main outline-none text-2xl rounded-sm border-red border-2"
            type="number"
            id="instrumentalness"
            name="instrumentalness"
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
            max="1"
            step=".1"
          />
        </div>
        <Submit className="btn-yellow caption-text">Submit</Submit>
      </Form>
    </>
  )
}

export default CreateVibePage
