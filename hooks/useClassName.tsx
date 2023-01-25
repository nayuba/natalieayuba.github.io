const useClassName = () => {
  const ifClassNameExists = (className: string | undefined) => {
    return ` ${className}` ?? "";
  }
  return { ifClassNameExists };
};

export default useClassName;
