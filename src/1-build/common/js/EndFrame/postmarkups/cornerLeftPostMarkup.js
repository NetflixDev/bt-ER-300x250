import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'

export default function cornerLeftPostMarkup() {
	let T = View.endFrame

	// title treatment
	Align.set(T.tt, {
		x: Align.CENTER,
		y: Align.CENTER
	})

	Align.set(T.pedigree, {
		x: {
			type: Align.CENTER,
			against: T.tt
		},
		y: {
			type: Align.CENTER,
			against: 55
		}
	})

	if (adData.hasFTM) {
		// free trial messaging
		Styles.setCss(T.ftm, {
			color: '#fff',
			fontSize: 14,
			letterSpacing: 1
		})
		Align.set(T.ftm, {
			x: {
				type: Align.LEFT,
				against: 16
			},
			y: {
				type: Align.BOTTOM,
				offset: -76
			}
		})
		T.removeChild(T.tuneIn)
	} else {
		// tune-in
		Styles.setCss(T.tuneIn, {
			color: '#fff',
			fontSize: 16,
			letterSpacing: 1
		})
		Align.set(T.tuneIn, {
			x: {
				type: Align.LEFT,
				against: 16
			},
			y: {
				type: Align.BOTTOM,
				offset: -76
			}
		})
		T.removeChild(T.ftm)
	}

	// logo
	Align.set(T.netflixLogo, {
		x: {
			type: Align.LEFT,
			offset: 16
		},
		y: {
			type: Align.TOP,
			offset: 213
		}
	})

	// cta
	T.cta.resize()
	Align.set(T.cta, {
		x: {
			type: Align.LEFT,
			offset: 16
		},
		y: {
			type: Align.TOP,
			offset: 182
		}
	})

	// ratings bug
	if (adData.hasRatings) {
		Align.set(T.ratingsBug, {
			x: {
				type: Align.RIGHT,
				offset: -5
			},
			y: {
				type: Align.BOTTOM,
				offset: -5
			}
		})
	} else {
		T.removeChild(T.ratingsBug)
	}
}
