import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'

export { sideBySideInit, cornerInit, oneLineInit }

function sideBySideInit(T) {
	baseInit(T, { ctaLogoInit: sideBySideCtaLogoInit })
}

function cornerInit(T) {
	baseInit(T, { ctaLogoInit: cornerCtaLogoInit })
}

function oneLineInit(T) {
	baseInit(T, { ctaLogoInit: oneLineCtaLogoInit })
}

function baseInit(T, { ctaLogoInit = sideBySideCtaLogoInit }) {
	T.keyart = document.createElement('netflix-img')
	T.keyart.setAttribute('data-dynamic-key', 'Keyart')
	T.keyart.setAttribute('width', adParams.adWidth)
	T.appendChild(T.keyart)

	T.pedigree = new UITextField({
		target: T,
		id: 'pedigree',
		css: {
			width: 200,
			height: 50
		},
		fontSize: 16,
		fontFamily: 'Netflix Sans',
		format: TextFormat.INLINE_FIT_CLAMP,
		alignText: Align.CENTER,
		spacing: -0.2,
		text: ''
	})

	// title treatment
	T.tt = document.createElement('netflix-img')
	T.tt.setAttribute('data-dynamic-key', 'Title_Treatment')
	T.tt.setAttribute('width', 300)
	T.appendChild(T.tt)

	// free trial messaging
	T.ftm = document.createElement('netflix-text')
	T.ftm.setAttribute('data-dynamic-key', 'FTM')
	T.appendChild(T.ftm)

	// tune-in
	T.tuneIn = document.createElement('netflix-text')
	T.tuneIn.setAttribute('data-dynamic-key', 'Tune_In')
	T.appendChild(T.tuneIn)

	// init CTA and logo
	ctaLogoInit(T)

	// ratings bug
	T.ratingsBug = document.createElement('netflix-img')
	T.ratingsBug.setAttribute('data-dynamic-key', 'Ratings_Bug_20x20')
	T.ratingsBug.setAttribute('id', 'ratings_bug')
	T.ratingsBug.setAttribute('width', 20)
	T.appendChild(T.ratingsBug)

	T.iris =
		window.Creative &&
		Creative.usesCanvasIris &&
		new CanvasIris({
			target: T,
			irisColor: Creative.irisColor
		})
}

function sideBySideCtaLogoInit(T) {
	// logo
	T.netflixLogo = document.createElement('netflix-brand-logo')
	T.netflixLogo.setAttribute('width', 90)
	T.appendChild(T.netflixLogo)

	// cta
	T.cta = document.createElement('netflix-cta')
	T.cta.setAttribute('data-dynamic-key', 'CTA')
	T.cta.setAttribute('arrow', '')
	T.cta.setAttribute('border', '')
	T.cta.setAttribute('width', 90)
	T.cta.setAttribute('height', 24)
	T.appendChild(T.cta)
}

function cornerCtaLogoInit(T) {
	// logo
	T.netflixLogo = document.createElement('netflix-brand-logo')
	T.netflixLogo.setAttribute('width', 75)
	T.appendChild(T.netflixLogo)

	// cta
	T.cta = document.createElement('netflix-cta')
	T.cta.setAttribute('data-dynamic-key', 'CTA')
	T.cta.setAttribute('arrow', '')
	T.cta.setAttribute('border', '')
	T.cta.setAttribute('width', 75)
	T.cta.setAttribute('height', 20)
	T.cta.setAttribute('min-font-size', 7)
	T.cta.setAttribute('stretch-origin', 'right')
	T.appendChild(T.cta)
}

function oneLineCtaLogoInit(T) {
	// logo
	T.netflixLogo = document.createElement('netflix-brand-logo')
	T.netflixLogo.setAttribute('width', 75)
	T.appendChild(T.netflixLogo)

	// cta
	T.cta = document.createElement('netflix-cta')
	T.cta.setAttribute('data-dynamic-key', 'CTA')
	T.cta.setAttribute('arrow', '')
	T.cta.setAttribute('border', '')
	T.cta.setAttribute('width', 83)
	T.cta.setAttribute('max-width', 90)
	T.cta.setAttribute('height', 22)
	T.appendChild(T.cta)
}
