'use client'

import { useState } from 'react'

import { customNumberMask } from '@/app/lib/masks'

import Input from '../Input'

const Numeric1 = (props: { title: string }) => {
  const [number, setNumber] = useState('')
  return (
    <div className="mx-auto mt-7 flex w-full max-w-sm flex-col gap-1">
      <label className="font-semibold" htmlFor="numeric-1">
        {props.title}
      </label>
      <Input
        id="numeric-1"
        type="text"
        inputMode="decimal"
        placeholder="Numeric 1"
        value={customNumberMask(number)}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  )
}

export default Numeric1
