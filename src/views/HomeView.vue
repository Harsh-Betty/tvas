<template>
  <div class="home sub_page">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <HeroView />
        </div>
      </div>
      <ServicesView />
  </div>
</template>

<script>
import HeroView from '@/components/Home/HeroView.vue'
import ServicesView from '@/components/Home/ServicesView.vue';

export default {
  components: {
    HeroView,
    ServicesView
  }
}
</script>
