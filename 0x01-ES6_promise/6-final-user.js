import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newArray = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        newArray.push({ status: result.status, value: result.value || `Error: ${result.reason.message}` });
      });
      return newArray;
    });
}
