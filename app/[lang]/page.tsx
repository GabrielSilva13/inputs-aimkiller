import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getDictionary } from './dictionaries'
import Numeric1 from '../_components/InputNumeric/numeric1'
import Numeric2 from '../_components/InputNumeric/numeric2'
import Numeric3 from '../_components/InputNumeric/numeric3'
import { DatePicker } from '../_components/DatePicker'

const Page = async ({ params: { lang } }: Params) => {
  const dict = await getDictionary(lang)

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <strong className="block text-center text-2xl uppercase">
          {dict.inputNumber}
        </strong>

        <div className="flex w-full flex-wrap items-baseline justify-center gap-5">
          <Numeric1 title={dict.numeric1Title} />
          <Numeric2
            title={dict.numeric2Title}
            formulaLabel={dict.Formula}
            fractionalLabel={dict.Fractional}
            integersLabel={dict.Integers}
          />
          <Numeric3 title={dict.numeric3Title} />
        </div>

        <div className="mt-10 flex w-full flex-col items-center">
          <strong className="block text-center text-2xl uppercase">
            {dict.inputDate}
          </strong>

          <div className="flex w-full flex-wrap items-baseline justify-center gap-5">
            <div className="mt-5 flex w-full max-w-xs flex-col gap-1">
              <DatePicker
                label={dict.dateTitle1}
                locale={lang}
                weekDays={dict.WeekDays}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 
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
      </div> */}
    </>
  )
}

export default Page
