export interface TaskCard {
	id: string;
	title: string;
	assignee: string;
}

export const TODO_TASKS: TaskCard[] = [
	{ id: 't1', title: 'Design empty states', assignee: 'Ada Lovelace' },
	{ id: 't2', title: 'Draft release notes', assignee: 'Grace Hopper' },
	{ id: 't3', title: 'Spike: offline mode', assignee: 'Alan Turing' },
];

export const IN_PROGRESS_TASKS: TaskCard[] = [
	{ id: 't4', title: 'Wire up checkout API', assignee: 'Grace Hopper' },
	{ id: 't5', title: 'Accessibility audit', assignee: 'Margaret Hamilton' },
];

export const DONE_TASKS: TaskCard[] = [
	{ id: 't6', title: 'Finalize homepage layout', assignee: 'Ada Lovelace' },
	{ id: 't7', title: 'Set up CI pipeline', assignee: 'Katherine Johnson' },
];
