<template>
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Our Products</h1>
                <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                </p>
            </div>
        </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
        <div class="container">

            <div class="row row-cols-2 row-cols-md-4 g-3">
                <div class="col" v-for="(i, j) in this.albums" :key="j">
                    <div class="card shadow-sm border border-dark rounded">
                        <img :src="require('@/assets/photos/products/' + i.url)" alt="" draggable="false" class="rounded">
                        <div class="card-body text-center">
                            <h6 class="card-text text-nowrap">{{ i.name }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            albums: [
                {
                    name: 'Garam Masala',
                    url: 'masala.jpg'
                },
                {
                    name: 'Sabji Masala',
                    url: 'masala.jpg'
                },
                {
                    name: 'Chhole Masala',
                    url: 'masala.jpg'
                },
                {
                    name: 'Rajma Masala',
                    url: 'masala.jpg'
                },
                {
                    name: 'Sambar Masala',
                    url: 'masala.jpg'
                },
                {
                    name: 'Chat Masala',
                    url: 'masala.jpg'
                },
                {
                    name: 'Turmeric Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Raw Turmeric Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Black Turmeric Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Garlic Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Ginger Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Chili Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Black Pepper Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Red Onion Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Pink Onion Powder',
                    url: 'masala.jpg'
                },

                {
                    name: 'White Onion Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Coriander Leaf Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Mint Green Powder',
                    url: 'masala.jpg'
                },
                {
                    name: 'Katerni Chuda',
                    url: 'masala.jpg'
                },
                {
                    name: 'Plain Makhana',
                    url: 'masala.jpg'
                },
                {
                    name: 'Roasted Makhana',
                    url: 'masala.jpg'
                },
                {
                    name: 'Tulsi Honey',
                    url: 'honey.jpg'
                },
                {
                    name: 'Jamun Honey',
                    url: 'honey.jpg'
                },
                {
                    name: 'Drumstick Honey',
                    url: 'honey.jpg'
                },
                {
                    name: 'Moringa Honey',
                    url: 'honey.jpg'
                },
                {
                    name: 'Lychee Honey',
                    url: 'honey.jpg'
                },
                {
                    name: 'Mustard Honey',
                    url: 'honey.jpg'
                },
            ],
        };
    },
}
</script>