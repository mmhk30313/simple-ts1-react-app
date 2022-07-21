import { request } from "../request"

export const get_users = (page: number) => {
  return request("/users?page="+page);
}