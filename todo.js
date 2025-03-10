function SaveTasks() {
    var Ptitle = document.getElementById("title").value;
    var Pstatus = document.getElementById("status").value;
    var PstartDate = document.getElementById("startDate").value;
    var PendDate = document.getElementById("endDate").value;
    var count = 0;
    var taskItems = {
        id: count,
        title: Ptitle,
        status: Pstatus,
        startDate: PstartDate,
        endDate: PendDate,
    };
    var Tasks = localStorage.getItem("Tasks");
    var taskData = Tasks ? JSON.parse(Tasks) : [];
    taskData.push(taskItems);
    localStorage.setItem("Tasks", JSON.stringify(taskData));
    viewTasks();
}
function viewTasks() {
    var view = document.getElementById("listTasks");
    view.innerHTML = ""; // Clear existing content
    var tasks = localStorage.getItem("Tasks");
    var taskData = tasks ? JSON.parse(tasks) : [];
    if (view) {
        for (var i = 0; i < taskData.length; i++) {
            view.innerHTML += "\n                <div class=\"container\">\n                <div class=\"card style=\"padding: 10%;\"\">\n        <h4>Task Name: ".concat(taskData[i].title, "<h4>\n        <h4>Task Description: ").concat(taskData[i].status, "<h4>\n        <h4>Start Date: ").concat(taskData[i].startDate, "<h4>\n        <h4>Deliver Date: ").concat(taskData[i].endDate, "<h4>\n        <button class=\"btn btn-danger btn-sm mt-2\" onclick=\"deleteTask(").concat(i, ")\">Delete</button>\n        </div>\n        </div>\n        ");
        }
    }
}
viewTasks();
function deleteTask(index) {
    var taskitem = localStorage.getItem("Tasks");
    var tasks = JSON.parse(taskitem) || [];
    tasks.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    viewTasks();
}
