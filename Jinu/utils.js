/***************************************************************************************************************************************
 gerCurrentTabURL function finds out the URL of the tab on which you have your browser is focused on
***************************************************************************************************************************************/

export async function getCurrentTabURL(){
    let queryOption = {active : true, currentWindow : true};
    let [tab] = await chrome.tabs.query(queryOption);
    return tab;
}
