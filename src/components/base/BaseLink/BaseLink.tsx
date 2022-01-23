import clsx from 'clsx'
import NextLink from 'next/link'
import type { BaseLinkProps } from './type'

export const BaseLink = ({ href, children }: BaseLinkProps) => {
  return (
    <NextLink href={href}>
      <a
        className={clsx(
          'tw-underline hover:tw-text-indigo-900',
          'tw-transition-colors tw-duration-150'
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
