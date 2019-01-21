<template>
  <div class="Dash">
    <div class="gridblocks">
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
                  <span>Vincent Kempers</span>
                </li>
                <li>
                  <img src="../assets/star-icon.svg" alt>
                  <span>je hebt € 1,50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section class="bump">
          <span>meer ></span>
        </section>
      </div>
      <div class="bookscan">
        <img src="../assets/barcode.svg" alt="barcode scanner">
        <h3>Boekenscanner</h3>
        <span>Gebruik de boekscanner om meer informatie over een boek te krijgen en reviews te lezen</span>
      </div>
      <div class="ebook">
        <img src="../assets/book.svg" alt="ebook viewer">
        <h3>E-books</h3>
      </div>
      <div class="events">
        <img src="../assets/calendar.png" alt="events icon">
        <h3>Evenementen</h3>
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
  height: 80vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.3fr 1fr 1.1fr;
  grid-template-areas: "bc1 bc1 bc1 bc1" "bo1 bo1 eb1 eb1" "ev1 ev1 ev1 ev1";
  grid-gap: 0.3em;
  .barcode {
    grid-area: bc1;
    background-color: #4da1ff;
    border-radius: 1em;
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
    background-color: #4da1ff;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    img {
      width: 1.45em;
      margin-top: 0.8em;
    }
    span {
      color: white;
      text-align: left;
      font-size: 0.6em;
    }
  }
  .ebook {
    grid-area: eb1;
    background-color: #4da1ff;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    img {
      width: 1.2em;
      margin-top: 0.8em;
    }
  }
  .events {
    grid-area: ev1;
    background-color: #4da1ff;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    img {
      width: 1.2em;
      margin-top: 0.8em;
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
  name: "Dash"
};
</script>
