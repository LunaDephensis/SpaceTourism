<template>
    <section class="crew">
        <Navigation/>
        <class class="mainContent">
                <div class="crewInfos">
                    <div class="textBox">
                        <h3 class="pageTitle"><span>02</span> Meet your crew</h3>
                        <h3 class="role">Commander</h3>
                        <h2 class="name">Douglas Hurley</h2>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps   pilot 
                        and former NASA astronaut. He launched into space for the third time as 
                        commander of Crew Dragon Demo-2.</p>
                    </div>
                    
                    <div class="crewNav">
                        <span class="active point"></span>
                        <span class="point"></span>
                        <span class="point"></span>
                        <span class="point"></span>
                    </div>
                </div>
                <div class="imgBox">
                    <img src="../../public/assets/crew/image-douglas-hurley.png" >
                </div>
        </class>
    </section>
</template>

<script>

import Navigation from '../components/Navigation.vue'

export default {
    name: 'Crew',
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>

.crew {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: url(../../public/assets/crew/background-crew-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

    @include tablet {
        height: 100%;
        min-height: 100vh;
        background: url(../../public/assets/crew/background-crew-tablet.jpg);
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
        justify-content: space-between;
        align-items: flex-end;

        @include tablet {
            padding-left: 0;
            padding: 30px;
            padding-bottom: 0;
            height: 100%;
            min-height: calc(100vh - 95px);
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .crewInfos {
            position: relative;
            max-width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            margin-right: 15px;

            @include tablet {
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 100%;
                margin-right: 0;
            }

            .textBox {
                position: relative;

                @include tablet {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                }
            }

            .pageTitle {
                position: relative;
                font-size: 1.4em;
                font-weight: 300;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: $white;
                margin-bottom: 100px;

                @include tablet {
                    width: 100%;
                    text-align: start;
                }

                span {
                    font-weight: 700;
                    margin-right: 8px;
                    opacity: 0.3;
                }
            }

            .role {
                font-size: 1.8em;
                text-transform: uppercase;
                color: $white;
                opacity: 0.5;
                font-family: 'Bellefair', serif;
                font-weight: 300;
                margin-bottom: 15px;

                @include tablet {
                    font-size: 1.5em;
                }
            }

            .name {
                font-family: 'Bellefair', serif;
                font-size: 3.3em;
                color: $white;
                font-weight: 400;
                text-transform: uppercase;
                margin-bottom: 15px;

                @include tablet {
                    font-size: 2.5em;
                }
            }

            p {
                max-width: 400px;
                font-size: 1.2em;
                font-weight: 400;
                color: $blue;
                line-height: 1.5em;
                margin-bottom: 20px;

                @include tablet {
                    margin-bottom: 40px;
                    font-size: 1em;
                }
            }

            .crewNav {
                position: relative;
                width: 100%;
                margin-bottom: 40px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 15px;

                @include tablet {
                    justify-content: center;
                }

                span {
                    position: relative;
                    width: 15px;
                    height: 15px;
                    background: $white;
                    opacity: 0.2;
                    border-radius: 50%;
                    margin-right: 25px;
                    cursor: pointer;
                    z-index: 100;
                    transition: 0.2s ease-in-out;

                    @include tablet {
                        width: 12px;
                        height: 12px;
                        margin-right: 20px;
                    }

                    &:last-child {
                        margin-right: 0;
                    }

                    &.active {
                        opacity: 1;
                    }

                    &:hover {
                        opacity: 0.5;
                    }
                }
            }
        }

        .imgBox {
            position: relative;
            height: 100%;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-right: 50px;

            img {
                position: relative;
                height: 100%;
            }
        }
    }
}

</style>