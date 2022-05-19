<script lang="ts">
  import SCPNavigation from "../SCPs/scp.navigation.svelte"
  import { currentDoc } from "../../../stores"
  import { containmentStatus, SCPs } from "../scientific.store"
  import cssVars from "svelte-css-vars"

  function gotoSCPNavigation() {
    currentDoc.update(() => SCPNavigation)
  }

  const scp = $SCPs.get("SCP-096")!
  const scpContainment = $containmentStatus.get("SCP-096")!

  let containmentDimensions: number[][] = []
  for (let i = 0; i < scpContainment.getContainmentDimensions[0]; i++) {
    containmentDimensions[i] = []
    for (let n = 0; n < scpContainment.getContainmentDimensions[1]; n++) {
      containmentDimensions[i][n] = 0
    }
  }
  
  let currentGridNode: number[]
  scpContainment.getCurrentGridNode.subscribe(function(gn: any) {
    currentGridNode = gn
  })

  let degrees: number = 0
  setInterval(function() {
    if (degrees + 1 > 360) {
      degrees = 0
    } else {
      degrees += 45
    }
  }, 1000)

  $: styleVars = {
    directionDeg: `${degrees}deg`,
  }
</script>

<h1>
  SCIENTIFIC
</h1>
<h2>
  SCP CONTAINMENT AND RESEARCH
</h2>
<h3>
  SCP-096
</h3>
<button on:click={gotoSCPNavigation}>
  SCP CONTAINMENT AND RESEARCH
</button>
<div class="scp-information" use:cssVars="{styleVars}">
  <div class="containment">
    {#each containmentDimensions as dimension, i}
      <div class="row">
        {#each dimension as d, n}
          {#if currentGridNode[0] === i && currentGridNode[1] === n}
            <div class="node direction active-node" id={d.toString()}>1x1</div>
          {:else}
            <div class="node" id={d.toString()}>1x1</div>
          {/if}
        {/each}
      </div>
    {/each}
    {#if scpContainment.getEntranceStatus === "Closed"}
      <div class="containment-entrance" style="background-color: green;">
        CONTAINMENT ENTRANCE <strong style="color: white;">({scpContainment.getEntranceStatus})</strong>
      </div>
    {/if}
    {#if scpContainment.getEntranceStatus === "Open"}
      <div class="containment-entrance" style="background-color: white;">
        CONTAINMENT ENTRANCE <strong style="color: white;">({scpContainment.getEntranceStatus})</strong>
      </div>
    {/if}
    {#if scpContainment.getEntranceStatus === "Breached"}
      <div class="containment-entrance" style="background-color: red;">
        CONTAINMENT ENTRANCE <strong style="color: white;">({scpContainment.getEntranceStatus})</strong>
      </div>
    {/if}
  </div>
  <div class="statistics">
    <div>
      <strong>ITEM #:</strong> {scp.getItemNumber}
    </div>
    <div>
      <strong>OBJECT CLASS:</strong> {scp.getObjectClass}
    </div>
    <div>
      <strong>DIMENSION UNITS:</strong> {scpContainment.getDimensionUnits}
    </div>
    <div>
      <strong>CONTAINMENT DIMENSIONS:</strong> {scpContainment.getContainmentDimensions}
    </div>
    <div>
      <strong>CONTAINMENT NODE DIMENSIONS:</strong> {scpContainment.getContainmentNodeDimensions}
    </div>
    <div>
      <strong>CONTAINMENT MATERIAL:</strong> {scpContainment.getContainmentMaterial}
    </div>
    <div>
      <strong>AIRTIGHT STATUS:</strong> {scpContainment.getAirtightStatus}
    </div>
    <div>
      <strong>CONTAINMENT CONDITION:</strong> {scpContainment.getContainmentCondition}
    </div>
    <div>
      <strong>STRUCTURAL INTEGRITY:</strong> {scpContainment.getStructuralIntegrity}%
    </div>
    <div>
      <strong>CURRENT GRID NODE:</strong> {currentGridNode}
    </div>
  </div>
</div>

<style>
  .row {
    display: flex;
  }

  .node {
    height: 7rem;
    width: 7rem;
    box-sizing: border-box;
    border: solid black 0.1rem;
  }

  .scp-information {
    display: flex;
    margin: 0.1rem;
  }

  .active-node {
    background-color: black;
    color: white;
    overflow: hidden;
  }

  .direction {
    background-color: black;
    background-image: -webkit-linear-gradient(var(--directionDeg), black 50.5%, red 49.5%);
  }

  .containment {
    border: dashed 0.3rem green;
    border-bottom: none;
    box-sizing: border-box;
  }

  .statistics {
    margin-left: 1rem;
  }

  .containment-entrance {
    color: white;
    height: 1.5rem;
    /*border: dashed black 0.15rem;*/
    text-align: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  button {
    height: 2rem;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0.5rem;
    padding: 0.2rem;
    text-align: center;
  }
</style>

