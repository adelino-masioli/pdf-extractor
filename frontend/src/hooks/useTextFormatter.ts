export const useTextFormatter = () => {
  const formatText = (text: string) => {
    return text
      .replace(/,([^\s])/g, ", $1")
      .replace(/\.([^\s])/g, ". $1")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      .replace(/–([^\s])/g, "– $1")
      .replace(/([a-zA-Z])'([a-zA-Z])/g, "$1' $2")
      .replace(/(\d+)([a-zA-Z])/g, "$1 $2")
      .replace(/\s+/g, " ")
      .trim();
  };

  return { formatText };
};
