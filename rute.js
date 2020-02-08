// /auth/register
// {
//     "first_name": "Badita",
//     "last_name": "George",
//     "email": "geoeymexicanu@gmail.com",
//     "phone": "0722493630",
//     "password": "bbanan3",
//     "region": "Europe",
//     "location": "Botosani",
//     "country": "Romania",
//     "auth_token": "",
//     "company_id": 1,
//     "image": ""
// }


// /auth/login
// {
// 	"email":"oculutz@gmail.com",
// 	"password":"bbanan2"
// } -- > vei primi un obiect care va contine si token-ul pe care sa il folosesti apoi in browser

// /auth/logout
// aici nu trimiti nimic, doar faci apelul pe post, poti trimite un body gol
// te deloghez folosindu-ma de token, pentru ca e unic pentru fiecare user


// /companies/register
// {
//     "company_name": "WiseEnergyToday",
//     "regions": "Europe",
//     "admin_ids": "wiseEer@wet.com",
//     "owner_id": 0,
//     "invite": "hzqj1211invk11doka12"
// } --> admin_ids il voi schimba cu company_email, adica voi schimba colloana in db

// /products/register
// {
//     "company_id": 1,
//     "deposit_id": 0,
//     "producer": "Sony",
//     "name": "Battery",
//     "stock": 248,
//     "availabe_series": "b665",
//     "taken_series": "a15",
//     "price": 205.5,
//     "img": null
// }

// /deposits/register
// {
//     "company_id": 1,
//     "location": "Bucharest",
//     "location_coordinates": " 44.439663 26.096306",
//     "admin_ids": "7"
// } --> aia sunt adminii depozitului

// /payment/register


// /orders/register


// PUT
//la PUT iti pun doar un exemplu pentru ca e ca la POST
//ai obiectul asta:

// {
// 	"value":{
// 		"stock":500,
// 		"price":105
// 	},
// 	"where":{
// 		"producer":"Asus"
// 	}
// }

// --> la PUT, obiectul mereu va avea value si where, fiecare cheie avand ca valoare
// cate un obiect, dupa cum vezi in exemplu
// iar obiectele, gen cel pentru cheia value, are chei pe care le iei
// din exemplul de post, adica stock si price, sunt in exemplul de post pentru products
// iar la where, de asemenea, iei cheile din exemplu de post
// la value este cheia si valoarea noua, la where, este cheia cu valoarea actuala
// dupa care sa faci cautarea

// /users/update

// /companies/update

// /deposits/update

// /products/update

// /payment/update

// /orders/update