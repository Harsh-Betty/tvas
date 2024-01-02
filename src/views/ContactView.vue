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
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.2626321571943!2d81.57675457539602!3d25.629407577435295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM3JzQ1LjkiTiA4McKwMzQnNDUuNiJF!5e0!3m2!1sen!2sin!4v1704201257929!5m2!1sen!2sin"
                        width="100%" height="450"   style="border: 2px solid #ddd; border-radius: 10px;"
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <!--Buttons-->
                <div class="row text-center">
                    <div class="col-4">
                        <a class="bg-tvas px-3 py-2 rounded text-white mb-2 d-inline-block"><i
                                class="bi bi-geo-alt"></i></a>
                        <p> Tikuri Dashrathpur, Uttar Pradesh 230201 </p>
                    </div>
                    <div class="col-4">
                        <a class="bg-tvas px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="bi bi-phone"></i></a>
                        <p><a href="tel:+91 9264499678">+91 9264499678</a></p>
                    </div>
                    <div class="col-4">
                        <a class="bg-tvas px-3 py-2 rounded text-white mb-2 d-inline-block"><i
                                class="bi bi-envelope"></i></a>
                                <p><a href="mailto:tikurivaidicas@rediffmail.com">tikurivaidicas@rediffmail.com</a></p>
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