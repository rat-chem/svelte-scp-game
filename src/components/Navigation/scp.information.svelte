<script lang="ts">
  import Information096 from "../../SCPs/Information/096.information.svelte"
  import { currentDoc } from "../../stores"

  function changeSCPInformation(newInformation: Function) {
    currentDoc.update(() => newInformation)
  }
</script>

<h1>
  SCP INFORMATION
</h1>
<button on:click={() => changeSCPInformation(Information096)}>
  SCP 096
</button>
<button>
  SCP 173
</button>

