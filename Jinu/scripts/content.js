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

            currentVideoBookMarks = currentVideoBookMarks.filter((bookmark) => bookmark.time != value);

            chrome.storage.sync.set({[currentVideo] : JSON.stringify(currentVideoBookMarks)});
            response(currentVideoBookMarks);
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

    newVideoLoaded();

    async function addNewBookmarkHandler(){
        const currTime = youtubePlayer.currentTime;
        const descTime = getTimeInStandardFormat(currTime);
        
        const newBookmark = {
            "time" : currTime,
            "desc" : `Bookmark at ${descTime}`
        }

        currentVideoBookMarks = await fetchBookMarks();
        console.log("bookmarks",currentVideoBookMarks);
        chrome.storage.sync.set({
            [currentVideo] : JSON.stringify([...currentVideoBookMarks,newBookmark].sort((a,b) => a.time - b.time))
        });
    }

})()

function getTimeInStandardFormat(currTime){
    const hour = Math.floor(currTime / 3600) < 10 ? `0${Math.floor(currTime / 3600)}` : Math.floor(currTime / 3600);
    const min = Math.floor(currTime / 60) % 60 < 10 ? `0${Math.floor(currTime / 60) % 60}` : Math.floor(currTime / 60) % 60;
    const sec = Math.floor(currTime % 60) < 10 ? `0${Math.floor(currTime % 60)}` : Math.floor(currTime % 60);

    return `${hour}:${min}:${sec}`
}
