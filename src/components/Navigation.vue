<template>
    <nav>
      <img src="../../public/assets/shared/logo.svg" class="logo">
      <div class="line"></div>
      <ul class="desktopMenu">
        <li v-for="element in navElements" :key="element.to"
          :class="{active: isActiveElement(element.to)}"
          @click="redirectTo(element.to)">
            <span>{{element.num}}</span>
            {{element.title}}
        </li>
      </ul>
      <div class="mobileMenuBtn" @click="mobileMenuToggle()">
            <ion-icon name="menu" v-if="!isActiveMobileMenu"></ion-icon>
            <ion-icon name="close-outline" v-if="isActiveMobileMenu"></ion-icon>
        </div>
        <ul class="mobileMenu" :class="{active: isActiveMobileMenu}">
            <li v-for="element in navElements" :key="element.to"
              :class="{active: isActiveElement(element.to)}"
              @click="redirectTo(element.to)">
                <span>{{element.num}}</span>
                {{element.title}}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            isActiveMobileMenu: false,
            navElements: [
              {
                title: "Home",
                num: '00',
                to: "/"
              },
              {
                title: "Destination",
                num: '01',
                to: "/destination"
              },
              {
                title: "Crew",
                num: '02',
                to: "/crew"
              },
              {
                title: "Technology",
                num: '03',
                to: "/technology"
              }
            ]
        }
    },
    methods: {
        mobileMenuToggle() {
            this.isActiveMobileMenu = !this.isActiveMobileMenu
        },
        redirectTo(to) {
          this.$router.push(to)
        },
        isActiveElement(to) {
          return to === this.$route.path
        }
    }
}
</script>

<style lang="scss" scoped>

nav {
  position: relative;
  margin-top: 40px;
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include tablet {
    margin-top: 0;
  }

  .logo {
    position: relative;
    margin-left: 50px;
    width: 48px;
    height: 48px;

    @include tablet {
      margin-left: 30px;
      margin-right: 30px;
    }

    @include mobile {
      width: 40px;
      height: 40px;
      margin-left: 25px;
      margin-right: 25px;
    }
  }

  .line {
    position: absolute;
    top: 50%;
    left: 160px;
    width: calc(40% - 120px);
    height: 1px;
    background: $white;
    opacity: 0.25;
    z-index: 10;

    @include tablet {
      display: none;
    }
  }

  .desktopMenu {
    position: relative;
    height: 100%;
    width: 60%;
    min-width: 565px;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 160px 0 90px;

    @include tablet {
      padding: 0;
      justify-content: space-evenly;
      width: 100%;
      max-width: 450px;
      min-width: 0;
    }

    @include mobile {
        display: none;
    }

    li {
      position: relative;
      list-style: none;
      height: 100%;
      color: $white;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 25px;
      padding-top: 2px;
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      @include tablet {
        font-size: 14px;
        margin: 0 5px;
      }

      &.active {
        border-bottom: 2px solid $white;
      }

      &:hover {
        border-bottom: 2px solid rgba(255,255,255,0.5);
      }

      span {
        margin-right: 6px;
        font-weight: 600;

        @include tablet {
          display: none;
        }
      }
    }
  }

    .mobileMenuBtn {
        display: none;

        @include mobile {
            display: flex;
            cursor: pointer;
            position: fixed;
            top: 30px;
            right: 30px;
            z-index: 1000;

            ion-icon {
                font-size: 2.4em;
                color: $blue;
            }
        }
    }

    .mobileMenu {
        position: fixed;
        top: 0;
        right: -255px;
        width: 255px;
        height: 100vh;
        padding-top: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background: rgba(255,255,255,0.04);
        backdrop-filter: blur(20px);
        transition: 0.3s ease-in-out;
        z-index: 100;

        &.active {
            position: fixed;
            top: 0;
            right: 0;
        }

        li {
            position: relative;
            width: 100%;
            list-style: none;
            padding: 2px 30px;
            font-size: 19px;
            color: $white;
            margin: 10px 0;
            cursor: pointer;
            border-right: 3px solid transparent;

            &.active {
                border-right: 3px solid $white;
            }

            span {
                margin-right: 6px;
                font-weight: 600;
            }
        }
    }
}

</style>