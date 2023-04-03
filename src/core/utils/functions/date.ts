import dayjs from 'dayjs'

// locales
import 'dayjs/locale/en'
import 'dayjs/locale/fr'

export const getAllIntermediateDates = (startDate: Date, endDate: Date) => {

    const dates = []
    const currentDate = new Date(startDate)

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return dates
}


// TODO: define proper locale object/enum and corresponding type
export const getLocalizedCurrentDay = (date: string, locale: string) => {
    return dayjs(date).locale(locale).format('dddd')
}

export const getFormatedDate = (date: string) => {
    return dayjs(date).format('DD/MM/YYYY')
}

export const isToday = (date: string) => {
    return dayjs(date).isSame(dayjs(), 'day')
}

export const getToday = () => {
    return dayjs().format('YYYY-MM-DD')
}