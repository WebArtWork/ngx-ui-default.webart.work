import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccordionComponent, AccordionPanelComponent } from '@wawjs/ngx-ui';

interface SidebarGroup {
	label: string;
	items: { label: string; routerLink: string }[];
}

@Component({
	selector: 'uk-sidebar',
	imports: [AccordionComponent, AccordionPanelComponent, RouterLink, RouterLinkActive],
	templateUrl: './uikit-sidebar.html',
	styleUrl: './uikit-sidebar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitSidebar {
	protected readonly groups: SidebarGroup[] = [
		{
			label: 'Form',
			items: [
				{ label: 'Input', routerLink: '/form/input' },
				{ label: 'Select', routerLink: '/form/select' },
				{ label: 'Checkbox', routerLink: '/form/checkbox' },
				{ label: 'RadioButton', routerLink: '/form/radiobutton' },
				{ label: 'Textarea', routerLink: '/form/textarea' },
				{ label: 'ToggleSwitch', routerLink: '/form/toggleswitch' },
				{ label: 'InputNumber', routerLink: '/form/inputnumber' },
				{ label: 'Password', routerLink: '/form/password' },
				{ label: 'ColorPicker', routerLink: '/form/colorpicker' },
				{ label: 'DatePicker', routerLink: '/form/datepicker' },
				{ label: 'Editor', routerLink: '/form/editor' },
				{ label: 'MultiSelect', routerLink: '/form/multiselect' },
				{ label: 'FileUpload', routerLink: '/form/fileupload' },
				{ label: 'Form Layout', routerLink: '/form/form-layout' },
				{ label: 'File', routerLink: '/form/file-composite' },
			],
		},
		{
			label: 'Button',
			items: [{ label: 'Button', routerLink: '/button/button' }],
		},
		{
			label: 'Data',
			items: [
				{ label: 'Table', routerLink: '/data/table' },
				{ label: 'OrderList', routerLink: '/data/orderlist' },
				{ label: 'Timeline', routerLink: '/data/timeline' },
				{ label: 'Timeline (Composite)', routerLink: '/data/timeline-composite' },
			],
		},
		{
			label: 'Overlay',
			items: [
				{ label: 'Dialog', routerLink: '/overlay/dialog' },
				{ label: 'ConfirmDialog', routerLink: '/overlay/confirmdialog' },
				{ label: 'ConfirmPopup', routerLink: '/overlay/confirmpopup' },
				{ label: 'Tooltip', routerLink: '/overlay/tooltip' },
			],
		},
		{
			label: 'Layout',
			items: [
				{ label: 'Card', routerLink: '/layout/card' },
				{ label: 'Accordion', routerLink: '/layout/accordion' },
				{ label: 'Divider', routerLink: '/layout/divider' },
			],
		},
		{
			label: 'Navigation',
			items: [
				{ label: 'Breadcrumb', routerLink: '/navigation/breadcrumb' },
				{ label: 'Menu', routerLink: '/navigation/menu' },
				{ label: 'Menubar', routerLink: '/navigation/menubar' },
				{ label: 'Tabs', routerLink: '/navigation/tabs' },
			],
		},
		{
			label: 'Feedback',
			items: [
				{ label: 'Toast', routerLink: '/feedback/toast' },
				{ label: 'ProgressBar', routerLink: '/feedback/progressbar' },
				{ label: 'ProgressSpinner', routerLink: '/feedback/progressspinner' },
				{ label: 'Badge', routerLink: '/feedback/badge' },
				{ label: 'Tag', routerLink: '/feedback/tag' },
				{ label: 'MeterGroup', routerLink: '/feedback/metergroup' },
			],
		},
		{
			label: 'Media',
			items: [
				{ label: 'Avatar', routerLink: '/media/avatar' },
				{ label: 'Chart', routerLink: '/media/chart' },
				{ label: 'Chart Dashboard', routerLink: '/media/chart-dashboard' },
			],
		},
		{
			label: 'Misc',
			items: [{ label: 'Chip', routerLink: '/misc/chip' }],
		},
	];
}
