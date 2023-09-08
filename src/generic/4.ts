/*
	Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Component<T> {
	props: { title: T }
}

class Component<T> {
	constructor(public props: { title: T }) {

	}
}

class Page<T> extends Component<T> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export { };

