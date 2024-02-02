'use client'

import React, { useState } from 'react'
import { Button } from '../Button'
import Input from '../Input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '../Select'

const Numeric3 = (props: { title: string }) => {
  const [secondCounter, setSecondCounter] = useState(0)
  const [step, setStep] = useState(0.1)

  const handleIncrease = () => {
    setSecondCounter((prevCounter) =>
      parseFloat((prevCounter + step).toFixed(2)),
    )
  }

  const handleDecrease = () => {
    setSecondCounter((prevCounter) =>
      parseFloat((prevCounter - step).toFixed(2)),
    )
  }

  const handleStepChange = (newStep: number) => {
    setStep(newStep)
  }

  return (
    <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-1">
      <label className="font-semibold" htmlFor="numeric-3">
        {props.title}
      </label>
      <div className="flex items-center gap-3">
        <Button
          className="text-lg font-normal"
          variant="outline"
          onClick={handleDecrease}
        >
          &#45;
        </Button>
        <Input
          className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          id="numeric-3"
          type="number"
          inputMode="decimal"
          placeholder="Numeric 3"
          value={secondCounter}
        />
        <Button
          className="text-lg font-normal"
          variant="outline"
          onClick={handleIncrease}
        >
          &#43;
        </Button>
      </div>

      <Select
        value={step.toString()}
        onValueChange={(value) => handleStepChange(Number(value))}
      >
        <SelectTrigger className="ml-auto mt-3 w-full max-w-24">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Opção de Aumento</SelectLabel>
            <SelectItem value="0.1">0.1</SelectItem>
            <SelectItem value="0.5">0.5</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Numeric3
