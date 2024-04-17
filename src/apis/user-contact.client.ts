import { envars } from "@/config";
import axios from "axios";

export const contactClient = axios.create({
  baseURL: `${envars.AGORA_API}/api/v1/user-contact`,
  headers: {
    "Content-Type": "application/json",
  },
});
