<template>
  <div class="tooltip-container">
    <img :src="TooltipIcon" alt="tooltip icon" />
    <div class="widget-tooltip">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TooltipIcon from "@assets/Tooltip.svg";
</script>

<style lang="postcss" scoped>
.tooltip-container {
  position: relative;
  display: inline-block;

  .widget-tooltip {
    position: absolute;
    display: flex;
    top: 0;
    left: 50%;
    flex-direction: column;
    gap: 0.75rem;
    border-radius: 0.25rem;
    max-height: 15rem;
    width: max-content;
    max-width: 15.5rem;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: default;
    background-color: var(--bg-dark-white);
    box-shadow: var(--tooltip-shadow);
    opacity: 0;
    visibility: hidden;
    transition: all ease-in-out 0.25s;
    /* Center tooltip to icon */
    transform: translate(-50%, 1rem);
    z-index: var(--z-index-tooltip);
    & * {
      font-size: 0.875rem;
      text-align: center;
      line-height: 1.2;
      z-index: var(--z-index-tooltip);
    }
  }

  &:hover {
    & .widget-tooltip {
      opacity: 1;
      visibility: visible;
      transition: all ease-in-out 0.25s;
      transition-delay: 0.3s;
    }
  }
}
</style>
