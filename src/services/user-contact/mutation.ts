import { contactClient } from "@/apis/user-contact.client";

interface UserContactInput {
  name: string;
  lastName: string;
  email: string;
  profession: string;
  company: string;
  country: string;
}

export const createUserContact = async (data: UserContactInput) => {
  const res = await contactClient.post("/", data);
  return res.data;
};
