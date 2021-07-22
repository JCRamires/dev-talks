importScripts("./utils.js")

onmessage = (event) => {
    console.info("Recebi mensagem da thread principal")
    console.log(event)
    mySlowFunction()
    console.info("Retornando resultado para a thread principal")
    postMessage({ nome: "Worker" })
}