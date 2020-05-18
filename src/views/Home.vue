<template>
  <div>
    <div class="header">
      <input type="text" v-model="searchString" />
      <select v-model="selectNumber">
        <option value="2" selected>2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <div class="pagination">
        <button @click="prevPage" :disabled="pageNumber <= 0">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div
          :class="[`pagination__item pagination__item_${i+1}`, {active:pageNumber===i }]"
          v-for="(item, i) in pageCount"
          :key="`pagination${i}`"
          @click="pageNumber=i"
        >{{i+1}}</div>
        <button @click="nextPage" :disabled="pageNumber >= pageCount-1">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="card-wrapper">
      <user-card v-for="(user) in paginatedData" :key="user.email" :user="user"></user-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "@/components/UserCard";
export default {
  data: () => ({
    pageNumber: 0,
    selectNumber: "2",
    searchString: ""
  }),
  components: { UserCard },
  computed: {
    ...mapGetters({ users: "users/getUsers" }),
    pageCount() {
      let l = this.filteredUsers.length,
        s = this.selectNumber;
      return Math.ceil(l / s);
    },
    filteredUsers() {
      return this.users.filter(user => {
        if (
          user.first_name
            .toLowerCase()
            .indexOf(this.searchString.toLowerCase()) !== -1 ||
          user.last_name
            .toLowerCase()
            .indexOf(this.searchString.toLowerCase()) !== -1
        )
          return user;
      });
    },
    paginatedData() {
      const start = this.pageNumber * this.selectNumber,
        end = start + +this.selectNumber;
      return this.filteredUsers.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  watch: {
    selectNumber() {
      this.pageNumber = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;
}
.header {
  display: flex;
  padding: 20px;
}
.pagination {
  display: flex;
  margin-left: 20px;
  div,
  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: rgb(255, 152, 56);
    color: #ffffff;
    margin: 0 5px;
    border-radius: 5px;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
  }
  button:active {
    outline: none;
  }
  button:disabled {
    background-color: rgb(143, 108, 75);
  }
  &__item.active {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 152, 56);
    color: rgb(255, 152, 56);
  }
}
</style>