import { vibes, vibe, createVibe, updateVibe, deleteVibe } from './vibes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('vibes', () => {
  scenario('returns all vibes', async (scenario) => {
    const result = await vibes()

    expect(result.length).toEqual(Object.keys(scenario.vibe).length)
  })

  scenario('returns a single vibe', async (scenario) => {
    const result = await vibe({ id: scenario.vibe.one.id })

    expect(result).toEqual(scenario.vibe.one)
  })

  scenario('creates a vibe', async (scenario) => {
    const result = await createVibe({
      input: {
        updated: '2022-07-07T01:37:30Z',
        popularity: 6795234.38079007,
        valence: 1160566.3968016056,
        danceability: 1833274.0650386147,
        energy: 4303257.171964527,
        instrumentalness: 9547916.125675524,
        genre: 'String',
        userId: scenario.vibe.two.userId,
      },
    })

    expect(result.updated).toEqual('2022-07-07T01:37:30Z')
    expect(result.popularity).toEqual(6795234.38079007)
    expect(result.valence).toEqual(1160566.3968016056)
    expect(result.danceability).toEqual(1833274.0650386147)
    expect(result.energy).toEqual(4303257.171964527)
    expect(result.instrumentalness).toEqual(9547916.125675524)
    expect(result.genre).toEqual('String')
    expect(result.userId).toEqual(scenario.vibe.two.userId)
  })

  scenario('updates a vibe', async (scenario) => {
    const original = await vibe({ id: scenario.vibe.one.id })
    const result = await updateVibe({
      id: original.id,
      input: { updated: '2022-07-08T01:37:30Z' },
    })

    expect(result.updated).toEqual('2022-07-08T01:37:30Z')
  })

  scenario('deletes a vibe', async (scenario) => {
    const original = await deleteVibe({ id: scenario.vibe.one.id })
    const result = await vibe({ id: original.id })

    expect(result).toEqual(null)
  })
})
