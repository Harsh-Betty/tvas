<template>
	<div class="w-100 text-center" id="home-slider">
		<Splide :options="{ rewind: true }" :has-track="false" aria-label="Sample Images">
			<SplideTrack>
				<SplideSlide>
					<img src="@/assets/prod1.webp" alt="product 1" class="img-fluid">
				</SplideSlide>
				<SplideSlide>
					<img src="@/assets/prod2.jpg" alt="product 2" class="img-fluid">
				</SplideSlide>
			</SplideTrack>
		</Splide>

	</div>
</template>

<style>
#home-slider {
	padding: 0 0 10vh 0;
}

.splide__arrow:hover:not(:disabled) svg {
	fill: #FE8D41;
}

@media (max-width: 768px) {
	#home-slider {
		padding: 0 0 0 0;
	}
}
</style>

<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
export default {
	data() {
		return {
			all_images: [
				'prod1.webp',
				'prod2.jpg',
			]
		}
	},
	components: { Splide, SplideSlide, SplideTrack },
}
</script>