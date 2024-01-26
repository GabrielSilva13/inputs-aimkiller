import React from 'react'
import { classNames } from '../lib/utils'
type Props = React.InputHTMLAttributes<HTMLInputElement>

const inputBase = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classNames(
          'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors [appearance:textfield] file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          className ?? '',
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
inputBase.displayName = 'Input'

export default inputBase
