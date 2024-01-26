'use client'

import { useState } from 'react'
import { DatePicker } from './_components/DatePicker'
import InputBase from './_components/inputBase'
import DatePicker2 from './_components/DatePicker2'

export default function Home() {
  const [selectedDay, setSelectedDate] = useState<Date>(new Date())
  return (
    <>
      <div className="flex w-full max-w-xs flex-col gap-1">
        <label htmlFor="numeric-1">Numeric 1</label>
        <InputBase
          id="numeric-1"
          type="number"
          inputMode="numeric"
          placeholder="Numeric 1"
        />
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <DatePicker
          selectedDay={selectedDay}
          onSelectedDate={setSelectedDate}
          label="Date 1"
        />
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <label>Date 2</label>
        <DatePicker2 />
      </div>
    </>
  )
}
