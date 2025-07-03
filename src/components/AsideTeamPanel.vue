<template>
	<p class="aside-heading">
		{{ title }}
		<a href="#"
			><i
				@click="toggleHidden"
				class="fas"
				:class="[isHidden ? expandClass : contractClass]"
			></i
		></a>
	</p>
	<div class="block" :class="{ hidden: isHidden }">
		<fieldset>
			<label class="label">Team name</label>
			<input
				@keyup="teamName(teamIdentification)"
				type="text"
				v-model="teamNameValue"
			/>
		</fieldset>
		<fieldset>
			<label class="label">Team league</label>
			<input
				@keyup="teamLeague(teamIdentification)"
				type="text"
				v-model="teamLeagueValue"
			/>
		</fieldset>
		<fieldset>
			<label class="label">Logo</label>
			<input
				class="form-control"
				ref="fileInput"
				type="file"
				accept=".jpg, .jpeg, .png, .svg, .webp"
				@input="teamLogo(teamIdentification)"
			/>
		</fieldset>
		<fieldset>
			<p class="label">Team colors</p>
			<div class="flex f-align-items-center team-colors">
				<label class="label f-align-items-center"
					>primary
					<color-input
						position="bottom left"
						disable-alpha
						@change="teamColorPrimary(teamIdentification)"
						v-model="teamPrimaryColorValue"
				/></label>
				<label class="label f-align-items-center"
					>secondary
					<color-input
						position="bottom left"
						disable-alpha
						@change="teamColorSecondary(teamIdentification)"
						v-model="teamSecondaryColorValue"
				/></label>
			</div>
		</fieldset>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		teamIdentification: String,
	},
	data() {
		return {
			isHidden: true,
			expandClass: 'fa-plus',
			contractClass: 'fa-minus',
			teamNameValue: '',
			teamLeagueValue: '',
			teamLogoFile: '',
			teamPrimaryColorValue: '#fff',
			teamSecondaryColorValue: '#000',
		}
	},
	methods: {
		toggleHidden() {
			this.isHidden = !this.isHidden
		},
		teamName(teamIdentification) {
			window.eventBus.emit(
				'team-name-' + teamIdentification,
				this.teamNameValue
			)
		},
		teamLeague(teamIdentification) {
			window.eventBus.emit(
				'team-league-' + teamIdentification,
				this.teamLeagueValue
			)
		},
		teamLogo(teamIdentification) {
			const input = this.$refs.fileInput
			const file = input.files
			const fileTypes = [
				'image/jpeg',
				'image/png',
				'image/svg+xml',
				'image/webp',
			]

			let validateFileType = function (file) {
				return fileTypes.includes(file.type)
			}

			if (file && file[0]) {
				if (!validateFileType(file[0])) {
					console.log('Unsupported file type: ' + file[0].type)
					return
				}

				const reader = new FileReader()

				reader.onload = (e) => {
					this.teamLogoFile = e.target.result
					window.eventBus.emit(
						'team-logo-' + teamIdentification,
						this.teamLogoFile
					)
				}

				reader.readAsDataURL(file[0])
			}
		},
		teamColorPrimary(teamIdentification) {
			window.eventBus.emit(
				'team-color-primary-' + teamIdentification,
				this.teamPrimaryColorValue
			)
		},
		teamColorSecondary(teamIdentification) {
			window.eventBus.emit(
				'team-color-secondary-' + teamIdentification,
				this.teamSecondaryColorValue
			)
		},
	},
}
</script>
