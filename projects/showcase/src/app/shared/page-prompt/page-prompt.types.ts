export interface PagePromptElement {
	id: string;
	label: string;
	description: string;
	selectedByDefault?: boolean;
}

export interface PagePromptConfig {
	pageTitle: string;
	sourcePath: string;
	description: string;
	elements: PagePromptElement[];
}
