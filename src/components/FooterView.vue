<template>
  <LoaderOverlay />
  <div id="myModal" class="modal" style="display: none; justify-content: center; align-items: center">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Send us a message:</h5>
          <button type="button" class="btn-close" @click="closePopup" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>

  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary disabled">Terms & Conditions</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary disabled">Privacy Policy</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary disabled">FAQs</a>
      </li>
    </ul>
    <div class="d-flex justify-content-evenly">
      <p class="text-body-secondary">© 2023 TVAS</p>
     
    </div>
  </footer>
</template>
<script>
import ContactForm from "./Contact/ContactForm.vue";
import LoaderOverlay from "./Contact/LoaderOverlay.vue";

export default {
  name: "FooterView",
  data() {
    return {
      visitCount: 1,
    };
  },
  mounted() {
    this.checkVisitCount();
    this.setupStatcounter();
  },

  methods: {
    checkVisitCount() {
      if (localStorage.getItem("visitCount") === null) {
        localStorage.setItem("visitCount", 1);
        this.closePopup();
      } else {
        let visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
        localStorage.setItem("visitCount", visitCount);

        if (visitCount % 3 === 0) {
          this.showPopup();
        }

        this.visitCount = visitCount;
      }
    },
    showPopup() {
      document.getElementById("myModal").style.display = "flex";
    },
    closePopup() {
      const modal = document.getElementById("myModal");
      if (modal) {
        modal.style.display = "none";
      }
    },
  },
  components: {
    ContactForm,
    LoaderOverlay,
  },
};
</script>

<style>
footer {
  overflow: hidden;
  height: max-content;
}

#myModal {
  z-index: 9990;
}
</style>
