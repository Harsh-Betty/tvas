<template>
  <form class="needs-validation" @submit.prevent="submitForm" id="myForm">
    <div class="row g-3">
      <div class="col-12">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter your name"
          name="Name"
          value=""
          required="true"
        />
      </div>

      <div class="col-12">
        <label for="phone" class="form-label">Contact</label>
        <input
          type="number"
          class="form-control"
          id="phone"
          placeholder="0000-000-000"
          name="Contact"
          required="true"
        />
      </div>

      <div class="col-12">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="you@example.com"
          name="Email"
          required="true"
        />
      </div>

      <div class="col-12">
        <label for="subject" class="form-label">Subject</label>
        <input
          type="text"
          class="form-control"
          id="subject"
          placeholder="Subject"
          required="true"
          name="subject"
          value=""
        />
      </div>

      <div class="col-12">
        <label for="message" class="form-label">Message</label>
        <input
          type="text"
          class="form-control"
          id="message"
          placeholder="Your Message"
          required="true"
          name="message"
          value=""
        />
      </div>
    </div>

    <hr class="my-3" />

    <button
      class="w-100 btn btn-tvas btn-lg my-3"
      @click="closePopup"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      isFormSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      function showLoader() {
        const overlay = document.getElementById("overlay");
        const loader = document.getElementById("loader");

        if (overlay && loader) {
          overlay.style.display = "block";
          loader.style.display = "block";
        }
      }

      function hideLoader() {
        const overlay = document.getElementById("overlay");
        const loader = document.getElementById("loader");

        if (overlay && loader) {
          overlay.style.display = "none";
          loader.style.display = "none";
        }
      }

      showLoader();

      const formElement = document.getElementById("myForm");
      const formData = new FormData(formElement);

      fetch(
        "https://script.google.com/macros/s/AKfycbxtV2QPZwsh5T8EwkCfBn7H6CKTnjgAus3cJEF9QWFiPLXGPAhSeuRkyKPif3dilfWl/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          hideLoader();

          if (response.ok) {
            this.isFormSubmitted = true;
            console.log("Success:", this.isFormSubmitted);

            swal({
              icon: "success",
              title: "Submitted",
              text: "Your form is successfully submitted",
            });
            formElement.reset();
            
            this.isFormSubmitted = false;
          } else {
            swal({
              icon: "error",
              title: "Error",
              text: "Form not submitted",
            });
          }
        })
        .catch((error) => {
          hideLoader();
          console.error("An error occurred:", error);
        });
    },

    closePopup() {
      const modal = document.getElementById("myModal");
      if (modal) {
        modal.style.display = "none";
      }
    },
  },
};

</script>
