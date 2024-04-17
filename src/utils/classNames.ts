type ClassDictionary = {
  [className: string]: boolean | undefined;
};

export function classNames(classes: ClassDictionary): string {
  return Object.entries(classes)
    .filter(([, condition]) => !!condition)
    .map(([className]) => className)
    .join(" ");
}
