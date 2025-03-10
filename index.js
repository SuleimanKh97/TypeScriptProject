var puplicTitle = document.getElementById("title");
var puplicStates = document.getElementById("states");
var puplicStartDate = document.getElementById("startDate");
var puplicEndDate = document.getElementById("endDate");
var viewTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
function getTasksFunction() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}
function displayTasks() {
    var listTasks = document.getElementById('listTasks');
    listTasks.innerHTML = '';
    getTasksFunction().forEach(function (tasks) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = "<strong>".concat(tasks.title, "</strong><br>").concat(tasks.states, "<br>Price: $").concat(tasks.endDate, "<br>Quantity: ").concat(tasks.startDate);
        listTasks.appendChild(card);
    });
}
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var title = puplicTitle.value;
    var states = puplicStates.value;
    var startDate = puplicStartDate.value;
    var endDate = puplicEndDate.value;
    if (!title || !states || !startDate || !endDate) {
        alert("Please fill all the fields");
    }
    else {
        var tasks = {
            id: viewTasks.length + 1,
            title: title,
            states: states,
            startDate: startDate,
            endDate: endDate
        };
        viewTasks.push(tasks);
        localStorage.setItem("tasks", JSON.stringify(viewTasks));
        console.log(viewTasks);
        document.getElementById("taskForm").reset();
        location.reload();
    }
});
displayTasks();
