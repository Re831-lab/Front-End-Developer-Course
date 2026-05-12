import js from "@eslint/js";
export default [
  js.configs.recommended,
  {
    rules: {
      // Disallow var  
      "no-var": "error",
      // Disallow unused variables
      "no-unused-vars": "error",
      // Require semicolons
      semi: ["error", "always"],
      // Require const when variable is never reassigned
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
    },
  },
];