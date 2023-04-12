const times = [
    {
        fajr: "06:10",
        sunrise: "07:40",
        dhuhr: "12:30",
        asr: "15:00",
        maghrib: "17:20",
        isha: "18:40",
        astronomicalSunset: "17:10",
        astronomicalSunrise: "07:40"
    },
    {
        fajr: "06:11",
        sunrise: "07:41",
        dhuhr: "12:31",
        asr: "15:01",
        maghrib: "17:21",
        isha: "18:41",
        astronomicalSunset: "17:11",
        astronomicalSunrise: "07:41"
    },
    {
        fajr: "06:12",
        sunrise: "07:42",
        dhuhr: "12:32",
        asr: "15:02",
        maghrib: "17:22",
        isha: "18:42",
        astronomicalSunset: "17:12",
        astronomicalSunrise: "07:42"
    },
    {
        fajr: "06:13",
        sunrise: "07:43",
        dhuhr: "12:33",
        asr: "15:03",
        maghrib: "17:23",
        isha: "18:43",
        astronomicalSunset: "17:13",
        astronomicalSunrise: "07:43"
    },
    {
        fajr: "06:14",
        sunrise: "07:44",
        dhuhr: "12:34",
        asr: "15:04",
        maghrib: "17:24",
        isha: "18:44",
        astronomicalSunset: "17:14",
        astronomicalSunrise: "07:44"
    },
    {
        fajr: "06:15",
        sunrise: "07:45",
        dhuhr: "12:35",
        asr: "15:05",
        maghrib: "17:25",
        isha: "18:45",
        astronomicalSunset: "17:15",
        astronomicalSunrise: "07:45"
    },
    {
        fajr: "06:16",
        sunrise: "07:46",
        dhuhr: "12:36",
        asr: "15:06",
        maghrib: "17:26",
        isha: "18:46",
        astronomicalSunset: "17:16",
        astronomicalSunrise: "07:46"
    },
    {
        fajr: "06:17",
        sunrise: "07:47",
        dhuhr: "12:37",
        asr: "15:07",
        maghrib: "17:27",
        isha: "18:47",
        astronomicalSunset: "17:17",
        astronomicalSunrise: "07:47"
    },
    {
        fajr: "06:18",
        sunrise: "07:48",
        dhuhr: "12:38",
        asr: "15:08",
        maghrib: "17:28",
        isha: "18:48",
        astronomicalSunset: "17:18",
        astronomicalSunrise: "07:48"
    },
    {
        fajr: "06:19",
        sunrise: "07:49",
        dhuhr: "12:39",
        asr: "15:09",
        maghrib: "17:29",
        isha: "18:49",
        astronomicalSunset: "17:19",
        astronomicalSunrise: "07:49"
    },
    {
        fajr: "06:20",
        sunrise: "07:50",
        dhuhr: "12:40",
        asr: "15:10",
        maghrib: "17:30",
        isha: "18:50",
        astronomicalSunset: "17:20",
        astronomicalSunrise: "07:50"
    },
    {
        fajr: "06:21",
        sunrise: "07:51",
        dhuhr: "12:41",
        asr: "15:11",
        maghrib: "17:21",
        isha: "18:51",
        astronomicalSunset: "17:21",
        astronomicalSunrise: "07:51"
    },
    {
        fajr: "06:22",
        sunrise: "07:52",
        dhuhr: "12:42",
        asr: "15:12",
        maghrib: "17:22",
        isha: "18:52",
        astronomicalSunset: "17:22",
        astronomicalSunrise: "07:52"
    },
    {
        fajr: "06:23",
        sunrise: "07:53",
        dhuhr: "12:43",
        asr: "15:13",
        maghrib: "17:23",
        isha: "18:53",
        astronomicalSunset: "17:23",
        astronomicalSunrise: "07:53"
    },
    {
        fajr: "06:24",
        sunrise: "07:54",
        dhuhr: "12:44",
        asr: "15:14",
        maghrib: "17:24",
        isha: "18:54",
        astronomicalSunset: "17:24",
        astronomicalSunrise: "07:54"
    },
    {
        fajr: "06:25",
        sunrise: "07:55",
        dhuhr: "12:45",
        asr: "15:15",
        maghrib: "17:25",
        isha: "18:55",
        astronomicalSunset: "17:25",
        astronomicalSunrise: "07:55"
    },
    {
        fajr: "06:26",
        sunrise: "07:56",
        dhuhr: "12:46",
        asr: "15:16",
        maghrib: "17:26",
        isha: "18:56",
        astronomicalSunset: "17:26",
        astronomicalSunrise: "07:56"
    },
    {
        fajr: "06:27",
        sunrise: "07:57",
        dhuhr: "12:47",
        asr: "15:17",
        maghrib: "17:27",
        isha: "18:57",
        astronomicalSunset: "17:27",
        astronomicalSunrise: "07:57"
    },
    {
        fajr: "06:28",
        sunrise: "07:58",
        dhuhr: "12:48",
        asr: "15:18",
        maghrib: "17:28",
        isha: "18:58",
        astronomicalSunset: "17:28",
        astronomicalSunrise: "07:58"
    },
    {
        fajr: "06:29",
        sunrise: "07:59",
        dhuhr: "12:49",
        asr: "15:19",
        maghrib: "17:29",
        isha: "18:59",
        astronomicalSunset: "17:29",
        astronomicalSunrise: "07:59"
    },
    {
        fajr: "06:30",
        sunrise: "08:00",
        dhuhr: "12:50",
        asr: "15:20",
        maghrib: "17:30",
        isha: "19:00",
        astronomicalSunset: "17:30",
        astronomicalSunrise: "08:00"
    },
    {
        fajr: "06:31",
        sunrise: "08:01",
        dhuhr: "12:51",
        asr: "15:21",
        maghrib: "17:31",
        isha: "19:01",
        astronomicalSunset: "17:31",
        astronomicalSunrise: "08:01"
    },
    {
        fajr: "06:32",
        sunrise: "08:02",
        dhuhr: "12:52",
        asr: "15:22",
        maghrib: "17:32",
        isha: "19:02",
        astronomicalSunset: "17:32",
        astronomicalSunrise: "08:02"
    },
    {
        fajr: "06:33",
        sunrise: "08:03",
        dhuhr: "12:53",
        asr: "15:23",
        maghrib: "17:33",
        isha: "19:03",
        astronomicalSunset: "17:33",
        astronomicalSunrise: "08:03"
    },
    {
        fajr: "06:34",
        sunrise: "08:04",
        dhuhr: "12:54",
        asr: "15:24",
        maghrib: "17:34",
        isha: "19:04",
        astronomicalSunset: "17:34",
        astronomicalSunrise: "08:04"
    },
    {
        fajr: "06:35",
        sunrise: "08:05",
        dhuhr: "12:55",
        asr: "15:25",
        maghrib: "17:35",
        isha: "19:05",
        astronomicalSunset: "17:35",
        astronomicalSunrise: "08:05"
    },
    {
        fajr: "06:36",
        sunrise: "08:06",
        dhuhr: "12:56",
        asr: "15:26",
        maghrib: "17:36",
        isha: "19:06",
        astronomicalSunset: "17:36",
        astronomicalSunrise: "08:06"
    },
    {
        fajr: "06:37",
        sunrise: "08:07",
        dhuhr: "12:57",
        asr: "15:27",
        maghrib: "17:37",
        isha: "19:07",
        astronomicalSunset: "17:37",
        astronomicalSunrise: "08:07"
    },
    {
        fajr: "06:38",
        sunrise: "08:08",
        dhuhr: "12:58",
        asr: "15:28",
        maghrib: "17:38",
        isha: "19:08",
        astronomicalSunset: "17:38",
        astronomicalSunrise: "08:08"
    },
    {
        fajr: "06:39",
        sunrise: "08:09",
        dhuhr: "12:59",
        asr: "15:29",
        maghrib: "17:39",
        isha: "19:09",
        astronomicalSunset: "17:39",
        astronomicalSunrise: "08:09"
    },
    {
        fajr: "06:40",
        sunrise: "08:10",
        dhuhr: "13:00",
        asr: "15:30",
        maghrib: "17:40",
        isha: "19:10",
        astronomicalSunset: "17:40",
        astronomicalSunrise: "08:10"
    },
    {
        fajr: "06:41",
        sunrise: "08:11",
        dhuhr: "13:01",
        asr: "15:31",
        maghrib: "17:41",
        isha: "19:11",
        astronomicalSunset: "17:41",
        astronomicalSunrise: "08:11"
    },
    {
        fajr: "06:42",
        sunrise: "08:12",
        dhuhr: "13:02",
        asr: "15:32",
        maghrib: "17:42",
        isha: "19:12",
        astronomicalSunset: "17:42",
        astronomicalSunrise: "08:12"
    },
    {
        fajr: "06:43",
        sunrise: "08:13",
        dhuhr: "13:03",
        asr: "15:33",
        maghrib: "17:43",
        isha: "19:13",
        astronomicalSunset: "17:43",
        astronomicalSunrise: "08:13"
    },
    {
        fajr: "06:44",
        sunrise: "08:14",
        dhuhr: "13:04",
        asr: "15:34",
        maghrib: "17:44",
        isha: "19:14",
        astronomicalSunset: "17:44",
        astronomicalSunrise: "08:14"
    },
    {
        fajr: "06:45",
        sunrise: "08:15",
        dhuhr: "13:05",
        asr: "15:35",
        maghrib: "17:45",
        isha: "19:15",
        astronomicalSunset: "17:45",
        astronomicalSunrise: "08:15"
    },
    {
        fajr: "06:46",
        sunrise: "08:16",
        dhuhr: "13:06",
        asr: "15:36",
        maghrib: "17:46",
        isha: "19:16",
        astronomicalSunset: "17:46",
        astronomicalSunrise: "08:16"
    },
    {
        fajr: "06:47",
        sunrise: "08:17",
        dhuhr: "13:07",
        asr: "15:37",
        maghrib: "17:47",
        isha: "19:17",
        astronomicalSunset: "17:47",
        astronomicalSunrise: "08:17"
    },
    {
        fajr: "06:48",
        sunrise: "08:18",
        dhuhr: "13:08",
        asr: "15:38",
        maghrib: "17:48",
        isha: "19:18",
        astronomicalSunset: "17:48",
        astronomicalSunrise: "08:18"
    },
    {
        fajr: "06:49",
        sunrise: "08:19",
        dhuhr: "13:09",
        asr: "15:39",
        maghrib: "17:49",
        isha: "19:19",
        astronomicalSunset: "17:49",
        astronomicalSunrise: "08:19"
    }
]

export default times;