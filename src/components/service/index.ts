import { default as HandlerWrapper } from './HandlerWrapper.vue';
import { default as LineWrapper } from './LineWrapper.vue';
import { default as BoundingBox } from './BoundingBox.vue';
import { default as DraggableArea } from './DraggableArea.vue';
import { default as PreviewResult } from './PreviewResult.vue';
import { default as DraggableElement } from './DraggableElement.vue';
import { default as BackgroundWrapper } from './BackgroundWrapper.vue';
import { default as StencilPreview } from './StencilPreview.vue';
import { default as TransformableImage } from './TransformableImage.vue';

export type HandlerWrapperInstance = InstanceType<typeof HandlerWrapper>;
export type LineWrapperInstance = InstanceType<typeof LineWrapper>;
export type DraggableAreaInstance = InstanceType<typeof DraggableArea>;
export type PreviewResultInstance = InstanceType<typeof PreviewResult>;
export type DraggableElementInstance = InstanceType<typeof DraggableElement>;
export type BackgroundWrapperInstance = InstanceType<typeof BackgroundWrapper>;
export type StencilPreviewInstance = InstanceType<typeof StencilPreview>;
export type BoundingBoxInstance = InstanceType<typeof BoundingBox>;
export type TransformableImageInstance = InstanceType<typeof TransformableImage>;

export {
	PreviewResult,
	DraggableArea,
	BoundingBox,
	LineWrapper,
	HandlerWrapper,
	DraggableElement,
	StencilPreview,
	TransformableImage,
	BackgroundWrapper,
}
