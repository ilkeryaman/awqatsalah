const states = [
    {
        "id": 500,
        "code": "ADANA",
        "name": "ADANA",
        "countryId": 2
    },
    {
        "id": 501,
        "code": "ADIYAMAN",
        "name": "ADIYAMAN",
        "countryId": 2
    },
    {
        "id": 502,
        "code": "AFYONKARAHISAR",
        "name": "AFYONKARAHİSAR",
        "countryId": 2
    },
    {
        "id": 503,
        "code": "AGRI",
        "name": "AĞRI",
        "countryId": 2
    },
    {
        "id": 504,
        "code": "AKSARAY",
        "name": "AKSARAY",
        "countryId": 2
    },
    {
        "id": 505,
        "code": "AMASYA",
        "name": "AMASYA",
        "countryId": 2
    },
    {
        "id": 506,
        "code": "ANKARA",
        "name": "ANKARA",
        "countryId": 2
    },
    {
        "id": 507,
        "code": "ANTALYA",
        "name": "ANTALYA",
        "countryId": 2
    },
    {
        "id": 508,
        "code": "ARDAHAN",
        "name": "ARDAHAN",
        "countryId": 2
    },
    {
        "id": 509,
        "code": "ARTVIN",
        "name": "ARTVİN",
        "countryId": 2
    },
    {
        "id": 510,
        "code": "AYDIN",
        "name": "AYDIN",
        "countryId": 2
    },
    {
        "id": 511,
        "code": "BALIKESIR",
        "name": "BALIKESİR",
        "countryId": 2
    },
    {
        "id": 512,
        "code": "BARTIN",
        "name": "BARTIN",
        "countryId": 2
    },
    {
        "id": 513,
        "code": "BATMAN",
        "name": "BATMAN",
        "countryId": 2
    },
    {
        "id": 514,
        "code": "BAYBURT",
        "name": "BAYBURT",
        "countryId": 2
    },
    {
        "id": 515,
        "code": "BILECIK",
        "name": "BİLECİK",
        "countryId": 2
    },
    {
        "id": 516,
        "code": "BINGOL",
        "name": "BİNGÖL",
        "countryId": 2
    },
    {
        "id": 517,
        "code": "BITLIS",
        "name": "BİTLİS",
        "countryId": 2
    },
    {
        "id": 518,
        "code": "BOLU",
        "name": "BOLU",
        "countryId": 2
    },
    {
        "id": 519,
        "code": "BURDUR",
        "name": "BURDUR",
        "countryId": 2
    },
    {
        "id": 520,
        "code": "BURSA",
        "name": "BURSA",
        "countryId": 2
    },
    {
        "id": 521,
        "code": "CANAKKALE",
        "name": "ÇANAKKALE",
        "countryId": 2
    },
    {
        "id": 522,
        "code": "CANKIRI",
        "name": "ÇANKIRI",
        "countryId": 2
    },
    {
        "id": 523,
        "code": "CORUM",
        "name": "ÇORUM",
        "countryId": 2
    },
    {
        "id": 524,
        "code": "DENIZLI",
        "name": "DENİZLİ",
        "countryId": 2
    },
    {
        "id": 525,
        "code": "DIYARBAKIR",
        "name": "DİYARBAKIR",
        "countryId": 2
    },
    {
        "id": 526,
        "code": "DUZCE",
        "name": "DÜZCE",
        "countryId": 2
    },
    {
        "id": 527,
        "code": "EDIRNE",
        "name": "EDİRNE",
        "countryId": 2
    },
    {
        "id": 528,
        "code": "ELAZIG",
        "name": "ELAZIĞ",
        "countryId": 2
    },
    {
        "id": 529,
        "code": "ERZINCAN",
        "name": "ERZİNCAN",
        "countryId": 2
    },
    {
        "id": 530,
        "code": "ERZURUM",
        "name": "ERZURUM",
        "countryId": 2
    },
    {
        "id": 531,
        "code": "ESKISEHIR",
        "name": "ESKİŞEHİR",
        "countryId": 2
    },
    {
        "id": 532,
        "code": "GAZIANTEP",
        "name": "GAZİANTEP",
        "countryId": 2
    },
    {
        "id": 533,
        "code": "GIRESUN",
        "name": "GİRESUN",
        "countryId": 2
    },
    {
        "id": 534,
        "code": "GUMUSHANE",
        "name": "GÜMÜŞHANE",
        "countryId": 2
    },
    {
        "id": 535,
        "code": "HAKKARI",
        "name": "HAKKARİ",
        "countryId": 2
    },
    {
        "id": 536,
        "code": "HATAY",
        "name": "HATAY",
        "countryId": 2
    },
    {
        "id": 537,
        "code": "IGDIR",
        "name": "IĞDIR",
        "countryId": 2
    },
    {
        "id": 538,
        "code": "ISPARTA",
        "name": "ISPARTA",
        "countryId": 2
    },
    {
        "id": 539,
        "code": "ISTANBUL",
        "name": "İSTANBUL",
        "countryId": 2
    },
    {
        "id": 540,
        "code": "IZMIR",
        "name": "İZMİR",
        "countryId": 2
    },
    {
        "id": 541,
        "code": "KAHRAMANMARAS",
        "name": "KAHRAMANMARAŞ",
        "countryId": 2
    },
    {
        "id": 542,
        "code": "KARABUK",
        "name": "KARABÜK",
        "countryId": 2
    },
    {
        "id": 543,
        "code": "KARAMAN",
        "name": "KARAMAN",
        "countryId": 2
    },
    {
        "id": 544,
        "code": "KARS",
        "name": "KARS",
        "countryId": 2
    },
    {
        "id": 545,
        "code": "KASTAMONU",
        "name": "KASTAMONU",
        "countryId": 2
    },
    {
        "id": 546,
        "code": "KAYSERI",
        "name": "KAYSERİ",
        "countryId": 2
    },
    {
        "id": 547,
        "code": "KILIS",
        "name": "KİLİS",
        "countryId": 2
    },
    {
        "id": 548,
        "code": "KIRIKKALE",
        "name": "KIRIKKALE",
        "countryId": 2
    },
    {
        "id": 549,
        "code": "KIRKLARELI",
        "name": "KIRKLARELİ",
        "countryId": 2
    },
    {
        "id": 550,
        "code": "KIRSEHIR",
        "name": "KIRŞEHİR",
        "countryId": 2
    },
    {
        "id": 551,
        "code": "KOCAELI",
        "name": "KOCAELİ",
        "countryId": 2
    },
    {
        "id": 552,
        "code": "KONYA",
        "name": "KONYA",
        "countryId": 2
    },
    {
        "id": 553,
        "code": "KUTAHYA",
        "name": "KÜTAHYA",
        "countryId": 2
    },
    {
        "id": 554,
        "code": "MALATYA",
        "name": "MALATYA",
        "countryId": 2
    },
    {
        "id": 555,
        "code": "MANISA",
        "name": "MANİSA",
        "countryId": 2
    },
    {
        "id": 556,
        "code": "MARDIN",
        "name": "MARDİN",
        "countryId": 2
    },
    {
        "id": 557,
        "code": "MERSIN",
        "name": "MERSİN",
        "countryId": 2
    },
    {
        "id": 558,
        "code": "MUGLA",
        "name": "MUĞLA",
        "countryId": 2
    },
    {
        "id": 559,
        "code": "MUS",
        "name": "MUŞ",
        "countryId": 2
    },
    {
        "id": 560,
        "code": "NEVSEHIR",
        "name": "NEVŞEHİR",
        "countryId": 2
    },
    {
        "id": 561,
        "code": "NIGDE",
        "name": "NİĞDE",
        "countryId": 2
    },
    {
        "id": 562,
        "code": "ORDU",
        "name": "ORDU",
        "countryId": 2
    },
    {
        "id": 563,
        "code": "OSMANIYE",
        "name": "OSMANİYE",
        "countryId": 2
    },
    {
        "id": 564,
        "code": "RIZE",
        "name": "RİZE",
        "countryId": 2
    },
    {
        "id": 565,
        "code": "SAKARYA",
        "name": "SAKARYA",
        "countryId": 2
    },
    {
        "id": 566,
        "code": "SAMSUN",
        "name": "SAMSUN",
        "countryId": 2
    },
    {
        "id": 567,
        "code": "SANLIURFA",
        "name": "ŞANLIURFA",
        "countryId": 2
    },
    {
        "id": 568,
        "code": "SIIRT",
        "name": "SİİRT",
        "countryId": 2
    },
    {
        "id": 569,
        "code": "SINOP",
        "name": "SİNOP",
        "countryId": 2
    },
    {
        "id": 570,
        "code": "SIRNAK",
        "name": "ŞIRNAK",
        "countryId": 2
    },
    {
        "id": 571,
        "code": "SIVAS",
        "name": "SİVAS",
        "countryId": 2
    },
    {
        "id": 572,
        "code": "TEKIRDAG",
        "name": "TEKİRDAĞ",
        "countryId": 2
    },
    {
        "id": 573,
        "code": "TOKAT",
        "name": "TOKAT",
        "countryId": 2
    },
    {
        "id": 574,
        "code": "TRABZON",
        "name": "TRABZON",
        "countryId": 2
    },
    {
        "id": 575,
        "code": "TUNCELI",
        "name": "TUNCELİ",
        "countryId": 2
    },
    {
        "id": 576,
        "code": "USAK",
        "name": "UŞAK",
        "countryId": 2
    },
    {
        "id": 577,
        "code": "VAN",
        "name": "VAN",
        "countryId": 2
    },
    {
        "id": 578,
        "code": "YALOVA",
        "name": "YALOVA",
        "countryId": 2
    },
    {
        "id": 579,
        "code": "YOZGAT",
        "name": "YOZGAT",
        "countryId": 2
    },
    {
        "id": 580,
        "code": "ZONGULDAK",
        "name": "ZONGULDAK",
        "countryId": 2
    },
    {
        "id": 658,
        "code": "AZERBAIJAN",
        "name": "AZERBAYCAN",
        "countryId": 5
    },
    {
        "id": 751,
        "code": "NORTH CYPRUS",
        "name": "KUZEY KIBRIS",
        "countryId": 1
    }
];

export default states;