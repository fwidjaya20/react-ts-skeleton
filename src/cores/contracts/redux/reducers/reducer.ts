import { reducerGenerator } from './generator';

export abstract class Reducer<T extends State> {
	public readonly initialState: T;

	protected constructor(state: T) {
		this.initialState = state;
	}

	public abstract get actions(): {
		[key: string]: (state: T, payload?: any) => T;
	};

	public build(): any {
		return reducerGenerator(this.initialState, this.actions);
	}
}
