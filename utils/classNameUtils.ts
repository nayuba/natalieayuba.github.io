/**
 * Returns className prefixed with a space.
 */
export function appendClassName(className: string) {
  return className !== "" ? ` ${className}` : className
}