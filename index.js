const ujJatekGomb=document.querySelector("#ujjatek")
const jatekterElem=document.getElementsByClassName("jatekter")
console.log(jatekterElem)
ujJatekGomb.addEventListener("click",megjelenit)

function megjelenit(){
    const htmlKod=`
        <div id="gep">
            <h2>A gép tippje</h2>
            <div class="kep">
                <img src="kepek/ko.PNG" alt="oliverpapirollo">
             </div>
            </div>
            <div id="jatekos">
                <h2>A játékos tippje:</h2>
            <div class="kep">
                <img src="kepek/ollo.PNG" alt="oliverpapirollo">
            </div>
                <div class="gombok"></div>
                <button id="ko">K</button>
                <button id="ko">P</button>
                <button id="ko">O</button>
            </div>
        </div>
    `
    jatekterElem[0].innerHTML=""
    jatekterElem[0].insertAdjacentHTML("beforeend",htmlKod)
    const jatekGombok=document.querySelectorAll(".gombok button")
    jatekGombok[0].addEventListener("click",kivalaszt)
    jatekGombok[1].addEventListener("click",kivalaszt)
    jatekGombok[2].addEventListener("click",kivalaszt)
}

function kivalaszt(event){
    console.log(evet.target.id)
}