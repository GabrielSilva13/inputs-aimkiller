'use client'

import { useState } from 'react'
import { DatePicker } from './_components/DatePicker'
import InputBase from './_components/inputBase'
import DatePicker2 from './_components/DatePicker2'
import DatePicker3 from './_components/DatePicker3'
import { Button } from './_components/Button'

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [counter, setCounter] = useState<number | null>(null)
  const [secondCounter, setSecondCounter] = useState(0)

  return (
    <>
      <div className="flex w-full max-w-xs flex-col gap-1">
        <label htmlFor="numeric-1">Numeric 1</label>
        <InputBase
          id="numeric-1"
          type="number"
          inputMode="decimal"
          placeholder="Numeric 1"
        />
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <label htmlFor="numeric-2">Numeric 2</label>

        <div className="flex items-center gap-3">
          <Button
            className="text-lg font-normal"
            variant="outline"
            onClick={() =>
              setCounter((prevCounter) =>
                prevCounter !== null ? prevCounter - 1 : 0,
              )
            }
          >
            &#45;
          </Button>
          <InputBase
            id="numeric-2"
            type="number"
            inputMode="decimal"
            placeholder="Numeric 2"
            value={counter !== null ? counter : ''}
            onChange={(e) =>
              setCounter(e.target.value !== '' ? Number(e.target.value) : null)
            }
          />
          <Button
            className="text-lg font-normal"
            variant="outline"
            onClick={() =>
              setCounter((prevCounter) =>
                prevCounter !== null ? prevCounter + 1 : 0,
              )
            }
          >
            &#43;
          </Button>
        </div>
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <label htmlFor="numeric-2">Numeric 3</label>

        <div className="flex items-center gap-3">
          <Button
            className="text-lg font-normal"
            variant="outline"
            onClick={() => setSecondCounter((prevCounter) => prevCounter - 1)}
          >
            &#45;
          </Button>
          <InputBase
            id="numeric-3"
            type="number"
            inputMode="decimal"
            placeholder="Numeric 3"
            value={secondCounter}
          />
          <Button
            className="text-lg font-normal"
            variant="outline"
            onClick={() => setSecondCounter((prevCounter) => prevCounter + 1)}
          >
            &#43;
          </Button>
        </div>
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <DatePicker
          selectedDay={selectedDay}
          onSelectedDate={setSelectedDay}
          label="Date 1"
        />
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <label>Date 2</label>
        <DatePicker2 />
      </div>

      <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
        <label>Date 3</label>
        <DatePicker3
          selectedDay={selectedDate}
          setSelectedDay={setSelectedDate}
        />
      </div>
    </>
  )
}
