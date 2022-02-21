import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  createIncompleteList(inputText);
};

const deleteFromCompleteList = (deleteTarget) => {
  document.getElementById("inCompleteList").removeChild(deleteTarget);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  const ul = document.createElement("ul");
  ul.className = "listRow";
  // console.log(ul);

  const li = document.createElement("li");
  li.innerText = text;

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const deleteTarget = backButton.parentNode;
    document.getElementById("completeList").removeChild(deleteTarget);
    const text = backButton.parentNode.firstElementChild.innerText;
    createIncompleteList(text);
  });

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromCompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("completeList").appendChild(addTarget);
    // console.log(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromCompleteList(deleteButton.parentNode);
  });

  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  document.getElementById("inCompleteList").appendChild(ul);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
