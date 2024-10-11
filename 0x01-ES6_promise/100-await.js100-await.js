import { uploadPhoto, createUser } from '/utils';

async function asyncUploader() {
  const data = {}
  try {
    photo = await uploadPhoto();
    user = await createUser();
    data['photo'] = photo;
    data['user'] = user;
  } catch (error) {
    data['photo'] = null;
    data['user'] = null;
  }

  return data
}