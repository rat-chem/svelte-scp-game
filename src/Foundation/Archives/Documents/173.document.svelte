<script lang="ts">
  // import Documents from "../../components/Navigation/documents.svelte"
  import Documents from "./documents.svelte"
  import { currentDoc } from "../../../stores"
  
  function gotoDocuments() {
    currentDoc.update(() => Documents)
  }
</script>

<h1>
  ARCHIVES
</h1>
<h1>
  SCP DOCUMENTS
</h1>
<h1>
  SCP 173
</h1>
<button on:click={() => gotoDocuments()}>
  BACK TO DOCUMENTS
</button>
<div id="page-content">
<div style="text-align: right;"><div class="page-rate-widget-box"></div></div>
<p><strong>Item #:</strong> SCP-173</p>
<p><strong>Object Class:</strong> Euclid</p>
<p><strong>Special Containment Procedures:</strong> Item SCP-173 is to be kept in a locked container at all times. When personnel must enter SCP-173's container, no fewer than 3 may enter at any time and the door is to be relocked behind them. At all times, two persons must maintain direct eye contact with SCP-173 until all personnel have vacated and relocked the container.</p>
<p><strong>Description:</strong> Moved to Site-19&nbsp;1993. Origin is as of yet unknown. It is constructed from concrete and rebar with traces of Krylon brand spray paint. SCP-173 is animate and extremely hostile. The object cannot move while within a direct line of sight. Line of sight must not be broken at any time with SCP-173. Personnel assigned to enter container are instructed to alert one another before blinking. Object is reported to attack by snapping the neck at the base of the skull, or by strangulation. In the event of an attack, personnel are to observe Class 4 hazardous object containment procedures.</p>
<p>Personnel report sounds of scraping stone originating from within the container when no one is present inside. This is considered normal, and any change in this behaviour should be reported to the acting HMCL supervisor on duty.</p>
<p>The reddish brown substance on the floor is a combination of feces and blood. Origin of these materials is unknown. The enclosure must be cleaned on a bi-weekly basis.</p>
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
</style>

