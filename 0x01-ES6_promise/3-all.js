import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then(([user, photo]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      return console.log("Signup system offline");
    });
}
