<template>
  <div class="home sub_page">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <HeroView />
        </div>
      </div>
      <section class="about_section my-5">
        <AboutComp />
      </section>
      <ServicesView />
  </div>
</template>

<script>
import HeroView from '@/components/Home/HeroView.vue'
import ServicesView from '@/components/Home/ServicesView.vue';
import AboutComp from '@/components/Home/AboutComp.vue';

export default {
  components: {
    HeroView,
    ServicesView,
    AboutComp
  }
}
</script>
