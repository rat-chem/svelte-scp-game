<script lang="ts">
  import WorldMap from "./quadrants.svelte"
  import { currentDoc } from "../../stores"
  
  function gotoWorldMap() {
    currentDoc.update(() => WorldMap)
  }
</script>

<h1>
  MOBILE TASK FORCES
</h1>
<button on:click={gotoWorldMap}>
  WORLD MAP QUADRANTS
</button>

<style>
  button {
    height: 2rem;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0.5rem;
    padding: 0.2rem;
    text-align: center;
  }
</style>

