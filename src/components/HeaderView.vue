<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <span class="navbar-brand">
                    <a href="/"><img src="@/assets/tvas_logo.png" height="50" width="auto" alt="tvas logo"></a>
                </span>
                <h3 class="navbar-brand text-white navbar-text"><a href="/">TVAS</a></h3>

                <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#tvas-offcanvas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <!-- <span class="navbar-toggler-icon"></span> -->
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="tvas-navigation">
                    <ul class="navbar-nav">
                        <li v-for="(l, i) in this.links" :key="i" class="nav-item ms-lg-3">
                            <router-link :to="l.link" class="nav-link position-relative"
                                @click="this.scroll_to_top">
                                {{ l.text }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Offcanvas starts -->
            <div class="offcanvas offcanvas-start d-lg-none bg-dark" tabindex="-1" id="tvas-offcanvas"
                aria-labelledby="tvas-heading">
                <div class="offcanvas-header align-items-start">
                    <h5 class="offcanvas-title" id="tvas-heading">
                        <img src="@/assets/tvas_logo.png" height="50" width="auto" alt="tvas logo">
                    </h5>
                    <button type="button" class="btn-close bg-white" ref="closeOC" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-start">
                    <ul class="navbar-nav">
                        <li v-for="(l, i) in this.links" :key="i" class="nav-item w-100">
                            <router-link :to="l.link" class="nav-link ps-1"
                                @click="this.close_offcanvas">
                                {{ l.text }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Offcanvas ends -->
        </nav>

    </header>
</template>

<script>
export default {
    name: 'HeaderView',
    data() {
        return {
            links: [
                {
                    "text": "Home",
                    "link": "/",
                },
                {
                    "text": "About Us",
                    "link": "/about",
                },
                {
                    "text": "Our Team",
                    "link": "/team",
                },
            ]
        }
    }
}
</script>

<style scoped>
    .navbar-toggler:focus{
        box-shadow: 0 0 1 #FE8D41 0.25rem;
    }
    nav{
        background: #28282B;
        /* box-shadow: 0 1px 10px rgba(255, 255, 255, 0.116); */
    }
    nav a {
        color: white;
        text-decoration: none;
    }

    nav a::after{
        content: '';
        transform: scaleX(0);
        transition: transform 150ms linear;
        will-change: transform;
        background: #FE8D41;
        opacity: 0.7;
        height: 2px;
        width: 100%;
        display: block;
        margin-top: 0px;
    }

    nav a:hover, nav a:focus{
        color: #FE8D41 !important;
    }

    nav a:hover:after {
        transform: scale(1);
    }

    nav a.router-link-exact-active {
        color: #FE8D41 !important;
        text-decoration: none;
    }

</style>