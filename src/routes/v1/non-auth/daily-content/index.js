import express from 'express';
import SC from '../../../enum/http-status-codes';
import dailyContentService from '../../../../services/daily-content-service';

const router = express.Router();

router.get('/', async (req, res, next) => {
    const dayOfYear = dailyContentService.getDayOfYear();

    res.status(SC.OK).jsonp({
        data: {
            id: dayOfYear,
            dayOfYear,
            verse: "\"Gökleri, yeri ve bu ikisi içinde yaydığı canlıları yaratması, O'nun varlığının delillerindendir. O, dilediği zaman, onları bir araya getirmeye de gücü yetendir.\" ",
            verseSource: "(Şu'arâ, 42/29)",
            hadith: "“Küçüklerimize merhamet etmeyen, büyüklerimize saygı göstermeyen bizden değildir.”",
            hadithSource: "(Tirmizî, “Birr ”, 15)",
            pray: "\"Bizleri, insanlığın barış ve huzuru için hayrın anahtarı şerrin kilidi olanlardan eyle Allah’ım.\"",
            praySource: null
        },
        success: true,
        message: null
    });
    next();
});

export default router;