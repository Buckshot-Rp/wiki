import Link from 'next/link'
import { IconBrandDiscord, IconMessageCircle, IconScale } from '@tabler/icons-react'

export function IntroHero() {
  return (
    <div className="intro-hero">
      <img
        className="intro-hero-logo"
        src="/wiki/logo.png"
        alt=""
        width={128}
        height={128}
        decoding="async"
      />
      <div className="intro-hero-actions">
        <Link className="intro-action intro-action-rules" href="/rules">
          <IconScale size={18} stroke={1.5} aria-hidden />
          Read the rules
        </Link>
        <a
          className="intro-action intro-action-discord"
          href="https://discord.gg/ar8HMrtecn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandDiscord size={18} stroke={1.5} aria-hidden />
          Discord
          <span className="sr-only">Opens in a new tab</span>
        </a>
        <Link className="intro-action intro-action-feedback" href="/rules/feedback">
          <IconMessageCircle size={18} stroke={1.5} aria-hidden />
          Give feedback
        </Link>
      </div>
    </div>
  )
}
