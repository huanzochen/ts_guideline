import { ReactNode } from "react";

enum ErrorType {
  FileNotFound = "FileNotFound",
  OptionMissing = "OptionMissing",
  Unauthorized = "Unauthorized",
}

function getErrorImage(error: ErrorType): ReactNode {
  switch (error) {
    case ErrorType.FileNotFound:
      return <img src="file_not_found.png" alt="File Not Found" />;
    case ErrorType.OptionMissing:
      return <img src="option_missing.png" alt="Option Missing" />;
    default:
      // Exhaustiveness check
      // Type 'ErrorType.Unauthorized' is not assignable to type 'never'.
      const _exhaustiveCheck: never = error;
      return _exhaustiveCheck;
  }
}
