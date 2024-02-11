let boardsArray = [];
let boardsArrayFromLocalStorage = localStorage.getItem("boardsData");

if (boardsArrayFromLocalStorage) {
    boardsArray = JSON.parse(boardsArrayFromLocalStorage);
}

// let dropableCardContainer;
const addBoardForm = document.querySelector(".add-board-form-container");
const addBoardBtn = document.querySelector(".add-board-btn");

const boardsDiv = document.querySelector(".boards");
const addFormContainer = document.querySelector(".add-board-input-form-container");

// add board form display
addBoardBtn.addEventListener("click", () => {
    addBoardForm.style.display = "block";
});


// remove add board form
const removeAddBoardForm = () => {
    addBoardForm.style.display = "none";
}

// add board
const addBoard = (e) => {


    const boardName = e.parentNode.previousElementSibling.childNodes[1].value;
    if (!boardName) {
        alert("Please enter board name");
        return;
    }
    
    let boardId = localStorage.getItem('boardId');
    if (!boardId) {
        boardId = 101;
    }
    boardId = Number(boardId);
    let boardObj = {
        boardId: boardId,
        boardName: boardName,
        cardsData: [],
    }

    boardsArray.push(boardObj);
    localStorage.setItem("boardsData", JSON.stringify(boardsArray));
    boardId = boardId+1;
    localStorage.setItem("boardId", boardId);
    displayData();
    addBoardForm.style.display = "none";
}

// add card 
const addCardForm = (e, boardId) => {

    const taskCardContainet = e.parentNode.previousElementSibling;
    const addBoardFormDiv = document.createElement("div");
    addBoardFormDiv.setAttribute("class", "add-card-form-container");
    addBoardFormDiv.innerHTML = `<div class="add-board-input-container">
    <input type="text" name="" id="" placeholder="Enter Card Title">
</div>
<div class="add-board-form-btn-container">
    <button class="add-board-name-btn" onclick="addTaskCard(this, ${boardId})">Add</button>
    <button class="remove-board-form-btn" onclick="removeAddCardForm(this)">X</button>
</div>`;

    taskCardContainet.appendChild(addBoardFormDiv);
    e.style.display = 'none';

}

// remove add task card contents
const removeAddCardForm = (e) => {

    e.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].style.display = 'block';
    // addBoardForm.style.display = "block";
    e.parentNode.parentNode.remove();
}

// add task card
const addTaskCard = (e, boardId) => {
     
    const cardTitle = e.parentNode.previousElementSibling.childNodes[1].value;
    if (!cardTitle) {
        alert("please enter card Title");
        return;
    }

    let cardId = localStorage.getItem("cardId");
      
    if(!cardId) {
        cardId = 1001;
    }

    const myBoard = boardsArray.find(board => board.boardId === boardId);
    const index = boardsArray.findIndex(board => board.boardId === myBoard.boardId);
    let cardDataArray = boardsArray[index].cardsData;
    
    cardId = Number(cardId);
    let cardObj ={
        cardId: cardId,
        cardTitle: cardTitle
    }

    cardDataArray.push(cardObj);
    localStorage.setItem("boardsData", JSON.stringify(boardsArray));
    cardId = cardId+1;
    localStorage.setItem("cardId", cardId);

    displayData();
 
    e.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].style.display = "block";
    e.parentNode.parentNode.remove();

}


// remove board 
const removeBoard = (e) => {
    e.parentNode.parentNode.remove();
}

// remove card
const removeCard = (e, cardId) => {
  
    const updatedBoardsArray = boardsArray.map(board => {
        return {
            ...board,
            cardsData: board.cardsData.filter(card => card.cardId !== cardId)
        };
    });
    
    localStorage.setItem("boardsData", JSON.stringify(updatedBoardsArray));
    displayData();

}



// display data function   boardsDiv
const displayData = () => {
    // localStorage.clear();
    boardsDiv.innerHTML = "";
    const result = localStorage.getItem("boardsData");
    const allBoards = JSON.parse(result);
    let taskCardContainerId = 1;

    allBoards.forEach(board => {
        const createBoard = document.createElement("div");
        createBoard.setAttribute("class", "board");
        createBoard.innerHTML = `<div class="board-title-container">
        <p>${board.boardName}</p>
        <input type="hidden" name="myHiddenField" value="${board.boardId}">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
       </div>
       <div class="cards-conatiner">
        <div class="cards">
            
            <div class="task-card-container" id="taskCardContainer-${taskCardContainerId}">
                
            </div>
   
            <div class="add-card-btn-cotainer">
                <button class="add-card-btn" onclick="addCardForm(this, ${board.boardId})">Add Card</button>
            </div>
        </div>
       </div> `;
        boardsDiv.appendChild(createBoard);


        const taskCardContainerDiv = document.querySelector("#taskCardContainer-" + taskCardContainerId);

        board.cardsData.forEach((card) => {
            const createCard = document.createElement("div");
            createCard.setAttribute("class", "card");
            createCard.innerHTML = `
        <div class="card-title-container">
        <p class="card-title"></p>
        <input type="hidden" name="myHiddenField" value="${card.cardId}">
        <span class="remove-card-btn" onclick="removeCard(this, ${card.cardId})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        </span>
    </div>
    
    <div class="task-container">
        <p class="task">${card.cardTitle}</p>
    </div>

    <div class="more-btn-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
    </div>`;

            taskCardContainerDiv.appendChild(createCard);
        })

        taskCardContainerId++;

    });

    // add drag event on card  task-card-container
    const dropableCardContainer = document.querySelectorAll(".task-card-container")
    const dragableCards = document.querySelectorAll('.card');

    dragableCards.forEach(dragableCard => {

        dragableCard.addEventListener('dragstart', () => {
            console.log("drag start");
            dragableCard.classList.add("dragging");
        });

    })

    dropableCardContainer.forEach(dropableCard => {

        dropableCard.addEventListener('dragover', (e) => {
            console.log("drag over");
            e.preventDefault();

        });

        dropableCard.addEventListener('drop', () => {
            console.log("drop");
            const draggingCard = document.querySelector(".dragging");
            dropableCard.appendChild(draggingCard);
            draggingCard.classList.remove('dragging');
        })

    })

}

// documnt on load event
    document.addEventListener('DOMContentLoaded', displayData());


