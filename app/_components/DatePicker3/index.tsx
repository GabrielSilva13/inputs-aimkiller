import DatePicker, { registerLocale } from 'react-datepicker'

import pt from 'date-fns/locale/pt-BR'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pt-BR', pt)

type Props = {
  selectedDay: Date
  setSelectedDay: (date: Date) => void
}

const DatePicker3 = (props: Props) => {
  return (
    <DatePicker
      className="h-9 w-full rounded-md"
      selected={props.selectedDay}
      onChange={(date: Date) => props.setSelectedDay(date)}
      dateFormat="dd/MM/yyyy"
      locale={pt}
    />
  )
}

export default DatePicker3
