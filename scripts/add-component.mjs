import fs from "fs";
import _ from "lodash";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your component name: ", (componentName) => {
  const componentsDir = path.join("src", "components");
  const stylesDir = path.join("src", "styles", "components");

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  if (!fs.existsSync(stylesDir)) {
    fs.mkdirSync(stylesDir, { recursive: true });
  }

  const componentFile = path.join(componentsDir, `${componentName}.tsx`);
  const stylesFile = path.join(stylesDir, `${componentName}.module.scss`);

  const indexContent = `import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "styles/components/${componentName}.module.scss";

export const ${componentName} = observer((): ReactElement => {
  return (
    <div className={styles.${_.snakeCase(componentName)}_area}>
      <div>...</div>
    </div>
  );
});
`;

  fs.writeFileSync(componentFile, indexContent);

  const stylesContent = `.${_.snakeCase(componentName)}_area {
  background-color: #f00;
  height: 500px;
  width: 500px;
}
`;
  fs.writeFileSync(stylesFile, stylesContent);

  console.log(
    `React component '${componentName}' created in '${componentFile}' and styles in '${stylesFile}'.`,
  );

  rl.close();
});
