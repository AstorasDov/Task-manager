const addBtn = document.querySelector('div#search');

const userData = {
    addingTask : false
}

const sleep = (time) => new Promise(resolve=>setTimeout(resolve,time));

const closeInput = async () => {
    const input = addBtn.querySelector('input');
    input.value = "";
    await sleep(50);
    addBtn.style.width = "75px";;
    input.remove();
    addBtn.innerText = "add";
    userData.addingTask = false;
};

addBtn.addEventListener("click", (e) => {
    const { addingTask } = userData;
    if (!addingTask) {
        addBtn.innerText = "";

        const input = document.createElement("input");
        input.placeholder = "Add a new task";
        input.type = "text";
        const inputStyles = {
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            border: "none",
            borderRadius: "20px",
            fontSize: "20px",
            padding: "0.5em"
        };Object.assign(input.style, inputStyles);

        addBtn.style.width = "250px";
        addBtn.style.padding = "5px";
        addBtn.appendChild(input);

        input.onblur = closeInput;
        input.addEventListener("keydown",(e)=>{
            if(e.key === "Enter"){input.blur();}
        });

        userData.addingTask = true;
    }
});

document.body.addEventListener('touchstart', async (e) => {
    if(e.target === document.body && userData.addingTask){
        closeInput();
    }
});

document.body.addEventListener('click', async (e) => {
    if(e.target === document.body && userData.addingTask){
        closeInput();
    }
});
