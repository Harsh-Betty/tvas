<template>
    <div id="overlay" style="display: none;"></div>
    <div id="loader" class="spinner-border text-warning" role="status" style="display: none;">
        <span class="visually-hidden">Loading...</span>
    </div>
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
</style>

<script>
    export default {
        name: "LoaderOverlay"
    }
</script>