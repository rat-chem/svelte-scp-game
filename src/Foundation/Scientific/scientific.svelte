<script lang="ts">
  import SCPNavigation from "./SCPs/scp.navigation.svelte"
  import { currentDoc } from "../../stores"

  function gotoSCPNavigation() {
    currentDoc.update(() => SCPNavigation)
  }
</script>

<h1>
  SCIENTIFIC
</h1>
<button on:click={gotoSCPNavigation}>
  SCP CONTAINMENT AND RESEARCH
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

