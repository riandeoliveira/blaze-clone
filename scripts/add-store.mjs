import fs from "fs";
import _ from "lodash";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your store name: ", (storeName) => {
  const storesDir = path.join("src", "stores");

  if (!fs.existsSync(storesDir)) {
    fs.mkdirSync(storesDir, { recursive: true });
  }

  const camelCaseStoreName = _.camelCase(storeName).replace(/ /g, "");
  const kebabCaseStoreName = _.kebabCase(storeName).replace(/ /g, "");
  const startCaseStoreName = _.startCase(storeName).replace(/ /g, "");

  const storeFile = path.join(storesDir, `${kebabCaseStoreName}.store.ts`);

  const storeContent = `import { makeAutoObservable } from "mobx";

export class ${startCaseStoreName}Store {
  public constructor() {
    makeAutoObservable(this);
  }
}

export const ${camelCaseStoreName}Store = new ${startCaseStoreName}Store();
`;

  fs.writeFileSync(storeFile, storeContent);

  console.log(`Mobx store '${startCaseStoreName}' created in '${storeFile}'.`);

  rl.close();
});
