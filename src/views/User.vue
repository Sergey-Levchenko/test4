<template>
  <div>
    <a href="#" @click="btnHandler">Back</a>
    <img :src="user.avatar" />
    <h2>{{user.first_name}} {{user.last_name}}</h2>
    <p>{{user.email}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: null
  }),
  methods: {
    btnHandler() {
      this.$router.push("/");
    }
  },
  created() {
    this.user = this.$store.getters["users/getUserById"](
      this.$route.params._id
    );
  }
};
</script>

<style lang="scss" scoped>
a {
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 152, 56);
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  margin-top: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>