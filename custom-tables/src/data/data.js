/**
 * How the columns array should be formatted
 * The title value can be anything and is only used as the name of the header
 * The data value is the key of the data in the data array
 * In order to display the corresponding data, there should be a columnsLabel element for each of
 * the keys of every data element
 * @type {{label: string, title: string}[]}
 */
export const columnsLabels = [
    { title: 'First Name', label: 'firstName' },
    { title: 'Last Name', label: 'lastName' },
    { title: 'Start Date', label: 'startDate' },
    { title: 'Department', label: 'department' },
    { title: 'Date of Birth', label: 'dateOfBirth' },
    { title: 'Street', label: 'street' },
    { title: 'City', label: 'city' },
    { title: 'State', label: 'state' },
    { title: 'Zip Code', label: 'zipCode' }
]

/**
 * The data to be displayed in the table. Every element should have the same keys.
 * Each key should be referenced as the data value of one column element (see columnsLabel)
 * @type Object[]
 */
export const contentData = [
    {
        firstName : "Marisa",
        lastName : "Kirisame",
        startDate : "09/08/2021",
        department : "Human Resources",
        dateOfBirth : "08/15/2007",
        street : "Kirisame Magic Shop",
        city : "Gensokyo",
        state : "AZ",
        zipCode : "58906"
    },
    {
        firstName : "Reimu",
        lastName : "Hakurei",
        startDate : "09/01/2021",
        department : "Sales",
        dateOfBirth : "09/12/2007",
        street : "Hakurei Shrine",
        city : "Gensokyo",
        state : "OH",
        zipCode : "12505"
    },
    {
        firstName : "Mokou",
        lastName : "Fujiwara no",
        startDate : "10/01/2020",
        department : "Engineering",
        dateOfBirth : "05/12/785",
        street : "Bamboo forest of the lost",
        city : "Gensokyo",
        state : "NC",
        zipCode : "90657"
    }
]

//Data below generated at : https://extendsclass.com/json-generator.html
/*
repeat(50,{
  "firstName": firstname(),
  "lastName": lastname(),
  "startDate" : date("m/d/Y","2010","2021" ),
  "department" : choice("Sales","Marketing",
                        "Engineering","Human Resources",
                       "Legal"),
  "dateOfBirth" : date("m/d/Y","1950","2005"),
  "street" : "",
  "city" : city(),
  "state" : countryCode(),
  "zipCode" : random(10000,99999)
})
 */
