var alpha = (Number(prompt("Nhập góc alpha")) *Math.PI)/180
var b = Number(prompt("Nhập cạnh b"))
var c = Number(prompt("Nhập cạnh c"))


var a = Math.sqrt(Math.pow(b,2)+Math.pow(c,2)-Math.cos(alpha))

console.log(alpha)
console.log(a.toFixed(2))