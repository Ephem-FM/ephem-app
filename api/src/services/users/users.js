import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ username }) => {
  return db.user.findUnique({
    where: { username },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  vibe: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).vibe(),
}
