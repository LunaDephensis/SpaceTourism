<template>
    <section class="destination">
        <Navigation/>
        <div class="mainContent">
            <h3 class="pageTitle"><span>01</span> Pick your destination</h3>
            <div class="destinationDetails">
                <div class="imgBox">
                    <img :src="image">
                </div>
                <div class="destinationDescription">
                    <ul class="destNav">
                        <li v-for="destination in destinations" :key="destination.name"
                        :class="{active: isPicked(destination.name)}"
                        @click="pickDestination(destination.name)"
                        >{{destination.name}}</li>
                    </ul>
                    <div class="infoBox">
                        <h2 class="destinationTitle">{{actualDestination.name}}</h2>
                        <p class="destinationText">
                            {{actualDestination.description}}
                        </p>
                        <div class="travelInfos">
                            <div class="travelInfo distanceInfo">
                                <h4>Avg. distance</h4>
                                <span class="distance">{{actualDestination.distance}}</span>
                            </div>
                            <div class="travelInfo timeInfo">
                                <h4>Est. travel time</h4>
                                <span class="time">{{actualDestination.travel}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Navigation from '../components/Navigation.vue'

export default {
    name: 'Destination',
    components: {
        Navigation
    },
    data() {
        return {
            destinations: [],
            actualDestination: {}
        }
    },
    methods: {
        async getDestinations() {
           let res = await fetch('/data.json')
           let data = await res.json()
           this.destinations = data.destinations
        },
        pickDestination(name) {
           this.actualDestination = this.destinations.find((destination) => {
                return destination.name === name
            })
        },
        isPicked(name) {
            return name === this.actualDestination.name
        }
    },
    computed: {
        image() {
           if(this.actualDestination.images) {
               return this.actualDestination.images.png
           }
           else {
               return ''
           }
        }
    },
    async created() {
        await this.getDestinations()
        this.actualDestination = this.destinations[0]
    }
}
</script>

<style lang="scss" scoped>

.destination {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: url(../../public/assets/destination/background-destination-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

    @include tablet {
        height: 100%;
        min-height: 100vh;
        background: url(../../public/assets/destination/background-destination-tablet.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mainContent {
        position: relative;
        width: 100%;
        height: calc(100% - 175px);
        padding: 50px 160px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        @include tablet {
            padding: 30px;
            height: 100%;
            min-height: calc(100vh - 95px);
        }

        @include mobile {
            padding: 25px;
            padding-top: 0;
            align-items: center;
        }

        .pageTitle {
            @include pageTitle;
            margin: 30px 0 50px;

            @include tablet {
                font-size: 1.1em;
                margin: 30px 0;
            }

            @include mobile {
                font-size: 1em;
                margin: 5px 0 30px;
                text-align: center;
            }
        }

        .destinationDetails {
            position: relative;
            width: 100%;
            height: 100%;
            max-height: 500px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @include tablet {
                max-height: none;
                justify-content: center;
                flex-direction: column;
            }

            .imgBox {
                position: relative;
                width: 50%;
                max-width: 400px;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;

                @include tablet {
                    max-width: 280px;
                    max-height: 280px;
                    margin-bottom: 30px;
                }

                @include mobile {
                    max-width: 170px;
                    max-height: 170px;
                    height: auto;
                }

                img {
                    position: relative;
                    width: 100%;
                    height: auto;
                }
            }

            .destinationDescription {
                position: relative;
                width: 50%;
                max-width: 445px;
                min-height: 400px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;

                @include tablet {
                    width: 100%;
                    max-width: none;
                    min-height: none;
                    justify-content: center;
                    align-items: center;
                }

                .destNav {
                    position: relative;
                    width: 100%;
                    max-width: 290px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;

                    @include mobile {
                        max-width: 240px;
                        margin-bottom: 20px;
                    }

                    li {
                        list-style: none;
                        color: $blue;
                        font-size: 1.1em;
                        text-transform: uppercase;
                        font-weight: 300;
                        letter-spacing: 2px;
                        padding: 10px 0;
                        cursor: pointer;
                        border-bottom: 2px solid transparent;
                        transition: 0.3s;

                        &.active {
                            color: $white;
                            border-bottom: 2px solid $white;
                        }

                        &:hover {
                            border-bottom: 2px solid rgba(255,255,255,0.5);
                        }

                        @include mobile {
                            font-size: 0.9em;
                        }
                    }
                }

                .infoBox {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-direction: column;

                    @include tablet {
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }

                    .destinationTitle {
                        font-size: 4em;
                        font-family: 'Bellefair', serif;
                        font-weight: 400;
                        text-transform: uppercase;
                        letter-spacing: 4px;
                        margin-bottom: 15px;
                        color: $white;

                        @include mobile {
                            font-size: 3.5em;
                        }
                    }

                    .destinationText {
                        @include description;
                        padding-right: 10px;
                        padding-bottom: 40px;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        margin-bottom: 10px;

                        @include tablet {
                            padding-right: 0;
                            margin: 0 50px 10px;
                        }

                        @include mobile {
                            font-size: 1em;
                            margin: 0;
                            margin-bottom: 20px;
                            padding-bottom: 30px;
                        }
                    }

                    .travelInfos {
                        position: relative;
                        width: 70%;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;

                        @include tablet {
                            width: 100%;
                            max-width: 300px;
                            align-items: center;
                        }

                        @include mobile {
                            justify-content: center;
                            flex-direction: column;
                            max-width: 100%;
                        }

                        .travelInfo {
                            text-transform: uppercase;

                            @include mobile {
                                margin-bottom: 25px;
                            }

                            h4 {
                                color: $blue;
                                font-weight: 400;
                                font-size: 0.8em;
                                letter-spacing: 2px;
                                margin-bottom: 5px;

                                @include mobile {
                                    margin-bottom: 10px;
                                }
                            }

                            span {
                                font-size: 1.4em;
                                color: $white;
                                font-weight: 400;
                                font-family: 'Bellefair', serif;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>