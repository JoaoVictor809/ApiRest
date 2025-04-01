const getEnem = async () => {
    try {
      const response = await api.get('/exams');
      return response.data; // Aqui, você pode manipular os dados para adicionar IDs únicos.
    } catch (error) {
      console.log({ error });
      return error;
    }
  };
  