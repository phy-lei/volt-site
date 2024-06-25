// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable stylistic formatting rules
  // stylistic: true,
  solid: true,
  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    'astro.config.mjs',
  ],
})
