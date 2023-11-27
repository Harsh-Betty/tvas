<template>
  <section class="about_section layout_padding sub_page">
    <AboutComp />
    <div class="row justify-content-evenly my-5 gap-3 gap-md-0">
      <div class="col-10 col-md-5" v-for="(i, j) in this.info" :key="j">
        <div class="misvis border p-3 rounded-3 bg-tvas-gray text-tvas-cream">
          <h1 class="highlight fs-1 mb-2">
            <i class="text-tvas-orange fs-2" :class="i.icons"></i> {{ i.misvis }}
          </h1>
          <p>
            {{ i.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlight {
  color: #fe8d41;
  font-weight: bold;
  font-family: 'Hemi Head', sans-serif;
  font-size: 120%;
  margin: 0px 3px;
}

.text-tvas-orange {
  color: #fe8d41;
}

.text-tvas-cream {
  color: #FAF1E6;
}

.bg-tvas-gray {
  background-color: #28282b;
}

.misvis{
  height: 30vh;
}
</style>

<script>
import AboutComp from '@/components/Home/AboutComp.vue';

export default {
  components: {
    AboutComp
  },
  data() {
    return {
      info: [
        {
          misvis: 'Our Mission',
          icons: 'bi bi-bullseye',
          text: 'Wealth creation for Indian farmers and our stakeholders.'
        },
        {
          misvis: 'Our Vision',
          icons: 'bi bi-eye',
          text: 'To be a world class quality-oriented firm serving clients & customers creating employment opportunity for Indian youths.'
        }
      ],
    };
  },
}
</script>