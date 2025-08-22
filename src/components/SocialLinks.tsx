
import { SocialLink } from '@/components/SocialLink'

import {
  GitHubIcon,
  LinkedInIcon,
  QiitaIcon,
  DevIcon
} from '@/components/SocialIcons'

export function SocialLinks() {
    return (
        <>
        <SocialLink
              href="https://github.com/PeterTakahashi"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/seiya-takahashi-ee/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://qiita.com/seiyatakahashi"
              aria-label="Follow on Qiita"
              icon={QiitaIcon}
            />
            <SocialLink
              href="https://dev.to/seiyatakahashi"
              aria-label="Follow on Dev"
              icon={DevIcon}
            />
        </>
    )
}