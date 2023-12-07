import axios, { AxiosError } from "axios";
import { API_URL } from "../config";
import { IUser } from "./models/IUser.ts";
import authHeader from "../utils/authHeaders.ts";

class UserApiService {
  public async getUserData(): Promise<IUser | undefined> {
    try {
      const response = await axios.get<IUser>(API_URL + "/api/v1/users/me", {
        headers: authHeader(),
      });

      console.log(response);

      return response.data;
    } catch (error: AxiosError | any) {
      console.log(error);

      if (error.response.status === 401) {
        // localStorage.removeItem("token");
        console.log(error);
        console.log(error.response.status);
        return undefined;
      }
    }
  }
}

export const UserApiServiceInstance = new UserApiService();
