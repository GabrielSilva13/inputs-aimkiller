import { Locale } from 'date-fns'

export type DatePickerProps = {
  selectedDay?: Date
  onSelectedDate?: (date: Date) => void
  label?: string
  locale?: string
  format?: string
}

export type DatePickerCalendarProps = {
  selectedDay: Date
  onSelectedDate: (date: Date) => void
  locale?: Locale
}
