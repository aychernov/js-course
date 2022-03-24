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

a === b

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

## Оператор || (Или)
