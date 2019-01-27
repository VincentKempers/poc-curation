<template>
  <div class="Dash">
    <div class="gridblocks">
      <section class="bookscan">
        <img src="../assets/soloalfred.svg" alt="alfred">
        <article>
          <h3>Welkom terug!</h3>
          <span>Als je vragen of advies nodig hebt kun je bij mij wezen. Klik hier om met mij te praten.</span>
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
                  <span>log nu in</span>
                </li>
                <li>
                  <img src="../assets/star-icon.svg" alt>
                  <span>je hebt € 1,50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="events">
        <img src="../assets/calendar.png" alt="events icon">
        <h3>Deel je code</h3>
        <span>Deel je code per week met 2 andere vrienden als zij een account aanmaken met jouw code, krijg jij 0,50 op je tegoed!</span>
        <div class="sidescroll">
          <input type="text" value="3H13SD">
          <button>Kopieer</button>
        </div>
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
  height: 86vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1.6fr 1fr;
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
      h3 {
        color: #000;
      }
      span {
        color: #000;
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
    // padding-right: 1em;
    text-align: left;
    img {
      width: 0.8em;
      margin-top: 0.8em;
    }
    .sidescroll {
      max-width: 100%;
      border-radius: 5px;
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        margin-top: 0.4em;
        padding: 0;
        padding-right: 1em;
        overflow-x: scroll;
        li {
          margin-right: 0.5em;
          .ticket {
            padding: 0.4em;
            border-radius: 5px;
            background-color: white;
            width: 10em;
            margin-right: 0.7em;
          }
          #event {
            margin: 0;
            margin-bottom: 0.5em;
            span {
              font-size: 0.6em;
              text-transform: uppercase;
            }
            h4 {
              margin: 0;
            }
          }
          #when {
            margin: 0;
            span {
              font-size: 0.6em;
              text-transform: uppercase;
            }
            h4 {
              margin: 0;
            }
          }
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
</style>

<script>
export default {
  name: "Portemonneecomp"
};
</script>
