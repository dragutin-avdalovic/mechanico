<template>
<div class="Modal1">
  <div class="Header"><h3>Create {{message}}</h3></div>
<div class="content"><AppForm></AppForm></div>
</div>
</template>

<script type="text/javascript">
import AppForm from '@/components/AppForm'

export default {
  data () {
    return {
      message: 'Project'
    }
  },
  components: {
    AppForm
  }
}
</script>

<style scoped>
.content{
display: flex;
justify-content: center;
}
.Modal1{
width: 50%;
background-color: #e9e9e9;
padding:70px;
}
h3{
text-align: left;
margin-left: 10px;
color: #0d80ca;
}
.Header{
margin-bottom: 30px;
}
div{
margin: 10px;

}
p{
color: blue;
}
@media only screen and (max-width: 600px) {
  .Modal1{
    width: 65%;
  }
  h3{
    margin: 0px;
  }
  div{
    margin: 0px;
  }
}
</style>
