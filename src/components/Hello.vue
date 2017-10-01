<template>
    <div class="hello">
        <input v-model="code" type="text" name="inputCode"
                style="text-transform: uppercase; text-align: center;" required>

        <select v-model="mSelected" required>
            <option v-for="member in members" v-if="member.gender == 'M'" :value="member._id" :key="member._id">{{ member.name }}</option>
        </select>

        <select v-model="fSelected" required>
            <option v-for="member in members" v-if="member.gender == 'F'" :value="member._id" :key="member._id">{{ member.name }}</option>
        </select>

        <button @click="vote">Vote</button>
        <br>
        <h1 v-text="noti"></h1>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            members: null,
            code: '',
            mSelected: null,
            fSelected: null,
            noti: 'Input the code, choose candidate and click Vote'
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.$http.get('http://127.0.0.1:3103/')
                .then(response => {
                    this.members = response.data
                }).catch(err => console.log(err))
        },
        vote(event) {
            const voteData = {
                code: this.code.toUpperCase(),
                f_id: this.fSelected,
                m_id: this.mSelected
            }

            this.$http.put('http://127.0.0.1:3103/', voteData)
                .then(response => {
                    switch(response.status) {
                        case 204:
                            this.noti = "Your CODE doesn't exist"
                            break;
                        case 200:
                            this.noti = "Vote successfully"
                            break;
                        case 304:
                            this.noti = "You have made a vote"
                            break;
                    }
                }).catch(err => console.log(err))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
