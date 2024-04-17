import { PostType } from "@/types";

export const BLOG_TYPES: { label: string; value: PostType | undefined }[] = [
  {
    label: "Blog",
    value: PostType.BLOG,
  },
  {
    label: "Convocatoria abierta",
    value: PostType.ANNOUNCEMENT,
  },
  {
    label: "Oportunidad Laboral",
    value: PostType.OPORTUNITY,
  },
  {
    label: "Programa",
    value: PostType.PROGRAM,
  },
  {
    label: "Programa en ejecución",
    value: PostType.OPEN_PROGRAM,
  },
  {
    label: "Programas ejecutados",
    value: PostType.PROGRAM_DONE,
  },
  {
    label: "Sala de Prensa",
    value: PostType.EVENT,
  },
  {
    label: "Todos",
    value: undefined,
  },
];
