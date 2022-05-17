
// Використовуючи js, HTML та СSS створити:
// a. Об’єкт для зберігання даних про фільм (Id, назва, режисер,
// продюсер, список акторів, URL-трейлеру, рік випуску, касові збори).
// b. На основі об’єкту фільму створити новий об’єкт, який перевизначає
// метод toString()
// c. Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт
// повинен містити конструктор та метод для редагування фільму з
// вказаним id.
// d. Відобразити форму для редагування даних фільму на сторінці.

class Film {
    constructor(id, name, director, producer, actors ,url, date, money) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.producer = producer;
        this.actors = actors;
        this.url = url;
        this.date = date;
        this.money = money;
    }
}


class StrFilm extends Film {
    toString() {
        return `${super.toString()}{
            id:${this.id},
            name:${this.name},
            ...
        }`;
    }
}

class FilmCollection {
    constructor(items = []) {
        this.items = items;
    }

    getById(id) {
        return this.items.find(film => film.id == id)
    }

    delete(id) {
        let userIndex = this.items.findIndex(film => film.id == id);
        if (userIndex == -1)
            throw "Not found";
        this.items.splice(userIndex, 1);
    }
    update(id, newFilm) {
        let film = this.getById(id);
        if (!film)
            throw "Not found";
        if (newFilm.name)
            film.name = newFilm.name;
        if (newFilm.director)
            film.director = newFilm.director;
        if (newFilm.producer)
            film.producer = newFilm.producer;
        if (newFilm.actors)
            film.actors = newFilm.actors;
        if (newFilm.url)
            film.url = newFilm.url;
        if (newFilm.date)
            film.date = newFilm.date;
        if (newFilm.money)
            film.money = newFilm.money;

    }
}


class FilmCollectionHtml extends FilmCollection {
    constructor(items) {
        super(items);
        document.addEventListener("delete", event => {
            this.delete(event.detail.id);
            this.mount(this._parrent, this._id);
        });
    }
    
    filmToHTML(film) {
        if (!film)
            return ` <p class ="error">Film with id not found</p>`;

        return `   
        <div class="film">
            <h2> ${film.name} </h2>
            <img src="${film.url}" alt="${film.name}">
            <div class="description">
                <p>Режисер: ${film.director}</p>
                <p>Продюсер: ${film.producer}</p>
                <p>Актори: ${film.actors}</p>
                <p>Опубліковано: ${film.date} </p>
                <p>Касові зібрання: ${film.money} </p>

            </div>

        </div>
        <input type="hidden" id="film-id" value="${film.id}">
        <button type="button" id="delete-button">delete</button> 
        

    </div>
        `;
        
    }
    



    mount(parrent, id) {
        this._parrent = parrent;
        this._id = id;
        parrent.innerHTML = this.filmToHTML(this.getById(id));
        document.getElementById("delete-button").onclick = function () {
            let id = parseInt(document.getElementById("film-id").value);
            document.dispatchEvent(
                new CustomEvent(
                    "delete",
                    {
                        detail: {
                            id
                        }
                    }
                )
            );
        }
    }
}



let film1 = new Film(
    1,
    "Початок",

    "Крістофер Нолан",
    "Емма Томас",
    ["Леонардо Ді Капріо","Кен Ватанабе","Джозеф Гордон-Левітт"],
    "https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg",
    2010,
    160000000
);

let film2 = new Film(
    2,
    "Оселя Зла",

    "Пол В.С. Андерсон",
    "Бернд Айхінгер",
    ["Мілла Йовович","Мішель Родрігес"],
    "https://upload.wikimedia.org/wikipedia/uk/thumb/a/a1/Resident_evil_ver4.jpg/200px-Resident_evil_ver4.jpg",
    2002,
    102441078
)


let films = new FilmCollectionHtml([film1, film2]);
films.update(1,{
    name:'Обитель зла',
    director:'ccx',
    producer:'xccc',
    actors:'xxx',
    url:'yt',
    date:2010,
    money: 4944

})

films.mount(document.getElementById("root"), 1);
films.mount(document.getElementById("root"), 2);
