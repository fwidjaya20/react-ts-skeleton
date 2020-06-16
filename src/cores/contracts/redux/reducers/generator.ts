export function reducerGenerator(initialState: State, reducers: any) {
	return (state = initialState, action: Action) => {
		return reducers[action.type]
			? reducers[action.type](state, action.payload)
			: state;
	};
}
