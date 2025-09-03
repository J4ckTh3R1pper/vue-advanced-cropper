<script>
import {defineComponent} from 'vue';
import draggable from '../../mixins/draggable';

export default defineComponent({
	name: 'DraggableElement',
	mixins: [draggable],
	props: {
		classname: {
			type: String,
		},
	},
});
</script>

<template>
	<div
		ref="draggable"
		:class="classname"
		@touchstart="onTouchStart"
		@mousedown="onMouseDown"
		@mouseover="onMouseOver"
		@mouseleave="onMouseLeave"
	>
		<slot />
	</div>
</template>
