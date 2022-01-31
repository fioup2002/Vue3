<template>
  <div class="home">
    <div class="container">
      <div
        class="block"
        v-on:mouseover="SpeedUp()"
        v-on:mouseleave="SpeedDown()"
        :style="'transform: rotate(' + nowDeg + 'deg)'"
      ></div>
    </div>
  </div>
</template>
<style scoped lang="scss" src=".././assets/css/ani.scss"></style>
<script>
export default {
  data() {
    return {
      speedUpTimer: null,
      speedDownTimer: null,
      rotateTimer: null,
      speed: 1,
      nowDeg: 0,
      stepDeg: 3.6,
    };
  },
  created() {
    this.SetRem();
  },
  mounted() {
    this.Rotate();
  },
  methods: {
    SetRem() {
      var width = document.body.clientWidth;
      global.isMobile = false;
      if (width <= 768) {
        document.documentElement.style.fontSize = width / 7.68 + "px";
        global.isMobile = true;
      } else if (width > 768 && width < 1920) {
        document.documentElement.style.fontSize = width / 19.2 + "px";
      } else {
        document.documentElement.style.fontSize = "100px";
      }
    },
    SpeedUp() {
      this.ClearTimer();
      this.speedUpTimer = setTimeout(() => {
        this.speed = Math.ceil(this.speed * 1.5);
        // console.log(this.speed)
        if (this.speed >= 1000) {
          this.speed = 1000;
        } else {
          this.SpeedUp();
        }
      }, 100);
    },
    SpeedDown() {
      this.ClearTimer();
      this.speedDownTimer = setTimeout(() => {
        this.speed = Math.ceil(this.speed / 1.5);
        // console.log(this.speed)
        if (this.speed <= 2) {
          this.speed = 1;
        } else {
          this.SpeedDown();
        }
      }, 100);
    },
    ClearTimer() {
      clearTimeout(this.speedUpTimer);
      clearTimeout(this.speedDowmTimer);
    },
    RotateDeg() {
      this.nowDeg += this.stepDeg;
      return;
    },
    Rotate() {
      clearTimeout(this.rotateTimer);
      this.rotateTimer = setTimeout(() => {
        this.RotateDeg();
        this.Rotate();
      }, 100 / this.speed);
    },
  },
};
</script>
