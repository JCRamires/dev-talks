window.addEventListener("DOMContentLoaded", event => {
    const webWorker = new Worker('js/workers/webWorker.js');

    webWorker.onmessage = event => {
        console.info("Recebi mensagem do worker")
        console.log(event)
    }
    
    function callWorker(event) {
        console.info("Enviando mensagem para o worker")
        webWorker.postMessage({ nome: "JC" })
    }

    function binds() {
        const callWorkerButtonElement = document.querySelectorAll(".js-call-worker")
        const slowFunctionMainButtonElement = document.querySelectorAll(".js-slow-function-main")
    
        callWorkerButtonElement[0].addEventListener("click", callWorker)
        slowFunctionMainButtonElement[0].addEventListener("click", event => {
            mySlowFunction()
        })
    }

    const boxElement = document.querySelectorAll(".box-element")[0]
    let isBlue = true
    function setBoxColor() {
        if (isBlue) {
            boxElement.classList.add("red")
        } else {
            boxElement.classList.remove("red")
        }
        
        isBlue = !isBlue
    }

    setInterval(setBoxColor, 500)

    binds()
})