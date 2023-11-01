<script lang="ts">
  export let percentage: number;

  const color = () => {
    if (percentage > 80) {
      return 'green';
    }
    if (percentage > 60) {
      return 'orange';
    }
    if (percentage > 40) {
      return 'yellow';
    }
    return 'red';
  };
</script>

<div class="flex-wrapper">
  <svg viewBox="0 0 36 36" class={`circular-chart ${color()}`}>
    <path
      class="circle-bg"
      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path
      class="circle"
      stroke-dasharray={`${percentage}, 100`}
      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text x="26" y="17" class="percentage-symbol"> % </text>
    <text x="16" y="22.5" class="percentage">
      {percentage}
    </text>
  </svg>
</div>

<style lang="scss">
  .flex-wrapper {
    display: block;
    position: absolute;
    top: -26px;
  }

  .circular-chart {
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #081c22;
  }

  .circle-bg {
    fill: none;
    stroke-width: 3.8;
    opacity: 0.3;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart {
    &.green {
      stroke: #4cc790;
    }
    &.blue {
      stroke: #3c9ee5;
    }
    &.orange {
      stroke: #ff9f00;
    }
    &.yellow {
      stroke: yellow;
    }
    &.red {
      stroke: red;
    }
  }

  .percentage,
  .percentage-symbol {
    fill: #fff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 0.8em;
    text-anchor: middle;
    stroke: none;
  }
  .percentage-symbol {
    font-size: 0.3em;
  }
</style>
