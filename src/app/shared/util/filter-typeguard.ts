export function isNotNullUndefinedOrEmpty<T>(input: null | undefined | string | T[]): input is string {
  if (Array.isArray(input)) {
    return input.length > 0;
  }
  return input !== null && input !== '';
}

export function isNotNullOrUndefined<T>(input: null | undefined | T): input is T {
  return input !== null && input !== undefined;
}

export function isNullOrUndefined<T>(input: null | undefined | T): boolean {
  return input == null;
}
