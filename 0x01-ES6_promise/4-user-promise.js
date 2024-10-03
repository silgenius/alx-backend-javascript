export default function signUpUser(firstName, lastName) {
  const value = { firstName, lastName, }
  return Promise.resolve(value)
}
