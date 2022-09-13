<template>
  <section class="home">
    <Navigation/>
    <div class="mainContent">
      <div class="textBox">
        <h3>So, you want to travel to</h3>
        <h2>Space</h2>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </div>
      <div class="exploreBox">
        <router-link to="/destination" class="exploreBtn">Explore</router-link>
      </div>
    </div>
  </section>
</template>

<script>

import Navigation from '../components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>


.home {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: url(../../public/assets/home/background-home-desktop.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;

  @include tablet {
    height: 100%;
    min-height: 100vh;
    background: url(../../public/assets/home/background-home-tablet.jpg);
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
    justify-content: space-between;
    align-items: flex-end;

    @include tablet {
      height: 100%;
      min-height: calc(100vh - 95px);
      padding: 50px;
      padding-top: 70px;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }

    @include mobile {
      padding: 25px;
      padding-top: 70px;
    }

    .textBox {
      position: relative;
      max-width: 500px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      @include tablet {
        width: 100%;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 70px;
      }

      h3 {
        text-transform: uppercase;
        color: $blue;
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 22px;

        @include mobile {
          font-size: 19px;
        }
      }

      h2 {
        text-transform: uppercase;
        color: $white;
        font-size: 7em;
        font-weight: 400;
        font-family: 'Bellefair', serif;
        margin-bottom: 15px;
        letter-spacing: 4px;

        @include mobile {
          font-size: 80px;
        }
      }

      p {
        position: relative;
        max-width: 370px;
        font-size: 1.1em;
        color: $blue;
        line-height: 1.8em;

        @include tablet {
          font-size: 1em;
        }

        @include mobile {
          max-width: 100%;
          font-size: 15px;
          line-height: 25px;
        }
      }
    }

    .exploreBox {
      position: relative;
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 25px;

      @include tablet {
        width: 100%;
        height: auto;
      }

      .exploreBtn {
        position: relative;
        width: 200px;
        height: 200px;
        background: $white;
        color: $dark;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Bellefair', serif;
        font-size: 1.8em;
        letter-spacing: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        z-index: 50;

        @include tablet {
          width: 180px;
          height: 180px;
        }

        @include mobile {
          width: 150px;
          height: 150px;
          font-size: 20px;
        }

        &::before {
          content: '';
          position: absolute;
          top: calc(50% - 50%);
          left: calc(50% - 50%);
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          transition: 0.5s ease-in-out;
          z-index: -1;

          @include tablet {
            display: none;
          }
        }

        &:hover {
          &::before {
            transform: scale(1.7);
          }
        }
      }
    }
  }
}


</style>
