#!/bin/bash

read -p "Your componente name: " component_name

if [ ! -d "src/components" ]; then
  mkdir -p src/components
fi

component_dir="src/components/$component_name"
mkdir -p "$component_dir"

echo "import { observer } from \"mobx-react-lite\";
import type { ReactElement } from \"react\";
import styles from \"./styles.module.scss\";

export const $component_name = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div>...</div>
    </div>
  );
});" > "$component_dir/index.tsx"

echo "@use \"../../styles\" as *;

.container {
  background-color: red;
}" > "$component_dir/styles.module.scss"

echo "React component '$component_name' created in '$component_dir'."
