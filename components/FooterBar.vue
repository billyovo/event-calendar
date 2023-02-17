<template>
    <footer>
        <div class="footer-inner co">
            <h3>聯絡我們</h3>
            <div class="socials">
                <a href="https://dcraft.org/discord" class="social" aria-label="Discord連結">
                    <font-awesome-icon icon="fa-brands fa-discord" class="discord" size="2xl" />
                </a>
                <a href="https://dcraft.org/facebook" class="social" aria-label="Facebook連結">
                    <font-awesome-icon icon="fa-brands fa-facebook" class="facebook" size="2xl" />
                </a>
                <a href="https://instagram.com/mc.dreamcrafter/" class="social" aria-label="Instagram連結">
                    <font-awesome-icon icon="fa-brands fa-instagram" class="instagram" size="2xl" />
                </a>
            </div>
            <div class="message">
                <span>Copyright © DreamCrafter 2023</span>
            </div>
        </div>
    </footer>
</template>
<style>
    footer{
        background-color: var(--color-main);
        padding: 20px 0px;
    }
    .footer-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: hsl(10, 21%, 95%);
    }
    .socials{
        margin: 10px 0px 20px 0px;
        display: block;

    }

    .socials > a{
        margin: 0 0.5rem;
    }

    .discord:hover{
        color: #7289da;
    }
    .facebook:hover{
        color: #1778F2;
    }
    .instagram:hover{
        color: #fd5949;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .message{
        font-size: 0.8rem;
    }
</style>
