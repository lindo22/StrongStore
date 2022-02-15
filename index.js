function mudarCorBotoes1(){
    const botao1 = document.querySelector("#kdaskdsaklsd")
    const botao2 = document.querySelector("#kdaskdsaklsds")
    const botao3 = document.querySelector("#kdaskdsaklsdd")


    if(botao1.classList.contains("selected"))
        console.log("s")
    else
        botao1.classList.add("selected")
        botao2.classList.remove("selected")
        botao3.classList.remove("selected")

    document.querySelector(".content-div-produtos").classList.add("dispFlex")
    document.querySelector(".content--produtos--regedit").classList.remove("dispFlex")
    document.querySelector(".premium").classList.remove("dispFlex")
    
}
function mudarCorBotoes2(){
    const botao1 = document.querySelector("#kdaskdsaklsd")
    const botao2 = document.querySelector("#kdaskdsaklsds")
    const botao3 = document.querySelector("#kdaskdsaklsdd")


    if(botao2.classList.contains("selected"))
        console.log("s")
    else
        botao2.classList.add("selected")
        botao1.classList.remove("selected")
        botao3.classList.remove("selected")


    document.querySelector(".content-div-produtos").classList.remove("dispFlex")
    document.querySelector(".content--produtos--regedit").classList.add("dispFlex")
    document.querySelector(".premium").classList.remove("dispFlex")
    

}
function mudarCorBotoes3(){
    const botao1 = document.querySelector("#kdaskdsaklsd")
    const botao2 = document.querySelector("#kdaskdsaklsds")
    const botao3 = document.querySelector("#kdaskdsaklsdd")


    if(botao3.classList.contains("selected"))
        console.log("s")
    else
        botao3.classList.add("selected")
        botao1.classList.remove("selected")
        botao2.classList.remove("selected")

    document.querySelector(".content-div-produtos").classList.remove("dispFlex")
    document.querySelector(".content--produtos--regedit").classList.remove("dispFlex")
    document.querySelector(".premium").classList.add("dispFlex")
    
}

