import pluginJs from "@eslint/js";
import importHelpers from "eslint-plugin-import-helpers";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    plugins: {
      "import-helpers": importHelpers,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-mutating-props": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-unused-vars": "off",
      "no-var": "error",
      "no-duplicate-imports": "error",
      eqeqeq: ["error", "always"],
      "import-helpers/order-imports": [
        "warn",
        {
          // example configuration
          newlinesBetween: "always",
          groups: [
            "module",
            ["/^~/types/"],
            ["/^~/assets/", "/^~/theme/"],
            ["/^~/router/", "/^~/pages/"],
            ["/^~/containers/", "/^~/intl/"],
            ["/^~/services/", "/^~/hooks/", "/^~/helpers/"],
            "/^~/store/",
            "/^~/components/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
      "vue/attributes-order": [
        "warn",
        {
          order: [
            "DEFINITION", // is, v-is
            "LIST_RENDERING", // v-for
            "CONDITIONALS", // v-if, v-else-if, v-else, v-show
            "RENDER_MODIFIERS", // v-once, v-pre
            "GLOBAL", // id
            ["UNIQUE", "SLOT"], // ref, key, slot
            "TWO_WAY_BINDING", // v-model
            "OTHER_DIRECTIVES",
            "OTHER_ATTR", // props normais
            "EVENTS", // @click etc
            "CONTENT", // v-text, v-html
          ],
          alphabetical: true, // 👈 ordena dentro dos grupos
        },
      ],
    },
  },
];
