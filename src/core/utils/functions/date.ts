import dayjs from 'dayjs'

// locales
import 'dayjs/locale/en'
import 'dayjs/locale/fr'

export const getAllIntermediateDates = (startDate: string, endDate: string): string[] => {

    const dates = []
    let currentDate = getToday()

    while (currentDate <= endDate) {
        dates.push(currentDate)
        currentDate = dayjs(currentDate).add(1, 'day').format('YYYY-MM-DD')
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