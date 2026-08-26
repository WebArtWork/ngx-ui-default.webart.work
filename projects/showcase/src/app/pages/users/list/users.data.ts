export interface UserRow {
	id: number;
	name: string;
	email: string;
	role: 'Admin' | 'Editor' | 'Viewer';
	status: 'success' | 'secondary';
}

export const USERS: UserRow[] = [
	{ id: 1, name: 'Ada Lovelace', email: 'ada@example.com', role: 'Admin', status: 'success' },
	{ id: 2, name: 'Grace Hopper', email: 'grace@example.com', role: 'Editor', status: 'success' },
	{ id: 3, name: 'Alan Turing', email: 'alan@example.com', role: 'Viewer', status: 'secondary' },
	{ id: 4, name: 'Margaret Hamilton', email: 'margaret@example.com', role: 'Editor', status: 'success' },
	{ id: 5, name: 'Katherine Johnson', email: 'katherine@example.com', role: 'Admin', status: 'success' },
	{ id: 6, name: 'Dorothy Vaughan', email: 'dorothy@example.com', role: 'Viewer', status: 'secondary' },
];
