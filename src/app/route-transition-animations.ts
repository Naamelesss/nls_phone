import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const routeTransitionAnimation = trigger('triggerName', [
    // transition('home => app, app => home', [
    //     style({ position: 'relative' }),
    //     query(':enter', [style({ right: '-100%', opacity: 0 })]),
    //     query(':leave', animateChild()),
    // ])




    transition('home => app', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ transform: 'scale(0)'})]),
		group([
			query(':enter', [animate('0.4s ease-in-out', style({ transform: 'scale(1)'}))])
		]),
		// query(':enter', animateChild())
	]),


	transition('app => home', [
		style({ position: 'relative' }),
		query(':leave', [
			style({
				position: 'absolute',
				'z-index': 1,
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':leave', [style({ top: '0' })]),
		group([
			query(':leave', [animate('0.8s ease-in-out', style({ top: '-800px' }))])
		]),
	]),



    // transition('app => home', [
	// 	style({ position: 'relative' }),
	// 	query(':enter, :leave', [
	// 		style({
	// 			position: 'absolute',
	// 			top: '600px',
	// 			right: 0,
	// 			width: '100%'
	// 		})
	// 	]),
	// 	query(':enter', [style({ top: '600px' })]),
	// 	// query(':leave', animateChild()),
	// 	group([
	// 		// query(':leave', [animate('1s ease-out', style({ bottom: '100%', opacity: 0 }))]),
	// 		query(':enter', [animate('0.2s ease-in-out', style({ top: '0px' }))])
	// 	]),
	// 	// query(':enter', animateChild())
	// ])
]);