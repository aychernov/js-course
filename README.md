# JavaScript Course

JavaScript course

# 14.02 lesson 1 Введение

Самое важное: Выражения, функции, объекты.

Практически люб. сущность - объект

Массив - объект, функция - объект, число и строка - объект → (только ведут как объект, primitive)

console.log() - console → Object.

Log → Method (функция объекта)

Точечная запись - доступ к св-вам объект. Здесь - доступ к методу объекта.

() - Вызов функции ( метод console) внутри метода - аргумент.

Любая функция - возвращает значение

Выражение - возвращает значение

## Метод - св-во объекта, значение которого -функция

# 15.02 lesson 2 Переменные

Выражение с побочными действиями - side effects (возвращает значение и выполняет действие)

Переменные - дают повторный доступ к значениям

PascalCase - типы и классы

DB_PASSWORD - значения известны до запуска и не меняются

camelCase - все остальные переменные

//Объявление переменных

let - change variable

const - konstanta

var - global

let a - объявление

let a = 2 - присваивание

let b - undefined (нет значения)

const a = 20 (присваивание и объявление должно быть сразу)

# 21.02 lesson 3 Типы переменных

const a = 22 - number
const b = '22' - string

переменная -> имеет значение -> тип

## Примитивные типы

boolean
number string null undefined symbol

null - присваевается вручную (только)

undefined - достаточно объявить как (let a)

## Ссылочный тип - Object

Ссылка на переменную в другом месте. Переменная не хранит объект, а только ссылку на него.

arr = [1,2,3] - Переменная содержит только ссылку на область в памяти где находится массив (Массив - объект)

let a = {
a: 10,
b: '2'
}

## Динамическая типизация

### Cтатическая и динамическая типизация

String a = 'abc'

int b = 20 //Not js language

b = 'xyz' -> Error

Динамическая: a = 20 // number

a = '20' -> Ok // string

// Объявлять переменные до их использования. (Поднятие!) Использовать по возможности const

# 23.02 lesson 4 Объекты

Добавление св-тв к объекту -> obj.popular = true (Dot notation)

Меняем только объект! Переменная объекта так и содержит ссылку на объект. (Мутация)

const cpn = 'country'

obj[cpn] = 22 - bracket notation. Можно добавлять переменную в объект с указанием ее значения.

delete obj.country - удаление св-ва объекта
delete obj[cpn]

## Сокращенный формат записи

const name = 'alex'
const age = 22

const obj = {

name,

age

}

# Глобальные объекты lesson 5 25.05

window - в браузерах

global - в Node.js

globalThis - унификация глобального объекта

console.log = window.console.log

## Json - Javascript object notation

# 1.03 Мутация в js lesson 6

Мутирование копий объекта - происходит во всех объектах (потому что ссылочный тип, 1 объект и много ссылок на него)
const person = {
age: 22
}

const person2 = person
person2.age = 26

console.log(person.age) // 26
copy by referense

## Как избежать мутаций в объектах

сonst person2 = Object.assign( { }, person) - присваивает новый объект со сво-ми объекта person

Избегаем только корневые эл-ты!

## Способ 2

сonst person2 = { ...person } //Оператор разделения объекта на св-ва. Так же без вложенных объектов!

## Способ 3 c вложенными св-ми!

сonst person2 = JSON.parse( JSON.stringify ( person ) )

Ссылки на вложенные св-ва не сохраняются (объекты)

# 5.03 Функции

Функция - блок кода, который можно выполнять многократно

Функция может быть: Именованной, присвоена переменной, анонимной, аргументом при вызове другой функции, значением св-ва (метода) объекта.

let a = 5
let b = 10

function sum(a,b){
const c = a + b
console.log(c)
}

sum()

## Если функция не возвращает результат - вернёт undefined

## Внутри функции лучше не мутировать внешние объекты!!!

### Cоздание копии объекта

const personOne = {
age: 22
}

const updPerson = increaseAge(personOne)

function increaseAge(person) {

const updPerson = { ...person }
updPerson.age += 1
return updPerson

}

console.log(personOne.age);

console.log(updPerson.age);

# Колбэк функции

Когда одна функция вызывает другую (как параметр например)

## Функция - single purpose + pure подход

Функция возвращает undefined (если не задан return) !

# 12.03 Область видимости

Определяет границы действия переменной

Граница области - { } -> Блок кода

## Цепочка областей видимости

Изнутри в наружу

## Жизненный цикл переменных

Объясвляем перед использованием

const

Внутри функций не менять внешнюю область видимости.

## Строгий режим ( 'use strict' )

Запрещает также использование необъявленых переменных

# 17.03 Операторы

