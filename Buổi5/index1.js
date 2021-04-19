//array
var array = ['anime', 'lightnovel', 2004, 11]
array.push('Minh')
array.splice(2,0,'cool')
console.log(array)
console.log(array[1])


//object
var Hien = {
    hovsten: "Hiền",
    ny: "true",
    glasses: "Có kính màu xám",
    laptop: "Hiền dùng acer",
    tshirt: "hiền mặc áo trắng"
}
console.log(Hien)
console.log(Hien.ny)

Hien.ny = "false"
console.log(Hien.ny)

delete Hien.glasses
console.log(Hien)


//for
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
//function
function sayHello(name){
    console.log('Hello' +" "+ name)
}

sayHello("world")