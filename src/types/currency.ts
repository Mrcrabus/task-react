export interface CurrencyData {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: {
    [key: string]: Valute;
  };
}

interface Valute {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export enum CurrencyCode {
  AUD = "AUD",
  AZN = "AZN",
  GBP = "GBP",
  AMD = "AMD",
  BYN = "BYN",
  BGN = "BGN",
  BRL = "BRL",
  HUF = "HUF",
  VND = "VND",
  HKD = "HKD",
  GEL = "GEL",
  DKK = "DKK",
  AED = "AED",
  USD = "USD",
  EUR = "EUR",
  EGP = "EGP",
  INR = "INR",
  IDR = "IDR",
  KZT = "KZT",
  CAD = "CAD",
}