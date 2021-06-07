<template>
  <div>
    <div class="container">
      <h3>りんごがライバル意識を持っているのは?</h3>
      <label
        ><input type="radio" name="apple" value="2" v-model="apple" /><span class="outside"
          ><span class="inside"></span></span
        >バナナ</label
      >

      <label
        ><input type="radio" name="apple" value="1" v-model="apple"/><span class="outside"
          ><span class="inside"></span></span
        >オレンジ</label
      >
      <label
        ><input type="radio" name="apple" value="3" v-model="apple"/><span class="outside"
          ><span class="inside"></span></span
        >メロン</label
      >
      <label
        ><input type="radio" name="apple" value="4" v-model="apple"/><span class="outside"
          ><span class="inside"></span></span
        >スイカ</label
      >
    </div>
    
    <div class="container">
      <h3>ホタルが苦手な場所は?</h3>
      <label
        ><input type="radio" name="wood" value="2" v-model="firefly"/><span class="outside"
          ><span class="inside"></span></span
        >山の奥</label
      >

      <label
        ><input type="radio" name="wood" value="1" v-model="firefly"/><span class="outside"
          ><span class="inside"></span></span
        >海</label
      >
      <label
        ><input type="radio" name="wood" value="3" v-model="firefly"/><span class="outside"
          ><span class="inside"></span></span
        >洞窟</label
      >
      <label
        ><input type="radio" name="wood" value="4" v-model="firefly"/><span class="outside"
          ><span class="inside"></span></span
        >都会</label
      >
    </div>
    
    <div class="container">
      <h3>コウモリは何匹?</h3>
      <label
        ><input type="radio" name="sunset" value="2" v-model="bat"/><span class="outside"
          ><span class="inside"></span></span
        >1</label
      >

      <label
        ><input type="radio" name="sunset" value="3" v-model="bat"/><span class="outside"
          ><span class="inside"></span></span
        >3</label
      >
      <label
        ><input type="radio" name="sunset" value="1" v-model="bat"/><span class="outside"
          ><span class="inside"></span></span
        >5</label
      >
      <label
        ><input type="radio" name="sunset" value="4" v-model="bat"/><span class="outside"
          ><span class="inside"></span></span
        >10</label
      >
    </div>
    
    <div class="container">
      <h3>海亀が見ている生き物の頭が指した先にいる彼が見ている生き物は何?</h3>
      <label
        ><input type="radio" name="ship" value="1" v-model="sea"/><span class="outside"
          ><span class="inside"></span></span
        >ふぐ</label
      >

      <label
        ><input type="radio" name="ship" value="2" v-model="sea"/><span class="outside"
          ><span class="inside"></span></span
        >たこ</label
      >
      <label
        ><input type="radio" name="ship" value="3" v-model="sea"/><span class="outside"
          ><span class="inside"></span></span
        >いか</label
      >
      <label
        ><input type="radio" name="ship" value="4" v-model="sea"/><span class="outside"
          ><span class="inside"></span></span
        >宇宙人</label
      >
    </div>
    
    
    <div class="container">
      <h3>悲しい鳥はどこに向かっていますか？</h3>
      <label
        ><input type="radio" name="bard" value="2" v-model="bard"/><span class="outside"
          ><span class="inside"></span></span
        >北</label
      >

      <label
        ><input type="radio" name="bard" value="3" v-model="bard"/><span class="outside"
          ><span class="inside"></span></span
        >南</label
      >
      <label
        ><input type="radio" name="bard" value="4" v-model="bard"/><span class="outside"
          ><span class="inside"></span></span
        >東</label
      >
      <label
        ><input type="radio" name="bard" value="1" v-model="bard"/><span class="outside"
          ><span class="inside"></span></span
        >西</label
      >
    </div>
    <div class="container">
      <button class="learn-more" style="margin:0 0 160px 60px;" @click="asnwerCheck">脱出！！！！</button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      bard:'',
      bat:'',
      apple:'',
      sea:'',
      firefly:''
    }
  },
  methods: {
    asnwerCheck(){
      if(this.bard==1&&this.bat==1&&this.apple==1&&this.sea==1&&this.firefly==1){
        alert('OK!')
        window.location.href = 'http://localhost:8081/side7'; // 通常の遷移
      }
      else{
        alert('残念！何か違う！！');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
/* animations */

@keyframes radio-select {
  0% {
    transform: scale(0, 0);
  }
  65% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}

/* styles */

$almost-white: #f3f3f3;
$almost-black: #444;
$border: #cccccc;
$left: 40px;
$size: 30px;

@mixin centerer {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

body {
  color: $almost-black;
}

.container {
  display: inline-block;
  width: 30%;
}

label {
  margin: 2em;
  display: block;
  position: relative;
  padding-left: $left;
  cursor: pointer;
}

input {
  height: 1px;
  width: 1px;
  opacity: 0;
}

.outside {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -($size / 2);
  width: $size;
  height: $size;
  border: 2px solid $border;
  border-radius: 50%;
  box-sizing: border-box;
  background: $almost-white;
}

.inside {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  border-radius: 50%;
  width: ($size - 10px);
  height: ($size - 10px);
  background: $almost-black;
  left: 3px;
  top: 3px;
  transform: scale(0, 0);
  .no-transforms & {
    left: auto;
    top: auto;
    width: 0;
    height: 0;
  }
}

input {
  &:checked {
    + .outside .inside {
      animation: radio-select 0.1s linear;
      transform: scale(1, 1);
      .no-transforms & {
        width: ($size - 10px);
        height: ($size - 10px);
      }
    }
  }
  //for better accessibility
  /*  &:focus, &:active {
      + .outside {
        border-color: $almost-black;
      }
    }*/
}

@import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');

$bg: #fff;
$text: #382b22;
$light-pink: #fff0f0;
$pink: #ffe9e9;
$dark-pink: #f9c4d2;
$pink-border: #b18597;
$pink-shadow: #ffe3e2;

* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}

body {
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background: $bg;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  &.learn-more {
    font-weight: 600;
    color: $text;
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: $light-pink;
    border: 2px solid $pink-border;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $dark-pink;
      border-radius: inherit;
      box-shadow: 0 0 0 2px $pink-border, 0 0.625em 0 0 $pink-shadow;
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: $pink;
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px $pink-border, 0 0.5em 0 0 $pink-shadow;
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: $pink;
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px $pink-border, 0 0 $pink-shadow;
        transform: translate3d(0, 0, -1em);
      }
    }
  }
}
</style>
