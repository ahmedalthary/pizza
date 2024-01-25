<template>
    <section id="product" class="product">
        <div class="global-head">
            <h2>Best Seller</h2>
            <p>
                Discover our top-rated recipes in our best seller section. These are the dishes that our community loves the
                most. Find your new favorite today!
            </p>
        </div>
        <div class="Container">
            <div class="product-container">
                <div class="product-card">
                    <img src="../assets/img/food1.png" alt="product1">
                    <h3>
                        Classic Spaghetti Bolognese
                    </h3>
                    <p>
                        Al dente spaghetti in rich Bolognese sauce, topped with Parmesan for an irresistible Italian mea

                    </p>
                </div>
                <div class="product-card">
                    <img src="../assets/img/food2.png" alt="product2">
                    <h3>
                        Mouthwatering Falafel Feast
                    </h3>
                    <p>
                        Crispy falafel with creamy tahini for a satisfying dish

                    </p>
                </div>
                <div class="product-card">
                    <img src="../assets/img/food3.png" alt="product3">
                    <h3>
                        Zesty Lemon Chicken
                    </h3>
                    <p>
                        Zesty, grilled chicken with fragrant rice for a refreshing meal.
                    </p>
                </div>
            </div>
        </div>
        <div class="statistics">
            <div class="statistics-design-top">
                <img src="../assets/img/Design-section1.png" alt="">
            </div>
            <div class="Container">

                <div class="statistics-top">
                    <div class="statistics-top-img">
                        <img src="../assets/img/food-section.png" alt="statistics-top-img">
                    </div>
                    <div class="statistics-top-info">
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
                <div class="statistics-middle">
                    <div class="statistics-middle-title">
                        <h1>
                            Statistics
                        </h1>
                        <p>
                            Welcome to Tastify, your ultimate destination for mouthwatering recipes and culinary
                            inspiration.
                        </p>
                    </div>
                    <div class="statistics-middle-info">

                        <ul>
                            <li>
                                <div>
                                    <span>123</span>
                                    <span>OUTLETS</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>100</span>
                                    <span>CHEF</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>300</span>
                                    <span>MENU</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>30</span>
                                    <span>COUNTRY</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="statistics-bottom">
                    <div class="statistics-bottom-info">
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
                    <div class="statistics-bottom-img">
                        <img src="../assets/img/food-section3.png" alt="statistics-bottom-img">
                    </div>

                </div>
            </div>
            <div class="statistics-design-bottom">
                <img src="../assets/img/Design-section3.png" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.product {
    padding: var(--section-padding) 0 350px 0;

}

.product .product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding-bottom: 350px;
}

.product-container .product-card {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
}

.product-card img {
    width: 150px;
}

.product-card h3 {
    font-size: var(--font-size2);
    font-family: 'Grand Hotel', cursive;
    font-weight: 500;

}

.product-card p {
    font-size: var(--font-size1);
    line-height: 1.4;
    align-self: flex-end;
    flex: 1;
}

.statistics {
    background-color: var(--main-color1);
    position: relative;
}

.statistics .statistics-design-top {
    /* position: absolute;
    width: 100%;
    height: 600px;
    top: -300px;
    z-index: -1; */

    position: absolute;
    width: 100%;
    height: 500px;
    top: -240px;
    z-index: -1;
}

.statistics-design-top img {
    width: 100%;
    height: 100%;
}

.statistics .statistics-top {
    display: flex;
    transform: translateY(-150px);
    column-gap: 130px;
    padding: 0 20px 0 100px;

}

.statistics-top .statistics-top-img {
    flex-shrink: 0;
    width: 300px;
    max-width: 100%;

}

.statistics-top-img img {
    width: 100%;
    height: auto;
}

.statistics-top .statistics-top-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    z-index: 2;
    justify-content: end;
}

.statistics-top-info h1 {
    font-size: 35px;
    color: var(--title-color);
    font-family: 'Grand Hotel', cursive;
}

.statistics-top-info p {
    font-size: var(--font-size1);
    color: var(--light-text-color);
    max-width: 85%;
}

.statistics-top-info button {
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

.statistics .statistics-middle {
    display: flex;
    flex-direction: column;
    gap: 60px;
    /* transform: translateY(150px); */

}

.statistics-middle .statistics-middle-title {
    text-align: center;
}

.statistics-middle-title h1 {
    font-family: 'Grand Hotel', cursive;
    font-size: 35px;
    color: var(--title-color);

}

.statistics-middle-title p {
    font-size: var(--font-size1);
    color: var(--light-text-color);
}

.statistics-middle .statistics-middle-info {}

.statistics-middle-info ul {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
}

.statistics-middle-info ul li {
    display: flex;
    justify-content: center;
    border: 3px solid var(--main-color2);
    width: 130px;
    height: 130px;
    border-radius: 50%;
    cursor: pointer;
    transition: var(--transition);

}

.statistics-middle-info ul li:hover {
    background-color: var(--title-color);
}

.statistics-middle-info ul li div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 10px;
}

.statistics-middle-info ul li div span {
    transition: var(--transition);
}

.statistics-middle-info ul li:hover div span {
    color: var(--text-color) !important;
}

.statistics-middle-info ul li div span:first-child {
    font-size: 25px;
    color: var(--title-color);
    font-weight: 600;
}

.statistics-middle-info ul li div span:last-child {
    font-size: 17px;
    color: var(--main-color2);
    font-weight: 600;

}


.statistics .statistics-bottom {
    display: flex;
    transform: translateY(150px);
    column-gap: 130px;
    padding: 0 20px 0 100px;

}

.statistics-bottom .statistics-bottom-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    z-index: 2;
}

.statistics-bottom-info h1 {
    font-size: 35px;
    color: var(--title-color);
    font-family: 'Grand Hotel', cursive;
}

.statistics-bottom-info p {
    font-size: var(--font-size1);
    color: var(--light-text-color);
    max-width: 85%;
}

.statistics-bottom-info button {
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

.statistics-bottom .statistics-bottom-img {
    flex-shrink: 0;
    width: 300px;
    max-width: 100%;

}

.statistics-bottom-img img {
    width: 100%;
    height: auto;
}

.statistics .statistics-design-bottom {
    /* position: absolute;
    width: 100%;
    height: 600px;
    bottom: -300px;
    z-index: -1; */

    position: absolute;
    width: 100%;
    height: 500px;
    bottom: -240px;
    z-index: -1;
}

.statistics-design-bottom img {
    width: 100%;
    height: 100%;
}
</style>