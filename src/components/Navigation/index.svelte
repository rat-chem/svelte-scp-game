<script lang="ts">
  import Administration from "../../Foundation/Administration/administration.svelte"
  import Archives from "../../Foundation/Archives/archives.svelte"
  import Engineering from "../../Foundation/Engineering/engineering.svelte"
  import ExternalAffairs from "../../Foundation/ExternalAffairs/external_affairs.svelte"
  import Intelligence from "../../Foundation/Intelligence/intelligence.svelte"
  import InternalTribunal from "../../Foundation/InternalTribunal/internal_tribunal.svelte"
  import Logistics from "../../Foundation/Logistics/logistics.svelte"
  import Manufacturing from "../../Foundation/Manufacturing/manufacturing.svelte"
  import Medical from "../../Foundation/Medical/medical.svelte"
  import MobileTaskForces from "../../Foundation/MobileTaskForces/mobile_task_forces.svelte"
  import Scientific from "../../Foundation/Scientific/scientific.svelte"
  import Security from "../../Foundation/Security/security.svelte"
  import { currentDoc } from "../../stores"
  
  interface DepartmentsMapper {
    [department: string]: Function,
  }

  let currentDepartment: string

  const DEPARTMENTS: string[] = [
    "ADMINISTRATION",
    "ARCHIVES",
    "ENGINEERING",
    "EXTERNAL AFFAIRS",
    "INTELLIGENCE",
    "INTERNAL TRIBUNAL",
    "LOGISTICS",
    "MANUFACTURING",
    "MEDICAL",
    "MOBILE TASK FORCES",
    "SCIENTIFIC",
    "SECURITY",
  ]

  let departmentsRouting: DepartmentsMapper = {
    "ADMINISTRATION": Administration,
    "ARCHIVES": Archives,
    "ENGINEERING": Engineering,
    "EXTERNAL AFFAIRS": ExternalAffairs,
    "INTELLIGENCE": Intelligence,
    "INTERNAL TRIBUNAL": InternalTribunal,
    "LOGISTICS": Logistics,
    "MANUFACTURING": Manufacturing,
    "MEDICAL": Medical,
    "MOBILE TASK FORCES": MobileTaskForces,
    "SCIENTIFIC": Scientific,
    "SECURITY": Security,
  }
  
  function gotoDepartment(department: string) {
    currentDoc.update(() => departmentsRouting[department])
  }
</script>

<div class="empty-25">
  <h1>
    FACILITY ROUTER
  </h1>
  <h1>
    DEPARTMENTS
  </h1>
  <div class="router">
    {#each DEPARTMENTS as department}
      <button
        class="department-link"
        class:selected="{currentDepartment === department}"
        on:click={() => { gotoDepartment(department) }}
        on:click={() => currentDepartment = department}>
        {department}
      </button>
    {/each}
  </div>
</div>

<style>
  .empty-25 {
    width: 25%;
    box-sizing: border-box;
    border: solid black .1rem;
    overflow-y: scroll;
  }

  button {
    height: 2rem;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0.5rem;
    padding: 0.2rem;
    text-align: center;
  }

  /*.department-link {*/
  /*}*/

  .router {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  .selected {
    background-color: black;
    color: white;
  }
</style>

