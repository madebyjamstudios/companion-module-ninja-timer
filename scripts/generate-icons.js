#!/usr/bin/env node
/**
 * Generates 72x30px white-on-transparent PNG icons for Companion presets.
 * Run: node scripts/generate-icons.js
 * Requires: canvas (npm install --save-dev canvas)
 */

const { createCanvas } = require('canvas')
const fs = require('fs')
const path = require('path')

const W = 72
const H = 30
const WHITE = '#ffffff'

function makeCanvas() {
	const canvas = createCanvas(W, H)
	const ctx = canvas.getContext('2d')
	ctx.clearRect(0, 0, W, H)
	ctx.fillStyle = WHITE
	ctx.strokeStyle = WHITE
	ctx.lineWidth = 2.5
	ctx.lineCap = 'round'
	ctx.lineJoin = 'round'
	return { canvas, ctx }
}

function toPng64(canvas) {
	return canvas.toBuffer('image/png').toString('base64')
}

// ── Icon drawing functions ──

function drawPlay() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, sz = 10
	ctx.beginPath()
	ctx.moveTo(cx - sz * 0.7, cy - sz)
	ctx.lineTo(cx + sz * 0.8, cy)
	ctx.lineTo(cx - sz * 0.7, cy + sz)
	ctx.closePath()
	ctx.fill()
	return toPng64(canvas)
}

function drawPause() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, bw = 3.5, bh = 10, gap = 4
	ctx.fillRect(cx - gap - bw, cy - bh, bw, bh * 2)
	ctx.fillRect(cx + gap, cy - bh, bw, bh * 2)
	return toPng64(canvas)
}

function drawPlayPause() {
	const { canvas, ctx } = makeCanvas()
	const cy = H / 2, sz = 8
	// Play triangle on the left
	const px = W / 2 - 10
	ctx.beginPath()
	ctx.moveTo(px - sz * 0.7, cy - sz)
	ctx.lineTo(px + sz * 0.8, cy)
	ctx.lineTo(px - sz * 0.7, cy + sz)
	ctx.closePath()
	ctx.fill()
	// Pause bars on the right
	const bx = W / 2 + 10, bw = 3, bh = 8, gap = 3
	ctx.fillRect(bx - gap - bw, cy - bh, bw, bh * 2)
	ctx.fillRect(bx + gap, cy - bh, bw, bh * 2)
	return toPng64(canvas)
}

function drawStop() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, sz = 8
	ctx.fillRect(cx - sz, cy - sz, sz * 2, sz * 2)
	return toPng64(canvas)
}

function drawReset() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, r = 10
	ctx.lineWidth = 2.5
	// Circular arc (~300 degrees)
	ctx.beginPath()
	ctx.arc(cx, cy, r, -Math.PI * 0.4, Math.PI * 1.25, false)
	ctx.stroke()
	// Arrowhead at the end of the arc
	const ax = cx + r * Math.cos(-Math.PI * 0.4)
	const ay = cy + r * Math.sin(-Math.PI * 0.4)
	const arrSz = 5
	ctx.beginPath()
	ctx.moveTo(ax, ay)
	ctx.lineTo(ax - arrSz, ay - arrSz * 0.6)
	ctx.lineTo(ax + arrSz * 0.2, ay - arrSz * 1.1)
	ctx.closePath()
	ctx.fill()
	return toPng64(canvas)
}

function drawPlus() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, sz = 8
	ctx.lineWidth = 3
	ctx.beginPath()
	ctx.moveTo(cx - sz, cy)
	ctx.lineTo(cx + sz, cy)
	ctx.moveTo(cx, cy - sz)
	ctx.lineTo(cx, cy + sz)
	ctx.stroke()
	return toPng64(canvas)
}

function drawMinus() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, sz = 8
	ctx.lineWidth = 3
	ctx.beginPath()
	ctx.moveTo(cx - sz, cy)
	ctx.lineTo(cx + sz, cy)
	ctx.stroke()
	return toPng64(canvas)
}

