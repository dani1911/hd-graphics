<template>
	<article class="team-container flex f-row">
		<section class="assets flex f-col f-justify-center">
			<p class="asset-heading">
				{{ transaction }}
			</p>
			<article
				class="asset"
				v-for="(asset, index) in assetsTeamValue"
				:key="index"
			>
				<span contenteditable="false">
					{{ asset }}
				</span>
				<a
					v-if="editContent === false"
					class="edit"
					@click.prevent="editAsset(index)"
				>
					<i class="fas fa-pen-square"></i>
				</a>
				<a
					v-if="editContent === false"
					class="delete"
					@click.prevent="removeAsset(index)"
				>
					<i class="fas fa-minus-square"></i>
				</a>
				<a
					v-if="editContent"
					class="confirm"
					@click.prevent="confirmChange"
				>
					<i class="fas fa-check-square"></i>
				</a>
				<a
					v-if="editContent"
					class="reset"
					@click.prevent="resetChange"
				>
					<i class="fas fa-times"></i>
				</a>
			</article>
		</section>
		<div class="divider"></div>
		<section
			class="team-identity flex f-col f-justify-center"
			:style="{ backgroundColor: teamColorPrimaryValue }"
		>
			<p class="team-name" :style="{ color: teamColorSecondaryValue }">
				{{ teamNameValue }}
			</p>
			<div class="team-logo flex f-justify-center f-align-items-center">
				<img :src="`${teamLogoFile}`" alt="team logo" />
			</div>
			<p class="team-league" :style="{ color: teamColorSecondaryValue }">
				{{ teamLeagueValue }}
			</p>
		</section>
	</article>
</template>

<script>
export default {
	props: {
		teamIdentification: String,
	},
	data() {
		return {
			editContent: false,
			teamNameValue: '',
			teamLeagueValue: '',
			teamLogoFile: '/hd-logo.png',
			teamColorPrimaryValue: '#fff',
			teamColorSecondaryValue: '#000',
			assetsTeamValue: [],
			transaction: 'Acquired',
		}
	},
	mounted() {
		window.eventBus.on(
			'team-name-' + this.teamIdentification,
			(data) => (this.teamNameValue = data)
		)
		window.eventBus.on(
			'team-league-' + this.teamIdentification,
			(data) => (this.teamLeagueValue = data)
		)
		window.eventBus.on(
			'team-logo-' + this.teamIdentification,
			(data) => (this.teamLogoFile = data)
		)
		window.eventBus.on(
			'team-color-primary-' + this.teamIdentification,
			(data) => (this.teamColorPrimaryValue = data)
		)
		window.eventBus.on(
			'team-color-secondary-' + this.teamIdentification,
			(data) => (this.teamColorSecondaryValue = data)
		)
		window.eventBus.on(
			'add-asset-team-' + this.teamIdentification,
			(data) => this.assetsTeamValue.push(data)
		)
		window.eventBus.on(
			'transaction-type',
			(data) => (this.transaction = data)
		)
	},
	methods: {
		removeAsset(asset) {
			this.assetsTeamValue = this.assetsTeamValue.filter(
				(item, index) => index !== asset
			)
		},
		editAsset(asset) {
			console.log(asset)
			console.log(this)

			const parent = event.target.parentElement,
				editable = parent.previousSibling,
				range = document.createRange(),
				sel = window.getSelection(),
				position = editable.innerHTML.length

			editable.contentEditable = true
			this.editContent = true
			range.setStart(editable.childNodes[0], position)
			range.collapse(true)
			sel.removeAllRanges()
			sel.addRange(range)
		},
		confirmChange() {
			this.editContent = false
		},
		resetChange() {
			this.editContent = false
		},
	},
}
</script>

<style lang="scss" scoped></style>