export const generatedData = [
    {
        "firstName": "Roberta",
        "lastName": "Sasnett",
        "startDate": "02/01/2015",
        "department": "Engineering",
        "dateOfBirth": "01/28/2002",
        "street": "",
        "city": "Innsbruck",
        "state": "VE",
        "zipCode": 44191
    },
    {
        "firstName": "Aigneis",
        "lastName": "Rozanna",
        "startDate": "05/21/2016",
        "department": "Sales",
        "dateOfBirth": "05/26/1966",
        "street": "",
        "city": "Palembang",
        "state": "BI",
        "zipCode": 54621
    },
    {
        "firstName": "Gretal",
        "lastName": "Kimmie",
        "startDate": "06/26/2011",
        "department": "Legal",
        "dateOfBirth": "04/15/1980",
        "street": "",
        "city": "Bogot??",
        "state": "SN",
        "zipCode": 57941
    },
    {
        "firstName": "Adelle",
        "lastName": "Dahlia",
        "startDate": "10/28/2017",
        "department": "Engineering",
        "dateOfBirth": "12/28/1966",
        "street": "",
        "city": "Mogadishu",
        "state": "UG",
        "zipCode": 21871
    },
    {
        "firstName": "Brandise",
        "lastName": "Cressida",
        "startDate": "02/03/2012",
        "department": "Human Resources",
        "dateOfBirth": "03/27/1983",
        "street": "",
        "city": "Dallas",
        "state": "BI",
        "zipCode": 64744
    },
    {
        "firstName": "Frances",
        "lastName": "Trinetta",
        "startDate": "06/24/2014",
        "department": "Engineering",
        "dateOfBirth": "08/16/1990",
        "street": "",
        "city": "City of Halifax",
        "state": "ET",
        "zipCode": 88976
    },
    {
        "firstName": "Annora",
        "lastName": "Robertson",
        "startDate": "11/02/2018",
        "department": "Sales",
        "dateOfBirth": "10/11/1996",
        "street": "",
        "city": "Managua",
        "state": "PT",
        "zipCode": 60875
    },
    {
        "firstName": "Merle",
        "lastName": "Anyah",
        "startDate": "04/24/2010",
        "department": "Marketing",
        "dateOfBirth": "04/06/1997",
        "street": "",
        "city": "Petropavlovsk-Kamchatsky",
        "state": "KR",
        "zipCode": 20611
    },
    {
        "firstName": "Susette",
        "lastName": "Travax",
        "startDate": "05/15/2011",
        "department": "Legal",
        "dateOfBirth": "12/03/1959",
        "street": "",
        "city": "El Paso",
        "state": "HN",
        "zipCode": 28806
    },
    {
        "firstName": "Genovera",
        "lastName": "Raul",
        "startDate": "05/01/2014",
        "department": "Engineering",
        "dateOfBirth": "05/11/1958",
        "street": "",
        "city": "Kabul",
        "state": "MW",
        "zipCode": 99258
    },
    {
        "firstName": "Anica",
        "lastName": "Merna",
        "startDate": "08/19/2014",
        "department": "Legal",
        "dateOfBirth": "12/23/1982",
        "street": "",
        "city": "Detroit",
        "state": "BR",
        "zipCode": 57575
    },
    {
        "firstName": "Gavrielle",
        "lastName": "Lia",
        "startDate": "12/06/2019",
        "department": "Legal",
        "dateOfBirth": "04/13/1989",
        "street": "",
        "city": "Marseille",
        "state": "AU",
        "zipCode": 43286
    },
    {
        "firstName": "Marguerite",
        "lastName": "Hebner",
        "startDate": "09/30/2012",
        "department": "Human Resources",
        "dateOfBirth": "01/24/1961",
        "street": "",
        "city": "Dallas",
        "state": "IO",
        "zipCode": 40129
    },
    {
        "firstName": "Gwyneth",
        "lastName": "Lowry",
        "startDate": "06/18/2012",
        "department": "Sales",
        "dateOfBirth": "08/20/1984",
        "street": "",
        "city": "Palikir",
        "state": "GF",
        "zipCode": 54847
    },
    {
        "firstName": "Bobinette",
        "lastName": "Justinn",
        "startDate": "01/16/2013",
        "department": "Engineering",
        "dateOfBirth": "02/21/2001",
        "street": "",
        "city": "Damascus",
        "state": "HM",
        "zipCode": 17528
    },
    {
        "firstName": "Larine",
        "lastName": "Dielu",
        "startDate": "10/11/2019",
        "department": "Sales",
        "dateOfBirth": "04/12/1989",
        "street": "",
        "city": "Kathmandu",
        "state": "NI",
        "zipCode": 44091
    },
    {
        "firstName": "Taffy",
        "lastName": "Katrine",
        "startDate": "07/15/2010",
        "department": "Engineering",
        "dateOfBirth": "09/10/1977",
        "street": "",
        "city": "Sarajevo",
        "state": "TZ",
        "zipCode": 36396
    },
    {
        "firstName": "Grier",
        "lastName": "Swigart",
        "startDate": "07/16/2011",
        "department": "Sales",
        "dateOfBirth": "05/28/1953",
        "street": "",
        "city": "Manaus",
        "state": "SA",
        "zipCode": 86492
    },
    {
        "firstName": "Kristan",
        "lastName": "Cutlerr",
        "startDate": "06/08/2012",
        "department": "Human Resources",
        "dateOfBirth": "09/28/1995",
        "street": "",
        "city": "Amsterdam",
        "state": "MN",
        "zipCode": 92552
    },
    {
        "firstName": "Hannis",
        "lastName": "Ethban",
        "startDate": "07/23/2013",
        "department": "Sales",
        "dateOfBirth": "06/30/1960",
        "street": "",
        "city": "Kuala Lumpur",
        "state": "GR",
        "zipCode": 75870
    },
    {
        "firstName": "Celisse",
        "lastName": "Dorcy",
        "startDate": "11/25/2012",
        "department": "Sales",
        "dateOfBirth": "08/07/1958",
        "street": "",
        "city": "Guangzhou",
        "state": "TL",
        "zipCode": 45819
    },
    {
        "firstName": "Genevra",
        "lastName": "Ogren",
        "startDate": "09/18/2014",
        "department": "Marketing",
        "dateOfBirth": "05/30/1990",
        "street": "",
        "city": "Agartala",
        "state": "ML",
        "zipCode": 75178
    },
    {
        "firstName": "Kirstin",
        "lastName": "Maxi",
        "startDate": "08/17/2014",
        "department": "Engineering",
        "dateOfBirth": "05/22/1994",
        "street": "",
        "city": "Peshawar",
        "state": "RE",
        "zipCode": 21111
    },
    {
        "firstName": "Deloria",
        "lastName": "Adore",
        "startDate": "06/15/2015",
        "department": "Engineering",
        "dateOfBirth": "11/05/1965",
        "street": "",
        "city": "George Town",
        "state": "KI",
        "zipCode": 39640
    },
    {
        "firstName": "Marcelline",
        "lastName": "Natalia",
        "startDate": "05/23/2018",
        "department": "Sales",
        "dateOfBirth": "03/25/1989",
        "street": "",
        "city": "Hyderabad",
        "state": "KP",
        "zipCode": 29833
    },
    {
        "firstName": "Valeda",
        "lastName": "Lynn",
        "startDate": "05/01/2011",
        "department": "Engineering",
        "dateOfBirth": "07/15/1981",
        "street": "",
        "city": "Sabha",
        "state": "VE",
        "zipCode": 72778
    },
    {
        "firstName": "Consuela",
        "lastName": "Fancie",
        "startDate": "03/21/2019",
        "department": "Human Resources",
        "dateOfBirth": "03/23/1971",
        "street": "",
        "city": "Murmansk",
        "state": "AE",
        "zipCode": 98269
    },
    {
        "firstName": "Lila",
        "lastName": "Ventre",
        "startDate": "03/28/2012",
        "department": "Human Resources",
        "dateOfBirth": "05/26/1981",
        "street": "",
        "city": "Podgorica",
        "state": "LB",
        "zipCode": 39619
    },
    {
        "firstName": "Tobe",
        "lastName": "Seagraves",
        "startDate": "05/12/2018",
        "department": "Legal",
        "dateOfBirth": "01/14/1979",
        "street": "",
        "city": "Portland",
        "state": "GH",
        "zipCode": 28382
    },
    {
        "firstName": "Paola",
        "lastName": "Santoro",
        "startDate": "05/07/2020",
        "department": "Sales",
        "dateOfBirth": "01/14/1983",
        "street": "",
        "city": "Kota Bharu",
        "state": "VE",
        "zipCode": 78648
    },
    {
        "firstName": "Veda",
        "lastName": "Tremayne",
        "startDate": "09/28/2013",
        "department": "Legal",
        "dateOfBirth": "09/12/1976",
        "street": "",
        "city": "Hyderabad",
        "state": "GA",
        "zipCode": 34485
    },
    {
        "firstName": "Blinni",
        "lastName": "Orpah",
        "startDate": "01/08/2020",
        "department": "Engineering",
        "dateOfBirth": "01/08/1966",
        "street": "",
        "city": "Suez",
        "state": "AX",
        "zipCode": 11369
    },
    {
        "firstName": "Agathe",
        "lastName": "Stevy",
        "startDate": "06/02/2017",
        "department": "Sales",
        "dateOfBirth": "04/24/1965",
        "street": "",
        "city": "Taiyuan",
        "state": "PH",
        "zipCode": 51912
    },
    {
        "firstName": "Gratia",
        "lastName": "Riva",
        "startDate": "09/14/2013",
        "department": "Engineering",
        "dateOfBirth": "09/04/1976",
        "street": "",
        "city": "Monrovia",
        "state": "FK",
        "zipCode": 86502
    },
    {
        "firstName": "Brandise",
        "lastName": "Atonsah",
        "startDate": "05/15/2015",
        "department": "Human Resources",
        "dateOfBirth": "05/21/1983",
        "street": "",
        "city": "City of Halifax",
        "state": "UA",
        "zipCode": 86643
    },
    {
        "firstName": "Barbi",
        "lastName": "Gillan",
        "startDate": "02/28/2016",
        "department": "Human Resources",
        "dateOfBirth": "05/04/1954",
        "street": "",
        "city": "Leeds",
        "state": "PW",
        "zipCode": 20585
    },
    {
        "firstName": "Alia",
        "lastName": "Lucienne",
        "startDate": "04/10/2012",
        "department": "Engineering",
        "dateOfBirth": "10/06/1981",
        "street": "",
        "city": "Saskatoon",
        "state": "DK",
        "zipCode": 99192
    },
    {
        "firstName": "Ulrike",
        "lastName": "Ingra",
        "startDate": "02/12/2019",
        "department": "Marketing",
        "dateOfBirth": "03/21/1984",
        "street": "",
        "city": "Harare",
        "state": "RW",
        "zipCode": 48321
    },
    {
        "firstName": "Lory",
        "lastName": "Parsaye",
        "startDate": "06/13/2017",
        "department": "Sales",
        "dateOfBirth": "10/23/1958",
        "street": "",
        "city": "New Delhi",
        "state": "KM",
        "zipCode": 38514
    },
    {
        "firstName": "Ellette",
        "lastName": "Loeb",
        "startDate": "06/11/2013",
        "department": "Sales",
        "dateOfBirth": "08/20/1973",
        "street": "",
        "city": "Petropavlovsk-Kamchatsky",
        "state": "CV",
        "zipCode": 23445
    },
    {
        "firstName": "Moyna",
        "lastName": "Tomasina",
        "startDate": "07/28/2016",
        "department": "Sales",
        "dateOfBirth": "06/23/1955",
        "street": "",
        "city": "Oklahoma City",
        "state": "NG",
        "zipCode": 79405
    },
    {
        "firstName": "Rayna",
        "lastName": "Barbey",
        "startDate": "10/17/2016",
        "department": "Sales",
        "dateOfBirth": "01/26/2000",
        "street": "",
        "city": "Palma",
        "state": "MG",
        "zipCode": 32508
    },
    {
        "firstName": "Mariele",
        "lastName": "Aldric",
        "startDate": "05/07/2011",
        "department": "Legal",
        "dateOfBirth": "05/20/1963",
        "street": "",
        "city": "Pretoria",
        "state": "PH",
        "zipCode": 45506
    },
    {
        "firstName": "Dulce",
        "lastName": "Carolin",
        "startDate": "01/07/2011",
        "department": "Human Resources",
        "dateOfBirth": "11/01/1993",
        "street": "",
        "city": "Ho Chi Minh City",
        "state": "MN",
        "zipCode": 40169
    },
    {
        "firstName": "Catrina",
        "lastName": "Hillel",
        "startDate": "11/09/2019",
        "department": "Human Resources",
        "dateOfBirth": "08/27/1959",
        "street": "",
        "city": "Philadelphia",
        "state": "MP",
        "zipCode": 80323
    },
    {
        "firstName": "Marnia",
        "lastName": "Pierette",
        "startDate": "05/18/2010",
        "department": "Human Resources",
        "dateOfBirth": "06/07/2004",
        "street": "",
        "city": "San Juan",
        "state": "FR",
        "zipCode": 84349
    },
    {
        "firstName": "Jorry",
        "lastName": "Turne",
        "startDate": "08/02/2013",
        "department": "Marketing",
        "dateOfBirth": "07/09/2004",
        "street": "",
        "city": "Zanzibar City",
        "state": "LK",
        "zipCode": 77497
    },
    {
        "firstName": "Teriann",
        "lastName": "Wiener",
        "startDate": "08/28/2015",
        "department": "Sales",
        "dateOfBirth": "11/27/1975",
        "street": "",
        "city": "Kigali",
        "state": "VC",
        "zipCode": 78684
    },
    {
        "firstName": "Karlee",
        "lastName": "Adore",
        "startDate": "02/18/2019",
        "department": "Sales",
        "dateOfBirth": "11/30/1999",
        "street": "",
        "city": "Okinawa",
        "state": "DZ",
        "zipCode": 78358
    },
    {
        "firstName": "Karina",
        "lastName": "Ader",
        "startDate": "10/08/2016",
        "department": "Human Resources",
        "dateOfBirth": "04/11/1999",
        "street": "",
        "city": "Oranjestad",
        "state": "GD",
        "zipCode": 68673
    }
]

