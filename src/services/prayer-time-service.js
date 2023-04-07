import moment from 'moment';
import { toHijri } from 'hijri-converter';
import { hijriMonths, gregorianMonths, gregorianDays } from '../resources/data/date';

const generateResponseArray = (dayCount) => {
    return Array(dayCount).fill().map((_, i) => {
        const new_date = moment(new Date(), "YYYY-MM-DD").add(i, 'days');
        let weekDay = new_date.day();
        weekDay = weekDay === 0 ? 7 : weekDay;
        const day = parseInt(new_date.format('D'));
        const dayLong = new_date.format('DD');
        const month = parseInt(new_date.format('M'));
        const monthLong = new_date.format('MM');
        const year = parseInt(new_date.format('YYYY'));
        const hijriDate = toHijri(year, month, day);
        
        return {
            shapeMoonUrl: "http://namazvakti.diyanet.gov.tr/images/r5.gif",
            fajr: "06:11",
            sunrise: "07:42",
            dhuhr: "12:38",
            asr: "15:01",
            maghrib: "17:23",
            isha: "18:49",
            astronomicalSunset: "17:16",
            astronomicalSunrise: "07:49",
            hijriDateShort: hijriDate.hd + '.' + hijriDate.hm + '.' + hijriDate.hy,
            hijriDateShortIso8601: null,
            hijriDateLong: hijriDate.hd + ' ' + hijriMonths[hijriDate.hm-1] + ' ' + hijriDate.hy,
            hijriDateLongIso8601: null,
            qiblaTime: "11:31",
            gregorianDateShort: day + '.' + month + '.' + year,
            gregorianDateShortIso8601: dayLong + '.' + monthLong + '.' + year,
            gregorianDateLong: day + ' ' + gregorianMonths[month-1] + ' ' + year + ' ' + gregorianDays[weekDay - 1],
            gregorianDateLongIso8601: year + '-' + monthLong + '-' + dayLong + 'T00:00:00.0000000+03:00'
        }
    });
}

export default {
    generateResponseArray
}