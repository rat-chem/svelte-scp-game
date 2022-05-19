<script lang="ts">
  import Document096 from "./096.document.svelte"
  import Document173 from "./173.document.svelte"
  import Archives from "../archives.svelte"
  import { currentDoc } from "../../../stores"
  
  function changeSCPDocument(newDocument: Function) {
    currentDoc.update(() => newDocument)
  }

  function gotoArchives() {
    currentDoc.update(() => Archives)
  }
</script>

<h1>
  ARCHIVES
</h1>
<h1>
  SCP DOCUMENTS
</h1>
<button on:click={() => gotoArchives()}>
  BACK TO ARCHIVES
</button>
<button on:click={() => changeSCPDocument(Document096)}>
  SCP 096
</button>
<button on:click={() => changeSCPDocument(Document173)}>
  SCP 173
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

