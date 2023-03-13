/**
 * Returns className prefixed with a space.
 */
export function appendClassName(className: string | undefined) {
  return className ? ` ${className}` : "";
}
