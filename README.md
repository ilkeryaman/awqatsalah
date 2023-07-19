# AwqatSalah için Mock Server / Mock Server for AwqatSalah

Bu uygulama, Diyanet İşleri Başkanlığı tarafından sağlanan AwqatSalah Namaz Vakitleri Rest servisleri ile benzer davranışı gösteren bir uygulamadır. Servis çağrımlarında örnek data dönüşü yaparak, kota sınırına takılmadan kolay geliştirme yapmanızı sağlar.

This is a project that generates similar responses for AwqatSalah Rest services which is belonged to Presidency of Religious Affairs, at Republic of Türkiye. It generates mock data and help you avoid query limits.

## Başlarken

Buradaki yönlendirmeler, mock server uygulamasını kendi bilgisayarınızda ayağa kaldırmanıza yardımcı olacaktır.

### Ön Gereksinimler

* İhtiyaç duyulan komutları çalıştırmak için herhangi bir komut istemcisi (CLI),
* [Node.js](https://nodejs.org/en/) uygulamasının güncel versiyonu.

### Kurulum

Gerekli kütüphanelerin yüklenmesi için alttaki komutu çalıştırın:

```sh
npm install
```

### Konfigurasyonel Değişiklikler

Uygulamanın en üst (root) seviyesinde **.env** isimli bir dosya bulunmaktadır. Bu dosya içerisinde örnek ortam değişkenleri yer almaktadır. Bu dosya üzerinde değişiklik yaparak ya da bu dosyayı sildikten sonra bilgisayarınızda aynı isimli ortam değişkenlerini tanımlayarak konfigurasyonel değişiklik yapabilirsiniz:

Parametre  | Açıklama | Varsayılan Değer
------------- | ------------- | -------------
SERVER_PORT  | Mock server uygulamasının hangi port üzerinden çalıştırılacağını gösterir. | 3000
SSL_ENABLED  | Mock server uygulamasının https protokolü üzerinden çalışmasını sağlar. | true
EMAIL  | Uygulamadan JWT token alabilmek için kullanılması gereken e-mail adresi bilgisini gösterir. | awq@salah.com
PASSWORD  | Uygulamadan JWT token alabilmek için kullanılması gereken şifre bilgisini gösterir. | diyanet2023
ACCESS_TOKEN_SECRET  | Yeni access token imzalanması için gerekli gizli anahtar | 
ACCESS_TOKEN_EXPIRES_IN  | Üretilen access token için erişim süresi (saniye cinsinden) | 1800 (30 dk)
REFRESH_TOKEN_SECRET  | Yeni refresh token imzalanması için gerekli gizli anahtar | 
REFRESH_TOKEN_EXPIRES_IN  | Üretilen refresh token için erişim süresi | 900 (15 dk)

> **NOT**: Kendinize özel yeni gizli anahtar üretmek için https://mkjwk.org/ adresini kullanabilirsiniz.

### Uygulamanın Kendi Bilgisayarınızda Çalıştırılması

Mock server uygulamasını kendi bilgisayarınızda çalıştırmak için alttaki komutu kullanın:

```sh
npm start
```

Api listesi ve method tipleri (GET, POST, PUT, PATCH, DELETE vs.) alttaki gibi listelenecektir:
```sh
 =============================== ENDPOINT LIST ==============================
 [POST]          https://localhost:3000/Auth/Login
 [GET]           https://localhost:3000/Auth/RefreshToken/:refreshtoken
 [GET]           https://localhost:3000/api/DailyContent
 [GET]           https://localhost:3000/api/Place/Countries
 [GET]           https://localhost:3000/api/Place/States
 [GET]           https://localhost:3000/api/Place/States/:countryid
 [GET]           https://localhost:3000/api/Place/Cities
 [GET]           https://localhost:3000/api/Place/Cities/:stateid
 [GET]           https://localhost:3000/api/Place/CityDetail/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Daily/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Weekly/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Monthly/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Eid/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Ramadan/:cityid
```

> **NOT**: Bu proje örnek data üretmektedir. Gerçek data ile çalışmak için orjinal api kullanınız.

<br/>

> **Awqat Salah** uygulaması ile ilgili detaylı bilgi için: https://awqatsalah.diyanet.gov.tr/index.html

---------------------------------------------

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

* Any command-line-interface (CLI) to run required commands,
* Latest stable version of [Node.js](https://nodejs.org/en/).

### Installation

Run following command to install dependencies:

```sh
npm install
```

### Configurations

There is a file named **.env** at the root of project. This file contains sample environment variables. You can make configurational changes via this file or using environment variables on your local computer after deletion of **.env** file from source code.


Parameter  | Description | Default Value
------------- | ------------- | -------------
SERVER_PORT  | Port number that mock server runs. | 3000
SSL_ENABLED  | To run mock server over https protocol. | true
EMAIL  | E-mail address information to get JWT token. | awq@salah.com
PASSWORD  | Password information to get JWT token. | diyanet2023
ACCESS_TOKEN_SECRET  | Private key to sign new access token. | 
ACCESS_TOKEN_EXPIRES_IN  | Validity period for access token (in seconds). | 1800 (30 mins)
REFRESH_TOKEN_SECRET  | Private key to sign new refresh token. | 
REFRESH_TOKEN_EXPIRES_IN  | Validity period for refresh token (in seconds). | 900 (15 mins)

> **NOTE**: To generate new private key, you can visit https://mkjwk.org/.

### Running on your local computer

Run following command to start up mock server on your local:

```sh
npm start
```
Endpoints and method types (GET, POST, PUT, PATCH, DELETE etc.) will be shown as output like:
```sh
 =============================== ENDPOINT LIST ==============================
 [POST]          https://localhost:3000/Auth/Login
 [GET]           https://localhost:3000/Auth/RefreshToken/:refreshtoken
 [GET]           https://localhost:3000/api/DailyContent
 [GET]           https://localhost:3000/api/Place/Countries
 [GET]           https://localhost:3000/api/Place/States
 [GET]           https://localhost:3000/api/Place/States/:countryid
 [GET]           https://localhost:3000/api/Place/Cities
 [GET]           https://localhost:3000/api/Place/Cities/:stateid
 [GET]           https://localhost:3000/api/Place/CityDetail/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Daily/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Weekly/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Monthly/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Eid/:cityid
 [GET]           https://localhost:3000/api/PrayerTime/Ramadan/:cityid
```

> **NOTE**: This project generates sample data for development purposes. To get accurate data, please use original apis.

## Geliştiriciler / Contributors

* **Ilker Yaman** - *Taslak Çalışma* / *Initial Work*  - [awqatsalah](https://github.com/ilkeryaman/awqatsalah)
