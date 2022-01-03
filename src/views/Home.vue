<template>
  <div class="home">
    <div class="list">
      <div class="img" :class="'img_' + index"></div>
    </div>
    <div class="bottom">
      <div class="button" v-on:click="Previous()">不原諒我</div>
      <div class="button" v-on:click="Next()">原諒我</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      record: [],
    };
  },
  created() {
    this.Record();
    this.SetRem();
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
    Next() {
      if (this.index < 6) {
        this.index++;
      } else {
        this.index = 1;
      }
      this.Record();
      if (this.record.length == 6) {
        alert("謝謝美麗又可愛和大方的小姐原諒我");
      }
    },
    Previous() {
      alert("拜託，原諒我啦");
      if (this.index != 1) {
        this.index--;
      } else {
        this.index = 6;
      }
      this.Record();
    },
    Record() {
      var isFind = false;
      this.record.forEach((num) => {
        if (num == this.index) {
          isFind = true;
        }
      });
      if (!isFind) {
        this.record.push(this.index);
      }
    },
  },
};
</script>
