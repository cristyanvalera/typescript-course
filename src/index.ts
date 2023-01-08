// Basic types
let id: number = 5
let myName: string = "Cristyan"
let isMarried: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'Cristyan', true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Cristyan'],
    [2, 'Yusmely'],
    [3, 'Crismely'],
]

// Union Types
let pid: string | number
pid = '22'

// Enum Number
enum DirectionNumber {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

// Enum String
enum DirectionString {
    Up = 'Arriba',
    Down = 'Abajo',
    Left = 'Izquierda',
    Right = 'Derecha',
}

console.log(DirectionNumber.Up)
console.log(DirectionString.Up)

// Objects
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNumber(x: number, y: number): number {
    return x + y
}

const substractNumber = (x: number, y: number) => {
    return x - y
}

const log = (message: string | number): void => {
    console.log(message)
}

log("La suma de 123.50 + 30.20")
log(addNumber(123.50, 30.20))

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number,
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

user1.age = 41

console.log("ID: ", user1.id)
console.log("Name: ", user1.name)
console.log("Edad: ", user1.age)

// Ejemplo de interface con funciones
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    readonly id: number
    name: string
    register(): string
}

// Class
class Person implements PersonInterface {
    // Nivel de visibilidad
    // Aplican los mismos principios de visibilidad de la OOP
    // public: por defecto
    // private: solo se puede acceder desde el interior de la clase
    // protected: solo se puede acceder desde la clase padre
    //            y desde las subclases
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(): string {
        return `${this.name} is now registered`
    }
}

const cris = new Person(1, 'Cristyan')
const mely = new Person(2, 'Yusmely')

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Juan", "Dev")
console.log(emp.position)
console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>([
    'Cristyan', 'Yusmely', 'Crismely',
])

strArray.push('Hola')

console.log(numArray, strArray)
