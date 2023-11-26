<template>
    <section class="service_section layout_padding ">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Our Products
                </h2>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="(i, j) in this.services" :key="j">
                    <div class="box rounded-3">
                        <div class="img-box">
                            <img :src="require('@/assets/'+i.path)" style="height: 75px; width: auto;" :alt="i.title">
                        </div>
                        <div class="detail-box">
                            <h6>
                                {{ i.title }}
                            </h6>
                            <p>
                                {{ i.description }}
                            </p>
                            <a :href="i.url" class="rounded">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .service_section {
  background-color: #1c1c1c;
}

.service_section .heading_container {
  color: #ffffff;
}

.service_section .box {
  background-color: #ffffff;
  padding: 25px 15px;
  text-align: center;
  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  margin-top: 45px;
}

.service_section .box .img-box svg {
  width: 75px;
  height: auto;
  fill: #1c1c1c;
}

.service_section .box .detail-box {
  margin-top: 25px;
}

.service_section .box .detail-box h6 {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.service_section .box .detail-box a {
  display: inline-block;
  padding: 8px 35px;
  background-color: #fe8d41;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  margin-top: 10px;
}

.service_section .box .detail-box a:hover {
  background-color: transparent;
  border-color: #fe8d41;
  color: #fe8d41;
}
</style>

<script>
    export default{
        name: "ServicesView",
        data() {
            return {
                services: [
                    {
                        title: 'Spices',
                        description: 'Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.',
                        path: 'spice.png',
                        url: '/products'
                    },
                    {
                        title: 'Honey',
                        description: 'Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.',
                        path: 'honey.png',
                        url: '/products'
                    },
                    {
                        title: 'Fertilizers',
                        description: 'Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.',
                        path: 'fertilizer.png',
                        url: '/products'
                    },
                ],
            };
        },
    }
</script>