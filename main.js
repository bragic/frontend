window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const productionApiUrl = 'https://bg-http-trigger.azurewebsites.net/api/HttpTrigger1?';
const localApiUrl = 'http://localhost:7071/api/HttpTrigger1';

const getVisitCount = () => {
    let count = 30;
    fetch(productionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}