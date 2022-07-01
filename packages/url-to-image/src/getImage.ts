import axios from 'axios';

export const getImage = async (url: string): Promise<Buffer> => {
  const response = await axios.get(url, {responseType: 'arraybuffer'});
  const img = Buffer.from(response.data, 'binary');
  return img;
}
