<template>
  <div class="comparison">
    <!-- <h1>HELLZ YEAH BITCHES!!!</h1> -->
    <div class="wrapper" :class="getWrapperClass()">
      <div v-for="i in layout" :key="i"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      layout: 8,
    }
  },
  methods: {
    getWrapperClass() {
      switch (this.layout) {
        case 2:
          return 'duo'
        case 4:
          return 'quad'
        case 8:
          return 'octa'
      }
    },
  },
  computed: {
    isDuoLayout() {
      return this.layout === 2 ? true : false
    },
    isQuadLayout() {
      return this.layout === 4 ? true : false
    },
    isOctaLayout() {
      return this.layout === 8 ? true : false
    },
  },
  created() {
    console.log(this.layout)
  },
}
</script>
<style scoped>
.comparison {
  --nav-padding: 0px;
  --window-padding-absolute: 10px;
  --window-padding: calc(var(--window-padding-absolute) * 2);
}
.wrapper {
  margin: var(--window-padding-absolute);
}
.wrapper div {
  border: solid red 1px;
}
.wrapper.duo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: calc(100vh - var(--window-padding) - (var(--nav-padding)));
  gap: 10px;
}
.wrapper.quad {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-auto-rows: calc(50vh - var(--window-padding) - (var(--nav-padding)));
  gap: 10px;
}
.wrapper.octa {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-auto-rows: calc(50vh - var(--window-padding) - (var(--nav-padding)));
  gap: 10px;
}
/* TWO PICTURES */
/* .one.duo {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two.duo {
  grid-column: 3 / 5;
  grid-row: 1;
} */

/* FOUR PICTURES */
/* 
.one.quad {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two.quad {
  grid-column: 3 / 5;
  grid-row: 1;
}
.three.quad {
  grid-column: 1 / 3;
  grid-row: 2;
}
.four.quad {
  grid-column: 3 / 5;
  grid-row: 2;
} */
</style>