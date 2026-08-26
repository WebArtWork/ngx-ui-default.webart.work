export interface ProjectActivity {
	status: string;
	date: string;
	icon: string;
	color: string;
}

export const PROJECT_ACTIVITY: ProjectActivity[] = [
	{ status: 'Project Created', date: 'Jun 1, 2026', icon: 'folder_open', color: '#60a5fa' },
	{ status: 'Design Phase Completed', date: 'Jul 3, 2026', icon: 'palette', color: '#a78bfa' },
	{ status: 'Development Started', date: 'Jul 10, 2026', icon: 'code', color: '#facc15' },
	{ status: 'QA in Progress', date: 'Aug 20, 2026', icon: 'search', color: '#22c55e' },
];

export interface ProjectTaskRow {
	task: string;
	assignee: string;
	status: 'success' | 'warning' | 'info';
	statusLabel: string;
}

export const PROJECT_TASK_ROWS: ProjectTaskRow[] = [
	{ task: 'Finalize homepage layout', assignee: 'Ada Lovelace', status: 'success', statusLabel: 'Done' },
	{ task: 'Wire up checkout API', assignee: 'Grace Hopper', status: 'info', statusLabel: 'In Progress' },
	{ task: 'Write onboarding emails', assignee: 'Alan Turing', status: 'warning', statusLabel: 'Blocked' },
	{ task: 'Accessibility audit', assignee: 'Margaret Hamilton', status: 'info', statusLabel: 'In Progress' },
];
