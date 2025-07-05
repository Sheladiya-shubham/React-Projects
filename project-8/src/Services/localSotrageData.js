export const getStorageData = () => {
  return JSON.parse(localStorage.getItem("product")) || [];
};

export const setStorageData = (data) => {
  localStorage.setItem("product", JSON.stringify(data));
};
