interface Tasks {
    id: number;
    title: string;
    status: string;
    startDate: string;
    endDate: string;
}

function SaveTasks() {

    var Ptitle = (document.getElementById("title") as HTMLInputElement).value;
    var Pstatus = (document.getElementById("status") as HTMLInputElement).value;
    var PstartDate = (document.getElementById("startDate") as HTMLInputElement).value;
    var PendDate = (document.getElementById("endDate") as HTMLInputElement).value;
    var count = 0;
    


    var taskItems: Tasks = {
        id : count, 
        title: Ptitle,
        status: Pstatus,
        startDate: PstartDate,
        endDate: PendDate,
    };

    var Tasks = localStorage.getItem("Tasks")
    var taskData = Tasks ? JSON.parse(Tasks) : [];

    taskData.push(taskItems);


    localStorage.setItem("Tasks", JSON.stringify(taskData));

    viewTasks();

}

function viewTasks() {

    var view : any = document.getElementById("listTasks");
    view.innerHTML = ""; // Clear existing content

    var tasks = localStorage.getItem("Tasks")
    var taskData = tasks ? JSON.parse(tasks) : [];

    if (view) {
        for (let i = 0; i < taskData.length; i++) {
           
                view.innerHTML += `
                <div class="container">
                <div class="card style="padding: 10%;"">
        <h4>Task Name: ${taskData[i].title}<h4>
        <h4>Task Description: ${taskData[i].status}<h4>
        <h4>Start Date: ${taskData[i].startDate}<h4>
        <h4>Deliver Date: ${taskData[i].endDate}<h4>
        <button class="btn btn-danger btn-sm mt-2" onclick="deleteTask(${i})">Delete</button>
        </div>
        </div>
        `;
            
        }
    }

}
viewTasks();

function deleteTask(index) {
    let taskitem : any= localStorage.getItem("Tasks");
    let tasks = JSON.parse(taskitem) || [];
    tasks.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    viewTasks();
}
