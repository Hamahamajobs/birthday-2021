<template>
  <div>
    <div class="container">
      <div class="radio-tile-group">
        <div class="input-container" @click="hamaflag=1">
          <input id="walk" class="radio-button" type="radio" name="radio" />
          <div class="radio-tile">
            <div class="icon walk-icon">
              <svg
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
                />
              </svg>
            </div>
            <label for="walk" class="radio-tile-label">古い物置</label>
          </div>
        </div>

        <div class="input-container" @click="hamaflag=2">
          <input id="walk" class="radio-button" type="radio" name="radio" />
          <div class="radio-tile">
            <div class="icon walk-icon">
              <svg
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
                />
              </svg>
            </div>
            <label for="walk" class="radio-tile-label">深い森</label>
          </div>
        </div>

        <div class="input-container" @click="hamaflag=3">
          <input id="walk" class="radio-button" type="radio" name="radio" />
          <div class="radio-tile">
            <div class="icon walk-icon">
              <svg
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
                />
              </svg>
            </div>
            <label for="walk" class="radio-tile-label">夕焼け丘</label>
          </div>
        </div>

        <div class="input-container" @click="hamaflag=4">
          <input id="walk" class="radio-button" type="radio" name="radio" />
          <div class="radio-tile">
            <div class="icon walk-icon">
              <svg
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
                />
              </svg>
            </div>
            <label for="walk" class="radio-tile-label">海底</label>
          </div>
        </div>
        
        <div class="input-container" @click="hamaflag=5">
          <input id="walk" class="radio-button" type="radio" name="radio" />
          <div class="radio-tile">
            <div class="icon walk-icon">
              <svg
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
                />
              </svg>
            </div>
            <label for="walk" class="radio-tile-label">ゴミ溜め</label>
          </div>
        </div>
        
      </div>
      
      <!-- https://cdn.vuetifyjs.com/images/cards/mountain.jpg
    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
     -->
     
     
      <v-card class="mx-auto" max-width="400" v-show="hamaflag==1">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>リンゴと言えば・・・？</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">
          

          <div>リンゴっぽいところをぽちぽちしてみよ〜〜〜</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Let's Try' </v-btn>

          <v-btn color="orange" text> Never Give Up </v-btn>
        </v-card-actions>
      </v-card>
      
      
      <v-card class="mx-auto" max-width="400" v-show="hamaflag==2">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        >
          <v-card-title>深い森の中に飛んでいる・・・・？</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">

          <div>彼らをぽちぽちしてみよう！！すばやいぞ。</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Let's Try' </v-btn>

          <v-btn color="orange" text> Never Give Up </v-btn>
        </v-card-actions>
      </v-card>
      
      <v-card class="mx-auto" max-width="400" v-show="hamaflag==3">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        >
          <v-card-title>コウモリはどこ？よく観察してみよう</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">
          <div>彼らは隠れているぞ。丘に。</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Let's Try' </v-btn>

          <v-btn color="orange" text> Never Give Up </v-btn>
        </v-card-actions>
      </v-card>
      
      <v-card class="mx-auto" max-width="400" v-show="hamaflag==4">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
        >
          <v-card-title>海底に。。。</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">

          <div>まずは海亀をみつけよう！それからは連鎖の嵐。</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Let's Try' </v-btn>

          <v-btn color="orange" text> Never Give Up </v-btn>
        </v-card-actions>
      </v-card>
      
      <v-card class="mx-auto" max-width="400" v-show="hamaflag==5">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        >
          <v-card-title>鳥はどこへ？？</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">
          <div>もう、すぐ、そこ、に、います。よ。これはヒントなのか？？？</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Let's Try' </v-btn>

          <v-btn color="orange" text> Never Give Up </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hamaflag:1
    }
  },
};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: "Helvetica Neue", sans-serif;
}

body {
  background-color: black;
}

$primary-color: #079ad9;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.radio-tile-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //set dimensions for invisible container
  .input-container {
    position: relative;
    height: 7rem;
    width: 7rem;
    margin: 0.5rem;

    //make actual radio input invisible
    // + stretch to fill container
    .radio-button {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      margin: 0;
      cursor: pointer;
    }

    //default tile styles
    .radio-tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: 2px solid $primary-color;
      border-radius: 5px;
      padding: 1rem;
      transition: transform 300ms ease;
    }
    .icon svg {
      fill: $primary-color;
      width: 3rem;
      height: 3rem;
    }
    .radio-tile-label {
      text-align: center;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $primary-color;
    }

    //active tile styles
    .radio-button:checked + .radio-tile {
      background-color: $primary-color;
      border: 2px solid $primary-color;
      color: white;
      transform: scale(1.1, 1.1);

      .icon svg {
        fill: white;
        background-color: $primary-color;
      }
      .radio-tile-label {
        color: white;
        background-color: $primary-color;
      }
    }
  }
}
</style>
