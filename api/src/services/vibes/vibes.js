import { db } from 'src/lib/db'

export const vibes = () => {
  return db.vibe.findMany()
}

export const vibe = ({ id }) => {
  return db.vibe.findUnique({
    where: { id },
  })
}

export const createVibe = ({ input }) => {
  return db.vibe.create({
    data: input,
  })
}

export const updateVibe = ({ id, input }) => {
  return db.vibe.update({
    data: input,
    where: { id },
  })
}

export const deleteVibe = ({ id }) => {
  return db.vibe.delete({
    where: { id },
  })
}

export const Vibe = {
  user: (_obj, { root }) =>
    db.vibe.findUnique({ where: { id: root.id } }).user(),
}
