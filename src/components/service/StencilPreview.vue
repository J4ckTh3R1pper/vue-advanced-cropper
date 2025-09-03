<script>
import bem from 'easy-bem';
import { Preview } from '../../components/helpers';
import {defineComponent} from 'vue';

export default defineComponent({
	components: {
		Preview,
	},
	inheritAttrs: false,
});
</script>

<template>
	<preview v-bind="$attrs" :fill="true" />
</template>
