declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "@karmaniverous/serify-deserify";
