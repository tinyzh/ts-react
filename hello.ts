let flag:boolean = false

let pets:(string|number)[] = ['123',123]

enum sex{
    BOY='男',
    GIRL='女'
}

let btn:any = document.querySelector('.app')
btn.style.color = 'black'

function say(name:string):void{
    console.log(name)
}

function ajax(url:string,method:string='GET'):any{

}

class Person {
    name:string
    age: number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    say():string{
        return 'hello' + this.name
    }
}

abstract class Animal{
    abstract eat():void
}

class animal extends Animal{
    eat(){}
}

interface infoInterface{
    name: string,
    age: number,
    city?: string
}

function getUserInfo(user:infoInterface){
    console.log(`${user.name}${user.age}`)
}

class Man implements infoInterface{
    name: string
    age: number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}