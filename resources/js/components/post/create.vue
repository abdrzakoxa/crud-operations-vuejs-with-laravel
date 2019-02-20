<template>
    <form @submit.prevent="onSubmit">
        <alert-success :form="form">created successfully!</alert-success>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" v-model="form.title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title">
            <has-error :form="form" field="title"></has-error>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <textarea class="form-control" v-model="form.body" name="body" id="exampleInputPassword1" placeholder="enter Body"></textarea>
            <has-error :form="form" field="body"></has-error>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
    export default {
        name: "create",
        data(){
          return {
              form: new Form({
                title: '',
                body: ''
              })
          }
        },
        methods: {
            /**
             * on submit form
             * */
            onSubmit(){
                this.form.post('/api/post').then((response) => {

                }).catch((err) => {

                })
            }
        }
    }
</script>

<style scoped>

</style>