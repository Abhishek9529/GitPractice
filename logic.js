let btn = document.getElementById('addTask');
let input = document.getElementById('inputValue');
let taskList = document.getElementById('taskList');

// console.log(btn);
// console.log(input);
// console.log(taskList);

btn.addEventListener('click', function(){
    const task = input.value;

    if(task !== ''){
        const  listItem = document.createElement('li');
        listItem.textContent = task ;

        listItem.addEventListener('click', function(){
            listItem.style.textDecoration = 'line-through';
        });

        taskList.appendChild(listItem);
        input.value = '';
    }
});
