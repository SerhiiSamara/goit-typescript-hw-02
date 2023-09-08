/*
	Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
	Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T extends unknown, U extends unknown> {
	key: T;
	value: U;
}

export { };