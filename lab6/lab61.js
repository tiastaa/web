class Player {
    constructor(code, name , sex, age,country , marks) {
        this.code = code;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.country = country;
        this.marks = marks;

    }

}
let idCounter = 0;
class PlayerWithId extends Player {
    constructor(code, name , sex, age,country , marks) {
        super(code, name , sex, age,country , marks);
        this._id = idCounter++;
    }

    get id() {
        return this._id;
    }
}


class Competition {
    constructor() {
        this.items = [];
    }

    get count() {
        return this.items.length;
    }

    add(player) {

        this.items.push(player);
    }
    addcolections(colections) {
        for(let i=0; i<colections.length; i++){
        this.items.push(colections[i]);
        }
    }


    getById(id) {
        return this.items.find(player => player.id == id);
    }

    getAll() {
        return [...this.items];
    }

    update(id, newPlayer) {
        let player = this.getById(id);
        if (!player)
            throw "Not found";
        if (newPlayer.code)
            player.code = newPlayer.code;
        if (newPlayer.name)    
            player.name = newPlayer.name;
        if (newPlayer.sex)
            player.sex = newPlayer.sex;
        if (newPlayer.age)
            player.age = newPlayer.age;
        if (newPlayer.country)    
            player.country = newPlayer.country;
        if (newPlayer.marks)
            player.marks = newPlayer.marks;

    }
    zavd4(age, country){
        let myzavd=[];
        for(let i=0; i<this.items.length;i++){
            if( this.items[i].country==country && this.items[i].age>=age){
                myzavd.push(this.items[i]);
            }
                
        }
        return [...myzavd];

    }

    delete(id){
        let playerIndex = this.items.findIndex(player => player.id == id);
        if (playerIndex == -1)
            throw "Not found";
        this.items.splice(playerIndex, 1);
    }

}

// let competition = new Competition();
// competition.add(
//     new PlayerWithId(
//         "454",
//         "nika",
//         "female",
//         "18",
//         "ua",
//         "[10,10,9]"
//     )
// );
// competition.add(
//     new PlayerWithId(
//         "854",
//         "vika",
//         "female",
//         "19",
//         "uk",
//         "[1,7,4]"
//     )
// );

// let firstPlayer = competition.getById(0);

// competition.update(1, {
    // code: "864",
    // name: "viktor",
    // sex: "male",
    // age: "90",
    // country: "sk",
    // marks: "5,5,5"

// });

// // competition.delete(0);

// competition.addcolections([
//     new PlayerWithId(
        // "394",
        // "roma",
        // "female",
        // "22",
        // "usa",
        // "[1,4,6]"
//     )
//     ,
//     new PlayerWithId(
        // "399",
        // "nastya",
        // "female",
        // "45",
        // "uk",
        // "[3,3,3]"
//     ),
//     new PlayerWithId(
//         "402",
//         "yura",
//         "male",
//         "89",
//         "ua",
//         "[1,7,4]"
//     )


//     ]);
//     console.log(competition.zavd4(18 ,'ua'));




