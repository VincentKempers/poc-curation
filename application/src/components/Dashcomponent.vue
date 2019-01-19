<template>
  <div class="Dash">
    <div class="gridblocks">
      <div class="barcode">
        <!-- <img src alt> -->
        <h4>Portemonnee</h4>
      </div>
      <div class="bookscan">
        <h4>boekenscanner</h4>
      </div>
      <div class="ebook">
        <h4>E-books</h4>
      </div>
      <div class="events">
        <h4>Evenementen</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gridblocks {
  display: grid;
  height: 80vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "bc1 bc1 bc1 bc1" "bo1 bo1 eb1 eb1" "ev1 ev1 ev1 ev1";
  grid-gap: 0.8em;
  .barcode {
    grid-area: bc1;
    background-color: #4da1ff;
    height: 20px;
    border-radius: 1em;
    width: 100%;
    height: 100%;
  }
  .bookscan {
    grid-area: bo1;
    background-color: #4da1ff;
    border-radius: 1em;
  }
  .ebook {
    grid-area: eb1;
    background-color: #4da1ff;
    border-radius: 1em;
  }
  .events {
    grid-area: ev1;
    background-color: #4da1ff;
    border-radius: 1em;
  }
}
</style>

<script>
export default {
  name: "Dash"
};
</script>
