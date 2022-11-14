export const serializeDataWithId = (data: any[] | undefined) => {
  if (!data) return [];
  return data.map((value, index) => {
    return {
      id: index + 1,
      ...value,
    };
  });
};
