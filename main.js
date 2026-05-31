window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const productionApiUrl = 'https://bg-http-trigger.azurewebsites.net/api/HttpTrigger1?';

const getVisitCount = () => {
    let count = 30;
    fetch(productionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        count = response;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.error("Failed to fetch visit count:", error);
    });
    return count;
}