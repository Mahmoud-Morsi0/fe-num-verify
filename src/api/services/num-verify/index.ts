import axios from "@/api/request";

export const verifyNumber = async (number: string) => {
  return axios.get(`/verify-number?number=${number}`);
};

export const getAllNumbers = async () => {
  return axios.get("/numbers");
};
