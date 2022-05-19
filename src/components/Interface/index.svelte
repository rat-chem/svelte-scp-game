<script lang="ts">
  import { currentDoc } from "../../stores"
  
  let SCPDocument: any
  currentDoc.subscribe((v: any) => {
    SCPDocument = v
  })
</script>

<div class="empty-50">
  <h1 class="interface-header">
    SCP FOUNDATION SITE EPSILON 333-19281
  </h1>
  <svelte:component this={SCPDocument} />
</div>

<style>
  .empty-50 {
    width: 50%;
    box-sizing: border-box;
    border: solid black .1rem;
    overflow-y: scroll;
  }
</style>

