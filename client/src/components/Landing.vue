<template>
    <section id="home" class="landing">
        <div class="landing-left">
            <div class="landing-left-design">
                <img src="../assets/img/landing-left-design.png" alt="">
            </div>
            <img src="../assets/img/landing-img.png" alt="">
        </div>
        <div class="landing-right">
            <div class="landing-right-info">
                <h1>
                    Tastify
                </h1>
                <p>
                    Welcome to Tastify, your ultimate destination for mouthwatering recipes and culinary
                    inspiration.
                    Whether
                    you're a cooking novice or a seasoned pro, Tastify has something for everyone. From quick and
                    easy
                    meals
                    to indulgent desserts, our site is your go-to for all things food. Join us as we explore the
                    world
                    of
                    flavors and ingredients, and let's embark on a culinary adventure together. Happy cooking!
                </p>
                <button type=" button">Order Now</button>
            </div>
        </div>
        <div @click="scrollDown" class="scroll-down">
            <i class="uil uil-mouse-alt"></i>
            <span>Scroll down</span>
            <i class="uil uil-arrow-down"></i>
        </div>
    </section>
</template>

<script setup>
const scrollDown = () => {
    let aboutSection = document.getElementById("product");
    window.scrollTo({ top: aboutSection.offsetTop - 50, behavior: "smooth" });

}
</script>

<style  scoped>
.landing {
    background-color: var(--main-color1);
    position: relative;
    min-height: calc(100vh - 90px);
    display: flex;
    align-items: center;
    margin-bottom: var(--section-padding);
}



.landing .landing-left {
    position: relative;
    display: none;

}

.landing-left>img {
    display: block;
}

.landing-left .landing-left-design {
    position: absolute;
    right: -290px;
}

.landing-right {
    padding: 0 15px 0 15px;
}

.landing-right .landing-right-info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    margin-bottom: 80px;
    z-index: 2;
}

.landing-right-info h1 {
    font-size: 35px;
    color: var(--title-color);
    font-family: 'Grand Hotel', cursive;
}

.landing-right-info p {
    font-size: var(--font-size1);
    color: var(--light-text-color);
    max-width: 85%;
}

.landing-right-info button {
    background-color: var(--title-color);
    color: var(--text-color);
    font-weight: 700;
    border: 0;
    font-size: var(--font-size1);
    padding: 15px 30px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color var(--transition);
}

.landing-right-info button:hover {
    background-color: var(--main-color2);
}

.landing .scroll-down {
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--title-color);
    transition: var(--transition);
}

.scroll-down i:first-child {
    font-size: 32px;
}

.scroll-down span {
    font-size: var(--font-size1);
    color: var(--title-color);
    font-weight: 700;
}

.scroll-down i:last-child {
    font-size: 20px;
    animation: scroll-down 1.5s infinite;
}

.landing .scroll-down:hover {
    bottom: 25px;
}

.landing .scroll-down:hover i:last-child {
    animation: none;
    -webkit-animation: none;
}

@media(min-width: 992px) {
    .landing .landing-left {
        display: block;
    }

    .landing-right {
        padding: 0;
    }

    .landing-right-info h1 {
        font-size: 70px;
    }

    .landing-right-info p {
        font-size: var(--font-size2);
    }

}

/* ================ Animation ================ */

@keyframes scroll-down {

    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40%,
    60% {
        transform: translateY(-15px);
    }
}
</style>