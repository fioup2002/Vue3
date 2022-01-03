<template>
  <div class="home">
    <div class="list">
      <div class="img" :class="'img_' + index"></div>
    </div>
    <div class="bottom">
      <div class="button" v-on:click="Previous()">不原諒我</div>
      <div class="button" v-on:click="Next()">原諒我</div>
    </div>
    <div class="contract">道歉詢問:請洽Ice，他會給你滿意的答覆，感謝妳的使用，希望妳能消氣</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      record: [],
      isShowLast: false,
      previousCount: 0,
    };
  },
  created() {
    this.Record();
    this.SetRem();
  },
  mounted() {
    alert(`歡迎來到道歉系統，以下是注意事項: \n\n1. 拜託，原諒我 \n2. 原諒我啦 \n3. 我錯了，原諒我\n\n以上非常重要，所以說3次\n按下確定鈕後，開始使用`);
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
      if (this.record.length == 6 && !this.isShowLast) {
        alert("謝謝美麗又大方的正妹原諒我");
        this.isShowLast = true;
      }
    },
    Previous() {
      if (this.previousCount % 3 == 0) {
        alert("拜託，再給我一次機會啦，點原諒啦");
      } else if (this.previousCount % 3 == 1) {
        alert("不要啊，點原諒啦");
      }
      if (this.previousCount % 3 == 2) {
        alert("好的，我錯了，對不起")
        if (this.index != 1) {
          this.index--;
        } else {
          this.index = 6;
        }
        this.Record();
      }
      this.previousCount++;
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
