import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
   {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // disable completely
      // or "warn" if you still want to see warnings instead of errors
      // "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
