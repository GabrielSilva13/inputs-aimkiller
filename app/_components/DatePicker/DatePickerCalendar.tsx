import React, { useState } from 'react'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { DatePickerCalendarProps } from './DatePickerProps.types'
import { classNames } from '@/app/lib/utils'
import { CalendarIcon, CaretLeft, CaretRight } from '../svg/shared'

export const DatePickerCalendar = (props: DatePickerCalendarProps) => {
  const today = startOfToday()
  //   const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ]

  return (
    <section className="max-w-full rounded-lg p-2">
      <div className="flex items-center">
        <h2 className="flex w-full items-center gap-2 text-sm font-semibold">
          <CalendarIcon className="h-5 w-5" />
          {format(firstDayCurrentMonth, 'MMMM yyyy', {
            locale: props.locale,
          })}
        </h2>
        <button
          type="button"
          onClick={previousMonth}
          className="-my-1.5 flex flex-none items-center justify-center p-1.5"
        >
          <span className="sr-only">Mês anterior</span>
          <CaretLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          onClick={nextMonth}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5"
        >
          <span className="sr-only">Próximo mês</span>
          <CaretRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-10 grid grid-cols-7 border-b pb-2 text-center text-xs leading-6">
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sab</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-xs">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 ? colStartClasses[getDay(day)] || '' : '',
              'py-1.5',
            )}
          >
            <button
              type="button"
              onClick={() => props.onSelectedDate(day)}
              className={classNames(
                isEqual(day, props.selectedDay) ? 'text-white' : '',
                !isEqual(day, props.selectedDay) && isToday(day)
                  ? 'text-red-500'
                  : '',
                !isEqual(day, props.selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth)
                  ? 'text-gray-900'
                  : '',
                !isEqual(day, props.selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth)
                  ? 'text-red-200'
                  : '',
                isEqual(day, props.selectedDay) && isToday(day)
                  ? 'bg-gray-900'
                  : '',
                isEqual(day, props.selectedDay) && !isToday(day)
                  ? 'bg-gray-700'
                  : '',
                !isEqual(day, props.selectedDay) ? 'hover:bg-gray-900/50' : '',
                isEqual(day, props.selectedDay) || isToday(day)
                  ? 'font-semibold'
                  : '',
                'mx-auto flex h-8 w-8 items-center justify-center rounded-[14px]',
              )}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'd')}
              </time>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
