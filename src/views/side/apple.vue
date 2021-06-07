<template>
  <div class="">
    <div class="bg"></div>
    <h1 class="h1-bg">Apple <span>IIe</span></h1>
    <div class="🖥️">
      <div class="back-shadow"></div>
      <div class="monitor-shadow"></div>
      <div class="monitor">
        <div class="monitor__soft-shadow"></div>
        <div class="monitor__shadow"></div>
        <div class="monitor__inner"></div>
        <div class="monitor__inner-shadow"></div>
        <div class="monitor__inner-shadow-light"></div>
        <div class="monitor__inner-shadow-dark"></div>
        <div class="monitor__screen"></div>
        <div class="monitor__screen-2">
          <div class="monitor__terminal"></div>
        </div>
        <div class="monitor__screen-2 top-shadow"></div>
        <div class="monitor__screen-2 bottom-shadow"></div>
        <div class="monitor__logo-embed" @click="birthAlart"></div>
        <div class="monitor__line"></div>
        <div class="monitor__power-switch">
          <div class="monitor__power-switch__button"></div>
        </div>
      </div>
      <div class="keyboard">
        <div class="middle"></div>
        <div class="top">
          <div class="emboss">
            <div class="logo-label">
              <div class="logo"></div>
              <div class="label">apple</div>
            </div>
            <div class="model-number">II<span>e</span></div>
          </div>
          <div class="embed">
            <div class="keys-container"></div>
          </div>
        </div>
      </div>
      <div class="floppy-drive">
        <div class="left">
          <div class="emboss"></div>
        </div>
        <div class="top">
          <div class="emboss emboss-1"></div>
          <div class="embed embed-1"></div>
          <div class="emboss emboss-2"></div>
          <div class="embed embed-2"></div>
        </div>
        <div class="front">
          <div class="slot-container">
            <div class="slot">
              <div class="hole"></div>
            </div>
          </div>
          <div class="slot-embed">
            <div class="cover"></div>
            <div class="shadow"></div>
          </div>
          <div class="logo"></div>
          <div class="label">disk II</div>
          <div class="light">
            <span>IN USE</span> <span class="arrow">▼</span>
            <div class="led">
              <div class="reflection"></div>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
    <div class="key key--template">
      <div class="key__side key__side--top">
        <div class="key__label-top"></div>
        <div class="key__label-bottom"></div>
      </div>
      <div class="key__side key__side--right"></div>
      <div class="key__side key__side--bottom"></div>
      <div class="key__side key__side--left"></div>
      <div class="key__side key__side--back"></div>
      <div class="key__side key__side--front"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.clear();

    // 実行したい処理を書く

    let on = false;
    let line = 0;
    const lines = ["]"];

    const keys = [
      { key: "Esc", key2: "", keyCode: 27 },
      { key: "bang", key2: "1", keyCode: 49 },
      { key: "at", key2: "2", keyCode: 50 },
      { key: "hash", key2: "3", keyCode: 51 },
      { key: "dolar", key2: "4", keyCode: 52 },
      { key: "prc", key2: "5", keyCode: 53 },
      { key: "caret", key2: "6", keyCode: 54 },
      { key: "amp", key2: "7", keyCode: 55 },
      { key: "star", key2: "8", keyCode: 56 },
      { key: "lp", key2: "9", keyCode: 57 },
      { key: "rp", key2: "0", keyCode: 48 },
      { key: "-", key2: "_", keyCode: 189 },
      { key: "plus", key2: "eq", keyCode: 187 },
      { key: "Del", key2: "", keyCode: 8 },
      { key: "⇥", key2: "", keyCode: 9 },
      { key: "Q", key2: "", code: 81, keyCode: 81 },
      { key: "W", key2: "", code: 87, keyCode: 87 },
      { key: "E", key2: "", code: 69, keyCode: 69 },
      { key: "R", key2: "", code: 82, keyCode: 82 },
      { key: "T", key2: "", keyCode: 84 },
      { key: "Y", key2: "", keyCode: 89 },
      { key: "U", key2: "", keyCode: 85 },
      { key: "I", key2: "", keyCode: 73 },
      { key: "O", key2: "", keyCode: 79 },
      { key: "P", key2: "", keyCode: 80 },
      { key: "lb", key2: "lbr", keyCode: 219 },
      { key: "rb", key2: "rbr", keyCode: 221 },
      { key: "↵", key2: "", keyCode: 13 },
      { key: "Ctrl", key2: "", keyCode: 17 },
      { key: "A", key2: "", keyCode: 65 },
      { key: "S", key2: "", keyCode: 83 },
      { key: "D", key2: "", keyCode: 68 },
      { key: "F", key2: "", keyCode: 70 },
      { key: "G", key2: "", keyCode: 71 },
      { key: "H", key2: "", keyCode: 72 },
      { key: "J", key2: "", keyCode: 74 },
      { key: "K", key2: "", keyCode: 75 },
      { key: "L", key2: "", keyCode: 76 },
      { key: "semi", key2: "colon", keyCode: 186 },
      { key: "dquote", key2: "quote", keyCode: 222 },
      { key: "tild", key2: "dot", keyCode: 220 },
      { key: "⇧L", key2: "", keyCode: 16 },
      { key: "pipe", key2: "backslash", keyCode: 192 },
      { key: "Z", key2: "", keyCode: 90 },
      { key: "X", key2: "", keyCode: 88 },
      { key: "C", key2: "", keyCode: 67 },
      { key: "V", key2: "", keyCode: 86 },
      { key: "B", key2: "", keyCode: 66 },
      { key: "N", key2: "", keyCode: 78 },
      { key: "M", key2: "", keyCode: 77 },
      { key: "langleb", key2: "comma", keyCode: 188 },
      { key: "rangleb", key2: "dot", keyCode: 190 },
      { key: "qmark", key2: "slash", keyCode: 191 },
      { key: "⇧", key2: "" },
      { key: "⇩", key2: "" },
      { key: "none", key2: "" },
      { key: "", key2: "", keyCode: 91 },
      { key: "_", key2: "", keyCode: 32 },
      { key: "r", key2: "", keyCode: 93 },
      { key: "⭠", key2: "", keyCode: 37 },
      { key: "⭢", key2: "", keyCode: 39 },
      { key: "⭣", key2: "", keyCode: 40 },
      { key: "⭡", key2: "", keyCode: 38 },
    ];
    let keysContainer, keyTemplate, powerSwitch;

    document.addEventListener("DOMContentLoaded", () => {
      keysContainer = document.querySelector(".keys-container");
      keyTemplate = document.querySelector(".key--template");
      powerSwitch = document.querySelector(".monitor__power-switch");

      let booting = false;
      // powerSwitch.addEventListener('click', () => {
      //   if (booting) {
      //     return;
      //   }
      //   on = !on;
      //   if (on) {
      //     booting = true;
      //     intro().then(() => {
      //       render();
      //       booting = false;
      //     });
      //   } else {
      //     terminal.innerHTML = '';
      //     lines.length = 0;
      //     lines.push(']');
      //     line = 0;
      //   }
      // });

      for (let i = 0; i < keys.length; i++) {
        const key = keyTemplate.cloneNode(true);
        key.classList.remove("key--template");
        key.classList.add("key--" + keys[i].key);
        if (keys[i].keyCode) {
          key.classList.add("key-code--" + keys[i].keyCode);
        }
        const keyLabelTop = key.querySelector(".key__label-top");
        if (keys[i].key === "") {
          const appleFilled = document.createElement("div");
          appleFilled.classList.add("apple-outlined");
          keyLabelTop.appendChild(appleFilled);
        } else if (keys[i].key === "r") {
          const appleFilled = document.createElement("div");
          appleFilled.classList.add("apple-filled");
          keyLabelTop.appendChild(appleFilled);
        } else {
          keyLabelTop.innerText = getKeyLabel(keys[i].key);
        }

        const keyLabelBottom = key.querySelector(".key__label-bottom");
        keyLabelBottom.innerText = getKeyLabel(keys[i].key2);
        keysContainer.appendChild(key);
      }

      updateKeysZ();
    });

    window.addEventListener("resize", updateKeysZ);

    function updateKeysZ() {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          for (let i = 0; i < keys.length; i++) {
            const keyClass = ".key--" + keys[i].key;
            const key = keysContainer.querySelector(keyClass);
            if (key) {
              const keyRight = key.querySelector(".key__side--right");
              const z = key.offsetWidth;
              keyRight.style.setProperty(
                "--key-right-z",
                "calc(-0.75vmin + " + z + "px)"
              );
              if (keys[i].key === "↵") {
                const keyFront = key.querySelector(".key__side--front");
                const frontOffset = key.offsetHeight;
                keyFront.style.setProperty(
                  "--height-half",
                  "calc(-0.75vmin + " + frontOffset + "px)"
                );
              }
            } else {
              console.log(keys[i].key);
            }
          }
        });
      });
    }

    function getKeyLabel(key) {
      switch (key) {
        case "⇧L":
          return "⇧";
        case "plus":
          return "+";
        case "lb":
          return "[";
        case "rb":
          return "]";
        case "semi":
          return ";";
        case "dquote":
          return '"';
        case "tild":
          return "~";
        case "langleb":
          return "<";
        case "rangleb":
          return ">";
        case "qmark":
          return "?";
        case "backslash":
          return "\\";
        case "r":
          return "";
        case "quote":
          return "'";
        case "colon":
          return ":";
        case "pipe":
          return "|";
        case "bang":
          return "!";
        case "at":
          return "@";
        case "hash":
          return "#";
        case "prc":
          return "%";
        case "dolar":
          return "$";
        case "caret":
          return "^";
        case "amp":
          return "&";
        case "star":
          return "*";
        case "lp":
          return "(";
        case "rp":
          return ")";
        case "eq":
          return "=";
        case "lbr":
          return "{";
        case "rbr":
          return "}";
        case "slash":
          return "/";
        case "comma":
          return ",";
        case "dot":
          return ".";
      }

      return key;
    }

    const ENTER = 13;
    const BACKSPACE = 8;
    const SPACEBAR = 32;
    const MAX_LINE_LENGTH = 40;

    document.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }

      const keycode = event.keyCode;

      animateKey(keycode);

      if (!on) {
        return;
      }

      const isPrintable =
        (keycode > 47 && keycode < 58) || // number keys
        keycode == SPACEBAR ||
        keycode == ENTER || // spacebar & return key(s) (if you want to allow carriage returns)
        keycode == BACKSPACE ||
        (keycode > 64 && keycode < 91) || // letter keys
        (keycode > 95 && keycode < 112) || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223); // [\]' (in order)

      const startNewLine = lines[line].length >= MAX_LINE_LENGTH;

      if (isPrintable) {
        if (keycode === BACKSPACE) {
          if (lines[line].length <= 1 && line > 0) {
            lines.pop();
            line--;
          } else {
            const length = lines[line].length - 1;
            lines[line] = lines[line].slice(0, Math.max(1, length));
          }
        } else if (keycode === ENTER || startNewLine) {
          if (line === 23) {
            // end of screen get rid of first line
            line--;
            lines.splice(0, 1);
          }

          line++;
          if (!lines[line]) {
            lines[line] = "]";
          }

          if (startNewLine) {
            if (keycode === SPACEBAR) {
              lines[line] += "\u00A0"; // non breaking space
            } else {
              lines[line] += event.key;
            }
          }
        } else if (lines[line].length < MAX_LINE_LENGTH) {
          if (keycode === SPACEBAR) {
            lines[line] += "\u00A0"; // non breaking space
          } else {
            lines[line] += event.key;
          }
        }
      }
      render();
    });

    function animateKey(keyCode) {
      const key = document.querySelector(`.key-code--${keyCode}`);
      if (key) {
        const movement = [
          { transform: "translateZ(-0.5rem)" },
          { transform: "translateZ(0rem)" },
        ];
        const timing = {
          duration: 250,
          iterations: 1,
          direction: "alternate",
          easing: "ease-in-out",
        };
        key.animate(movement, timing);
      }
    }

    const terminal = document.querySelector(".monitor__terminal");
    function render() {
      terminal.innerHTML = "";
      for (let i = 0; i < lines.length; i++) {
        const line = document.createElement("div");
        line.textContent = lines[i];
        const lastLine = i === lines.length - 1;
        if (lastLine) {
          const cursor = document.createElement("span");
          cursor.classList.add("cursor");
          line.appendChild(cursor);
        }
        terminal.appendChild(line);
      }
    }

    const introTemplate = `
                                        
                                        
                                        
                      //////            
                    ///////             
                   ///////              
                   ///                  
      /////////////////////////////     
   //////////////////////////////////   
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,      
 ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,       
 ///////////////////////////////        
 ///////////////////////////////        
 ((((((((((((((((((((((((((((((((       
  (((((((((((((((((((((((((((((((((     
   ###################################  
    #################################   
     ##############################     
       (((((((((((((((((((((((((((      
         %(((((((       (((((((     
                                          
                                        
                                          
`;

    function intro() {
      lines.length = 0;
      let intervalId = null;
      const introLines = introTemplate.split("\n");
      return new Promise((resolve) => {
        intervalId = setInterval(() => {
          if (!introLines.length) {
            clearInterval(intervalId);
            lines.length = 0;
            lines.push("]");
            resolve();
            return;
          }
          lines.push(introLines.splice(0, 1));
          render();
        }, 100);
      });
    }
  },
  methods: {
    birthAlart(){
      alert('私はオレンジがライバルだと思っているのです。強い嫉妬を覚えております。');
    }
  },
};
</script>


