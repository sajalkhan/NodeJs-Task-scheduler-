var CronJob = require('cron').CronJob;

let allZone = [
    "Europe/Jersey",
    "Africa/Accra",
    "Europe/Brussels",
    "Europe/Rome",
    "Europe/Skopje",
    "Europe/Zurich",
    "Europe/Copenhagen",
    "Europe/Busingen",
    "Europe/Madrid",
    "Europe/Budapest",
    "Africa/Kigali",
    "Africa/Lubumbashi",
    "Europe/Kiev",
    "Africa/Johannesburg",
    "Indian/Antananarivo",
    "Asia/Riyadh",
    "Europe/Minsk",
    "Europe/Samara",
    "Asia/Dhaka",
    "Asia/Thimphu",
    "Asia/Qyzylorda",
    "Asia/Urumqi",
    "Asia/Pontianak",
    "Asia/Bangkok",
    "Asia/Novosibirsk",
    "Asia/Taipei",
    "Asia/Kuching",
    "Asia/Irkutsk",
    "Asia/Khandyga",
    "Asia/Yakutsk",
    "Antarctica/DumontDUrville",
    "Australia/Brisbane",
    "Australia/Currie",
    "Pacific/Kwajalein",
    "Pacific/Auckland",
    "Antarctica/Palmer",
    "America/Jamaica",
    "America/Pangnirtung",
    "America/Thunder_Bay",
    "America/Whitehorse",
    "America/Tijuana",
    "America/Dawson",
    "Asia/Colombo",
    "Asia/Kolkata",
    "Asia/Rangoon",
    "America/Monterrey",
    "America/Tegucigalpa",
    "America/Costa_Rica",
    "America/Goose_Bay"
  ];


for (let timezone = 0; timezone < allZone.length; timezone++) {
    
    new CronJob('0 23 15 * * *', function() {
        console.log('Your current time zone is -- '+allZone[timezone]);
    }, null, true, allZone[timezone]);
}
