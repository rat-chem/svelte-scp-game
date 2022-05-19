export default class SCP {
  private itemNumber: string | undefined
  private objectClass: string | undefined
  private component: Function

  constructor(
    component: Function,
    itemNumber?: string,
    objectClass?: string,
  ) {
    this.component = component
    this.itemNumber = itemNumber
    this.objectClass = objectClass
  }

  get getItemNumber() {
    return this.itemNumber
  }

  set setItemNumber(itemNumber: string) {
    this.itemNumber = itemNumber
  }
  
  get getObjectClass() {
    return this.objectClass
  }

  set setObjectClass(objectClass: string) {
    this.objectClass = objectClass
  }

  get getComponent(): Function {
    return this.component
  }

  set setComponent(component: Function) {
    this.component = component
  }
}

