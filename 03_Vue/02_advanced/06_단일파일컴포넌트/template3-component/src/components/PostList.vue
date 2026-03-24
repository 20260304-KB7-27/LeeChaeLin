<template>
  <ul>
    <PostItem
      v-for="post in posts"
      :key="post.no"
      :post="post"
      :selectNo="selectNo"
      :editNo="editNo"
      @open="$emit('open', $event)"
      @delete="$emit('delete', $event)"
      @startEdit="$emit('startEdit', $event)"
      @saveEdit="$emit('saveEdit', $event)"
    ></PostItem>
  </ul>
</template>

<script setup>
import PostItem from './PostItem.vue';

defineProps(['posts', 'selectNo', 'editNo']);
defineEmits(['open', 'delete', 'startEdit', 'saveEdit']);
</script>

<style lang="scss" scoped></style>
