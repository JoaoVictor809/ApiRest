import { api } from "../apis";  // Certifique-se de que o caminho está correto.

export const useGetdata = () => {
  const getEnem = async () => {
    try {
      const response = await api.get('/exams');
      return response.data;
    } catch (error) {
      console.log({ error });
      return error;
    }
  };

  return {
    getEnem,
  };
};