Символьные или текстовые (delete, typeof, instanceof, new, etc)

Арифмитические

Сравнения (===)

Логические

Присваивания ( = )

## Присваивание

a = 10
а - Операнд, 10 - операнд

## Унарные и бинарные операнды

Унарные - имеют только один аргумент

a++

Бинарные - имеют 2 аргумента(операнда) (left hand and right hand)

a = = = b

## Форматы записи операторов

Префиксные, инфиксные

### Инфиксная запись (между операндов)

a = true

a + b

### Префиксная запись

++a

typeof a

### Постфиксная запись

a++

myFunction() () - оператор вызова функции

## Приоритетность операторов

## Логические операторы

! - не (Возвращает true или false)

&& - и

|| - или

(Возвращают значение одного из операндов)

## Проверка с оператором typeof

typeof 10 = 'number' // true

## Ложные значения

Boolean(value) -> false

1. false
2. 0
3. ''
4. undefined
5. null (явное отсутствие значения)

## Оператор НЕ ( ! )

!10 = false
!0 = true
!'abc' = false
!'' = true
!true = false
!undefined = true

### Двойное отрицание. Если исходное значение правдиво, то !! всегда дает true

let a = {} // !!a = true

!!10 = true etc.

## Оператор && (И) КОРОТКОЕ ЗАМЫКАНИЕ - находит ЛОЖЬ и дальше не "смотрит код". Сразу возвращает значение

Выражение1 && Выражение2

Если Выражение1 ложно, то:

1."Выражение2" игнорируется
2.Возвращает результат "Выражение1"

Если Выражение1 НЕ ложно, то:
Рассматриваем Выражение2

Если Выражение2 ложно - то возвращаем его результат

Если Выражение2 истино - тоже return результат Выражение2

## Оператор || (Или) КОРОТКОЕ ЗАМЫКАНИЕ - находит ИСТИНА и дальше не "смотрит код". Сразу возвращает значение

Если Выражение1 истина, то:

1."Выражение2" игнорируется
2.Возвращает результат "Выражение1"

Если Выражение1 ложь, то:

1."Выражение1" игнорируется
2.Возвращает результат "Выражение2"

## Трюк с оператором И и вызовом функции

## Цепочки с & ||

## Оператор "..." разделения объекта на св-ва


## Конкатенация строк

### Шаблонные строки - можно использовать js внутри
const hello = 'hello'
const world = 'world'

const greetings = ` ${hello} ${world} `


# Функциональное выражение
Отсутствует имя функции. Всегда анонимные.
НЕЛЬЗЯ использовать автономно.

setTimeout(function () {
  console.log('hello')
}, 2000) -> Нет необходимости давать функции имя

## Стрелочные функции
(a,b) => {
  let c
  a = a + 1
  c = a + b
  return c
}

## СИНТАКСИС ЯВНОГО И НЕ ЯВНОГО ВОЗВРАТА
x => y // Неявный возврат

x => {return y} // Явный возврат

(x, y, z) => {...} // Несколько аргументов

async () => {...} // Функции функции Async arrow

(() => {...}) () // Выражение функции с немедленным вызовом

const myFunc = x

=> x * 2 // Разрыв строки перед тем, как стрелка вызовет ошибку «Неожиданный токен»

const myFunc = x =>

x * 2 // Разрыв строки после того, как стрелка является допустимым синтаксисом

## Если один параметр - можно без скобок
a => {

  // Тело функции

}


## Если одно выражение - без фигурных скобок
(a,b) => a + b

Но тогда значение возвращает НЕЯВНО


## Значение параметров функции по умолчанию
ЯВНОЕ И НЕ ЯВНОЕ значение вывода, отработать

# Обработка ошибок
## Try Catch метод ловли ошибок

const fnError = () => {

  throw new Error('Error')

}



try {

  fnError()

} catch (err) {

  console.error(err)
  console.log(err.message)

}

# Инструкции
Выражение, Инструкция, Выражение - инструкция, (Иструкция не бывает выражением!)

Выражение возвращает значение.

Инструкция - выполняет действие.

let a - инструкция

## Выражение - инструкция

"abc"; - выражение инструция (точка с запятой)

### Выражения могут быть использованы как аргументы в вызовах функции!



# Массивы - объект. Прототип - Array
const arr = [1,2,3]

const arr2 = new Array(1,2,3) экзэмпляр класса Массив

## Методы массивов (функция высшего порядка, метод (функция) прототипа)

1. Push - добавление в конец массива
2. Pop - удаление из конца масива + возвращает удаленный элемент
3. Unshift - добавление в начало массива
4. Shift - удаляет первый элемент массива

Методы мутируют оригинальный массив

