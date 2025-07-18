const addBtn = document.querySelector('div#search');

const userData = {
    addingTask : false
}

addBtn.addEventListener("click", (e) => {
    const { addingTask } = userData;
    if (!addingTask) {
        addBtn.innerText = "";

        const input = document.createElement("input");
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


        const closeInput = () => {
            input.value = "";
            setTimeout(()=>{addBtn.style.width = "75px";},500);
            setTimeout(()=>{
                input.remove();
                addBtn.innerText = "add";
                userData.addingTask = false;
            },1000);
        };input.onblur = closeInput;
        input.addEventListener("keydown",(e)=>{
            if(e.key === "Enter"){input.blur();}
        });

        userData.addingTask = true;
    }
});