function drawClock() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, r = 11
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.arc(cx, cy, r, 0, Math.PI * 2)
	ctx.stroke()
	// Hour hand
	ctx.lineWidth = 2.5
	ctx.beginPath()
	ctx.moveTo(cx, cy)
	ctx.lineTo(cx, cy - r * 0.55)
	ctx.stroke()
	// Minute hand
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.moveTo(cx, cy)
	ctx.lineTo(cx + r * 0.5, cy + r * 0.2)
	ctx.stroke()
	return toPng64(canvas)
}

function drawNext() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, sz = 8
	// First triangle
	ctx.beginPath()
	ctx.moveTo(cx - sz, cy - sz)
	ctx.lineTo(cx, cy)
	ctx.lineTo(cx - sz, cy + sz)
	ctx.closePath()
	ctx.fill()
	// Second triangle
	ctx.beginPath()
	ctx.moveTo(cx, cy - sz)
	ctx.lineTo(cx + sz, cy)
	ctx.lineTo(cx, cy + sz)
	ctx.closePath()
	ctx.fill()
	// End bar
	ctx.fillRect(cx + sz + 1, cy - sz, 2.5, sz * 2)
	return toPng64(canvas)
}

function drawPrev() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, sz = 8
	// Start bar
	ctx.fillRect(cx - sz - 3.5, cy - sz, 2.5, sz * 2)
	// First triangle
	ctx.beginPath()
	ctx.moveTo(cx, cy - sz)
	ctx.lineTo(cx - sz, cy)
	ctx.lineTo(cx, cy + sz)
	ctx.closePath()
	ctx.fill()
	// Second triangle
	ctx.beginPath()
	ctx.moveTo(cx + sz, cy - sz)
	ctx.lineTo(cx, cy)
	ctx.lineTo(cx + sz, cy + sz)
	ctx.closePath()
	ctx.fill()
	return toPng64(canvas)
}

function drawTimer() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2 + 2, r = 10
	// Body circle
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.arc(cx, cy, r, 0, Math.PI * 2)
	ctx.stroke()
	// Top knob
	ctx.lineWidth = 2.5
	ctx.beginPath()
	ctx.moveTo(cx - 3, cy - r - 2)
	ctx.lineTo(cx + 3, cy - r - 2)
	ctx.stroke()
	// Hand pointing up-right
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.moveTo(cx, cy)
	ctx.lineTo(cx + r * 0.45, cy - r * 0.45)
	ctx.stroke()
	return toPng64(canvas)
}

function drawBlackout() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, r = 9
	ctx.lineWidth = 2
	// Eye shape (two arcs)
	ctx.beginPath()
	ctx.moveTo(cx - r * 1.6, cy)
	ctx.quadraticCurveTo(cx, cy - r * 1.3, cx + r * 1.6, cy)
	ctx.quadraticCurveTo(cx, cy + r * 1.3, cx - r * 1.6, cy)
	ctx.closePath()
	ctx.stroke()
	// Pupil
	ctx.beginPath()
	ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2)
	ctx.fill()
	// Diagonal slash
	ctx.lineWidth = 2.5
	const d = r * 1.5
	ctx.beginPath()
	ctx.moveTo(cx - d, cy + d * 0.7)
	ctx.lineTo(cx + d, cy - d * 0.7)
	ctx.stroke()
	return toPng64(canvas)
}

function drawFlash() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2
	// Bold lightning bolt
	ctx.beginPath()
	ctx.moveTo(cx + 1, cy - 13)
	ctx.lineTo(cx - 7, cy + 1)
	ctx.lineTo(cx - 1, cy + 1)
	ctx.lineTo(cx - 3, cy + 13)
	ctx.lineTo(cx + 7, cy - 1)
	ctx.lineTo(cx + 1, cy - 1)
	ctx.closePath()
	ctx.fill()
	return toPng64(canvas)
}

