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
				text: '\\n\\nTOGGLE',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.DARK_BG,
				png64: icons.PLAY_PAUSE,
				pngalignment: 'center:top',
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
				text: '\\n\\nSTART',
				size: 'auto',
				color: COLOR.BLACK,
				bgcolor: COLOR.GREEN,
				png64: icons.PLAY,
				pngalignment: 'center:top',
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
				text: '\\n\\nPAUSE',
				size: 'auto',
				color: COLOR.BLACK,
				bgcolor: COLOR.YELLOW,
				png64: icons.PAUSE,
				pngalignment: 'center:top',
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
				text: '\\n\\nRESET',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.RESET,
				pngalignment: 'center:top',
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
				text: '\\n\\nSTOP',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.STOP,
				pngalignment: 'center:top',
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
				text: '\\n\\n5:00',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.CLOCK,
				pngalignment: 'center:top',
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
				text: '\\n\\nPREV',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.PREV,
				pngalignment: 'center:top',
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
				text: '\\n\\nNEXT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.BLUE,
				png64: icons.NEXT,
				pngalignment: 'center:top',
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
				text: '\\nTIMER\\n1',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.TIMER,
				pngalignment: 'center:top',
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
			category: 'Display',
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
			category: 'Display',
			name: 'Duration Display',
			style: {
				text: '\\nDURATION\\n$(ninja-timer:duration_formatted)',
				size: 'auto',
				color: combineRgb(150, 150, 150),
				bgcolor: COLOR.SEC_BG,
				png64: icons.CLOCK,
				pngalignment: 'center:top',
			},
			steps: [],
			feedbacks: [],
		}

		presets['state_display'] = {
			type: 'button',
			category: 'Display',
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
			category: 'Display',
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
			category: 'Display',
			name: 'Warning Zone Indicator',
			style: {
				text: '\\n\\nWARNING',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.WARNING,
				pngalignment: 'center:top',
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
				text: '\\nBLACK\\nOUT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ELEV_BG,
				png64: icons.EYE,
				pngalignment: 'center:top',
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
						png64: icons.BLACKOUT,
					},
				},
			],
		}

		presets['flash'] = {
			type: 'button',
			category: 'Display',
			name: 'Flash Display',
			style: {
				text: '\\n\\nFLASH',
				size: 'auto',
				color: COLOR.BLACK,
				bgcolor: COLOR.YELLOW,
				png64: icons.FLASH,
				pngalignment: 'center:top',
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
				text: '\\nHIDE\\nMSG',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.ORANGE_RED,
				png64: icons.MESSAGE,
				pngalignment: 'center:top',
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
				text: '\\n\\nMSG 1',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.PINK,
				png64: icons.MESSAGE,
				pngalignment: 'center:top',
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
				text: '\\n\\nPREV',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.VIOLET,
				png64: icons.PREV,
				pngalignment: 'center:top',
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
				text: '\\n\\nNEXT',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.VIOLET,
				png64: icons.NEXT,
				pngalignment: 'center:top',
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
				text: '\\nPROFILE\\n$(ninja-timer:profile_name)',
				size: 'auto',
				color: COLOR.WHITE,
				bgcolor: COLOR.SEC_BG,
				png64: icons.PROFILE,
				pngalignment: 'center:top',
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
