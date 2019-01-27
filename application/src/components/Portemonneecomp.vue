<template>
  <div class="Dash">
    <div class="gridblocks">
      <section class="bookscan">
        <img src="../assets/soloalfred.svg" alt="alfred">
        <article>
          <h3>Welkom bij jouw portemonnee!</h3>
          <span>Deel jouw code met je vrienden en ontvang een tegoed! Maximaal 3 vrienden in 1 week.</span>
        </article>
      </section>
      <div class="barcode">
        <img src="../assets/wallet.svg" alt="portemonee">
        <h3>Portemonnee</h3>
        <div class="code-container">
          <h4>klantenkaart</h4>
          <div class="information-pass">
            <div class="pass">
              <img src="../assets/actual-barcode.png" alt>
              <span>0000 0000 0000 000</span>
            </div>
            <div class="pass-info">
              <ul>
                <li>
                  <img src="../assets/user-icon.svg" alt>
                  <span>Meld je nu aan</span>
                </li>
                <li>
                  <img src="../assets/star-icon.svg" alt>
                  <span>€ 1,50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="events">
        <img src="../assets/calendar.png" alt="events icon">
        <h3>Deel je code</h3>
        <label id="copyComplete"></label>
        <div class="sidescroll">
          <input id="couponCode" :value="testingCode">
          {{couponCode}}
          <button @click.stop.prevent="copyTestingCode">Kopieer</button>
        </div>
        <ul>
          <li>
            <a class="facebook" href>
              <img src="../assets/facebook-white.svg" alt="facebook">
            </a>
          </li>
          <li>
            <a class="whatsapp" href>
              <img src="../assets/whatsapp-logo.svg" alt="whatsapp">
            </a>
          </li>
          <li>
            <a class="twitter" href>
              <img src="../assets/twitter-logo-silhouette-white.svg" alt="twitter">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  color: white;
  text-align: left;
  margin: 0;
  font-size: 1.125em;
}

.gridblocks {
  display: grid;
  // height: 86vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1fr 1fr;
  grid-template-areas: "bo1 bo1 bo1 bo1" "bc1 bc1 bc1 bc1" "ev1 ev1 ev1 ev1";
  grid-gap: 0.3em;
  margin-bottom: 6em;
  .barcode {
    grid-area: bc1;
    background-color: #4da1ff;
    border-radius: 5px;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    img {
      width: 1em;
      margin-top: 0.8em;
    }
    .code-container {
      width: 100%;
      height: 6.5em;
      background-color: white;
      border-radius: 6px;
      h4 {
        color: white;
        background-color: #2a57a4;
        border-radius: 6px 6px 0 0;
        margin: 0;
        margin-top: 0.8em;
        padding: 0.5em;
      }
      .information-pass {
        padding-left: 0.4em;
        display: flex;
        flex-direction: row;
        .pass {
          display: flex;
          padding-top: 0.3em;
          padding-right: 0.4em;
          flex-direction: column;
          img {
            width: 10em;
            margin: 0;
          }
          span {
            text-align: left;
            letter-spacing: 0.035em;
            padding-left: 0.65em;
          }
        }
        .pass-info {
          border-left: dashed 1px black;
          ul {
            margin: 0.5em;
            list-style: none;
            padding-left: 0.1em;
            li {
              display: flex;
              flex-direction: row;
              text-align: center;
              margin-top: 0.8em;
              img {
                height: 1em;
                width: 1em;
                margin: 0;
                margin-right: 0.26em;
              }
              span {
                font-size: 0.7em;
              }
            }
          }
        }
      }
    }
  }
  .bookscan {
    grid-area: bo1;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    box-shadow: 1px 20px 115px -41px rgba(0, 0, 0, 0.75);
    img {
      width: 4em;
      margin-top: 0.8em;
    }
    article {
      text-align: left;
      font-size: 0.6em;
      padding-left: 1.3em;
      h3 {
        color: #000;
        font-size: 1.5em;
      }
      span {
        color: #000;
        font-size: 1.2em;
      }
    }
  }
  .ebook {
    grid-area: eb1;
    background-color: #4da1ff;
    border-radius: 5px;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    img {
      width: 1em;
      margin-top: 0.8em;
    }
  }
  .events {
    grid-area: ev1;
    background-color: #4da1ff;
    border-radius: 5px;
    padding-left: 1em;
    text-align: left;
    img {
      width: 0.8em;
      margin-top: 0.8em;
    }
    .sidescroll {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.7em;
      input {
        border-radius: 0.4em 0em 0em 0.4em;
        border: none;
        padding: 0.4em;
        font-size: 1.4em;
        width: 25%;
      }
      button {
        background-color: #e5e6e8;
        color: black;
        border: none;
        border-radius: 0 0.4em 0.4em 0;
        width: 6em;
        font-size: 1em;
        font-weight: 500;
        padding: 0.84em;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-top: 0.5em;
      list-style: none;
      li {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;

        a {
          background-color: white;
          padding: 1em;
          width: 2em;
          height: 1em;
          img {
            width: 1.3em;
            text-align: center;
            margin: 0;
            color: white;
          }
        }
        .twitter {
          background-color: #1da1f2;
        }
        .facebook {
          background-color: #3c5999;
        }
        .whatsapp {
          background-color: #1bd741;
        }
      }
    }
  }
}

.bump {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    align-content: right;
    color: white;
  }
}

#extra-text {
  display: none;
}
</style>

<script>
export default {
  name: "Portemonneecomp",
  data() {
    return { testingCode: "12HIK7" };
  },
  methods: {
    copyTestingCode() {
      let couponCode = document.querySelector("#couponCode");
      couponCode.setAttribute("type", "text");
      couponCode.select();

      try {
        var successful = document.execCommand("copy");
        var copyComplete = document.querySelector("#copyComplete");
        var msg = successful ? "successful" : "unsuccessful";
        copyComplete.innerHTML = "code is succesvol gekopieerd";
      } catch (err) {
        copyComplete.innerHTML = "Oh er is iets misgegaan bij het kopieren";
      }
      window.getSelection().removeAllRanges();
    }
  }
};
</script>
