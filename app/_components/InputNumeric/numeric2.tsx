'use client'

import { useState } from 'react'

import { customNumberMaskWithFractions } from '@/app/lib/masks'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '../Select'

import Input from '../Input'

const Numeric2 = (props: {
  title: string
  formulaLabel: string
  integersLabel: string
  fractionalLabel: string
}) => {
  const [selectedFormula, setSelectedFormula] = useState('inteiros')
  const [counter, setCounter] = useState('')
  return (
    <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-1 ">
      <label className="font-semibold" htmlFor="numeric-2">
        {props.title}
      </label>

      <div className="flex items-center gap-3">
        <Input
          id="numeric-2"
          type="text"
          placeholder="Numeric 2"
          value={customNumberMaskWithFractions(counter, selectedFormula)}
          onChange={(e) => setCounter(e.target.value)}
        />
        <Select
          value={selectedFormula}
          onValueChange={(e) => setSelectedFormula(e)}
        >
          <SelectTrigger className="w-full max-w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{props.formulaLabel}</SelectLabel>
              <SelectItem value="inteiros">{props.integersLabel}</SelectItem>
              <SelectItem value="fracionários">
                {props.fractionalLabel}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Numeric2
