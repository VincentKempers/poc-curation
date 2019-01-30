<template>
  <div class="Dash">
    <div class="gridblocks">
      <router-link to="/Portemonnee" class="barcode">
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
        <section class="bump">
          <span>meer</span>
        </section>
      </router-link>
      <div class="books">
        <h3>{{checkedNames}}</h3>
        <ul id="books">
          <li :key="data" v-for="data in finalBook">
            <a :href="data.url">
              <img :src="require(`@/assets/books/${data.img}.jpg`)" :alt="data.name">
              <span>{{data.name}}</span>
            </a>
          </li>
        </ul>
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
        <router-link to="/Choosestore">
          <img src="../assets/calendar.png" alt="events icon">
          <h3>Evenementen</h3>
          <div class="sidescroll">
            <ul>
              <li>
                <div class="ticket">
                  <section id="event">
                    <span>evenement</span>
                    <h5>schrijverspitch bij Monique</h5>
                  </section>
                  <section id="when">
                    <span>wanneer</span>
                    <h4>2 Februari, 2019 15:00</h4>
                  </section>
                </div>
              </li>
              <li>
                <div class="ticket">
                  <section id="event">
                    <span>evenement</span>
                    <h5>Voorleesochtend:</h5>
                  </section>
                  <section id="when">
                    <span>wanneer</span>
                    <h4>2 Februari, 2019 15:00</h4>
                  </section>
                </div>
              </li>
              <li>
                <div class="ticket">
                  <section id="event">
                    <span>evenement</span>
                    <h5>Feestlijke boekpresentatie</h5>
                  </section>
                  <section id="when">
                    <span>wanneer</span>
                    <h4>3 Februari, 2019 15:00</h4>
                  </section>
                </div>
              </li>
              <li>
                <div class="ticket">
                  <section id="event">
                    <span>evenement</span>
                    <h5>De Nieuwe Leeskring</h5>
                  </section>
                  <section id="when">
                    <span>wanneer</span>
                    <h4>4 Februari, 2019 15:00</h4>
                  </section>
                </div>
              </li>
              <li>
                <div class="ticket">
                  <section id="event">
                    <span>evenement</span>
                    <h5>Boekbespreking</h5>
                  </section>
                  <section id="when">
                    <span>wanneer</span>
                    <h4>6 Februari, 2019 15:00</h4>
                  </section>
                </div>
              </li>
            </ul>
          </div>
        </router-link>
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
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.3fr 1fr 1fr 1fr;
  grid-template-areas: "bc1 bc1 bc1 bc1" "books books books books" "bo1 bo1 eb1 eb1" "ev1 ev1 ev1 ev1";
  grid-gap: 0.3em;
  margin-bottom: 6em;

  .barcode {
    grid-area: bc1;
    background-color: #4da1ff;
    border-radius: 5px;
    padding-left: 1em;
    padding-right: 1em;
    text-align: left;
    text-decoration: none;
    color: black;
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
    &:visited {
      color: black;
    }
  }
  .books {
    grid-area: books;
    padding-left: 1em;
    padding-right: 1em;
    h3 {
      color: black;
    }
    ul {
      margin: 0;
      display: flex;
      flex-direction: row;
      width: 100%;
      overflow-x: scroll;
      list-style: none;
      padding-left: 0;
      li {
        display: flex;
        flex-direction: column;
        margin-right: 2.8em;
        a {
          color: black;
          text-decoration: none;
        }
        &:visited {
          color: black;
        }
        img {
          width: 5.5em;
        }
      }
    }
  }
  .bookscan {
    grid-area: bo1;
    background-color: #4da1ff;
    border-radius: 5px;
    padding: 0 1em 1em 1em;
    text-align: left;
    img {
      width: 1em;
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
    padding-bottom: 1em;
    text-align: left;
    a {
      text-decoration: none;
      color: black;
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
              h5 {
                margin: 0;
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
              h5 {
                margin: 0;
              }
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
import json from "../data/data.json";

export default {
  name: "Dash",
  data() {
    return {
      checkedNames: [],
      allBooks: json,
      finalBook: {}
    };
  },
  mounted() {
    if (localStorage.getItem("genres")) {
      try {
        var pickedGenre = localStorage.getItem("genres");
        this.checkedNames = localStorage.getItem("genres");
        this.allBooks.forEach(element => {
          this.finalBook = element[`${pickedGenre}`].books;
        });
      } catch (e) {
        this.checkedNames = "Top 5 boeken";
      }
    }
  },
  watch: {
    genre(newName) {
      localStorage.genres = newName;
    }
  }
};
</script>
