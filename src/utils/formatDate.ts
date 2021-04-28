import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DateFormat } from '../enums';

export const formateDate = (date: Date): string =>
  format(date, DateFormat.ddMMMyyyy, {
    locale: ptBR,
  });
