import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  const data = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    data.photo = photo;
    data.user = user;
  } catch (error) {
    data.photo = null;
    data.user = null;
  }

  return data;
}
