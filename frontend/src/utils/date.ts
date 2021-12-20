import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

export const toDateBr = (date: Date) => {
  const parsedTime = parseISO(date.toString());
  const formattedDate = format(parsedTime, "dd/MM/yyyy", { locale: pt });

  return formattedDate;
};

export const toDate = (date: Date) => {
  const parsedTime = parseISO(date.toString());

  const formattedDate = format(parsedTime, "yyyy-MM-dd", { locale: pt });

  return formattedDate;
};
