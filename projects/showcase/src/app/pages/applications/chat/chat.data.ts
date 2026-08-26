export interface ChatContact {
	id: string;
	name: string;
	initials: string;
	lastMessage: string;
}

export const CHAT_CONTACTS: ChatContact[] = [
	{ id: 'c1', name: 'Ada Lovelace', initials: 'AL', lastMessage: 'Sounds good, thanks!' },
	{ id: 'c2', name: 'Grace Hopper', initials: 'GH', lastMessage: 'Pushed the fix.' },
	{ id: 'c3', name: 'Alan Turing', initials: 'AT', lastMessage: 'Can we sync tomorrow?' },
];

export interface ChatMessage {
	from: 'me' | 'them';
	text: string;
	time: string;
}

export const CHAT_MESSAGES: ChatMessage[] = [
	{ from: 'them', text: 'Hey! Did you get a chance to look at the PR?', time: '09:12' },
	{ from: 'me', text: "Yep, looks good — left a couple of small comments.", time: '09:14' },
	{ from: 'them', text: 'Sounds good, thanks!', time: '09:15' },
];
