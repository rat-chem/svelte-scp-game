import { writable, get } from "svelte/store"
import ContainmentStatus from "./containment.class"
import SCP from "./scp.class"
import SCP096 from "./SCPs/096.svelte"

let scp096 = new SCP(
  SCP096,
  "SCP-096",
  "EUCLID",
)

let containment096 = new ContainmentStatus(
  scp096,
  [5, 5, 5],
  [1, 1],
  "Steel",
  true,
  "Nominal",
  100,
  "Closed",
  () => {
    let newRow = Math.round(Math.random())
    if (newRow === 1)
      newRow = Math.round(Math.random() * 2) - 1

    let newNode = Math.round(Math.random())
    if (newNode === 1)
      newNode = Math.round(Math.random() * 2) - 1

    let tempRow = get(containment096.getCurrentGridNode)[0]
    let tempNode = get(containment096.getCurrentGridNode)[1]

    if ((tempRow + newRow) <= 4 && (tempRow + newRow) >= 0)
      tempRow += newRow

    if ((tempNode + newNode) <= 4 && (tempNode + newNode) >= 0)
      tempNode += newNode

    containment096.getCurrentGridNode.update(n => n = [tempRow, tempNode])
  },
)

export let containmentStatus = writable<Map<string, ContainmentStatus>>(
  new Map<string, ContainmentStatus>()
    .set("SCP-096", containment096)
)
export let SCPs = writable<Map<string, SCP>>(
  new Map<string, SCP>()
    .set("SCP-096", scp096)
)

