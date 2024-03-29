<template>
    <section class="technology">
        <Navigation/>
        <div class="mainContent">
            <h3 class="pageTitle"><span>03</span> Space launch 101</h3>
            <div class="technologyDetails">
                <div class="techDescription">
                    <ul class="techNav">
                        <li v-for="(tech, i) in technology" :key="i"
                        @click="turnTechnologyPage(tech.name)"
                        :class="{active: isActiveTechnologyPage(tech.name)}">{{i + 1}}</li>
                    </ul>
                    <div class="infoBox">
                        <h4>The terminology...</h4>
                        <h2>{{actualTechnology.name}}</h2>
                        <p>{{actualTechnology.description}}</p>
                    </div>
                </div>
                <div class="imgBox">
                    <picture>
                        <source media="(max-width: 768px)" :srcset="landscape">
                        <img :src="portrait">
                    </picture>
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
    },
    data() {
        return {
            technology: [],
            actualTechnology: {}
        }
    },
    methods: {
        async getTechnology() {
            let res = await fetch('/data.json')
            let data = await res.json()
            this.technology = data.technology
        },
        turnTechnologyPage(name) {
            this.actualTechnology = this.technology.find((tech) => {
                return tech.name === name
            })
        },
        isActiveTechnologyPage(name) {
            return name === this.actualTechnology.name
        }
    },
    computed: {
        portrait() {
            if(this.actualTechnology.images) {
                return this.actualTechnology.images.portrait
            }
            else {
                return ''
            }
        },
        landscape() {
            if(this.actualTechnology.images) {
                return this.actualTechnology.images.landscape
            }
            else {
                return ''
            }
        }
    },
    async created() {
        await this.getTechnology()
        this.actualTechnology = this.technology[0]
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
            @include pageTitle;
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

                @include tablet {
                    max-height: none;
                    flex-direction: column;
                    width: 100%;
                }

                .techNav {
                    position: relative;
                    height: 100%;
                    width: 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    margin-right: 50px;

                    @include tablet {
                        margin-right: 0;
                        width: 100%;
                        max-width: 210px;
                        flex-direction: row;
                        margin-bottom: 40px;
                    }

                    @include mobile {
                        max-width: 155px;
                        margin-bottom: 25px;
                    }

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

                        @include tablet {
                            width: 50px;
                            height: 50px;
                            font-size: 1.4em;
                        }

                        @include mobile {
                            width: 40px;
                            height: 40px;
                            font-size: 1em;
                        }

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

                    @include tablet {
                        height: auto;
                        max-width: none;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        margin-right: 0;
                        padding: 0 30px;
                    }

                    @include mobile {
                        padding: 0 25px;
                    }

                    h4 {
                        font-size: 1em;
                        font-weight: 400;
                        color: $blue;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        margin-bottom: 10px;

                        @include mobile {
                            font-size: 0.9em;
                        }
                    }

                    h2 {
                        font-family: 'Bellefair', serif;
                        font-size: 3.3em;
                        color: $white;
                        font-weight: 400;
                        text-transform: uppercase;
                        margin-bottom: 15px;

                        @include tablet {
                            font-size: 2.5em;
                        }

                        @include mobile {
                            font-size: 1.8em;
                        }
                    }

                    p {
                        @include description;

                        @include tablet {
                            font-size: 1em;
                            max-width: 460px;
                        }
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    object-fit: cover;
                    margin-bottom: 60px;
                }

                @include mobile {
                    margin-bottom: 30px;
                }

                img {
                    position: relative;
                    height: 100%;

                    @include tablet {
                        width: 100%;
                    }
                }
            }
        }

        
    }
}

</style>