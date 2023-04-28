<template>
  <Provider mode="edit">
    <Field
      valueType="text"
      text="234"
      :field-props="{
        placeholder: '123',
      }"
    />
  </Provider>
</template>
<script setup lang="tsx">
// import { ref } from 'vue';
import { Provider, Field } from "@elephant/pro-components";
</script>
