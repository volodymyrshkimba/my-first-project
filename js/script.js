/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const minutes = 70;
// let message;

// if (minutes >= 0 && minutes < 15) {
// 	message = `first 0-15`;
// } else if (minutes >= 15 && minutes < 30) {
// 	message = `second 15-30`;
// } else if (minutes >= 30 && minutes < 45) {
// 	message = `third 30-45`;
// } else if (minutes >= 45 && minutes < 60) {
// 	message = `forth 45-60`;
// } else { message = `not a hour`; };

// console.log(message);

//  =============================================================================================================================
//  =============================================================================================================================

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }


// const number = Number(prompt('Введіть число між 0 та 3'));

// switch (number) {
// 	case 0: console.log('Ви ввели число 0');
// 		break;
// 	case 1: console.log('Ви ввели число 1');
// 		break;
// 	case 2:
// 	case 3: console.log('Ви ввели число 2, може й 3');
// 		break;
// 	default: console.log('Ви ввели якесь інше число');
// }


//  =============================================================================================================================
//  =============================================================================================================================


/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'free';
// let canAccessContent = sub.includes('pro') || sub.includes('vip');

// console.log('Чи є доступ до контенту?', canAccessContent);


//  =============================================================================================================================
//  =============================================================================================================================


// Функція createReversedArray() може приймати довільну кількість аргументів.Доповни код функції так, щоб вона повертала масив усіх аргументів,
// 	але в масиві вони повинні йти у зворотному порядку.Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].Використовуй цикл або метод масиву toReversed(),
// 		який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// Оголошена функція createReversedArray()
// Виклик функції createReversedArray(12, 85, 37, 4) повертає [4, 37, 85, 12]
// Виклик функції createReversedArray(164, 48, 291) повертає [291, 48, 164]
// Виклик функції createReversedArray(412, 371, 94, 63, 176) повертає [176, 63, 94, 371, 412]
// Виклик функції createReversedArray() повертає []

// function createReversedArray() {

// 	const argArray = Array.from(arguments);
	
// 	let revArray = [];

// 	for (let i = argArray.length - 1; i >= 0; i--) {
// 		revArray.push(argArray[i]);
// 	}
	
// 	return revArray;

// }

// console.log(createReversedArray(12, 85, 37, 4));


//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = +rectSides[0] * +rectSides[1];

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// console.log('numbers: ', numbers);

// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log('Парне:', number);
// 		total += number;
// 	}
// }

// console.log('total: ', total);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// console.log(namesArray);
// const phonesArray = phones.split(',');
// console.log(phonesArray);

// const index = prompt('Enter index') - 1;
// console.log(namesArray[index], phonesArray[index]);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';
// console.log(string);

// const stringArr = string.split(' ');
// console.log(stringArr);

// const newString = `${stringArr.slice(1, stringArr.length - 1).join(' ')}`;


// console.log(newString);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];

// let min = values[0];

// for (let i = 1; i < values.length; i++) {
	
// 	if (min > values[i]) {
// 		min = values[i];
// 	}
// }
	
// 	console.log(min);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let total = 0;

// for (const managerSal of managerSalaries) {
// 	total += managerSal;
// }

// for (const developersSal of developersSalaries) {
// 	total += developersSal;
// }

// console.log(total);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const rectSidesArr = dimensions.split(' ');

//   return +rectSidesArr[0] * +rectSidesArr[1];
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// const checkCaseOfLetter = function (letter) {
//   // if (letter === letter.toLowerCase()) {
//   //   return 'lower case';
//   // } else {
//   //   return 'upper case';
//   // }

//   return letter === letter.toLowerCase() ? 'lower case' : 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// const changeCaseOfLetters = function (str) {
//   const lettersArr = str.split('');
//   let resultedStr = '';

//   console.log(lettersArr);

//   for (const letter of lettersArr) {
//     if (letter === letter.toLowerCase()) {
//       resultedStr = resultedStr + letter.toUpperCase();
//     } else {
//       resultedStr = resultedStr + letter.toLowerCase();
//     }
//   }

//   return resultedStr;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// function logItems(items) {

// 	for (let i = 0; i < items.length; i++)
// 		console.log(`${i + 1}. ${items[i]}`);

// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

// function printInfo(names, phones) {
// 	const namesArr = names.split(',');
// 	console.log(namesArr);
// 	const phonesArr = phones.split(',');
// 	console.log(phonesArr);

// 	for (let i = 0; i < namesArr.length; i++) {
// 		console.log(`${i + 1}. ${namesArr[i]}, ${phonesArr[i]}`);
// 	}
// }

// printInfo('Jacob,William,Solomon,Ar temis', '89001234567,89001112233,890055566377,890055566300');

//  =============================================================================================================================
//  =============================================================================================================================

/*
? Метод splice().
?
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// console.log(courses);

// function addCourse(name) {
	
// 	if (!(courses.includes(name))) {
// 		courses.splice(courses.length, 0, name);
// 	} else {
// 		console.log('У вас вже є такий курс');
// 	}

// }

// function removeCourse(name) {
	 
// 	if (courses.includes(name)) {
// 		courses.splice(courses.indexOf(name), 1);
// 	} else {
// 		console.log('Курс з такою назвою не знайдено');
// 	}

// }

// function updateCourse(oldName, newName) {
	 
// 	if (courses.includes(oldName)) {
// 		courses.splice(courses.indexOf(oldName), 1, newName);
// 	} else {
// 		console.log('Курс з такою назвою не знайдено');
// 	}
		
	

// }


// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// TODO =============================================================================================================================
// TODO =============================================================================================================================

/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? - email - пошта, рядок
? - age - вік, число
? - numberOfPosts - кількість постів, число
? - topics - масив тем на яких спеціалізується блогер
?
? Клас чекає 4 параметри - email, age, numberOfPosts, topics.
?
? - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts} posts.
? - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

// const mango = new Blogger('mango@mail.com', 24, 20, ['tech', 'cooking']);

// console.log(mango);

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger('poly@mail.com', 19, 17, ['sports', 'gaming']);

// console.log(poly);

// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

// TODO =============================================================================================================================
// TODO =============================================================================================================================

/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через
? гетер та сетер login та email.
 */

// const mango = new User('Mango', 'mango@dog.woof');

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// console.log(mango.email); // mango@dog.woof
// mango.email = 'gaatke@fucvod.com';
// console.log(mango.email); // gaatke@fucvod.com

// const poly = new User('Poly', 'poly@mail.com');

// console.log(poly);

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// TODO =============================================================================================================================
// TODO =============================================================================================================================

/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// TODO =============================================================================================================================
// TODO =============================================================================================================================

//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас WorkerPosition, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.
// const data = [10, 20, 30, 40, 50, 60];
// const alphData = ["a", "b", "c", "d", "e"];

// Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)
// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 }
// ];

// Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно
// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив