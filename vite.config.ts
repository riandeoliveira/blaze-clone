import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [generouted(), react(), svgr(), tsconfigPaths()],
});
