<template>
   <div class="intro" >
       <div class="overlay-intro"></div>
       <!-- <div class="splash-content display-table">
            <div class="table-cell">
                <div class="container">
                    <h1 class="intro-title mb-4">I am Abdilah Sammi</h1>
                    <p class="intro-subtitle">
                        <span class="text-slider-items">Web Developer,Backend Developer,Laravel Developer</span>
                        <strong class="text-slider"></strong>
                    </p>
                </div>
            </div>
        </div> -->
   </div>
</template>

<style>
    .intro {
        height: 100vh;
        background-image: url('https://abdilah.id/assets/img/abdilah-sammi.JPG');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
    }

    .overlay-intro {
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0px;
        padding: 0;
        height: 100%;
        width: 100%;
        opacity: .9;
    }

    div.splash-content {
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        display: table;
    }

    div.splash-content .table-cell {
        display: table-cell;
        vertical-align: middle;
    }
</style>

<script>
    export default {
        created() {
            document.title = process.env.MIX_APP_NAME + " - Home"; 
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>