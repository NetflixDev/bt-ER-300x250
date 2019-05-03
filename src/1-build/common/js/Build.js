import '@netflixadseng/wc-netflix-brand-logo'
import '@netflixadseng/wc-netflix-cta'
import '@netflixadseng/wc-netflix-text'
import '@netflixadseng/wc-netflix-img'
import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { cornerInit, sideBySideInit, oneLineInit } from './EndFrame/inits'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import '@netflixadseng/wc-netflix-flushed-ribbon'
import '@netflixadseng/wc-netflix-video'
import { cornerRightPostMarkup, sideBySidePostMarkup, oneLinePostMarkup, cornerLeftPostMarkup } from './EndFrame/postmarkups'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'

export function Main() {
	var T = Markup.get('main')
	Styles.setCss(T, {
		position: 'absolute',
		width: adParams.adWidth,
		height: adParams.adHeight,
		opacity: 0,
		left: '0px',
		top: '0px',
		overflow: 'hidden',
		userSelect: 'none'
	})
	Styles.setCss(T, { backgroundColor: '#000000' })

	return T
}

// ==============================================================================================================
export function Intro(arg) {
	const base = {
		id: 'intro-container',
		css: {
			width: 'inherit',
			height: 'inherit'
		}
	}
	const T = new UIComponent(ObjectUtils.defaults(arg, base, true))

	return T
}

// ==============================================================================================================
export function EndFrame(arg) {
	const base = {
		id: 'end-frame-container',
		css: {
			width: 'inherit',
			height: 'inherit'
		}
	}
	const T = new UIComponent(ObjectUtils.defaults(arg, base, true))

	let endFrameInit = sideBySideInit
	switch (arg.layout) {
		// these use the default init function
		case 'SIDE_BY_SIDE_1':
		case 'SIDE_BY_SIDE_2':
			break
		case 'CORNER_LEFT':
		case 'CORNER_RIGHT':
			endFrameInit = cornerInit
			break
		case 'ONE_LINE_1':
		case 'ONE_LINE_2':
			endFrameInit = oneLineInit
			break
	}
	endFrameInit(T)

	let postMarkup = sideBySidePostMarkup
	switch (arg.layout) {
		// these use the default postMarkupStyling
		case 'SIDE_BY_SIDE_1':
		case 'SIDE_BY_SIDE_2':
			break
		case 'CORNER_LEFT':
			postMarkup = cornerLeftPostMarkup
			break
		case 'CORNER_RIGHT':
			postMarkup = cornerRightPostMarkup
			break
		case 'ONE_LINE_1':
		case 'ONE_LINE_2':
			postMarkup = oneLinePostMarkup
			break
	}

	T.postMarkupStyling = postMarkup

	return T
}

export function MainBorder() {
	new UIBorder({
		target: View.main,
		size: 1,
		color: '#000000'
	})
}
