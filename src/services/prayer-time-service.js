import moment from 'moment';
import { toHijri, toGregorian } from 'hijri-converter';
import { hijriMonths, gregorianMonths, gregorianDays } from '../resources/data/date';
import times from '../resources/data/time';

const getStartDateOfWeek = () => {
    let today = moment(new Date());
    const startDateOfWeek = today.startOf('week').add(1, 'days');
    today = moment(new Date()); // to fix today again
    return {
        day: startDateOfWeek,
        margin: today.diff(startDateOfWeek, 'days')
    }
}

const generateResponseArray = (startDate = moment(new Date()), dayCount = 1) => {
    return Array(dayCount).fill().map((_, i) => {
        const new_date = startDate.add(i, 'days');
        let weekDay = new_date.day();
        weekDay = weekDay === 0 ? 7 : weekDay;
        const day = parseInt(new_date.format('D'));
        const dayLong = new_date.format('DD');
        const month = parseInt(new_date.format('M'));
        const monthLong = new_date.format('MM');
        const year = parseInt(new_date.format('YYYY'));
        const hijriDate = toHijri(year, month, day);
        startDate.add(-1 * i, 'days'); // to fix startDate again
        const prayerTime = times[i % times.length];
        return {
            shapeMoonUrl: "http://namazvakti.diyanet.gov.tr/images/r5.gif",
            fajr: prayerTime.fajr,
            sunrise: prayerTime.sunrise,
            dhuhr: prayerTime.dhuhr,
            asr: prayerTime.asr,
            maghrib: prayerTime.maghrib,
            isha: prayerTime.isha,
            astronomicalSunset: prayerTime.astronomicalSunset,
            astronomicalSunrise: prayerTime.astronomicalSunrise,
            hijriDateShort: hijriDate.hd + '.' + hijriDate.hm + '.' + hijriDate.hy,
            hijriDateShortIso8601: null,
            hijriDateLong: hijriDate.hd + ' ' + hijriMonths[hijriDate.hm - 1] + ' ' + hijriDate.hy,
            hijriDateLongIso8601: null,
            qiblaTime: "11:31",
            gregorianDateShort: dayLong + '.' + monthLong + '.' + year,
            gregorianDateShortIso8601: dayLong + '.' + monthLong + '.' + year,
            gregorianDateLong: day + ' ' + gregorianMonths[month - 1] + ' ' + year + ' ' + gregorianDays[weekDay - 1],
            gregorianDateLongIso8601: year + '-' + monthLong + '-' + dayLong + 'T00:00:00.0000000+03:00',
            greenwichMeanTimeZone: 3
        }
    });
}

const generateEidTime = () => {
    const new_date = moment(new Date(), "YYYY-MM-DD").add(15, 'days');
    let weekDay = new_date.day();
    weekDay = weekDay === 0 ? 7 : weekDay;
    const day = parseInt(new_date.format('D'));
    const month = parseInt(new_date.format('M'));
    const year = parseInt(new_date.format('YYYY'));
    const hijriDate = toHijri(year, month, day);
    return {
        eidAlAdhaHijri: hijriDate.hd + ' ' + hijriMonths[hijriDate.hm - 1] + ' ' + hijriDate.hy,
        eidAlAdhaTime: "05:54:00",
        eidAlAdhaDate: day + ' ' + gregorianMonths[month - 1] + ' ' + year + ' ' + gregorianDays[weekDay - 1],
        eidAlFitrHijri: hijriDate.hd + ' ' + hijriMonths[hijriDate.hm - 1] + ' ' + hijriDate.hy,
        eidAlFitrTime: "05:54:00",
        eidAlFitrDate: day + ' ' + gregorianMonths[month - 1] + ' ' + year + ' ' + gregorianDays[weekDay - 1]
    };
}

const generateRamadan = () => {
    const today = moment(new Date());
    const day = parseInt(today.format('D'));
    const month = parseInt(today.format('M'));
    const year = parseInt(today.format('YYYY'));
    const hijriDate = toHijri(year, month, day);
    const ramadanMonthNumber = 9;
    const ramadan1stDayGregorian = toGregorian(hijriDate.hy, ramadanMonthNumber, 1);
    const ramadan1stDay = moment(new Date(`${ramadan1stDayGregorian.gy}-${ramadan1stDayGregorian.gm}-${ramadan1stDayGregorian.gd}`));
    const dayCount = 30;
    return Array(dayCount).fill().map((_, i) => {
        const new_date = ramadan1stDay.add(i, 'days');
        let weekDay = new_date.day();
        weekDay = weekDay === 0 ? 7 : weekDay;
        const day = parseInt(new_date.format('D'));
        const dayLong = new_date.format('DD');
        const month = parseInt(new_date.format('M'));
        const monthLong = new_date.format('MM');
        const year = parseInt(new_date.format('YYYY'));
        const hijriDate = toHijri(year, month, day);
        ramadan1stDay.add(-1 * i, 'days'); // to fix startDate again
        const prayerTime = times[i % times.length];
        return {
            shapeMoonUrl: "http://namazvakti.diyanet.gov.tr/images/r5.gif",
            fajr: prayerTime.fajr,
            sunrise: prayerTime.sunrise,
            dhuhr: prayerTime.dhuhr,
            asr: prayerTime.asr,
            maghrib: prayerTime.maghrib,
            isha: prayerTime.isha,
            astronomicalSunset: prayerTime.astronomicalSunset,
            astronomicalSunrise: prayerTime.astronomicalSunrise,
            hijriDateShort: hijriDate.hd + '.' + hijriDate.hm + '.' + hijriDate.hy,
            hijriDateShortIso8601: null,
            hijriDateLong: hijriDate.hd + ' ' + hijriMonths[hijriDate.hm - 1] + ' ' + hijriDate.hy,
            hijriDateLongIso8601: null,
            qiblaTime: "11:31",
            gregorianDateShort: dayLong + '.' + monthLong + '.' + year,
            gregorianDateShortIso8601: null,
            gregorianDateLong: day + ' ' + gregorianMonths[month - 1] + ' ' + year + ' ' + gregorianDays[weekDay - 1],
            gregorianDateLongIso8601: null,
            greenwichMeanTimeZone: 3
        }
    });

}

export default {
    getStartDateOfWeek,
    generateResponseArray,
    generateEidTime,
    generateRamadan
}