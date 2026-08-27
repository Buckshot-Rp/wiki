import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: false,
  readingTime: false,
  defaultShowCopyCode: true,
  search: { codeblocks: false },
})

export default withNextra({
  output: 'export',
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  basePath: '/wiki',
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 40,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wiki',
        permanent: false,
        basePath: false,
      },
    ]
  },
})
