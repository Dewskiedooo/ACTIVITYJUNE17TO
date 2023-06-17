
async function getUserCount(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getusercount');
    //Convert the data to JSON Object
    const jsonData = await response.json();
    //Set the data in the html element
    document.getElementById("user_count").innerHTML = jsonData.user_count;
}
/**
 * get data from the dashboard
 */

function getDashboardData(){
    //getting user count
    getUserCount()
}



window.onload = getDashboardData;