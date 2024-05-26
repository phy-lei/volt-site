import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      cdn: 'https://esm.sh/',
    }),
    presetTypography({
      cssExtend: {
        'ul,ol': {
          'padding-left': '2.25em',
          'position': 'relative',
        },
        'screens': {
          '2xl': '1360px',
        },
      },
    }),
  ],
  theme: {
    breakpoints: {
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: [{}],
})
