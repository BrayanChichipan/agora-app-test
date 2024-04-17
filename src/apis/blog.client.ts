import { envars } from "@/config";
import axios from "axios";

export const blogClient = axios.create({
  baseURL: `${envars.AGORA_API}/api/v1/posts`,
  headers: {
    "Content-Type": "application/json",
  },
});
