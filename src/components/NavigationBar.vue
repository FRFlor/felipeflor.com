<template>
    <nav>
        <div class="banner">
            Felipe Flor
        </div>

        <ul class="top-links">
            <li v-for="link in links">
                <a @click="routeTo(link.url)" v-text="link.caption"></a>
            </li>
        </ul>

        <div class="hamburger-button" @click="showSideBar">
            <i class="fas fa-bars" :class="{'pressed' : isShowingSideBar}"></i>
        </div>

        <div class="fullScreen" v-show="isGivingSideBarContainerFullScreenAccess">
            <transition enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut">
                <div class="behind-the-sidebar" v-show="isShowingSideBar" @click="hideSideBar">
                </div>
            </transition>

            <transition enter-active-class="animated slideInRight"
                        leave-active-class="animated slideOutRight">
                <ul class="side-links" v-show="isShowingSideBar">
                    <li v-for="link in links">
                        <a @click="routeTo(link.url)" v-text="link.caption"></a>
                    </li>
                </ul>
            </transition>
        </div>
    </nav>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    const animationDuration: number = 500; // Remember to update .animated if any changes are made here

    @Component({})
    export default class NavigationBar extends Vue {
        private isShowingSideBar: boolean = false;
        private isGivingSideBarContainerFullScreenAccess: boolean = false;
        private isAnimationComplete: boolean = true;
        private links: object[] = [
            {caption: 'Home', url: '/'},
            {caption: 'My Story', url: '/story'},
            {caption: 'Portfolio', url: '/portfolio'},
            {caption: 'Contact', url: '/contact'},
            ];

        private routeTo(destination: string) {
            this.$router.push(destination);

            if (this.isShowingSideBar) {
                this.hideSideBar();
            }
        }

        private hideSideBar() {
            if (!this.isAnimationComplete) {
                return;
            }

            this.isAnimationComplete = false;
            this.isShowingSideBar = false;
            setTimeout(() => {
                this.isGivingSideBarContainerFullScreenAccess = false;
                this.isAnimationComplete = true;
            }, animationDuration);
        }

        private showSideBar() {
            if (!this.isAnimationComplete) {
                return;
            }

            this.isAnimationComplete = false;
            this.isGivingSideBarContainerFullScreenAccess = true;
            this.isShowingSideBar = true;

            setTimeout(() => {
                this.isAnimationComplete = true;
            }, animationDuration);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/app.scss";

    $start-text-color: #D9E0D9;
    $not-hovered-text-color: #c1c1c1;
    $hovered-text-color: $highlight-color;

    $banner-height: 50px;
    $side-bar-background: #171717;

    // Class from animate.css
    .animated {
        animation-duration: 0.5s;
    }

    .fullScreen {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }

    .white-text {
        color: $start-text-color;
    }

    a {
        color: #c64119;
        border-bottom: 1px solid #c64119;
        text-decoration: none;
        font-size: 0.95rem;
    }

    ul {
        color: $start-text-color;
        list-style: none;
        &:hover {
            li {
                color: $not-hovered-text-color;
            }
        }
    }

    a:hover, .hamburger-button:hover {
        color: $hovered-text-color !important;
        cursor: pointer;
        font-size: 1.05rem;
    }

    nav {
        position: absolute;
        top: 0;
        width: 100%;
        height: $banner-height;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .banner {
        flex: 2;
        display: flex;
        justify-content: center;
        color: $start-text-color;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 400;
    }

    a {
        border-bottom: none !important;
    }

    .top-links {
        display: none;
    }

    .side-links-container {
        display: flex;
    }

    .side-links {
        background: $side-bar-background;
        color: whitesmoke;
        line-height: 2.1;
        position: absolute;
        right: 0;
        z-index: 3;
        width: 115px;
        height: 100vh;
        margin: 0;
        padding: 25px 0 0 15px;
        box-shadow: 10px 0 6px -6px black;
    }

    .behind-the-sidebar {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    li {
        text-transform: uppercase;
    }

    .hamburger-button {
        margin-right: 25px;
        color: $start-text-color;
        .pressed {
            color: $hovered-text-color;
        }
        &:hover {
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 768px) {
        .top-links {
            flex: 3;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 0;
            padding: 0 30px;
        }

        .hamburger-button {
            display: none;
        }
    }

    @media only screen and (min-width: 1440px) {
        .top-links {
            flex: 2;
            margin: 0;
            padding: 0 100px 0 0;
        }
    }
</style>
