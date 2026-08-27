import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { NavCtas } from './components/NavCtas'

const SITE_DESCRIPTION = 'Buckshot RP wiki — rules and city pages.'

function useHead() {
  const { asPath } = useRouter()
  const { frontMatter, title } = useConfig()
  const url = `https://buckshot-rp.github.io${asPath}`
  const description = (frontMatter.description as string | undefined) || SITE_DESCRIPTION
  const pageTitle = title ? `${title} | Buckshot` : 'Buckshot'

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/wiki/logo.png" type="image/png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#1c1917" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

const config: DocsThemeConfig = {
  logo: (
    <span className="site-logo">
      <img
        src="/wiki/logo.png"
        alt=""
        width={48}
        height={48}
        decoding="async"
      />
      <span className="site-logo-word">Buckshot</span>
    </span>
  ),
  navbar: {
    extraContent: NavCtas,
  },
  docsRepositoryBase: 'https://github.com/Buckshot-Rp/wiki/tree/main',
  feedback: {
    content: null,
  },
  editLink: {
    content: null,
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} © Buckshot RP
      </span>
    ),
  },
  head: useHead,
  color: {
    hue: 22,
    saturation: 70,
    lightness: {
      dark: 62,
      light: 42,
    },
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    title: 'On this page',
  },
  search: {
    placeholder: 'Search',
  },
}

export default config
