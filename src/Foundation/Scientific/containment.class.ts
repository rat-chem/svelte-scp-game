import type SCP from "./scp.class"
import { writable, get } from "svelte/store"

export default class ContainmentStatus {
  private SCP: SCP
  private dimensionUnits: "Meters" = "Meters"
  private containmentDimensions: number[]
  private containmentNodeDimensions: number[]
  private containmentMaterial: string
  private airtightStatus: boolean
  private containmentCondition: "Nominal" | "Maintenence Needed" | "Breached"
  private structuralIntegrity: number
  private entranceStatus: "Open" | "Closed" | "Breached"
  private currentGridNode: ReturnType<typeof writable> = writable([2, 2])
  private gridNodeBehavior: ReturnType<typeof setInterval>

  constructor(
    SCP: SCP,
    containmentDimensions: number[],
    containmentNodeDimensions: number[],
    containmentMaterial: string,
    airtightStatus: boolean,
    containmentCondition: "Nominal" | "Maintenence Needed" | "Breached",
    structuralIntegrity: number,
    entranceStatus: "Open" | "Closed" | "Breached",
    gridNodeBehavior: Function,
  ) {
    this.SCP = SCP
    this.containmentDimensions = containmentDimensions
    this.containmentNodeDimensions = containmentNodeDimensions
    this.containmentMaterial = containmentMaterial
    this.airtightStatus = airtightStatus
    this.containmentCondition = containmentCondition
    this.structuralIntegrity = structuralIntegrity
    this.entranceStatus = entranceStatus
    this.gridNodeBehavior = setInterval(
      gridNodeBehavior.bind(this),
      1000
    )
  }

  get getSCP(): SCP {
    return this.SCP
  }

  set setSCP(SCP: SCP) {
    this.SCP = SCP
  }

  get getDimensionUnits() {
    return this.dimensionUnits
  }

  get getContainmentDimensions() {
    return this.containmentDimensions
  }

  set setContainmentDimensions(containmentDimensions: number[]) {
    this.containmentDimensions = containmentDimensions
  }

  get getContainmentNodeDimensions() {
    return this.containmentNodeDimensions
  }

  set setContainmentNodeDimensions(containmentNodeDimensions: number[]) {
    this.containmentNodeDimensions = containmentNodeDimensions
  }

  get getContainmentMaterial() {
    return this.containmentMaterial
  }

  set setContainmentMaterial(containmentMaterial: string) {
    this.containmentMaterial = containmentMaterial
  }

  get getAirtightStatus() {
    return this.airtightStatus
  }

  set setAirtightStatus(airtightStatus: boolean) {
    this.airtightStatus = airtightStatus
  }

  get getContainmentCondition() {
    return this.containmentCondition
  }

  set setCondition(containmentCondition: "Nominal" | "Maintenence Needed" | "Breached") {
    this.containmentCondition = containmentCondition
  }

  get getStructuralIntegrity() {
    return this.structuralIntegrity
  }

  set setStructuralIntegrity(structuralIntegrity: number) {
    this.structuralIntegrity = structuralIntegrity
  }

  get getEntranceStatus() {
    return this.entranceStatus
  }

  set setEntranceStatus(entranceStatus: "Open" | "Closed" | "Breached") {
    this.entranceStatus = entranceStatus
  }

  get getCurrentGridNode() {
    return this.currentGridNode
  }

  get getGridNodeBehavior() {
    return this.gridNodeBehavior
  }
}

