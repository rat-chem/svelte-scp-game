<script lang="ts">
  import { eventLogFlag } from '../../stores'

  interface EventPrintWithDelay {
    date: string,
    delay: number,
    event: string,
  }

	$: innerHeight = 0 
  $: EVENT_LOG_MAX = Math.round(innerHeight / 5)

  export let eventsDatabank: EventPrintWithDelay[] = []

  let eventQueue: any[] = []
  let events: string[] = [""]
  let eventsIndex: number = 0

  function stylizedDelayPrint(delay: number): Function {
    return function(event: string): void {
      let eventIndex: number = 0
      let intervalId = setInterval(function() {
        if (eventQueue[0] === intervalId) {
          if (eventIndex < event.length) {
            if (events[eventsIndex] === undefined)
              events[eventsIndex] = ""
            events[eventsIndex] += event[eventIndex]
            eventIndex++
          } else {
            eventsIndex += 1
            let intervalIdToClear = eventQueue.shift()
            clearInterval(intervalIdToClear)
          }
        }
      }, delay)
      eventQueue.push(intervalId)
    }
  }

  eventLogFlag.subscribe(function(value: number) {
    eventsDatabank = [...eventsDatabank,
      {date: getDate(), delay: 25, event: `CODE EPSILON ${value}`}
    ]
  })
  
  $: if (events.length > EVENT_LOG_MAX) {
    eventsIndex -= 1
    events.shift()
  }

  $: {
    eventsDatabank.forEach(function(event: EventPrintWithDelay) {
      stylizedDelayPrint(event.delay)(event.date + ' - ' + event.event)
      eventsDatabank.shift()
    })
  }

  function getDate() {
    let currentDate = new Date()
    return currentDate.getDate() + "/"
      + (currentDate.getMonth()+1)  + "/" 
      + currentDate.getFullYear() + " "  
      + currentDate.getHours() + ":"  
      + currentDate.getMinutes() + ":" 
      + currentDate.getSeconds();
  }
</script>

<h1>
  EVENT LOG
</h1>
<div
  id="event-log-container"
  class="event-log-container">
  {#each [...events].reverse() as event, key}
    <div id={key.toString()}>
      {#each event.split('\n') as splitEvent}
        <div class="event">
          {splitEvent}
        </div>
      {/each}
    </div>
  {/each}
</div>
<svelte:window bind:innerHeight />

<style>
  .event {
    display: flex;
    flex-wrap: wrap;
    word-wrap: break-word;
    word-break: break-all;
    /*border: solid black 1px;*/
  }

  .event-log-container {
  }
</style>

