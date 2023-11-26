<template>
    <div id="overlay" style="display: none;"></div>
    <div id="loader" class="spinner-border text-warning" role="status" style="display: none;">
        <span class="visually-hidden">Loading...</span>
    </div>
    <section class="container sub_page pt-5">
        <!--Contact heading-->
        <div class="row">
            <!--Grid column-->
            <div class="col-sm-12 mb-4 col-md-5 card">
                <h4 class="my-3">Send us a message</h4>
                <form class="needs-validation" @submit.prevent="submitForm" id="myForm">
                    <div class="row g-3">
                        <div class="col-12">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" name="Name"
                                value="" required="true">
                        </div>

                        <div class="col-12">
                            <label for="phone" class="form-label">Contact</label>
                            <input type="number" class="form-control" id="phone" placeholder="0000-000-000" name="Contact"
                                required="true">
                        </div>

                        <div class="col-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" name="Email"
                                required="true">
                        </div>

                        <div class="col-12">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="subject" placeholder="Subject" required="true"
                                name="subject" value="">
                        </div>

                        <div class="col-12">
                            <label for="message" class="form-label">Message</label>
                            <input type="text" class="form-control" id="message" placeholder="Your Message" required="true"
                                name="message" value="">
                        </div>

                    </div>

                    <hr class="my-3">

                    <button class="w-100 btn btn-tvas btn-lg my-3" type="submit">Submit</button>
                </form>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-sm-12 col-md-7">
                <!--Google map-->
                <div class="mb-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7174.07834498979!2d79.09208001205421!3d28.19322481300596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39754b766a94ed39%3A0x50b4c6604508a15e!2sTikuri%2C%20Uttar%20Pradesh%20243726!5e0!3m2!1sen!2sin!4v1701013296152!5m2!1sen!2sin"
                        width="100%" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <!--Buttons-->
                <div class="row text-center">
                    <div class="col-4">
                        <a class="bg-tvas px-3 py-2 rounded text-white mb-2 d-inline-block"><i
                                class="bi bi-geo-alt"></i></a>
                        <p> Your Address ….. </p>
                    </div>
                    <div class="col-4">
                        <a class="bg-tvas px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="bi bi-phone"></i></a>
                        <p>+91- 90000000</p>
                    </div>
                    <div class="col-4">
                        <a class="bg-tvas px-3 py-2 rounded text-white mb-2 d-inline-block"><i
                                class="bi bi-envelope"></i></a>
                        <p> your@gmail.com</p>
                    </div>
                </div>
            </div>
            <!--Grid column-->
        </div>
    </section>
</template>

<style>
#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(8xp);
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust opacity here */
    z-index: 9998;
    /* Ensure the overlay is on top */
}

#loader {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 9999;
}

.blur-effect {
    filter: blur(2px);
    /* Adjust the blur intensity as needed */
    transition: filter 0.3s ease;
    /* Smooth transition for the blur effect */
}

.btn-tvas {
    color: white;
    background-color: #fe8d41;
    border-color: #fe8d41;
}

.btn-tvas:hover {
    color: white;
    background-color: #ff9933;
    border-color: #ff9933;
}

.bg-tvas {
    background-color: #fe8d41;
}
</style>

<script>
import swal from 'sweetalert'

export default {
    methods: {
        submitForm() {
            // Serialize form data into FormData
            function showLoader() {
                const overlay = document.getElementById("overlay");
                overlay.style.display = "block";

                const loader = document.getElementById("loader");
                loader.style.display = "block";
            }
            function hideLoader() {
                const overlay = document.getElementById("overlay");
                overlay.style.display = "none";

                const loader = document.getElementById("loader");
                loader.style.display = "none";
            }

            showLoader();

            const formElement = document.getElementById("myForm");
            const formData = new FormData(formElement);

            // Send a POST request to the Google Apps Script URL using Fetch API
            fetch("https://script.google.com/macros/s/AKfycbxtV2QPZwsh5T8EwkCfBn7H6CKTnjgAus3cJEF9QWFiPLXGPAhSeuRkyKPif3dilfWl/exec", {
                method: "POST",
                body: formData,
            })
                .then(response => {
                    hideLoader(); // Hide loader on fetch response

                    // Handle the response as needed
                    if (response.ok) {
                        // Form submitted successfully
                        swal({
                            icon: "success",
                            title: "Submitted",
                            text: "Your form is successfully submitted",
                        });
                        formElement.reset();
                        return false;
                    } else {
                        // Handle errors if the submission fails
                        swal({
                            icon: "error",
                            title: "Error",
                            text: "Form not submitted",
                        });
                    }
                })
                .catch(error => {
                    hideLoader(); // Hide loader on fetch error
                    console.error("An error occurred:", error);
                });
        }
    }
};
</script>