## forEach - аргумент -> функция. Перебирает все элементы массива. Оригинальынй массив НЕ МЕНЯЕТ. Возвращает undefined.



## Map - так же колбэк функция в аргументе. Перебирает все элементы и возвращает НОВЫЙ массив.


const arr = [1, 2, 3]
console.log(arr);

const newarr = arr.map(el => el + "3")
  
console.log(newarr);

### ЯВНЫЙ ВОЗВРАТ 
const newarr = arr.map(el => {

  return el * 3

})
# Деструктуризация объекта - создание переменных на основе св-в объекта. Объявление автоматически.

const user = {

  age: 23,

  number: 222

}

const { age, number } = user

console.log(age) // 23

# Деструктуризация массивов - создание переменных на основе индекса массива. Объявление автоматически.

const arr = [1, 2, 3]

const [one, two] = arr

console.log(one); // 1


# Деструктуризация параметров функции.
const age = 21

const obj = {

  age,
  name: "Alex"

}

const userinfo = ({ age, name }) => {

  return `This ${name} has this age ${age} `

}

console.log(userinfo(obj));


# Условные инструкции

if (условие) {
  Блок выполняющийся ОДНОКРАТНО если условие правдиво
}

Задача - привести к булевому значению.


if (!val), if - else if - else

Если используется множественное if - нужно учитывать диапозоны проверок

## Использование if в функциях
Если одно из условий выполнится - дальше проверки нет. Можно использовать множественные IF. 

## Инструкция SWITCH
switch (выражение) {

  case A: // если выр === А

    break

  case B: // если выр === В

    break

  default: // Действие по умолчанию

} 
Используется при например выборе из множ-ва значений.

# Тернарный оператор. Имеет 3 операнда. Конструкция с тернарным оператом - выражение(возвращает значение)

Условие ? Выражение1 : Выражение2

Тоже самое что и IF но используется только ВЫРАЖЕНИЯ.


# Циклы - для повторяющихся действий.

## Цикл For
for ( Начальная инструкия; Условие; Итерационное действие ) {
  Код выполняющийся для на каждой итерации
}

# Цикл forEach - для перебора массивов
const arr = [1, 2, 3]

arr.forEach ( ( element, index) => {

  console.log(element, index);

});

# Цикл While - может ни разу не выполнится

while(Условие) {

  // some code

}

# Do while - выполнится 1 раз точно

do {

 //some code 

}

while (условие)

# Цикл For in для объектов

for (key in Object) {

  // Действие с каждым св-ом объекта

  // Значение св-ва - Object[key]

}

# forEach для объектов
const obj = {

  age,

  name

}

# Object.keys & Object.value превращают obj в массив
Object.keys(obj).forEach ( key => {

  console.log(key, obj[key]);

})


# Цикл For in для массивов
const arr = [1, 3, 3]

for (const key in arr) {
  console.log(arr[key]);
}


# Цикл for of (ES6) Перебор символов. НЕ ДЛЯ ОБЪЕКТОВ
for (Element of Iterable){
  
  Действие с определенным элементом

}

## Цикл for of для массива (FOR EACH IS BETTER!)

const arr = [1, 2, 3]

for (el of arr) {

  console.log(el);

}


# Модули - позволяют структурировать код и позволяют избежать дублирование кода. ES6 - export, import

## Импорт и экспорт
import{
  one,

  two

}

export{

  one as newOne,

  two

}


# Классы и прототипы ES6
class Comment {

  constructor(text) {

    this.text = text

    this.vote = 0

  }

  upVote() {

    return this.vote += 1

  }
}

const firstComm = new Comment("hello")

firstComm.upVote()

console.log(firstComm);

## Классы позволяют создавать прототипы для объектов. На основании прототипов создают экземпляры. Могут иметь собственные св-ва и методы. Так же наследуют св-ва и методы прототипов.



## Переменная this указывает на экземпляр класса.

# new - оператор создания экземпляра.

## Цепочка прототипов - цепочка наследования.

# instanceof - оператор проверки принадлежности.


# Проверка принадлежности св-тв экземпляру объекта.
 firstComm.hasOwnProperty('text') // true

 firstComm.hasOwnProperty('upvote') // false -> апвоут НЕ СОБСТВЕННЫЙ метод объекта Firstcomm (наследуется от род класса Comment)


# Статические методы -> доступен как св-во и НЕ НАСЛЕДУЕТСЯ экземплярами класса.

  static mergeComm(first, sec) {

    return `${first} ${sec}`

  }


# Расширение других классов. Указывать конструктор не нужно, он наследуется. EXTENDS.

class NumberArr extends Array {}

### Строки и числа ведут себя как объекты.


# ПРОМИСЫ
