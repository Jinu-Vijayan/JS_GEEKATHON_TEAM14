/***************************************************************************************************************************************
 gerCurrentTabURL is an async function that fetch data regarding the current tab

 @return an object cotaining data regarding the currently active tab in the browser
***************************************************************************************************************************************/

export async function getCurrentTabURL(){
    let queryOption = {active : true, currentWindow : true};
    let [tab] = await chrome.tabs.query(queryOption);
    return tab;
}
