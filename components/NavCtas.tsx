import { IconBrandDiscord } from '@tabler/icons-react'

export function NavCtas() {
  return (
    <div className="nav-ctas">
      <a
        className="nav-cta nav-cta-discord"
        href="https://discord.gg/ar8HMrtecn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandDiscord size={16} stroke={1.5} aria-hidden />
        <span className="nav-cta-label-full">Buckshot Discord</span>
        <span className="nav-cta-label-short">Discord</span>
        <span className="sr-only">Opens in a new tab</span>
      </a>
    </div>
  )
}
