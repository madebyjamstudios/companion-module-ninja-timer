const { combineRgb } = require('@companion-module/base')
const icons = require('./icons')

const COLOR = {
	BLUE: combineRgb(31, 111, 235), // #1f6feb - primary
	GREEN: combineRgb(34, 197, 94), // #22c55e - play/success
	YELLOW: combineRgb(234, 179, 8), // #eab308 - warning
	ORANGE_RED: combineRgb(230, 74, 25), // #E64A19 - stop/danger
	DARK_BG: combineRgb(10, 10, 10), // #0a0a0a
	SEC_BG: combineRgb(26, 26, 26), // #1a1a1a
	ELEV_BG: combineRgb(51, 51, 51), // #333333
	INDIGO: combineRgb(99, 102, 241), // #6366f1
	PINK: combineRgb(236, 72, 153), // #ec4899
	VIOLET: combineRgb(139, 92, 246), // #8b5cf6
	WHITE: combineRgb(255, 255, 255),
	BLACK: combineRgb(0, 0, 0),
	RED: combineRgb(239, 68, 68), // #ef4444
}

module.exports = {
	getPresets() {
		const presets = {}

		// =============================================
		// 1. Timer — Playback controls + duration
		// =============================================

		presets['toggle'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Play/Pause Toggle',
			style: {
				text: 'TOGGLE',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.DARK_BG,
				png64: icons.PLAY_PAUSE,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'toggle' }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'running',
					style: {
						bgcolor: COLOR.GREEN,
						color: COLOR.BLACK,
					},
				},
				{
					feedbackId: 'paused',
					style: {
						bgcolor: COLOR.YELLOW,
						color: COLOR.BLACK,
					},
				},
			],
		}

		presets['start'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Start Timer',
			style: {
				text: 'START',
				size: '14',
				color: COLOR.BLACK,
				bgcolor: COLOR.GREEN,
				png64: icons.PLAY,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'start' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['pause'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Pause Timer',
			style: {
				text: 'PAUSE',
				size: '14',
				color: COLOR.BLACK,
				bgcolor: COLOR.YELLOW,
				png64: icons.PAUSE,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'pause' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['reset'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Reset Timer',
			style: {
				text: 'RESET',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.RESET,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'reset' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['stop'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Stop Timer',
			style: {
				text: 'STOP',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.STOP,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'stop' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['add_1min'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Add 1 Minute',
			style: {
				text: '+1:00',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: 60 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['sub_1min'] = {
			type: 'button',
			category: '1. Timer',
			name: 'Subtract 1 Minute',
			style: {
				text: '-1:00',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: -60 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['duration_5min'] = {
			type: 'button',
			category: '1. Timer',
			name: '5 Minutes',
			style: {
				text: '5:00',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.CLOCK,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'setDuration5min' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// =============================================
		// 2. Select — Timer selection + navigation
		// =============================================

		presets['prev_timer'] = {
			type: 'button',
			category: '2. Select',
			name: 'Previous Timer',
			style: {
				text: 'PREV',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.PREV,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'previousTimer' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['next_timer'] = {
			type: 'button',
			category: '2. Select',
			name: 'Next Timer',
			style: {
				text: 'NEXT',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.NEXT,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'nextTimer' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['timer_select'] = {
			type: 'button',
			category: '2. Select',
			name: 'Select Timer',
			style: {
				text: 'TIMER\\n$(ninja-timer:timer_index)',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.TIMER,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'selectTimer', options: { index: 1 } }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'timerSelected',
					options: { index: 1 },
					style: {
						bgcolor: COLOR.BLUE,
					},
				},
			],
		}

		// =============================================
		// 3. Display — Live info + display controls
		// =============================================

		presets['time_display'] = {
			type: 'button',
			category: '3. Display',
			name: 'Time Display',
			style: {
				text: '$(ninja-timer:time)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.DARK_BG,
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'running',
					style: {
						color: COLOR.GREEN,
					},
				},
				{
					feedbackId: 'overtime',
					style: {
						color: COLOR.RED,
					},
				},
				{
					feedbackId: 'ended',
					style: {
						color: COLOR.RED,
						bgcolor: combineRgb(50, 0, 0),
					},
				},
			],
		}

		presets['timer_name'] = {
			type: 'button',
			category: '3. Display',
			name: 'Timer Name',
			style: {
				text: 'TIMER\\n$(ninja-timer:timer_name)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
			},
			steps: [],
			feedbacks: [],
		}

		presets['duration_display'] = {
			type: 'button',
			category: '3. Display',
			name: 'Duration Display',
			style: {
				text: 'DURATION\\n$(ninja-timer:duration_formatted)',
				size: '14',
				color: combineRgb(150, 150, 150),
				bgcolor: COLOR.SEC_BG,
				png64: icons.CLOCK,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [],
			feedbacks: [],
		}

		presets['state_display'] = {
			type: 'button',
			category: '3. Display',
			name: 'Timer State',
			style: {
				text: 'STATE\\n$(ninja-timer:state)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'running',
					style: {
						bgcolor: COLOR.GREEN,
						color: COLOR.BLACK,
					},
				},
				{
					feedbackId: 'paused',
					style: {
						bgcolor: COLOR.YELLOW,
						color: COLOR.BLACK,
					},
				},
				{
					feedbackId: 'ended',
					style: {
						bgcolor: COLOR.ORANGE_RED,
					},
				},
				{
					feedbackId: 'overtime',
					style: {
						bgcolor: COLOR.ORANGE_RED,
					},
				},
			],
		}

		presets['mode_display'] = {
			type: 'button',
			category: '3. Display',
			name: 'Timer Mode',
			style: {
				text: 'MODE\\n$(ninja-timer:timer_mode)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'modeCountdown',
					style: {
						bgcolor: COLOR.BLUE,
					},
				},
				{
					feedbackId: 'modeCountup',
					style: {
						bgcolor: COLOR.GREEN,
						color: COLOR.BLACK,
					},
				},
				{
					feedbackId: 'modeTod',
					style: {
						bgcolor: COLOR.YELLOW,
						color: COLOR.BLACK,
					},
				},
			],
		}

		presets['warning_indicator'] = {
			type: 'button',
			category: '3. Display',
			name: 'Warning Zone Indicator',
			style: {
				text: 'WARNING',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.WARNING,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'warningYellow',
					style: {
						bgcolor: COLOR.YELLOW,
						color: COLOR.BLACK,
					},
				},
				{
					feedbackId: 'warningOrange',
					style: {
						bgcolor: COLOR.ORANGE_RED,
					},
				},
			],
		}

		presets['blackout'] = {
			type: 'button',
			category: '3. Display',
			name: 'Blackout Toggle',
			style: {
				text: 'BLACKOUT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
			},
			steps: [
				{
					down: [{ actionId: 'blackoutToggle' }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'blackout',
					style: {
						bgcolor: COLOR.BLACK,
						color: COLOR.RED,
					},
				},
			],
		}

		presets['flash'] = {
			type: 'button',
			category: '3. Display',
			name: 'Flash Display',
			style: {
				text: 'FLASH',
				size: '14',
				color: COLOR.BLACK,
				bgcolor: COLOR.YELLOW,
				png64: icons.FLASH,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'flash' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// =============================================
		// 4. Messages — Message display controls
		// =============================================

		presets['hide_message'] = {
			type: 'button',
			category: '4. Messages',
			name: 'Hide Message',
			style: {
				text: 'HIDE\\nMSG',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.MESSAGE,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'hideMessage' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['show_message'] = {
			type: 'button',
			category: '4. Messages',
			name: 'Show Message',
			style: {
				text: 'MSG 1',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.PINK,
				png64: icons.MESSAGE,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'showMessage', options: { index: 1 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// =============================================
		// 5. Profiles — Profile nav + settings
		// =============================================

		presets['prev_profile'] = {
			type: 'button',
			category: '5. Profiles',
			name: 'Previous Profile',
			style: {
				text: 'PREV',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.VIOLET,
				png64: icons.PREV,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'previousProfile' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['next_profile'] = {
			type: 'button',
			category: '5. Profiles',
			name: 'Next Profile',
			style: {
				text: 'NEXT',
				size: '14',
				color: COLOR.WHITE,
				bgcolor: COLOR.VIOLET,
				png64: icons.NEXT,
				pngalignment: 'center:top',
				alignment: 'center:bottom',
			},
			steps: [
				{
					down: [{ actionId: 'nextProfile' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['profile_display'] = {
			type: 'button',
			category: '5. Profiles',
			name: 'Profile Name',
			style: {
				text: 'PROFILE\\n$(ninja-timer:profile_name)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLACK,
			},
			steps: [],
			feedbacks: [],
		}

		presets['overtime_toggle'] = {
			type: 'button',
			category: '5. Profiles',
			name: 'Overtime Toggle',
			style: {
				text: 'OVERTIME',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
			},
			steps: [
				{
					down: [{ actionId: 'toggleOvertime' }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'overtimeAllowed',
					style: {
						bgcolor: COLOR.ORANGE_RED,
					},
				},
			],
		}

		presets['scheduled_indicator'] = {
			type: 'button',
			category: '5. Profiles',
			name: 'Scheduled Timer',
			style: {
				text: 'SCHED',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'hasTargetTime',
					style: {
						bgcolor: COLOR.INDIGO,
						color: COLOR.WHITE,
					},
				},
			],
		}

		return presets
	},
}
