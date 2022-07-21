import { request } from "../request"

export const create_user = (body: any) => {
  return request("/users", {
    method: "POST",
    body
  });
}