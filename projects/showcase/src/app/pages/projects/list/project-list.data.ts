export interface ProjectSummary {
	name: string;
	client: string;
	progress: number;
	dueDate: string;
	status: 'success' | 'warning' | 'info';
	statusLabel: string;
}

export const PROJECT_SUMMARIES: ProjectSummary[] = [
	{ name: 'Website Redesign', client: 'Acme Corp', progress: 78, dueDate: 'Sep 4, 2026', status: 'success', statusLabel: 'On Track' },
	{ name: 'Mobile App Launch', client: 'Globex', progress: 42, dueDate: 'Oct 12, 2026', status: 'warning', statusLabel: 'At Risk' },
	{ name: 'Data Migration', client: 'Initech', progress: 95, dueDate: 'Aug 28, 2026', status: 'success', statusLabel: 'On Track' },
	{ name: 'Marketing Site', client: 'Umbrella', progress: 15, dueDate: 'Nov 2, 2026', status: 'info', statusLabel: 'Planning' },
];
