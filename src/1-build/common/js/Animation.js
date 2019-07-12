const RIBBON_ANIM_TIME = 0.6
const INIT_ZOOM_START = 1
const INIT_ZOOM_SCALE = 2
const INIT_ZOOM_DURATION = RIBBON_ANIM_TIME + 1
const RIBBON_START = INIT_ZOOM_START + INIT_ZOOM_DURATION - 0.75

export class Animation {
	static start() {
		console.log('Animation.start()')

		// show the main container
		global.removePreloader()
		TweenLite.set(View.main, { opacity: 1 })

		if (adData.useSupercut) {
			if (View.endFrame.iris) {
				TweenLite.set(View.endFrame.iris.canvas, { opacity: 0 })
			}
			View.endFrame.show()
			// have Netflix logo already fully in
			View.endFrame.netflixLogo.progress(1)

			TweenLite.to(View.endFrame, INIT_ZOOM_DURATION, {
				delay: INIT_ZOOM_START,
				scale: INIT_ZOOM_SCALE,
				ease: Power2.easeIn
			})

			TweenLite.delayedCall(RIBBON_START, () => {
				View.ribbon.play()
			})
		} else {
			View.ribbon.play()
		}
	}

	// IMPORTANT!!! Call this function when your animation is complete!
	static complete() {
		console.log('Animation.complete()')
	}

	static playIntro() {
		if (View.intro) {
			TweenLite.set(View.intro.netflixLogo, { opacity: 1 })
			View.intro.introVideoPlayer.play()

			TweenLite.delayedCall(2.5, function() {
				View.intro.netflixLogo.reverse()
			})
			TweenLite.delayedCall(6, function() {
				View.intro.netflixLogo.play()
			})
			TweenLite.to(View.intro.netflixLogo, 0.25, { delay: 8, alpha: 0 })
		} else {
			Animation.showEndFrame()
		}
	}

	static showEndFrame() {
		console.log('Animation.showEndFrame()')

		if (adData.useSupercut) {
			// reset endframe after ribbon and supercut
			View.endFrame.netflixLogo.progress(0)
			if (View.endFrame.iris) {
				TweenLite.set(View.endFrame.iris.canvas, { opacity: 1 })
			}
			TweenLite.set(View.endFrame, { scale: 1 })
		}

		if (View.intro) View.intro.hide()
		View.endFrame.show()

		const creative = new Creative()
		creative.play()
	}

	static playCreative() {
		const creative = new Creative()
		creative.play()
	}
}
