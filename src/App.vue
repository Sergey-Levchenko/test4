<template>
  <div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("users/fetchUsers");
  }
};
</script>
