const bill = document.querySelector(".bill")
const custom = document.querySelector(".custom")
const number = document.querySelector(".number")
const A1 = document.querySelector(".A1")
const A2 = document.querySelector(".A2")
const A3 = document.querySelector(".A3")
const A4 = document.querySelector(".A4")
const A5 = document.querySelector(".A5")
const result1 = document.querySelector(".result1")
const result2 = document.querySelector(".result2")
const reset = document.querySelector(".reset")
let x = 0.05
let y = 0.1
let z = 0.15
let s = 0.25
let m = 0.5

A1.addEventListener("click", () => {
    const tipamount = (bill.value*x)/number.value
    result1.innerHTML = tipamount.toFixed(2)
    const totale = (bill.value/number.value)+tipamount
    result2.innerHTML = totale.toFixed(2)
})
A2.addEventListener("click", () => {
    const tipamount = (bill.value*y)/number.value
    result1.innerHTML = tipamount.toFixed(2)
    const totale = (bill.value/number.value)+tipamount
    result2.innerHTML = totale.toFixed(2)
})
A3.addEventListener("click", () => {
    const tipamount = (bill.value*z)/number.value
    result1.innerHTML = tipamount.toFixed(2)
    const totale = (bill.value/number.value)+tipamount
    result2.innerHTML = totale.toFixed(2)
})
A4.addEventListener("click", () => {
    const tipamount = (bill.value*s)/number.value
    result1.innerHTML = tipamount.toFixed(2)
    const totale = (bill.value/number.value)+tipamount
    result2.innerHTML = totale.toFixed(2)
})
A5.addEventListener("click", () => {
    const tipamount = (bill.value*m)/number.value
    result1.innerHTML = tipamount.toFixed(2)
    const totale = (bill.value/number.value)+tipamount
    result2.innerHTML = totale.toFixed(2)
})
custom.addEventListener("input", () => {
    let customValue = custom.value
    const tipamount = (bill.value*customValue/100)/number.value
    result1.innerHTML = tipamount.toFixed(2)
    const totale = (bill.value/number.value)+tipamount
    result2.innerHTML = totale.toFixed(2)
})
reset.addEventListener("click", () => {
    
})











function isnumber(bill){
    return /^\d+$/.test(bill)
}