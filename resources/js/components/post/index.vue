<template>


    <div class="card">
        <div class="card-header">
            Posts
        </div>
        <div class="card-body p-0">
            <table v-if="posts.length > 0" class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts">
                        <th scope="row">{{ post.id }}</th>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td>
                            <router-link :to="'/post/edit/' + post.id" class="text-secondary">edit</router-link>
                            <a href="#" @click="onDelete(post.id,post.title)" class="text-danger">delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="text-center p-5" v-else>
                there is no post!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                posts: {}
            }
        },
        methods: {
            getPosts() {
                axios.get('/api/post').then((res) => {
                    this.posts = res.data.data
                })
            },
            onDelete(id,title) {
                if (confirm('do you want delete post ' + title)) {
                    axios.delete('/api/post/'+id).then((res) => {
                        this.getPosts();
                    })
                    .catch(err => {
                        alert(err.response.data.message)
                    })
                }
            }
        },
        created() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>