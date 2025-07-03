<template>
	<div class="main-content">
		<div class="container flex f-row">
			<div class="trade-container flex">
				<article class="trade-content flex f-row" ref="download">
					<header
						class="general-info flex f-col f-justify-center f-align-items-center"
					>
						<img
							src="../assets/hd-logo.png"
							width="194"
							height="113"
							alt="hockey dynasty logo"
						/>
						<h2 class="heading">TRADE ALERT!</h2>
					</header>
					<main
						class="trade-info flex f-col f-justify-center f-gap-1"
					>
						<TradeInfo team-identification="one"></TradeInfo>
						<TradeInfo team-identification="two"></TradeInfo>
					</main>
				</article>
			</div>
			<aside class="controls box flex f-col f-gap-1">
				<AsideTeamPanel
					title="Team 1 identity"
					team-identification="one"
				></AsideTeamPanel>
				<AsideTeamPanel
					title="Team 2 identity"
					team-identification="two"
				></AsideTeamPanel>
				<AsideFooterPanel />
			</aside>
		</div>
		<div class="container">
			<p class="note">
				At this stage this is absolutely not mobile friendly and needs
				some improvements. The plan was to have various aspect ratios
				and sizes for desktop screens and mobile devices together with
				various styles. Maybe even completely based on user's uploaded
				background image.
			</p>
		</div>
	</div>
</template>

<script>
import TradeInfo from '@/components/TradeInfo.vue'
import AsideTeamPanel from '@/components/AsideTeamPanel.vue'
import AsideFooterPanel from '@/components/AsideFooterPanel.vue'

export default {
	components: {
		TradeInfo,
		AsideTeamPanel,
		AsideFooterPanel,
	},
	mounted() {
		window.eventBus.on('downloadImage', () => {
			this.generateImage()
		})
	},
	methods: {
		async generateImage() {
			const el = this.$refs.download
			// add option type to get the image version
			// if not provided the promise will return
			// the canvas.
			const options = {
				type: 'dataURL',
				scale: 2,
			}
			this.downloadURI(
				await this.$html2canvas(el, options),
				'trade-announcement.png'
			)
		},
		downloadURI(uri, name) {
			var link = document.createElement('a')
			link.download = name
			link.href = uri
			link.click()
			// after creating link you should delete dynamic link
			// clearDynamicLink(link);
		},
	},
}
</script>
