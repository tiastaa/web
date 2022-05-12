class CompetitionWithDOM extends Competition {
    playerToHTML(player) {
        return `
        <tr>
            <td>
                ${player.id}
            </td>
            <td>
                ${player.code}
            </td>
            <td>
                ${player.name}
            </td>
            <td>
                ${player.sex}
            </td>
            <td>
                ${player.age}
            </td>
            <td>
                ${player.country}
            </td>
            <td>
                ${player.marks}
            </td>
        
            <td> 
                <button onclick="DeletePlayer(${player.id})">
                    Delete
                </button>
            </td>
            <td> 
                <button onclick="StartEditPlayer(${player.id})">
                    Edit
                </button>
            </td>
        </tr>
        `;
    }

    competitionTableToHTML() {
        let rows = "";
        for (let player of this.getAll()) {
            rows += this.playerToHTML(player);
        }
        return ` 
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Code
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Sex
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Country
                    </th>
                    <th>
                        Marks
                    </th>
                
                    <th colspan="2">
                        Actions
                    </th>
                </tr>
                ${rows}
            </table>
            <button type="button" onclick="ShowAddPlayer()">
                Add player
            </button>
        `;
    }

    addFormToHTML() {
        return ` 
            <div id="add">
                <form name="addForm" method="post" action="#">
                    <h3> Add Player </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="name" placeholder="name">
                    <input name="sex" placeholder="sex">
                    <input name="age" placeholder="age"> 
                    <input name="country" placeholder="country">
                    <input name="marks" placeholder="marks">
                    

                    <button type="button" onclick="AddNewPlayer()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }

    editFormToHTML() {
        return ` 
            <div id="edit">
                <form name="editForm" method="post" action="#">
                    <h3> Edit Player </h3>
                    <input name="id" type="hidden">
                    <input name="code" placeholder="code"> 
                    <input name="name" placeholder="name">
                    <input name="sex" placeholder="sex">
                    <input name="age" placeholder="age"> 
                    <input name="country" placeholder="country">
                    <input name="marks" placeholder="marks">
                    <button type="button" onclick="EditPlayer()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }

    toHTML() {
        return this.competitionTableToHTML() + this.addFormToHTML() + this.editFormToHTML();
    }

    mount(parrent) {
        this._parrent = parrent;
        this.render();
        this.addEventListners();
    }

    render() {
        this._parrent.innerHTML = this.toHTML();
    }

    addEventListners() {
        document.addEventListener("deletePlayer", event => {
            super.delete(event.detail.id);
            this.render();
        });

        document.addEventListener("addPlayer", event => {
            super.add(
                new PlayerWithId(
                    event.detail.code,
                    event.detail.name,
                    event.detail.sex,
                    event.detail.age,
                    event.detail.country,
                    event.detail.marks
                )
            );
            this.render();
        });

        document.addEventListener("editPlayer", event => {
            try {
                super.update(event.detail.id, event.detail);
                this.render();
            } catch (error) {
                console.log(error);
                alert(error);
            }
        });
    }
}

function DeletePlayer(id) {
    let deletePlayerEvent = new CustomEvent("deletePlayer", { detail: { id } });
    document.dispatchEvent(deletePlayerEvent);
}

function AddNewPlayer() {
    const code = document.getElementsByName("code")[0].value;
    const name = document.getElementsByName("name")[0].value;
    const sex = document.getElementsByName("sex")[0].value;
    const age = document.getElementsByName("age")[0].value;
    const country = document.getElementsByName("country")[0].value;
    const marks = document.getElementsByName("marks")[0].value;
    let addPlayerEvent = new CustomEvent("addPlayer", {
        detail: {
            code, 
            name,
            sex,
            age, 
            country,
            marks
        }
    });
    document.dispatchEvent(addPlayerEvent);
}

function StartEditPlayer(id) {
    document.getElementById("edit").style.display = "block";
    try {
        let player =player1.getById(id);
        document.getElementsByName("id")[1].value = player.id;
        document.getElementsByName("code")[1].value = player.code;
        document.getElementsByName("name")[1].value = player.name;
        document.getElementsByName("sex")[1].value = player.sex;
        document.getElementsByName("age")[1].value = player.age;
        document.getElementsByName("country")[1].value = player.country;
        document.getElementsByName("marks")[1].value = player.marks;
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

function EditPlayer() {
    const id = parseInt(document.getElementsByName("id")[1].value);
    const code = document.getElementsByName("code")[1].value;
    const name = document.getElementsByName("name")[1].value;
    const sex = document.getElementsByName("sex")[1].value;
    const age = document.getElementsByName("age")[1].value;
    const country = document.getElementsByName("country")[1].value;
    const marks = document.getElementsByName("marks")[1].value;
    let editPlayerEvent = new CustomEvent("editPlayer", {
        detail: {
            id,
            code, 
            name,
            sex,
            age, 
            country,
            marks
        }
    });
    document.dispatchEvent(editPlayerEvent);
}

function ShowAddPlayer() {
    document.getElementById("add").style.display = "block";
}
