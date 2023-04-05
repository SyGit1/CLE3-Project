window.addEventListener('load', init);

apiUrl = "api.php?id=1"

function init(){
    ajaxRequest(apiUrl, ajaxSuccesHandler)
}

function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

function ajaxSuccesHandler(data){
    console.log(data[])

}

function ajaxErrorHandler(data){
    console.error("error")
    console.log(data)
}