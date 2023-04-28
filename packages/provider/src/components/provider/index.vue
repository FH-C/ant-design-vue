<template>
  <div>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { provide } from "vue";

export interface ProviderProps {
  mode?: "edit" | "read";
}
const props = withDefaults(defineProps<ProviderProps>(), {
  mode: undefined,
});

provide("mode", props.mode);
</script>
