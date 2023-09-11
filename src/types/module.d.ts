// declare module "*.module.scss";
declare module "*.svg";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
