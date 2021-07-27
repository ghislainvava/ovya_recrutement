<template>
  <div>

    <img alt="logo" src="./assets/Immobilier.jpg">
    <h1>L'agence Immobiliere</h1>

    <form  @submit.prevent="handSubmit"  class="form-group m-3 "> <!-- formulaire -->
         
         

          <div class="form-group m-5">
                <label for="InEmail"></label>
                <input  name="InEmail" 
                        type="email" 
                        class="form-control" 
                        id="InEmail"  
                        v-model="InEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="Entrez  votre email" 
                        required>
          </div>

          <div class="form-group m-5">
                <label for="InputEmail"></label>
                <input  name="InputEmail" 
                        type="email" 
                        class="form-control" 
                        id="InEmail"  
                        v-model="InEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="Entrez  l'email du client" 
                        required>
          </div>

           <div class="form-group m-5">
              <label for="dossier_id"></label>
                <input name="dossier_id" 
                       type="text" 
                       class="form-control" 
                       id="dossier_id" 
                       v-model="Dossier_id" 
                       placeholder="Entrez le numéro de dossier"  
                       required>
          </div>

           


           <div class="form-group">

            <label for="date_start">date de début de visite: </label>

          <input type="text" id="date_start" name="date_start"
          class="ml-2"
                v-model="date_start">

         </div> 
       

         <div class="form-group">

            <label for="timedate">date de fin de visite : </label>

          <input type="text" id="dtime" name="dtime"
            class="ml-2"
                v-model="date_end">

         </div> 
         
          <button type="submit" 
                  class="btn btn-secondary mt-3"
                  >Envoyer</button>
    </form> 
    
  </div>
  
  
</template>


<script>
import axios from 'axios'  //client http


export default {
  name: 'App',
  data () {
      return {
       InEmail:"",
       InName:"",
       date_end:"",
       ccial_id:"",
       date_start:"",
      
      }
    },
          methods: {
          async   handSubmit(){               //methode pour envoyer l'inscription sur le serveur
            await axios.post('http://localhost:3000/api/visite', { 
               // 'InEmail' : this.InEmail,
               // 'InName' : this.IName,
                'date_start': this.date_start,
                'ccial_id': this.ccial_id,
                'date_end':this.date_end
              })
                .then(() => {
                  alert("Votre compte a bien été crée !")
                  this.$router.push('/');
                })
                .catch(() => {
                  
                  alert("Votre compte n'a pu être créer car le pseudo ou l'email est déjà utilisé")
                  
                })
              }
        },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
