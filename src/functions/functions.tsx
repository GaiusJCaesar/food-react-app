import Moment from 'moment';

export function DateToNiceString(date: string) {
    Moment.locale('en')
    var dt = Moment(date).format('dddd Do MMMM')
    return dt
}

export function DateToString(date: string) {
    Moment.locale('en')
    var dt = Moment(date).format('YYYY-MM-DD')
    return dt
}
