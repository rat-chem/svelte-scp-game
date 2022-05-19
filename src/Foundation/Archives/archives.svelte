<script lang="ts">
  import Documents from "./Documents/documents.svelte";
  import { currentDoc } from "../../stores";

  function gotoSCPDocuments() {
    currentDoc.update(() => Documents)
  }
</script>

<h1>
  ARCHIVES
</h1>
<button on:click={() => gotoSCPDocuments()} class="department-link">
  SCP DOCUMENTS
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

