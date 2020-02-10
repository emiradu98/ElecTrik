
function SqliteDbInit(dataBaseName){
    const sqliteDb = require('better-sqlite3');
    let db;
    function createTable(sqlCommand){
        let stmt = db.prepare(sqlCommand);
        stmt.run();
    }

    function makeInsertionsCompanies(datas){
        let stmt = db.prepare(`
            INSERT INTO companies(company_name,regions,admin_ids) VALUES(@companyName,@regions,@adminIds)
        `);
        for(let data of datas){
            stmt.run(data);
        }
    }

    function makeInsertionsUsers(datas){
        // let arr_obj = [
        //     {firstName:'Livint',lastName:'Lucian',email:'livintLl@gmail.com',phone:'0751414141',password:'bbanana',region:'South America',location:'LosAngeles',country:'USA',auth:'',idCompany:1,title:'General'},
        //     {firstName:'David',lastName:'Brancu',email:'calcal@yahoo.com',phone:'0751414142',password:'bbanan1',region:'Europe',location:'London',country:'USA',auth:'',idCompany:1,title:'Local'}
        // ];
        let stmt = db.prepare(`
            INSERT INTO users(first_name,last_name,email,phone,password,region,
                location,country,auth_token,token,company_id,title) VALUES(@firstName,@lastName,@email,@phone,@password,@region,@location,@country,@auth,@token,@idCompany,@title)
        `);
        for(let data of datas){
            stmt.run(data);
        }
    }

    this.selectDataTest = function(){
        db = new sqliteDb(dataBaseName,{verbose:console.log});
        let row = db.prepare('SELECT * FROM users').all();
        console.log(row);
        console.log(db.prepare('select * from companies where company_id = ?').get(1));
    }

    this.constructDatabase = function(callback){
        db = new sqliteDb(dataBaseName,{verbose:console.log});
        createTable(`CREATE TABLE users(
            user_id INTEGER PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            region TEXT NOT NULL,
            location TEXT NOT NULL,
            country TEXT NOT NULL,
            auth_token TEXT,
            token TEXT,
            company_id INTEGER NOT NULL,
            title TEXT NOT NULL
        )`);
        createTable(`CREATE TABLE companies(
            company_id INTEGER PRIMARY KEY,
            company_name TEXT NOT NULL,
            regions TEXT N  OT NULL,
            admin_ids TEXT NOT NULL
        )`);
        createTable(`CREATE TABLE products(
            id INTEGER PRIMARY KEY,
            company_id INTEGER,
            deposit_id INTEGER,
            producer TEXT,
            name TEXT,
            stock INTEGER,
            availabe_series TEXT,
            taken_series TEXT,
            price REAL
        )`);
        createTable(`CREATE TABLE deposits(
            id INTEGER PRIMARY KEY,
            company_id INTEGER,
            location TEXT NOT NULL,
            location_coordinates TEXT NOT NULL,
            admin_ids TEXT NOT NULL
        )`);
        createTable(`CREATE TABLE payment(
            client_Id INTEGER,
            provider_Id INTEGER,
            payment_method TEXT NOT NULL,
            price INTEGER,
            payment_Id TEXT NOT NULL
        )`);
        createTable(`CREATE TABLE orders(
            type TEXT NOT NULL,
            processed INTEGER,
            isDelivered INTEGER,
            client_Id INTEGER,
            provider_Id INTEGER,
            product_Id INTEGER,
            quantity INTEGER,
            deposit_Id INTEGER,
            shipmentDate TEXT,
            arrivalDate TEXT,
            order_Id TEXT NOT NULL
        )`);
        createTable(`CREATE TABLE order_payment(
            order_Id TEXT NOT NULL,
            payment_Id TEXT NOT NULL
        )`);
        let arr_obj = [
            {firstName:'Livint',lastName:'Lucian',email:'livintLl@gmail.com',phone:'0751414141',password:'bbanana',region:'South America',location:'LosAngeles',country:'USA',auth:'',token:'',idCompany:1,title:'General'},
            {firstName:'David',lastName:'Brancu',email:'calcal@yahoo.com',phone:'0751414142',password:'bbanan1',region:'Europe',location:'London',country:'USA',auth:'',token:'',idCompany:1,title:'Local'}
        ];
        let new_obj = {companyName:'FluxEnergy',regions:'South American, North America, Europe',adminIds:'1'};
        //console.log(db.prepare('select * from sqlite_master').all());
        makeInsertionsCompanies([new_obj]);
        makeInsertionsUsers(arr_obj);
    }

    this.makeNew = function(comm){
        db = new sqliteDb(dataBaseName,{verbose:console.log});
        console.log(comm);
        db.prepare(comm).run();
    }
}

let a = new SqliteDbInit('electrik.db');
// a.makeNew('ALTER TABLE companies ADD employees TEXT');
// a.makeNew('ALTER TABLE companies ADD location TEXT');
// a.makeNew('ALTER TABLE companies ADD invite TEXT');
// a.constructDatabase();
// a.selectDataTest();
// a.makeNew(`CREATE TABLE news(
//     receiver INTEGER,
//     message TEXT,
//     sender TEXT,
//     subject TEXT
// )`);
// a.makeNew(`CREATE TABLE orders(
//     type TEXT NOT NULL,
//     isProcessed INTEGER,
//     isDelivered INTEGER,
//     client_Id INTEGER,
//     provider_Id INTEGER,
//     product_Id INTEGER,
//     quantity INTEGER,
//     deposit_Id INTEGER,
//     shipmentDate TEXT,
//     arrivalDate TEXT,
//     order_Id INTEGER PRIMARY KEY
// )`);

// a.makeNew(`DROP TABLE orders`);
// a.makeNew(`DROP TABLE news`);