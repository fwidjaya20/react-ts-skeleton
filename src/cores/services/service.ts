import { Store } from 'redux';
import { AppStore } from '@skeleton/web/store';

export abstract class Service {
	private store: Store;

	protected constructor() {
		this.store = AppStore;
	}

	protected getState(): Readonly<Store> {
		return this.store.getState();
	}

	protected dispatch(type: string, payload: any | null = null): void {
		this.store.dispatch({ type, payload });
	}
}
