<template>
    <footer>
        <div class="container">
            <div class="footer-details">
                <div class="footer-left">
                    <h2>Tastify</h2>
                    <p>Lorem ipsum dolor, sit ametamet consectetur amet consectetur amet consectetur consectetur </p>
                    <ul>
                        <li>
                            <i class="uil uil-whatsapp"></i>
                        </li>
                        <li>
                            <i class="uil uil-instagram"></i>

                        </li>
                        <li>
                            <i class="uil uil-twitter-alt"></i>

                        </li>
                        <li>
                            <i class="uil uil-facebook-messenger-alt"></i>
                        </li>
                    </ul>
                </div>
                <div class="footer-right">
                    <div class="footer-link">
                        <a>ABOUT</a>
                        <ul>
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Brand Guidelines</li>
                            <li>Team & Condition</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div class="footer-link">
                        <a>SERVICES</a>
                        <ul>
                            <li>How to Order</li>
                            <li>Our Product</li>
                            <li>Order Status</li>
                            <li>Promo</li>
                            <li>Payment Method</li>
                        </ul>
                    </div>
                    <div class="footer-link">
                        <a>OTHER</a>
                        <ul>
                            <li>Contact Us</li>
                            <li>Help</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer-copyRight">
            Copyright &copy; <span class="year"></span> coded by <span class="name">Ahmed AL-Thari</span> . All rights
            reserved.
        </div>
    </footer>
</template> 

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
    //  ================ Dynamically Copy Right Year ================
    let year = document.querySelector(".year");
    year.textContent = new Date().getFullYear();
})
</script>

<style  scoped></style>