<script lang="ts">
  import { onMount } from "svelte";
  import { currentDoc, SCPGeoCoords } from "../../stores"
  import MobileTaskForces from "./mobile_task_forces.svelte";

  const WORLD_MAP_IMAGE_1 = "world_map/image_part_001.jpg"
  const WORLD_MAP_IMAGE_2 = "world_map/image_part_002.jpg"
  const WORLD_MAP_IMAGE_3 = "world_map/image_part_003.jpg"
  const WORLD_MAP_IMAGE_4 = "world_map/image_part_004.jpg"

  let image: HTMLImageElement
  let imageHeight: number
  let imageWidth: number
  let gridNodeHeight: number = 15
  let gridNodeWidth: number = 15
  
  $: {
    quadrantDimensions = []
    for (let i = 0; i < imageHeight / gridNodeHeight; i++) {
      quadrantDimensions[i] = []
      for (let n = 0; n < imageWidth / gridNodeWidth; n++) {
        quadrantDimensions[i][n] = 0
      }
    }
  }

  let quadrantDimensions: number[][] = []
  let currentImage = WORLD_MAP_IMAGE_1

  function gotoWorldMapQuadrant(quadrant: string) {
    currentImage = quadrant
  }

  function gotoMobileTaskForces() {
    currentDoc.update(() => MobileTaskForces)
  }

  onMount(function() {
    let img = new Image()
    img.src = currentImage
    img.onload = () => {
      imageHeight = 500
      imageWidth = 900
    }
    window.addEventListener('resize', () => {
      imageHeight = image.height
      imageWidth = image.width
    })
  })

</script>

<h1>
  MOBILE TASK FORCES
</h1>
<h2>
  WORLD MAP
</h2>
<button on:click={gotoMobileTaskForces}>
  BACK TO MOBILE TASK FORCES
</button>
<button on:click={() => gotoWorldMapQuadrant(WORLD_MAP_IMAGE_1)}>QUADRANT 1</button>
<button on:click={() => gotoWorldMapQuadrant(WORLD_MAP_IMAGE_2)}>QUADRANT 2</button>
<button on:click={() => gotoWorldMapQuadrant(WORLD_MAP_IMAGE_3)}>QUADRANT 3</button>
<button on:click={() => gotoWorldMapQuadrant(WORLD_MAP_IMAGE_4)}>QUADRANT 4</button>
<div class="world-map-container">
  <div
    class="world-map">
    <img 
      src="{currentImage}"
      class="quadrant"
      alt="current world map quadrant"
      bind:this={image}>
    <div class="world-map-grid">
        {#each quadrantDimensions as dimension, i}
          <div class="row">
              {#each dimension as d, n}
                {#if $SCPGeoCoords[0] === i && $SCPGeoCoords[1] === n }
                  <div style="height:{gridNodeHeight}px; width:{gridNodeWidth}px;" class="node active-scp-node" id={d.toString()}></div>
                {:else}
                  <div style="height:{gridNodeHeight}px; width:{gridNodeWidth}px" class="node" id={d.toString()}></div>
                {/if}
              {/each}
          </div>
        {/each}
    </div>
  </div>
</div>

<style>
  button {
    height: 2rem;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0.5rem;
    padding: 0.2rem;
    text-align: center;
  }

  .world-map {
    position: relative;
    z-index: 1;
  }

  .world-map-grid {
    position: relative;
    z-index: 3;
  }

  .row {
    display: flex;
  }

  .active-scp-node {
    background-color: red;
  }

  .quadrant {
    position: absolute;
    z-index: 2;
    box-sizing: border-box;
    border: solid black 1px;
    width: 100%;
  }
</style>