<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --object-box-shadow: 0vmin 0.1vmin 0.4vmin 0.1vmin #111,
    0.5vmin 1vmin 1.5vmin 0.1vmin #888;
  --object-box-shadow-floppy: 0vmin 0vmin 0.8vmin 0.4vmin #111,
    0 1vmin 2.5vmin 0.5vmin #888;
  --object-box-shadow-monitor: 0 1.6vmin 0.8vmin 0.2vmin #222;
}

@font-face {
  /* source http://www.kreativekorp.com/software/fonts/apple2.shtml */
  font-family: "Terminal";
  src: url("https://closure.vps.wbsprt.com/files/apple2/PrintChar21_txuajc.ttf");
}

html {
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}

.bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  // background: url('https://res.cloudinary.com/dzadmlxnt/image/upload/v1586975762/apple2/apple2e_cv4p4r.jpg');
  background-repeat: no-repeat;
  background: linear-gradient(-145deg, #555, transparent 30%),
    linear-gradient(#bbb 30%, #aaa 60%, #bbb 65%, #fff);
}

.h1-bg {
  position: absolute;
  font-family: "Cormorant Garamond", serif;
  font-wight: 600;
  font-size: 30vmin;
  left: 105vmin;
  top: 10vmin;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  background: linear-gradient(#bbb, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  mix-blend-mode: multiply;
  letter-spacing: -0.5vmin;

  span {
    font-size: 12vmin;
    margin-left: -4vmin;
  }
}

.🖥️ {
  position: absolute;
  width: 100vmin;
  height: 100vmin;
  perspective: 80vmin;
  perspective-origin: 70% 40%;
  &:hover * {
    // opacity: 1;
  }
}

.keys-container {
  --size: 3vmin;
  --size-half: calc(var(--size) / 2);
  --height: 1.5vmin;
  --height-half: calc(var(--height) / 2);
  transform: translate3d(0, -1vmin, 0.9vmin);
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.75vmin;
  padding: 0 6vmin;
  font-family: Verdana;
  font-variant: small-caps;
  font-size: 1vmin;

  &::before {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    background-color: darken(#baa79d, 40%);
    content: "";
    width: calc(100% - 12vmin);
    height: 100%;
    margin: 0 6vmin;
    transform: translateZ(calc(-1 * var(--size-half)));
    box-shadow: 0 0 1.5vmin darken(#baa79d, 40%);
  }
}

.key {
  width: 100%;
  height: var(--size);
  position: relative;
  //transform: translateZ(calc(-1 * var(--size-half)));
  transform-style: preserve-3d;
  overflow: visible;

  &--template {
    display: none;
  }

  &__side {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-color: #c2aba3;
    transform-style: preserve-3d;
    padding: 0.2em 0.4em;
    overflow: visible;
    border: 1px solid #c2aba3;

    &--top {
      transform: rotateY(0deg) translateZ(0.75vmin);
      overflow: visible;
      width: 100%;
      border: none;

      &::after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 0.44999999999999996vmin;
        box-shadow: inset 0 0 0.75vmin lighten(#384334, 20%);
      }
    }
    &--right {
      --key-right-z: 1.3w;
      transform: rotateY(90deg) translateZ(var(--key-right-z));
      background: linear-gradient(75deg, #988576, #6a635c 50%);
      width: var(--height);
      border-right: 1px solid #736864;
    }
    &--bottom {
      transform: rotateY(180deg) translateZ(var(--height-half));
      width: 100%;
      border: none;
      box-shadow: 0 0 1.5vmin 0.3vmin darken(#baa79d, 30%),
        0 0 0.3vmin 0.2vmin black;
    }
    &--left {
      transform: rotateY(-90deg) translateZ(var(--height-half));
      background: linear-gradient(35deg, #6a635c, #988576 50%);
      // height: var(--height);
      width: var(--height);
      height: 100%;
      border-left: 1px solid #736864;
    }
    &--back {
      transform: rotateX(90deg) translateZ(var(--height-half));
      width: 100%;
      height: var(--height);
    }
    &--front {
      --height-half: 2.25vmin;
      transform: rotateX(-90deg) translateZ(var(--height-half));
      background: linear-gradient(#988576, #736864 50%);
      width: 100%;
      height: var(--height);
      border-top: 1px solid #e6e4d9;
      border-bottom: 1px solid #736864;
    }
  }

  &.key--⇥,
  &.key--Del,
  &.key--Ctrl,
  &.key--⇧,
  &.key--⇩ {
    grid-column-end: span 2;
    width: 100%;
  }
  &.key--⇧ {
    grid-column-end: span 3;
  }
  &.key--_ {
    grid-column-end: span 6;
    width: 100%;
    // hide _ character
    color: transparent;
  }
  &.key--none {
    opacity: 0;
  }
  &.key--↵ {
    grid-row-end: span 2;
    height: 100%;

    .key__side--top {
      height: 100%;
    }
  }
}

.keyboard {
  position: absolute;
  top: 67.5vmin;
  left: 23.5vmin;
  width: 78vmin;
  height: 45vmin;
  transform-style: preserve-3d;
  transform: translateY(-50%) translateZ(0vmin) rotateX(80deg);
  border-radius: 7.5vmin;

  .top {
    position: absolute;
    width: calc(100% - 0.75vmin);
    height: calc(100% - 0.75vmin);
    background-color: #e7e4d9;
    border-radius: 3vmin;
    border-bottom: 0.07500000000000001vmin solid #fff;
    transform: translateY(1.6500000000000001vmin) translateX(0.75vmin)
      translateZ(0.75vmin);
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    font-family: "Audiowide", cursive;
    font-size: 2.5vmin;
    transform-style: preserve-3d;

    .embed {
      width: 90%;
      height: 80%;
      box-shadow: inset 0 0.6000000000000001vmin 1.2000000000000002vmin
        rgba(#3c7653, 0.4);
      z-index: 1;
      grid-area: 2/1;
      border-radius: 1.5vmin;
    }

    .emboss {
      width: 98%;
      height: 90%;
      z-index: 1;
      grid-area: 1/1;
      border-radius: 1.5vmin;
      border: 1px solid #ddd9c9;
      // box-shadow: inset 0 -3vmin 0.30000000000000004vmin 1.5vmin rgba(#fff, 0.5);
      background-color: rgba(#fff, 0.5);
      transform: translateY(-1.5vmin);
      padding: 1.5vmin;
      position: relative;
      box-shadow: inset 0 0 1vmin 0.5vmin rgba(#ddd9c9, 0.6);

      &::before {
        content: "";
        width: 95%;
        height: 85%;
        position: absolute;
        top: 0;
        left: 2.5%;
        background-color: #e7e4d9;
        border-radius: 1.5vmin;
        border: 1px solid #ddd9c9;
      }

      .model-number {
        position: absolute;
        left: 24vmin;
        bottom: 5.5vmin;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.5vmin;
        height: 4.5vmin;
        box-shadow: inset 0 0 0.75vmin black;
        color: #fefefe;
        background-color: #3b2235;
        border-radius: 0.6000000000000001vmin;
        font-style: italic;

        span {
          padding-left: 0.44999999999999996vmin;
          font-size: 2vmin;
          font-style: normal;
          transform: translateY(0.30000000000000004vmin);
        }
      }

      .logo-label {
        position: absolute;
        left: 7.5vmin;
        bottom: 5.5vmin;
        display: grid;
        place-items: center;
        width: 15vmin;
        height: 4.5vmin;
        box-shadow: inset 0 0 0.75vmin black;
        color: #fefefe;
        background-color: #3b2235;
        border-radius: 0.6000000000000001vmin;
        grid-template-columns: 6vmin 1fr;

        .logo {
          width: 3vmin;
          height: 3vmin;
          background: url("https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg")
            center center no-repeat;
          grid-area: 1/1;
        }

        .label {
          grid-area: 1/2;
          text-align: left;
          width: 100%;
        }
      }
    }
  }

  .middle {
    position: absolute;
    width: calc(100% + 1.5vmin);
    height: 100%;
    background-color: darken(#e7e4d9, 5%);
    transform: translateY(1.5vmin) translateX(-0.75vmin) translateZ(0vmin);
    border-radius: 3vmin;
    transform-style: preserve-3d;

    &:after {
      border-radius: 5vmin;
      position: absolute;
      bottom: 0;
      left: -1.3vmin;
      width: calc(100% + 2.3vmin);
      height: 20%;
      content: "";
      background-color: #d0c4ba;
      box-shadow: var(--object-box-shadow);
      transform: translate3d(0, 0, -1.5vmin);
    }
  }
}

.floppy-drive {
  position: absolute;
  top: 61.5vmin;
  left: 120.5vmin;
  transform-style: preserve-3d;
  transform-origin: bottom center;
  // perspective-origin: 70% 55%;
  // perspective: 120vmin;
  transform: translateZ(-10vmin);
  --depth: 30vmin;
  --size: 7.5vmin;
  --width: 30vmin;
  --height: 16.5vmin;
  width: var(--width);
  height: var(--height);
  opacity: 1;

  .left {
    // opacity: 0.5;
    position: absolute;
    transform: translateX(-50%) rotateY(90deg);
    width: var(--depth);
    height: var(--height);
    background: linear-gradient(to top, #b2a4a8 95%, #f3f4ec);
    padding: 0 1.7999999999999998vmin;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1.5vmin;

    .emboss {
      grid-area: 1/2;
      background: repeating-linear-gradient(
        to left,
        transparent,
        transparent 0.75vmin,
        #b8b8b8 0.75vmin,
        #b8b8b8 1.5vmin
      );
    }
  }
  .top {
    // opacity: 0.5;
    position: absolute;
    transform: translateY(-50%) rotateX(90deg);
    width: var(--width);
    height: var(--depth);
    background-color: #f3f4ec;
    border-radius: 0.75vmin;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.5vmin;
    padding: 1.7999999999999998vmin 0;

    .emboss {
      background: repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 0.75vmin,
        #b8b8b8 0.75vmin,
        #b8b8b8 1.5vmin
      );

      &-1 {
        grid-area: 1/1;
      }
      &-2 {
        grid-area: 1/3;
      }
    }

    .embed {
      box-shadow: inset 0 0 3vmin rgba(#000, 0.1);
      border-radius: 0.75vmin;

      &-1 {
        grid-area: 1/2;
      }
      &-2 {
        grid-area: 2/2;
      }
    }
  }
  .front {
    // opacity: 0.5;
    position: absolute;
    transform: translateY(-0.30000000000000004vmin)
      translateZ(calc(var(--depth) / 2));
    width: var(--width);
    height: calc(var(--height) + 0.75vmin);
    background-color: #3b2235;
    border: 0.44999999999999996vmin solid darken(#f3f4ec, 10%);
    box-shadow: inset 0 0 3vmin #000;
    border-radius: 0.75vmin;
    display: grid;
    place-items: center;

    .logo {
      position: absolute;
      width: 4.5vmin;
      height: 4.5vmin;
      background: url("https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg")
        center center no-repeat;
      right: 3vmin;
      bottom: 1.5vmin;
    }

    .slot-container {
      width: 100%;
      padding: 0.6000000000000001vmin;
      // border: 0.07500000000000001vmin solid black;
      background-color: lighten(#3b2235, 5%);
      box-shadow: 0 0 0.30000000000000004vmin black;
    }

    .slot-embed {
      position: absolute;
      box-shadow: inset -0.15000000000000002vmin 0 0.75vmin black;
      top: 1.5vmin;
      width: 7.5vmin;
      height: 12vmin;
      border-radius: 0.30000000000000004vmin;
      background-color: darken(#3b2235, 3%);

      .cover {
        position: absolute;
        top: 5.025vmin;
        height: 3vmin;
        width: 100%;
        background-color: lighten(#3b2235, 1%);
        border: 0.07500000000000001vmin solid #222;
        border-top-color: #444;
        box-shadow: 0 0 0.44999999999999996vmin black;
      }

      .shadow {
        position: absolute;
        top: 8.024999999999999vmin;
        height: 4.5vmin;
        width: 100%;
        border-radius: 0.30000000000000004vmin;
        // background-color: black;
        background: linear-gradient(-170deg, black, lighten(#3b2235, 4%) 70%);
        box-shadow: inset -0.15000000000000002vmin 0 0.75vmin black;
      }
    }

    .slot {
      width: 100%;
      border: 0.44999999999999996vmin solid #252e2f;
      border-top-color: #678083;
      border-left-color: lighten(#252e2f, 5%);
      border-top-color: #252e2f;
      border-bottom-color: darken(#678083, 15%);
      border-right-color: darken(#678083, 30%);
      display: grid;
      place-items: center;
      border-style: solid;

      .hole {
        width: 100%;
        height: 0.75vmin;
        background: black;
      }
    }

    .light {
      position: absolute;
      bottom: 3.5999999999999996vmin;
      left: 1.5vmin;
      font-family: Helvetica;
      color: #fff;
      font-size: 0.6000000000000001vmin;
      height: 1.0499999999999998vmin;
      display: flex;
      align-items: center;
      letter-spacing: 0.03vmin;

      span {
        opacity: 0.8;
      }

      .arrow {
        display: inline-block;
        transform: rotate(-90deg);
        font-size: 1.0499999999999998vmin;
        margin-left: 0.44999999999999996vmin;
      }

      .led {
        width: 0.8999999999999999vmin;
        height: 0.8999999999999999vmin;
        margin-left: 0.44999999999999996vmin;
        border-radius: 50%;
        background-color: #7c412c;
        box-shadow: 0 0 0.30000000000000004vmin black;
        position: relative;

        .reflection {
          position: absolute;
          left: 0.22499999999999998vmin;
          top: 0.22499999999999998vmin;
          width: 0.30000000000000004vmin;
          height: 0.30000000000000004vmin;
          border-radius: 50%;
          background-color: #fff;
          filter: blur(0.07500000000000001vmin);
          opacity: 0.8;
        }
      }
    }

    .label {
      font-family: "Audiowide", cursive;
      position: absolute;
      width: auto;
      font-size: 1.7999999999999998vmin;
      color: #fff;
      position: absolute;
      font-weight: bold;
      left: 1.5vmin;
      bottom: 0.75vmin;
      opacity: 0.8;
    }
  }

  .bottom {
    position: absolute;
    transform: translateY(-50%) rotateX(90deg)
      translateZ(calc(-1 * var(--height) - 0.6vmin));
    width: var(--width);
    height: var(--depth);
    background-color: transparent;
    box-shadow: var(--object-box-shadow-floppy);
    background-color: black;
  }
}

.monitor-shadow {
  position: absolute;
  top: calc(11.5vmin + 45vmin);
  left: 33vmin;
  width: 62vmin;
  height: 1.5vmin;
  box-shadow: var(--object-box-shadow-monitor);
  z-index: 100;
  border-radius: 1.5vmin;
}

.back-shadow {
  position: absolute;
  left: 40vmin;
  top: 23vmin;
  width: 50vmin;
  height: 30vmin;
  background-color: black;
  box-shadow: 0 0 20vmin 5vmin #444;
  z-index: 0;
}

.monitor {
  position: absolute;
  left: 31vmin;
  top: 11.5vmin;
  width: 66vmin;
  height: 47.25vmin;
  background-color: #e7e4d9;
  opacity: 1;
  border-radius: 1vmin;
  // border-bottom: 0.15000000000000002vmin solid darken(#b2aea2, 15%);
  overflow: hidden;
  transform-style: preserve-3d;
  transform: translateZ(0vmin);
  z-index: 100;
  box-shadow: inset 0 -0.7vmin 0.7vmin rgba(#3c7653, 0.5);

  &__terminal {
    height: 100%;
    padding: 2vmin;
    font-size: 1vmin;
    color: #fff;
    font-family: "Terminal";
    text-transform: uppercase;

    .cursor {
      display: inline-block;
      width: 0.8vmin;
      height: 0.8vmin;
      margin: 0.1vmin;
      vertical-align: text-bottom;
      background-color: #fff;
      animation: blink 0.7s linear 0s infinite;

      @keyframes blink {
        from {
          visibility: visible;
        }
        50% {
          visibility: hidden;
        }
        to {
          visibility: hidden;
        }
      }
    }
  }

  &__line {
    position: absolute;
    width: 0.44999999999999996vmin;
    height: 47.25vmin;
    left: 58.949999999999996vmin;
    box-shadow: inset 0 0 0.30000000000000004vmin rgba(#3c7653, 0.6);
  }

  &__soft-shadow {
    position: absolute;
    top: 2.7vmin;
    left: 3vmin;
    width: 54vmin;
    height: 42vmin;
    border-radius: 0.75vmin;
    box-shadow: inset 0 -0.15000000000000002vmin 1.0499999999999998vmin rgba(#3c7653, 1);
  }

  &__shadow {
    position: absolute;
    top: 3.1500000000000004vmin;
    left: 3.4499999999999997vmin;
    width: 53.099999999999994vmin;
    height: 41.099999999999994vmin;
    background-color: #051715;
    border-radius: 0.75vmin;
  }

  &__inner {
    position: absolute;
    top: 3.75vmin;
    left: 4.050000000000001vmin;
    width: 51.900000000000006vmin;
    height: 39.900000000000006vmin;
    background-color: #b2aea2;
    border-radius: 0.75vmin;
    background: linear-gradient(145deg, #b2aea2, darken(#b2aea2, 5%));
    // border-bottom: 0.44999999999999996vmin solid darken(#B2AEA2, 15%);
    border-top: 0.30000000000000004vmin solid #e1d3cc;
    box-shadow: inset 0 -1.0499999999999998vmin 1.0499999999999998vmin rgba(#3c7653, 0.8),
      inset 0 -0.5vmin 0.5vmin rgba(#3c7653, 1);
  }

  &__inner-shadow {
    position: absolute;
    top: 5.25vmin;
    left: 5.699999999999999vmin;
    width: 48.449999999999996vmin;
    height: 36.599999999999994vmin;
    background: linear-gradient(
      145deg,
      #384133,
      #384133 45%,
      #c0b49c 55%,
      #c0b49c
    );
    border-radius: 1.5vmin;
    border-bottom: 0.15000000000000002vmin solid #e1d3cc;
    border-right: 0.15000000000000002vmin solid rgba(#e1d3cc, 0.8);
    box-shadow: inset 0 0 1.0499999999999998vmin rgba(#3c7653, 0.8);
  }

  &__inner-shadow-light {
    position: absolute;
    top: 5.25vmin;
    left: 5.699999999999999vmin;
    width: 48.449999999999996vmin;
    height: 36.599999999999994vmin;
    background: linear-gradient(
      36deg,
      transparent,
      transparent 35%,
      rgba(#fff, 0.6),
      transparent 65%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to top left,
      #4e654a,
      #4e654a 50%,
      transparent 51%,
      transparent
    );
    mask-image: linear-gradient(
      to top left,
      #4e654a,
      #4e654a 50%,
      transparent 51%,
      transparent
    );
    border-radius: 1.5vmin;
    opacity: 0.7;
  }

  &__inner-shadow-dark {
    position: absolute;
    top: 5.25vmin;
    left: 5.699999999999999vmin;
    width: 48.449999999999996vmin;
    height: 36.599999999999994vmin;
    background: linear-gradient(
      36deg,
      transparent,
      transparent 43%,
      #000,
      transparent 57%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to bottom right,
      #4e654a,
      #4e654a 50%,
      transparent 51%,
      transparent
    );
    mask-image: linear-gradient(
      to bottom right,
      #4e654a,
      #4e654a 50%,
      transparent 51%,
      transparent
    );
    border-radius: 1.5vmin;
    opacity: 0.5;
  }

  &__screen {
    position: absolute;
    top: 9.600000000000001vmin;
    left: 7.949999999999999vmin;
    width: 43.8vmin;
    height: 27.75vmin;
    background-color: #4e654a;
    border-radius: 10% / 95%;
    box-shadow: inset 0 0 10px #000000;
  }

  &__screen-2 {
    position: absolute;
    top: 8.399999999999999vmin;
    left: 9.75vmin;
    width: 40.05vmin;
    height: 30.299999999999997vmin;
    border-radius: 95% / 10%;
    background: linear-gradient(
        217deg,
        rgba(#4e654a, 0),
        rgba(#4e654a, 0.9) 70.71%
      ),
      linear-gradient(127deg, rgba(#9abdc3, 0.8), #4e654a 70.71%),
      linear-gradient(336deg, rgba(#4e654a, 0.8), #4e654a 70.71%);

    &:not(.bottom-shadow),
    &:not(.top-shadow) {
      -webkit-mask-image: linear-gradient(
        to left,
        #4e654a,
        #4e654a 97%,
        transparent
      );
      mask-image: linear-gradient(to left, #4e654a, #4e654a 97%, transparent);
    }

    &.bottom-shadow {
      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent,
        transparent 88%,
        #4e654a
      );
      mask-image: linear-gradient(
        to bottom,
        transparent,
        transparent 88%,
        #4e654a
      );
      box-shadow: inset 0 0 10px #000000;
    }

    &.top-shadow {
      top: 8.25vmin;
      -webkit-mask-image: linear-gradient(
        to top,
        transparent,
        transparent 88%,
        #4e654a
      );
      mask-image: linear-gradient(
        to top,
        transparent,
        transparent 88%,
        #4e654a
      );
      box-shadow: inset 0 0 10px #000000;
    }
  }

  &__logo-embed {
    position: absolute;
    left: 61.050000000000004vmin;
    top: 42vmin;
    width: 3vmin;
    height: 3vmin;
    border-radius: 0.44999999999999996vmin;
    box-shadow: inset 0 0.15000000000000002vmin 0.44999999999999996vmin
      rgba(#3c7653, 0.6);
    background: url("https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg")
      center center no-repeat;
    background-size: 70%;
  }

  &__power-switch {
    position: absolute;
    left: 60.449999999999996vmin;
    top: 0vmin;
    width: 4.35vmin;
    height: 2.55vmin;
    box-shadow: inset 0 0 0.44999999999999996vmin #3c7653;
    transform: translate(0, -0.75vmin);
    position: relative;

    &__button {
      position: absolute;
      bottom: 1px;
      left: 50%;
      width: 1.5vmin;
      height: 0.75vmin;
      border: 1px solid rgba(#3c7653, 0.3);
      border-bottom: none;
      background-color: #e7e4d9;
      box-shadow: inset 0 0.15000000000000002vmin 0.30000000000000004vmin #fff;
      border-radius: 0.30000000000000004vmin 0.30000000000000004vmin 0 0;
      transform: translateX(-50%);
    }

    &:hover & {
      &__button {
        background-color: rgba(#3c7653, 0.3);
      }
    }
  }
}

// https://github.com/ant-design/ant-design-icons
.apple-outlined {
  width: 1vmin;
  height: 1vmin;
  background-image: url("https://raw.githubusercontent.com/ant-design/ant-design-icons/master/packages/icons-svg/svg/outlined/apple.svg");
}

.apple-filled {
  width: 1vmin;
  height: 1vmin;
  background-image: url("https://raw.githubusercontent.com/ant-design/ant-design-icons/master/packages/icons-svg/svg/filled/apple.svg");
}
</style>
