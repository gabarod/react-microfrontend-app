import axios from 'axios';

const handleHttpErrors = (response) => {
  if (!response.data) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};

export const getCharacters = async (page = 1) => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=5`
  );
  handleHttpErrors(response);
  return response.data;
};
