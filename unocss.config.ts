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
      // cdn: 'https://esm.sh/',
    }),
    presetTypography({
      cssExtend: {
        input: {
          outline: 'none',
        },
        screens: {
          '2xl': '1360px',
        },
      },
    }),
  ],
  theme: {
    breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxl': '1536px',
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: [
    {
      'bg-accent': 'bg-[hsl(var(--accent))]',
      'text-accent-foreground': 'text-[hsl(var(--accent-foreground))]',
      'nav-link': 'flex h-10 w-max items-center justify-center gap-4 rounded-full px-4 py-2 transition-colors hover:bg-accent/.2 focus:bg-accent/.2 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/.2 data-[state=open]:bg-accent/.2',
      'fade-trigger': 'transition-property-[transform,opacity] transition-duration-500 translate-y-[50px] opacity-0',
      'text-theme': 'color-[var(--main-color)]',
      'location-center': 'top-50% left-50% translate-x--50% translate-y--50%',
      'absolute-center': 'absolute left-0 right-0 top-0 bottom-0',
    },
    [/^bg-accent\/(.*)$/, ([, c]) => `bg-[hsl(var(--accent)/${c})]`],
  ],
})
