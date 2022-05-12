let player1 = new CompetitionWithDOM();

player1.add(
    new PlayerWithId(
        "394",
        "roma",
        "female",
        "22",
        "usa",
        "[1,4,6]"
    )
);
player1.add(
    new PlayerWithId(
        "399",
        "nastya",
        "female",
        "45",
        "uk",
        "[3,3,3]"
    )
);

player1.mount(document.getElementById("root"));
