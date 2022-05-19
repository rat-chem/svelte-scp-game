<script lang="ts">
  import { currentDoc } from "../../../stores"
  import Scientific from "../scientific.svelte"
  import { containmentStatus } from "../scientific.store"
  import scp096 from "./096.svelte"

  function gotoScientific() {
    currentDoc.update(() => Scientific)
  }
</script>

<h1>
  SCIENTIFIC
</h1>
<h2>
  SCP CONTAINMENT AND RESEARCH
</h2>
<button on:click={gotoScientific}>
  BACK TO SCIENTIFIC DEPARTMENT
</button>
{#each [...$containmentStatus] as [scp, containment]}
  <button
    id={scp}
    on:click={() => currentDoc.update(() => containment.getSCP.getComponent)}>
    {containment.getSCP.getItemNumber}
  </button>
{/each}

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

