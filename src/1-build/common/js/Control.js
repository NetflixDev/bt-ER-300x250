import { Styles, Markup, Align } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Gesture, GestureEvent } from 'ad-events'
import { Animation } from '@common/js/Animation.js'
import '@netflixadseng/wc-netflix-fonts'
import { MonetUtils } from 'ad-utils'

export class Control {
	static preMarkup() {
		console.log('Control.preMarkup()')
		View.netflixFonts = document.createElement('netflix-fonts')
		Markup.get('main').appendChild(View.netflixFonts)
	}

	static postMarkup() {
		console.log('Control.postMarkup()')
		// listen for default exit
		Gesture.add(View.endFrame, GestureEvent.CLICK, Control.handleClick)

		View.endFrame.hide()

		Gesture.add(View.endFrame, GestureEvent.OVER, function() {
			View.endFrame.cta.mouseover()
		})
		Gesture.add(View.endFrame, GestureEvent.OUT, function() {
			View.endFrame.cta.mouseout()
		})
	}

	static handleClick(event) {
		Network.exit(overridePlatformExit, MonetUtils.getDataByKey('Exit_URL'))
	}

	static handleMonetLoadComplete(element) {
		console.log('Control.handleMonetLoadComplete()')
		MonetUtils.setData(element)
			.then(data => {
				console.log('	-> All Netflix web components ready')
				// monet data is now assigned to MonetUtils
				adData.hasFTM = MonetUtils.getDataByKey('FTM')
				adData.hasTuneIn = MonetUtils.getDataByKey('Tune_In')

				// Ratings Bug
				adData.hasRatings = MonetUtils.getDataByKey('Ratings_Bug_20x20')

				// if any Dynamic images must be loaded from monet
				// but referenced outside a monet component (CanvasImage, UIImage), follow this pattern
				//
				// adData.ratingsSrc = ImageManager.addToLoad(MonetUtils.getDataByKey('Ratings_Bug_20x20'), { forCanvas: false })
				//

				// check for title treatment url/path in Monet data
				// if not provided, use default title treatment img for given layout
				adData.hasTT = !!MonetUtils.getDataByKey('Title_Treatment')

				const layout = window.Creative && Creative.layout
				let ttUrl, ttCenter
				switch (layout) {
					case 'SIDE_BY_SIDE_1':
					case 'CORNER_LEFT':
					case 'CORNER_RIGHT':
					case 'ONE_LINE_1':
					default:
						ttUrl = 'title-treatments/tt-upper.png'
						ttCenter = { x: 150, y: 50 }
						break
					case 'SIDE_BY_SIDE_2':
					case 'ONE_LINE_2':
						ttUrl = 'title-treatments/tt-lower.png'
						ttCenter = { x: 150, y: 130 }
						break
				}

				// load TT
				adData.ttSrc = ImageManager.addToLoad(ttUrl)
				adData.ttCenter = ttCenter

				// proceed with ad AFTER the setData() Promise has been fulfilled
				ImageManager.load(function() {
					if (View.intro) View.intro.postMarkupStyling()
					View.endFrame.postMarkupStyling()
					Control.postMarkup()
					Animation.start()
				})
			})
			.catch(err => {
				console.log(err)
				global.failAd()
			})
	}
}
