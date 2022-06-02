const button1 = document.getElementById('add1');
const button2 = document.getElementById('add2');
const button3 = document.getElementById('add3');

button1.addEventListener('click', increaseGoal1)
async function increaseGoal1() {
    console.log('button 1')
    await fetch('/api/dashboard').then((response) => {
        console.log(response);
        return response.json()
    }).then(async (data) => {
        console.log(data.goal1_progress)
        console.log(data);
        const newGoal = data.goal1_progress + 1
        console.log(newGoal)
        const goalData = {
            goal1_progress: newGoal
        }
        await fetch('/api/dashboard/' + data.id, {
            method: "PUT",
            body: JSON.stringify(goalData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
    location.reload()
}

button2.addEventListener('click', increaseGoal2)
async function increaseGoal2() {
    console.log('button 2')
    await fetch('/api/dashboard').then((response) => {
        console.log(response);
        return response.json()
    }).then(async (data) => {
        console.log(data.goal2_progress)
        console.log(data);
        const newGoal = data.goal2_progress + 1
        console.log(newGoal);
        const goalData = {
            goal2_progress: newGoal
        }
        await fetch('/api/dashboard/' + data.id, {
            method: "PUT",
            body: JSON.stringify(goalData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
    location.reload();
}

button3.addEventListener('click', increaseGoal3)
async function increaseGoal3() {
    console.log('button 3');
    await fetch('/api/dashboard').then((response) => {
        console.log(response);
        return response.json()
    }).then(async (data) => {
        console.log(data.goal3_progress)
        console.log(data);
        const newGoal = data.goal3_progress + 1
        console.log(newGoal)
        const goalData = {
            goal3_progress: newGoal
        }
        await fetch('/api/dashboard/' + data.id, {
            method: "PUT",
            body: JSON.stringify(goalData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
    location.reload()
}