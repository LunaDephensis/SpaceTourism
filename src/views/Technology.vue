<template>
    <section class="technology">
        <Navigation/>
        <div class="mainContent">
            <h3 class="pageTitle"><span>03</span> Space launch 101</h3>
            <div class="technologyDetails">
                <div class="techDescription">
                    <ul class="techNav">
                        <li class="active">1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <div class="infoBox">
                        <h4>The terminology...</h4>
                        <h2>Launch vehicle</h2>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                </div>
                <div class="imgBox">
                    <img src="../../public/assets/technology/image-launch-vehicle-portrait.jpg">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Navigation from '../components/Navigation.vue'

export default {
    name: 'Technology',
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>

.technology {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: url(../../public/assets/technology/background-technology-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

    @include tablet {
        height: 100%;
        min-height: 100vh;
        background: url(../../public/assets/technology/background-technology-tablet.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mainContent {
        position: relative;
        width: 100%;
        height: calc(100% - 175px);
        padding-left: 160px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        @include tablet {
            padding: 30px 0;
            height: 100%;
            min-height: calc(100vh - 95px);
        }

        .pageTitle {
            position: relative;
            width: 100%;
            font-size: 1.4em;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: $white;
            margin: 50px 0;

            @include tablet {
                font-size: 1.1em;
                margin: 40px 0 60px;
                margin-left: 30px;
            }

            @include mobile {
                font-size: 1em;
                margin: 5px 0 30px;
                text-align: center;
            }

            span {
                font-weight: 700;
                margin-right: 8px;
                opacity: 0.3;
            }
        }

        .technologyDetails {
            position: relative;
            height: calc(100% - 126px);
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            @include tablet {
                max-height: none;
                width: 100%;
                justify-content: center;
                flex-direction: column-reverse;
            }

            .techDescription {
                position: relative;
                height: 100%;
                max-height: 305px;
                display: flex;
                justify-content: center;
                align-items: center;

                .techNav {
                    position: relative;
                    height: 100%;
                    width: 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    margin-right: 50px;

                    li {
                        position: relative;
                        list-style: none;
                        width: 80px;
                        height: 80px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: $white;
                        font-family: 'Bellefair', serif;
                        font-weight: 400;
                        font-size: 2em;
                        background: transparent;
                        border: 1px solid rgba(255,255,255,0.25);
                        border-radius: 50%;
                        cursor: pointer;

                        &.active {
                            background: $white;
                            color: $dark;
                        }

                        &:hover {
                            background: transparent;
                            border: 1px solid $white;
                            color: $white;
                        }
                    }
                }

                .infoBox {
                    position: relative;
                    width: 100%;
                    max-width: 470px;
                    height: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-direction: column;
                    margin-right: 15px;

                    h4 {
                        font-size: 1em;
                        font-weight: 400;
                        color: $blue;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        margin-bottom: 10px;
                    }

                    h2 {
                        font-family: 'Bellefair', serif;
                        font-size: 3.3em;
                        color: $white;
                        font-weight: 400;
                        text-transform: uppercase;
                        margin-bottom: 15px;
                    }

                    p {
                        max-width: 400px;
                        font-size: 1.2em;
                        font-weight: 400;
                        color: $blue;
                        line-height: 1.5em;
                    }
                }
            }

            .imgBox {
                position: relative;
                height: 100%;
                max-height: 525px;
                width: auto;

                @include tablet {
                    width: 100%;
                    height: auto;
                    max-height: 310px;
                }

                img {
                    position: relative;
                    height: 100%;

                    @include tablet {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        
    }
}

</style>