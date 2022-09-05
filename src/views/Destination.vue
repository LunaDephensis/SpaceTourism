<template>
    <section class="destination">
        <Navigation/>
        <div class="mainContent">
            <h3 class="pageTitle"><span>01</span> Pick your destination</h3>
            <div class="destinationDetails">
                <div class="imgBox">
                    <img src="../assets/destination/image-moon.png">
                </div>
                <div class="destinationDescription">
                    <ul class="destNav">
                        <li class="active">Moon</li>
                        <li>Mars</li>
                        <li>Europa</li>
                        <li>Titan</li>
                    </ul>
                    <div class="infoBox">
                        <h2 class="destinationTitle">Moon</h2>
                        <p class="destinationText">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <div class="travelInfos">
                            <div class="travelInfo distanceInfo">
                                <h4>Avg. distance</h4>
                                <span class="distance">384,400 km</span>
                            </div>
                            <div class="travelInfo timeInfo">
                                <h4>Est. travel time</h4>
                                <span class="time">3 days</span>
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
    background: url(../assets/destination/background-destination-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

    @include tablet {
        height: 100%;
        min-height: 100vh;
        background: url(../assets/destination/background-destination-tablet.jpg);
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
            margin-top: 100px;
            padding: 30px;
            height: calc(100vh - 95px);
        }

        .pageTitle {
            position: relative;
            font-size: 1.4em;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: $white;
            margin: 30px 0 50px;

            @include tablet {
                font-size: 1.1em;
                margin: 30px 0;
            }

            span {
                font-weight: 700;
                margin-right: 8px;
                opacity: 0.3;
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

                .destNav {
                    position: relative;
                    width: 100%;
                    max-width: 290px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;

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
                    }
                }

                .infoBox {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-direction: column;

                    .destinationTitle {
                        font-size: 4em;
                        font-family: 'Bellefair', serif;
                        font-weight: 400;
                        text-transform: uppercase;
                        letter-spacing: 4px;
                        margin-bottom: 15px;
                        color: $white;
                    }

                    .destinationText {
                        font-size: 1.2em;
                        font-weight: 400;
                        color: $blue;
                        line-height: 1.6em;
                        padding-right: 10px;
                        padding-bottom: 40px;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        margin-bottom: 10px;
                    }

                    .travelInfos {
                        position: relative;
                        width: 70%;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;

                        .travelInfo {
                            text-transform: uppercase;

                            h4 {
                                color: $blue;
                                font-weight: 400;
                                font-size: 0.8em;
                                letter-spacing: 2px;
                                margin-bottom: 5px;
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