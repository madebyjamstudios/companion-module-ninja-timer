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
			category: 'Timer',
			name: 'Play/Pause Toggle',
			style: {
				text: 'PLAY\\nPAUSE',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.DARK_BG,
				png64: icons.PLAY_PAUSE,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: 'Start Timer',
			style: {
				text: 'START',
				size: 'auto',
				color: COLOR.BLACK,
				bgcolor: COLOR.GREEN,
				png64: icons.PLAY,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: 'Pause Timer',
			style: {
				text: 'PAUSE',
				size: 'auto',
				color: COLOR.BLACK,
				bgcolor: COLOR.YELLOW,
				png64: icons.PAUSE,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: 'Reset Timer',
			style: {
				text: 'RESET',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.RESET,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: 'Stop Timer',
			style: {
				text: 'STOP',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.STOP,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: 'Add 1 Minute',
			style: {
				text: '+1:00',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.PLUS,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: 'Subtract 1 Minute',
			style: {
				text: '-1:00',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.MINUS,
				pngalignment: 'center:center',
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
			category: 'Timer',
			name: '5 Minutes',
			style: {
				text: '5:00',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.CLOCK,
				pngalignment: 'center:center',
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
			category: 'Select',
			name: 'Previous Timer',
			style: {
				text: 'PREV',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.PREV,
				pngalignment: 'center:center',
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
			category: 'Select',
			name: 'Next Timer',
			style: {
				text: 'NEXT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.NEXT,
				pngalignment: 'center:center',
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
			category: 'Select',
			name: 'Select Timer',
			style: {
				text: 'TIMER\\n1',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.TIMER,
				pngalignment: 'center:center',
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
			category: 'Display',
			name: 'Time Display',
			style: {
				text: '$(ninja:time)',
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
			category: 'Display',
			name: 'Timer Name',
			style: {
				text: '$(ninja:timer_name)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.INFO,
				pngalignment: 'center:center',
			},
			steps: [],
			feedbacks: [],
		}

		presets['duration_display'] = {
			type: 'button',
			category: 'Display',
			name: 'Duration Display',
			style: {
				text: '$(ninja:duration_formatted)',
				size: 'auto',
				color: combineRgb(150, 150, 150),
				bgcolor: COLOR.SEC_BG,
				png64: icons.CLOCK,
				pngalignment: 'center:center',
			},
			steps: [],
			feedbacks: [],
		}

		presets['state_display'] = {
			type: 'button',
			category: 'Display',
			name: 'Timer State',
			style: {
				text: '$(ninja:state)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.INFO,
				pngalignment: 'center:center',
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
			category: 'Display',
			name: 'Timer Mode',
			style: {
				text: '$(ninja:timer_mode)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.INFO,
				pngalignment: 'center:center',
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
			category: 'Display',
			name: 'Warning Zone Indicator',
			style: {
				text: 'WARNING',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.WARNING,
				pngalignment: 'center:center',
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
			category: 'Display',
			name: 'Blackout Toggle',
			style: {
				text: 'BLACK\\nOUT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.BLACKOUT,
				pngalignment: 'center:center',
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
			category: 'Display',
			name: 'Flash Display',
			style: {
				text: 'FLASH',
				size: 'auto',
				color: COLOR.BLACK,
				bgcolor: COLOR.YELLOW,
				png64: icons.FLASH,
				pngalignment: 'center:center',
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
			category: 'Messages',
			name: 'Hide Message',
			style: {
				text: 'HIDE\\nMSG',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.MESSAGE,
				pngalignment: 'center:center',
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
			category: 'Messages',
			name: 'Show Message',
			style: {
				text: 'MSG 1',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.PINK,
				png64: icons.MESSAGE,
				pngalignment: 'center:center',
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
			category: 'Profiles',
			name: 'Previous Profile',
			style: {
				text: 'PREV',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.VIOLET,
				png64: icons.PREV,
				pngalignment: 'center:center',
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
			category: 'Profiles',
			name: 'Next Profile',
			style: {
				text: 'NEXT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.VIOLET,
				png64: icons.NEXT,
				pngalignment: 'center:center',
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
			category: 'Profiles',
			name: 'Profile Name',
			style: {
				text: '$(ninja:profile_name)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.PROFILE,
				pngalignment: 'center:center',
			},
			steps: [],
			feedbacks: [],
		}

		presets['overtime_toggle'] = {
			type: 'button',
			category: 'Profiles',
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
			category: 'Profiles',
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
