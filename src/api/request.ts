import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { Token } from "./types";
import { RootState, store } from "@/store";

//Import Store to set the token in the headers
let token: Token = null;

const select = (state: RootState): Token => {
  return state.auth.username;
};

const listener = () => {
  token = select(store.getState());
};

store.subscribe(listener);
// End

const baseURL = import.meta.env.VITE_API_URL;

const axiosRequest = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Step-2: Create request, response & error handlers
const requestHandler = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  //All Our request Handler in all calls.
  if (token) {
    request.headers!["Authorization"] = `Bearer ${token}`;
  }
  return request;
};

// Case 401
const responseHandler = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const errorHandler = (error: AxiosError) => {
  // Handle 401 Error Globally
  if (error.response?.status === 401) {
    // Perform actions on 401 error, dispatch logout actions
  }
  return Promise.reject(error);
};

axiosRequest.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosRequest.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosRequest;
