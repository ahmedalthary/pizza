<template>
    <header>
        <div :class="{ 'sticky': headerSticky }" class="scrolling-header">
            <div class="Container">
                <div class="navBar">
                    <div class="navBar-logo">
                        <RouterLink :to="{ name: 'Home' }">
                            <i class="uil uil-restaurant"></i>
                            <span>Tastify</span>
                        </RouterLink>
                    </div>
                    <div :class="{ 'collapsed': collapsed }" class="navBar-collapsing ">
                        <ul class="navBar-navLink">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="navBar-signup">
                        <RouterLink :to="{ name: 'Signup' }">
                            SiGNUP
                        </RouterLink>
                    </div>
                    <div @click="toggleNavBar" class="toggle-button">
                        <i class="uil uil-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue';
const headerSticky = ref(false);
const collapsed = ref(true);
onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerSticky.value = true;
        } else {
            headerSticky.value = false
        }
    })



})
onBeforeUpdate(() => {
    //  ================ Navbar Item Active ================

    let NavbarItems = document.querySelectorAll(".navBar-navLink li");
    let homeSection = document.getElementById("home");
    let productSection = document.getElementById("product");
    let contactSection = document.getElementById("contact");
    function resetActiveClass(navbarItemIndex) {
        NavbarItems.forEach((NavbarItem) => {
            NavbarItem.classList.remove("active");
        });
        NavbarItems[navbarItemIndex].classList.add("active");
    }
    function navbarActiveOnScroll() {
        if (
            scrollY >= homeSection.offsetTop &&
            scrollY < productSection.offsetTop - 100
        ) {
            resetActiveClass(0);
        } else if (
            scrollY >= productSection.offsetTop - 100 &&
            scrollY < contactSection.offsetTop - 100
        ) {
            resetActiveClass(1);
        }
        else {
            resetActiveClass(2);
        }
    }
    window.addEventListener("scroll", navbarActiveOnScroll);
})
const toggleNavBar = () => {
    collapsed.value = !collapsed.value

}



</script>

<style scoped>
.scrolling-header {
    width: 100%;
    z-index: 999;
    padding: 20px;
    left: 0;
    background-color: var(--main-color1);
}

.scrolling-header.sticky {
    background-color: var(--main-color1);
    position: fixed;
    top: -92px !important;
    box-shadow: 2px 2px 5px #303030;
    transform: translateY(92px);
    transition: var(--transition);

}

.scrolling-header .navBar {
    display: flex;
    gap: 40px;
    align-items: center;
    flex-wrap: wrap;
}

.navBar .navBar-logo {
    flex: 1;
    flex-shrink: 0;
}

.navBar .navBar-logo a {
    color: var(--light-text-color);
    font-weight: 700;
    font-size: var(--font-size2);
}

.navBar-logo a span {
    margin-left: 10px;
}

.navBar .navBar-collapsing {
    order: 4;
    width: 100%;
    height: 200px;
    opacity: 1;
    transition: height var(--transition), opacity var(--transition);
}

@media(max-width: 768.98px) {
    .navBar .navBar-collapsing.collapsed {
        height: 0;
        opacity: 0;
        overflow: hidden;
    }

}

.navBar-collapsing .navBar-navLink {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
}



.navBar-navLink li {
    color: var(--light-text-color);
    cursor: pointer;
    transition: color var(--transition);
    padding: 5px;
    position: relative;

}



.navBar-navLink li.active {
    color: var(--title-color);
}

.navBar .navBar-navLink li:hover {
    color: var(--title-color);
}



.navBar .navBar-signup a {
    color: var(--title-color);
}

.navBar .toggle-button {
    font-size: var(--font-size2);
    color: var(--title-color);
    cursor: pointer;
}

@media(min-width: 768px) {
    .scrolling-header {
        position: fixed;
        background-color: initial;

    }

    .navBar .navBar-logo a {
        font-size: 40px;
    }

    .navBar .navBar-collapsing {
        flex: 1;
        justify-content: flex-end;
        order: initial;
        width: initial;
        height: initial;
        margin-right: 100px;
    }

    .navBar-collapsing .navBar-navLink {
        flex-direction: row;
    }

    .navBar-navLink li {
        padding: 10px;
    }

    .navBar-navLink li::before {
        content: "";
        position: absolute;
        left: 10px;
        bottom: 0;
        height: 5px;
        width: 0;
        z-index: -1;
        background-color: var(--title-color);
        transition: var(--transition);
        border-radius: 3px;

    }

    .navBar-navLink li.active::before {
        width: calc(100% - 20px);
    }

    .navBar .toggle-button {
        display: none;
    }
}
</style>