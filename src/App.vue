<template>
  <Header />
  <main class="container-fluid">
    <router-view class="animated-page"/>
  </main>
  <Footer />
</template>

<style>
/* Option 2: Import via CSS */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

a {
  text-decoration: none;
}

.animated-page{
  animation: page-animation 0.3s;
}
@keyframes page-animation {
  0%{
    opacity: 20%;
    transform: translateY(10px);
  }
  100%{
    opacity: 100%;
  }
}

main {
  margin-top: 6vh;
}

.sub_page {
  min-height: 100vh;
}

.sub_page .custom_nav-container.navbar-expand-lg .navbar-nav .nav-item .nav-link {
  padding-bottom: 21px;
}

.heading_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.heading_container h2 {
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 10px;
}

.heading_container h2::before {
  content: "";
  width: 40px;
  height: 7px;
  background-color: #fe8d41;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.heading_container.heading_center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.heading_container.heading_center h2::before {
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.about_section .row {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.about_section .img_container .img-box img {
  width: 100%;
}

.about_section .detail-box {
  background-color: #ffffff;
  padding: 45px 25px;
  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  margin-left: -45px;
  text-align: left;
}

.about_section .detail-box p {
  margin-top: 5px;
}

.about_section .detail-box a {
  display: inline-block;
  padding: 10px 35px;
  background-color: #fe8d41;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  text-transform: uppercase;
}

.about_section .detail-box a:hover {
  background-color: transparent;
  border-color: #fe8d41;
  color: #fe8d41;
}

.layout_padding {
  padding-top: 90px;
  padding-bottom: 90px;
}

@media (max-width: 992px) {
  .about_section .heading_container {
    margin-bottom: 0;
  }

  .about_section .row {
    flex-direction: column-reverse;
  }

  .about_section .detail-box {
    margin-left: 0;
    width: 100%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  }

  .service_section .service_container {
    flex-wrap: wrap;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    'Header': HeaderView,
    'Footer': FooterView
  }
}
</script>