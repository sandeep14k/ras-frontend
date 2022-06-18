import axios, { AxiosResponse } from "axios";

import { SERVER_ERROR, STUDENT_URL, setConfig } from "../../constants";

export interface RC {
  ID: number;
  is_active: boolean;
  academic_year: string;
  type: string;
  start_date: number;
  phase: string;
  application_count_cap: number;
}

const instance = axios.create({
  baseURL: STUDENT_URL,
  timeout: 15000,
  timeoutErrorMessage: SERVER_ERROR,
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const rcRequest = {
  getAll: (token: string) =>
    instance.get<RC[]>("", setConfig(token)).then(responseBody),
};
export default rcRequest;
