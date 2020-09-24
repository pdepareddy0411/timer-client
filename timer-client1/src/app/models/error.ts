export class ErrorType {
  error: Error;
}

export class Error {
  code: string;
  message: string;
  name: string;
  errno: number;
  index: number;
  parameters: string[];
  query: string;
  sql: string;
  sqlMessage: string;
  sqlState: string;
}
