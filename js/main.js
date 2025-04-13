// Створити масив з трьох чисел. 
// Змінити значення другого елемента масиву на 10.

const array1= [7, 12, 777];
array1[1] = 10;
console.log(array1);



// Створити масив із трьох рядків. 
// Додати до масиву ще одну рядків.

const array2 = ["Stephen Curry", "LeBron James", "Michael Jordan"];
array2[3] = "Vadim";
console.log(array2);



// Створити скрипт який поверне суму всіх чисел в масиві.
const array3= [7, 12, 777];
let sum = 0
for (let i = 0; i < array3.length; i += 1) {
sum += array3[i]
}
console.log(sum);



// Створити масив з 5-ти чисел. 
// Вивести на екран всі елементи масиву за допомогою циклу for.
const array4 = [8, 9, 10, 11, 12];
for (let i = 0; i < array4.length; i += 1) {
    console.log(array4[i]);
}



// Створити масив із 5-ти рядків. 
// Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const array5 = ["Elon Musk", "Vadim", "Albert Einstein", "Isaac Newton", "Nazar"];
for (let i = 0; i < array5.length; i += 1) {
    if (array5[i].length > 5) {
        console.log(array5[i]);
    }
}



// Створити масив з 10-ти чисел. 
// Знайти та вивести на екран максимальне значення з масиву.
const array6 = [7, 12, 10, 11, 9, 777, 23, 24, 30, 100]
const max = Math.max(...array6);
console.log(max);



// Створити масив з 10-ти чисел. 
// Знайти всі парні числа в масиві та вивести їх на екран.
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array7.length; i += 1) {
    if (array7[i] % 2 === 0) {
        console.log(array7[i]);
        
    }
}