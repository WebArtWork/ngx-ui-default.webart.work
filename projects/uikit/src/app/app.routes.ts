import { Routes } from '@angular/router';
import { UikitShell } from './layout/shell/uikit-shell';

export const routes: Routes = [
	{
		path: '',
		component: UikitShell,
		children: [
			{ path: '', redirectTo: 'button/button', pathMatch: 'full' },
			{
				path: 'form/input',
				loadComponent: () => import('./pages/form/input/input-demo').then((m) => m.InputDemo),
			},
			{
				path: 'form/select',
				loadComponent: () => import('./pages/form/select/select-demo').then((m) => m.SelectDemo),
			},
			{
				path: 'form/checkbox',
				loadComponent: () => import('./pages/form/checkbox/checkbox-demo').then((m) => m.CheckboxDemo),
			},
			{
				path: 'form/radiobutton',
				loadComponent: () =>
					import('./pages/form/radiobutton/radiobutton-demo').then((m) => m.RadioButtonDemo),
			},
			{
				path: 'form/textarea',
				loadComponent: () => import('./pages/form/textarea/textarea-demo').then((m) => m.TextareaDemo),
			},
			{
				path: 'form/toggleswitch',
				loadComponent: () =>
					import('./pages/form/toggleswitch/toggleswitch-demo').then((m) => m.ToggleSwitchDemo),
			},
			{
				path: 'form/inputnumber',
				loadComponent: () =>
					import('./pages/form/inputnumber/inputnumber-demo').then((m) => m.InputNumberDemo),
			},
			{
				path: 'form/password',
				loadComponent: () => import('./pages/form/password/password-demo').then((m) => m.PasswordDemo),
			},
			{
				path: 'form/colorpicker',
				loadComponent: () =>
					import('./pages/form/colorpicker/colorpicker-demo').then((m) => m.ColorPickerDemo),
			},
			{
				path: 'form/datepicker',
				loadComponent: () =>
					import('./pages/form/datepicker/datepicker-demo').then((m) => m.DatePickerDemo),
			},
			{
				path: 'form/editor',
				loadComponent: () => import('./pages/form/editor/editor-demo').then((m) => m.EditorDemo),
			},
			{
				path: 'form/multiselect',
				loadComponent: () =>
					import('./pages/form/multiselect/multiselect-demo').then((m) => m.MultiSelectDemo),
			},
			{
				path: 'form/fileupload',
				loadComponent: () =>
					import('./pages/form/fileupload/fileupload-demo').then((m) => m.FileUploadDemo),
			},
			{
				path: 'button/button',
				loadComponent: () => import('./pages/button/button/button-demo').then((m) => m.ButtonDemo),
			},
			{
				path: 'data/table',
				loadComponent: () => import('./pages/data/table/table-demo').then((m) => m.TableDemo),
			},
			{
				path: 'data/orderlist',
				loadComponent: () => import('./pages/data/orderlist/orderlist-demo').then((m) => m.OrderListDemo),
			},
			{
				path: 'data/timeline',
				loadComponent: () => import('./pages/data/timeline/timeline-demo').then((m) => m.TimelineDemo),
			},
			{
				path: 'overlay/dialog',
				loadComponent: () => import('./pages/overlay/dialog/dialog-demo').then((m) => m.DialogDemo),
			},
			{
				path: 'overlay/confirmdialog',
				loadComponent: () =>
					import('./pages/overlay/confirmdialog/confirmdialog-demo').then((m) => m.ConfirmDialogDemo),
			},
			{
				path: 'overlay/confirmpopup',
				loadComponent: () =>
					import('./pages/overlay/confirmpopup/confirmpopup-demo').then((m) => m.ConfirmPopupDemo),
			},
			{
				path: 'overlay/tooltip',
				loadComponent: () => import('./pages/overlay/tooltip/tooltip-demo').then((m) => m.TooltipDemo),
			},
			{
				path: 'layout/card',
				loadComponent: () => import('./pages/layout/card/card-demo').then((m) => m.CardDemo),
			},
			{
				path: 'layout/accordion',
				loadComponent: () => import('./pages/layout/accordion/accordion-demo').then((m) => m.AccordionDemo),
			},
			{
				path: 'layout/divider',
				loadComponent: () => import('./pages/layout/divider/divider-demo').then((m) => m.DividerDemo),
			},
			{
				path: 'navigation/breadcrumb',
				loadComponent: () =>
					import('./pages/navigation/breadcrumb/breadcrumb-demo').then((m) => m.BreadcrumbDemo),
			},
			{
				path: 'navigation/menu',
				loadComponent: () => import('./pages/navigation/menu/menu-demo').then((m) => m.MenuDemo),
			},
			{
				path: 'navigation/menubar',
				loadComponent: () => import('./pages/navigation/menubar/menubar-demo').then((m) => m.MenubarDemo),
			},
			{
				path: 'navigation/tabs',
				loadComponent: () => import('./pages/navigation/tabs/tabs-demo').then((m) => m.TabsDemo),
			},
			{
				path: 'feedback/toast',
				loadComponent: () => import('./pages/feedback/toast/toast-demo').then((m) => m.ToastDemo),
			},
			{
				path: 'feedback/progressbar',
				loadComponent: () =>
					import('./pages/feedback/progressbar/progressbar-demo').then((m) => m.ProgressBarDemo),
			},
			{
				path: 'feedback/progressspinner',
				loadComponent: () =>
					import('./pages/feedback/progressspinner/progressspinner-demo').then(
						(m) => m.ProgressSpinnerDemo,
					),
			},
			{
				path: 'feedback/badge',
				loadComponent: () => import('./pages/feedback/badge/badge-demo').then((m) => m.BadgeDemo),
			},
			{
				path: 'feedback/tag',
				loadComponent: () => import('./pages/feedback/tag/tag-demo').then((m) => m.TagDemo),
			},
			{
				path: 'feedback/metergroup',
				loadComponent: () =>
					import('./pages/feedback/metergroup/metergroup-demo').then((m) => m.MeterGroupDemo),
			},
			{
				path: 'media/avatar',
				loadComponent: () => import('./pages/media/avatar/avatar-demo').then((m) => m.AvatarDemo),
			},
			{
				path: 'media/chart',
				loadComponent: () => import('./pages/media/chart/chart-demo').then((m) => m.ChartDemo),
			},
			{
				path: 'misc/chip',
				loadComponent: () => import('./pages/misc/chip/chip-demo').then((m) => m.ChipDemo),
			},
			{
				path: 'form/form-layout',
				loadComponent: () =>
					import('./pages/form/form-layout/form-layout-demo').then((m) => m.FormLayoutDemo),
			},
			{
				path: 'form/file-composite',
				loadComponent: () =>
					import('./pages/form/file-composite/file-composite-demo').then((m) => m.FileCompositeDemo),
			},
			{
				path: 'data/timeline-composite',
				loadComponent: () =>
					import('./pages/data/timeline-composite/timeline-composite-demo').then(
						(m) => m.TimelineCompositeDemo,
					),
			},
			{
				path: 'media/chart-dashboard',
				loadComponent: () =>
					import('./pages/media/chart-dashboard/chart-dashboard-demo').then(
						(m) => m.ChartDashboardDemo,
					),
			},
			{
				path: 'design-lab',
				loadComponent: () => import('./pages/design-lab/design-lab').then((m) => m.DesignLab),
			},
		],
	},
	{ path: '**', redirectTo: '' },
];
