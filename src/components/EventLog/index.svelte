<script lang="ts">
  import Display from "./Display.svelte";
  import { eventLogFlag } from '../../stores'
</script>

<div id="event-log" class="event-log">
  <Display />
</div>

<style>
  .event-log {
    font-size: 90%;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    border: solid black .1rem;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>

