(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    let currentVideoBookMarks = [];

    chrome.runtime.onMessage.addListener((message, sender, response) => {
        const {type , value, videoId} = message;

        if(type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded()
        } else if(type === "PLAY"){
            youtubePlayer.currentTime = value;
        } else if(type === "DELETE") {

            chrome.storage.sync.get([currentVideo],(data) => {
                currentVideoBookMarks = JSON.parse(data[currentVideo]);
                // console.log("from storage", currentVideoBookMarks)
                // console.log("before filtering",currentVideoBookMarks);
                currentVideoBookMarks = currentVideoBookMarks.filter((bookmark) => bookmark.time != value);
                // console.log("after filter",currentVideoBookMarks);

                chrome.storage.sync.set({[currentVideo] : JSON.stringify(currentVideoBookMarks)});
                // response(currentVideoBookMarks);
            })

            // console.log("before filtering",currentVideoBookMarks);
            // currentVideoBookMarks = currentVideoBookMarks.filter((bookmark) => bookmark.time != value);
            // console.log("after filter",currentVideoBookMarks);

            // chrome.storage.sync.set({[currentVideo] : JSON.stringify(currentVideoBookMarks)});
            // response(currentVideoBookMarks);
        }
    })

    function fetchBookMarks(){
        return new Promise((resolve) => {
            chrome.storage.sync.get([currentVideo], (obj) => {
                resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
            })
        })
    }

    async function newVideoLoaded () {
        const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
        currentVideoBookMarks = await fetchBookMarks();

        
        if (!bookmarkBtnExists) {
            const bookmarkBtn = document.createElement("img");

            bookmarkBtn.src = chrome.runtime.getURL("../images/bookmark.png");
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "Click to bookmark current timestamp";

            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];
            
            youtubeLeftControls.append(bookmarkBtn);
            bookmarkBtn.addEventListener("click", addNewBookmarkHandler);
        }
    }

    function getNameOFBookMark(newBookmark){
    
        const youtubeDisplay = document.querySelector("ytd-app");
    
        const nameFormContainer = document.createElement("form");
        const nameInput = document.createElement("input");
        const saveBtn = document.createElement("button");
    
    
        nameFormContainer.style.zIndex = 10;
        nameFormContainer.style.position = "absolute"
        nameFormContainer.style.top = "10%";
        nameFormContainer.style.left = "50%";
        nameFormContainer.style.backgroundColor = "white";
        nameFormContainer.style.padding = "0.625rem";
        nameFormContainer.style.borderRadius = "0.625rem"
        nameFormContainer.style.boxShadow = "-5px 5px 2px 2px #8c8b8b"
    
        nameInput.value = newBookmark.desc;
    
        saveBtn.textContent = "save";
        saveBtn.style.marginLeft = "0.625rem"
    
        youtubeDisplay.style.position = "relative";
    
        saveBtn.addEventListener("click", (e) => {

            e.preventDefault();
    
            const nameForm = e.target.parentNode;
        
            newBookmark.desc = nameForm.children[0].value;

            chrome.storage.sync.set({
                [currentVideo] : JSON.stringify([...currentVideoBookMarks,newBookmark].sort((a,b) => a.time - b.time))
            });
        
            nameForm.parentNode.removeChild(nameForm);
        });
    
        nameFormContainer.append(nameInput,saveBtn);
        youtubeDisplay.append(nameFormContainer);
    }

    
    async function addNewBookmarkHandler(){
        const currTime = youtubePlayer.currentTime;
        const descTime = getTimeInStandardFormat(currTime);


        const newBookmark = {
            "time" : currTime,
            "desc" : `Bookmark at ${descTime}`
        }


        currentVideoBookMarks = await fetchBookMarks();

        getNameOFBookMark(newBookmark);

        // chrome.storage.sync.set({
        //     [currentVideo] : JSON.stringify([...currentVideoBookMarks,newBookmark].sort((a,b) => a.time - b.time))
        // });

        // chrome.storage.sync.get([currentVideo],(data) => {
        //     console.log(JSON.parse(data[currentVideo]));
        // })
    }

    let trail="&ytExt=ON";
    if(!window.location.href.includes(trail)&&!window.location.href.includes("ab_channel")&&window.location.href.includes("youtube.com/watch")){
            window.location.href+=trail;
    }

})()

function getTimeInStandardFormat(currTime){
    const hour = Math.floor(currTime / 3600) < 10 ? `0${Math.floor(currTime / 3600)}` : Math.floor(currTime / 3600);
    const min = Math.floor(currTime / 60) % 60 < 10 ? `0${Math.floor(currTime / 60) % 60}` : Math.floor(currTime / 60) % 60;
    const sec = Math.floor(currTime % 60) < 10 ? `0${Math.floor(currTime % 60)}` : Math.floor(currTime % 60);

    return `${hour}:${min}:${sec}`
}
