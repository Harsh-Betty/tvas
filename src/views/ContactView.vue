<template>
    <LoaderOverlay />
    <section class="container sub_page pt-5">
        <!--Contact heading-->
        <div class="row">
            <!--Grid column-->
            <div class="col-sm-12 mb-4 col-md-5 card">
                <h4 class="my-3">Send us a message</h4>
                <ContactForm />
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

<script>
import ContactForm from '@/components/Contact/ContactForm.vue'
import LoaderOverlay from '@/components/Contact/LoaderOverlay.vue'
export default {
    components: {
        ContactForm,
        LoaderOverlay
    }
}
</script>