function drawMessage() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2 - 1
	const bw = 16, bh = 10, r = 3
	// Rounded rectangle bubble
	ctx.beginPath()
	ctx.moveTo(cx - bw / 2 + r, cy - bh / 2)
	ctx.lineTo(cx + bw / 2 - r, cy - bh / 2)
	ctx.arcTo(cx + bw / 2, cy - bh / 2, cx + bw / 2, cy - bh / 2 + r, r)
	ctx.lineTo(cx + bw / 2, cy + bh / 2 - r)
	ctx.arcTo(cx + bw / 2, cy + bh / 2, cx + bw / 2 - r, cy + bh / 2, r)
	ctx.lineTo(cx - bw / 2 + r, cy + bh / 2)
	ctx.arcTo(cx - bw / 2, cy + bh / 2, cx - bw / 2, cy + bh / 2 - r, r)
	ctx.lineTo(cx - bw / 2, cy - bh / 2 + r)
	ctx.arcTo(cx - bw / 2, cy - bh / 2, cx - bw / 2 + r, cy - bh / 2, r)
	ctx.closePath()
	ctx.stroke()
	// Tail
	ctx.beginPath()
	ctx.moveTo(cx - 3, cy + bh / 2)
	ctx.lineTo(cx - 6, cy + bh / 2 + 5)
	ctx.lineTo(cx + 2, cy + bh / 2)
	ctx.closePath()
	ctx.fill()
	ctx.stroke()
	return toPng64(canvas)
}

function drawProfile() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2
	// Head
	ctx.beginPath()
	ctx.arc(cx, cy - 5, 5, 0, Math.PI * 2)
	ctx.fill()
	// Shoulders
	ctx.beginPath()
	ctx.arc(cx, cy + 12, 10, Math.PI * 1.15, Math.PI * 1.85)
	ctx.fill()
	return toPng64(canvas)
}

function drawWarning() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2
	const sz = 13
	// Triangle
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.moveTo(cx, cy - sz + 1)
	ctx.lineTo(cx + sz, cy + sz - 3)
	ctx.lineTo(cx - sz, cy + sz - 3)
	ctx.closePath()
	ctx.stroke()
	// Exclamation mark
	ctx.lineWidth = 2.5
	ctx.beginPath()
	ctx.moveTo(cx, cy - 4)
	ctx.lineTo(cx, cy + 3)
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(cx, cy + 6.5, 1.2, 0, Math.PI * 2)
	ctx.fill()
	return toPng64(canvas)
}

function drawInfo() {
	const { canvas, ctx } = makeCanvas()
	const cx = W / 2, cy = H / 2, r = 11
	// Circle
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.arc(cx, cy, r, 0, Math.PI * 2)
	ctx.stroke()
	// Dot
	ctx.beginPath()
	ctx.arc(cx, cy - 4.5, 1.5, 0, Math.PI * 2)
	ctx.fill()
	// Stem
	ctx.lineWidth = 2.5
	ctx.beginPath()
	ctx.moveTo(cx, cy - 1.5)
	ctx.lineTo(cx, cy + 6)
	ctx.stroke()
	return toPng64(canvas)
}

// ── Generate all icons ──

const icons = {
	PLAY: drawPlay(),
	PAUSE: drawPause(),
	PLAY_PAUSE: drawPlayPause(),
	STOP: drawStop(),
	RESET: drawReset(),
	PLUS: drawPlus(),
	MINUS: drawMinus(),
	CLOCK: drawClock(),
	NEXT: drawNext(),
	PREV: drawPrev(),
	TIMER: drawTimer(),
	BLACKOUT: drawBlackout(),
	FLASH: drawFlash(),
	MESSAGE: drawMessage(),
	PROFILE: drawProfile(),
	WARNING: drawWarning(),
	INFO: drawInfo(),
}

// Build icons.js source
const lines = [
	'// Auto-generated PNG64 icons (72x30px, white on transparent)',
	'// Do not edit manually \u2014 regenerate with scripts/generate-icons.js',
	'',
	'module.exports = {',
]

const keys = Object.keys(icons)
keys.forEach((key, i) => {
	const comma = i < keys.length - 1 ? ',' : ''
	lines.push(`\t${key}: '${icons[key]}'${comma}`)
})

lines.push('}')
lines.push('')

const outPath = path.join(__dirname, '..', 'src', 'icons.js')
fs.writeFileSync(outPath, lines.join('\n'), 'utf8')
console.log(`Generated ${keys.length} icons → ${outPath}`)
