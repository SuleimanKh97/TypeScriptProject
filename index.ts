interface Tasks {
    id: number;
    title: string;
    states: string;
    startDate: string;
    endDate: string;
}



var puplicTitle: unknown = document.getElementById("title");
var puplicStates: unknown = document.getElementById("states");
var puplicStartDate: unknown = document.getElementById("startDate");
var puplicEndDate: unknown = document.getElementById("endDate");




var viewTasks: Tasks[] = JSON.parse(localStorage.getItem("tasks") || "[]");

function getTasksFunction() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function displayTasks() {
    const listTasks = document.getElementById('listTasks') as HTMLDivElement;
    listTasks.innerHTML = '';
    getTasksFunction().forEach((tasks) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<strong>${tasks.title}</strong><br>${tasks.states}<br>Price: $${tasks.endDate}<br>Quantity: ${tasks.startDate}`;
        listTasks.appendChild(card);
    });
}


(<HTMLInputElement>document.getElementById("taskForm")).addEventListener("submit", function (event) {

    event.preventDefault();
    var title = (<HTMLInputElement>puplicTitle).value;
    var states = (<HTMLInputElement>puplicStates).value;
    var startDate = (<HTMLInputElement>puplicStartDate).value;
    var endDate = (<HTMLInputElement>puplicEndDate).value;


    if (!title || !states || !startDate || !endDate) {
        alert("Please fill all the fields");
    }
    else {



        var tasks: Tasks = {
            id: viewTasks.length + 1,
            title: title,
            states: states,
            startDate: startDate,
            endDate: endDate
        }
        viewTasks.push(tasks);
        localStorage.setItem("tasks", JSON.stringify(viewTasks));
        console.log(viewTasks);
        (<HTMLFormElement>document.getElementById("taskForm")).reset();
        location.reload();
    }
}
)

displayTasks();
