<template>
    <section id="contact" class="contact">
        <div class="Container">
            <div class="contact-top">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi consequatur? Nihil aut
                    dignissimos
                    natus quaerat sunt. Ab doloribus omnis dolorum, tenetur ullam doloremque reiciendis ad corporis, ducimus
                    architecto beatae?
                </p>
                <h1>das;lkdas;lkd;lksd</h1>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.contact {
    position: relative;
    padding: var(--section-padding) 0;
    height: 500px;


}

.contact::before {
    content: "";
    position: absolute;
    background-color: rgb(254 194 0 / 70%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}

.contact::after {
    content: "";
    position: absolute;
    background-image: url("../assets//img//food-section2.png");
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;


}

.contact .Container {
    height: 100%;
}

.contact .contact-top {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

}

.contact-top p {
    width: 75%;
    line-height: 1.5;
    text-align: center;
    font-size: var(--font-size2);
}

.contact-top h1 {
    font-family: 'Grand Hotel', cursive;
    font-weight: 500;
    font-size: 35px;
}
</style>