<template>
	<p class="aside-heading">
		Trade assets
		<a href="#"
			><i
				@click="toggleHidden"
				class="fas"
				:class="[isHidden ? expandClass : contractClass]"
			></i
		></a>
	</p>
	<div class="block" :class="{ hidden: isHidden }">
		<div class="flex f-col">
			<label class="label">Transaction text</label>
			<select
				name=""
				id=""
				v-model="transaction"
				@click="transactionType()"
			>
				<option
					v-for="(transaction, index) in transactionOptions"
					:value="transaction.value"
					:key="index"
				>
					{{ transaction.text }}
				</option>
			</select>
			<label class="label">Trade assets</label>
			<input type="text" ref="inputAsset" v-model="asset" />
			<a class="btn btn-rect btn-success my-3" @click="addAsset('one')"
				>Add asset to team 1</a
			>
			<a class="btn btn-rect btn-success" @click="addAsset('two')"
				>Add asset to team 2</a
			>
		</div>
	</div>
	<a class="btn btn-rect btn-success" ref="downloadBtn" @click="downloadImage"
		>Generate & download</a
	>
</template>

<script>
export default {
	data() {
		return {
			isHidden: true,
			expandClass: 'fa-plus',
			contractClass: 'fa-minus',
			asset: '',
			transaction: 'acquired',
			transactionOptions: [
				{ text: 'acquired', value: 'acquired' },
				{ text: 'acquires', value: 'acquires' },
				{ text: 'sent', value: 'sent' },
				{ text: 'sends', value: 'sends' },
				{ text: 'received', value: 'received' },
				{ text: 'receives', value: 'receives' },
			],
		}
	},
	methods: {
		toggleHidden() {
			this.isHidden = !this.isHidden
		},
		transactionType() {
			window.eventBus.emit('transaction-type', this.transaction)
		},
		addAsset(data) {
			if (this.asset == '') return

			window.eventBus.emit('add-asset-team-' + data, this.asset)

			this.asset = ''
			this.$refs.inputAsset.focus()
		},
		downloadImage() {
			window.eventBus.emit('downloadImage')
		},
	},
}
</script>
