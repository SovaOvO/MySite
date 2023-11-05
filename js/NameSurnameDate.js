const node_for_click = document.getElementById("for_click")
function find_edit() {
    const span5 = document.getElementsByTagName('span')[5]
    console.log(span5.innerText)
    span5.innerText = 'ZINOVEVA'


    const span6 = document.getElementsByTagName('span')[6]
    console.log(span6.innerText)
    span6.innerText = 'KSENIA'


    const span11 = document.getElementsByTagName('span')[11]
    console.log(span11.innerText)
    span11.innerText = 'II.O8.ZOOH'
}
node_for_click.addEventListener("click",find_edit)