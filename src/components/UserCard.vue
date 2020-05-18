<template>
  <div class="card">
    <img :src="user.avatar" />
    <h2>{{user.first_name}} {{user.last_name}}</h2>
    <p>{{user.email}}</p>
    <a href="#" @click="moreBtnHandler">More</a>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    moreBtnHandler() {
      this.$router.push(`/user/${this.user.id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  img {
    margin-top: 20px;
    max-width: 65%;
  }
  h2 {
    margin: 20px 0 15px;
  }
  a {
    width: 65%;
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
  }
}
</style>