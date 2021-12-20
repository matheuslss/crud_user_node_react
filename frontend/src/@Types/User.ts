import { UploadedImage } from "./UploadedImage";

export type User = {
  id?: string;
  name: string;
  birth_date: Date;
  birth_date_string?: string;
  code?: number;
  url_img?: string;
  image: File;
};
