export async function GuestGuard(): Promise<boolean | string> {
	const token = localStorage.getItem('_token');

	if (token) {
		return '/';
	}

	return true;
}
