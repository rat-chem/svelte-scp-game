<script lang="ts">
  import EventLog from "../components/EventLog/index.svelte"
  import Navigation from "../components/Navigation/index.svelte"
  import Interface from "../components/Interface/index.svelte"
  import { eventLogFlag, confinementNode096 } from "../stores"

  setInterval(function() {
    let newRow = Math.round(Math.random())
    if (newRow === 1)
      newRow = Math.round(Math.random() * 2) - 1

    let newNode = Math.round(Math.random())
    if (newNode === 1)
      newNode = Math.round(Math.random() * 2) - 1

    let tempRow = $confinementNode096[0]
    let tempNode = $confinementNode096[1]

    if ((tempRow + newRow) <= 4 && (tempRow + newRow) >= 0)
      tempRow += newRow

    if ((tempNode + newNode) <= 4 && (tempNode + newNode) >= 0)
      tempNode += newNode

    confinementNode096.update(tempRow, tempNode)
  }, 1000)
</script>

<div id="app-container" class="app-container">
  <EventLog />
  <Navigation />
  <Interface />
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  .app-container {
    display: flex;
    font-family: 'Space Mono', monospace;
    height: 100vh;
  }
</style>

