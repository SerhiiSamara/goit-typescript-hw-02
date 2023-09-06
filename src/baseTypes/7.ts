/*
	Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
	і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayType {
	MONDAY = 'weekday',
	TUESDAY = 'weekday',
	WEDNESDAY = 'weekday',
	THURSDAY = 'weekday',
	FRIDAY = 'weekday',
	SATURDAY = 'weekend',
	SUNDAY = 'weekend',
}

function isWeekend(day: DayType) {
	if (day === 'weekend') {
		return true;
	} else {
		return false;
	}
}