import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'

export function titleTreatmentLayout(T) {
	if (!adData.hasTT) {
		T.tt = new UIImage({
			target: T,
			source: adData.ttSrc,
			css: {
				width: 300
			}
		})
	}

	Align.set(T.tt, Align.CENTER)
}
