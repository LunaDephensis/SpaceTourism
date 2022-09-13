<template>
    <section class="crew">
        <Navigation/>
        <class class="mainContent">
            <h3 class="pageTitle"><span>02</span> Meet your crew</h3>
                <div class="crewInfos">
                    
                    <div class="textBox">
                        <h3 class="role">{{actualCrewMember.role}}</h3>
                        <h2 class="name">{{actualCrewMember.name}}</h2>
                        <p>{{actualCrewMember.bio}}</p>
                    </div>
                    
                    <div class="crewNav">
                        <span v-for="member in crewMembers" :key="member.name"
                        @click="turnCrew(member.name)"
                        :class="{active: isActiveMember(member.name)}"></span>
                    </div>
                </div>
                <div class="imgBox">
                    <img :src="image" >
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
    },
    data() {
        return {
            crewMembers: [],
            actualCrewMember: {}
        }
    },
    methods: {
        async getCrewMebers() {
            let res = await fetch('/data.json')
            let data = await res.json()
            this.crewMembers = data.crew
        },
        turnCrew(name) {
            this.actualCrewMember = this.crewMembers.find((member) => {
                return member.name === name
            })
        },
        isActiveMember(name) {
            return name === this.actualCrewMember.name
        }
    },
    computed: {
        image() {
           if(this.actualCrewMember.images) {
               return this.actualCrewMember.images.png
           }
           else {
               return ''
           }
        }
    },
    async created() {
        await this.getCrewMebers()
        this.actualCrewMember = this.crewMembers[0]
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 95px 1fr;

        @include tablet {
            padding-left: 0;
            padding: 30px;
            padding-bottom: 0;
            height: 100%;
            min-height: calc(100vh - 95px);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        @include mobile {
            padding: 0 25px;
        }

        .pageTitle {
                @include pageTitle;
                grid-column: 1/2;
                grid-row: 1/2;

                @include tablet {
                    width: 100%;
                    text-align: start;
                    margin-bottom: 30px;
                }

                @include mobile {
                    text-align: center;
                    font-size: 1.1em;
                    order: 1;
                    margin-top: 10px;
                }
            }

        .crewInfos {
            position: relative;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            margin-right: 15px;
            grid-column: 1/2;
            grid-row: 2/3;

            @include tablet {
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 100%;
                margin-right: 0;
            }

            @include mobile {
                order: 3;
                flex-direction: column-reverse;
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

                @include mobile {
                    font-size: 1.1em;
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

                @include mobile {
                    font-size: 1.8em;
                }
            }

            p {
                max-width: 400px;
                @include description;
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
                    z-index: 50;
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
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-right: 15px;
            grid-column: 2/3;
            grid-row: 1/3;

            @include tablet {
                margin-right: 0;
                width: 100%;
            }

            @include mobile {
                width: 100%;
                height: 230px;
                margin-bottom: 30px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                order: 2;
            }

            img {
                position: relative;
                height: 100%;

                @include tablet {
                    max-height: 500px;
                }
            }
        }
    }
}

</style>