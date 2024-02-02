'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { format } from 'date-fns'
import { pt, enUS, es, enGB } from 'date-fns/locale'
import { DatePickerProps } from './DatePickerProps.types'
import { DatePickerCalendar } from './DatePickerCalendar'
import { CaretDown } from '../svg/shared'

export const DatePicker = (props: DatePickerProps) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date())

  const handleLocale = (locale: string) => {
    switch (locale) {
      case 'pt':
        return pt
      case 'enUS':
        return enUS
      case 'es':
        return es
      case 'enGB':
        return enGB
      default:
        return pt
    }
  }

  const locale = handleLocale(props.locale ?? 'pt')

  return (
    <div>
      {props.label && (
        <label className="mb-1 block text-base">{props.label}</label>
      )}
      <Menu as="div" className="relative w-full text-left">
        <div>
          <Menu.Button className="flex h-[31px] w-full items-center justify-between gap-3 rounded-lg border border-[#D1D5E1] p-2 text-sm focus:outline-none focus:ring">
            {format(selectedDay, 'dd/MM/yyyy', {
              locale,
            })}
            <CaretDown className="h-5 w-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-[300px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none">
            <div className="flex flex-col gap-3 p-2">
              <Menu.Item>
                <DatePickerCalendar
                  onSelectedDate={setSelectedDay}
                  selectedDay={selectedDay}
                  locale={locale}
                />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
