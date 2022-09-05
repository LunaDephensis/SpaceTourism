<template>
  <nav>
    <!--<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
  </nav>
  <router-view/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700&display=swap');

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/

}

.heading {
  font-family: 'Bellefair', serif;
}

* {
  font-family: 'Barlow Condensed', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
