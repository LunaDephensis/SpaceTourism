<template>
  <section class="home">
    <nav>
      <img src="../assets/shared/logo.svg" class="logo">
      <div class="line"></div>
      <ul>
        <li class="active"><span>00</span> Home</li>
        <li><span>01</span> Destination</li>
        <li><span>02</span> Crew</li>
        <li><span>03</span> Technology</li>
      </ul>
    </nav>
    <div class="mainContent">
      <div class="textBox">
        <h3>So, you want to travel to</h3>
        <h2>Space</h2>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </div>
      <div class="exploreBox">
        <a class="exploreBtn" href="#">Explore</a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {

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
  background: url(../assets/home/background-home-desktop.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include tablet {
    height: 100%;
    min-height: 100vh;
    background: url(../assets/home/background-home-tablet.jpg);
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
      min-height: 100vh;
      padding: 50px;
      padding-top: 70px;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
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
      }

      h2 {
        text-transform: uppercase;
        color: $white;
        font-size: 7em;
        font-weight: 400;
        font-family: 'Bellefair', serif;
        margin-bottom: 15px;
        letter-spacing: 4px;
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
            width: 180px;
            height: 180px;
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

  ul {
    position: relative;
    height: 100%;
    width: 60%;
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
        margin: 0 15px;
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
}


</style>
