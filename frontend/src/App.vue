<template>
  <div>

    <img alt="logo" src="./assets/Immobilier.jpg">
    <h1>L'agence Immobiliere</h1>

    <form  @submit.prevent="handSubmit"  class="form-group m-3 container"> <!-- formulaire -->
         
         <div  class="row justify-content-md-center"> 
            <div class="col-md-6 ">
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
                              id="InputEmail"  
                              v-model="InputEmail" 
                              aria-describedby="emailHelp" 
                              placeholder="Entrez  l'email du client" 
                              required>
                </div>

          
            </div>

              <div class="col-md-6 mt-5 justify-content-end">
                    <div class="form-group mt-5 d-flex ">

                          <label for="date_start">date début de visite : </label>

                          <input type="text"
                          placeholder="03-31-2021"
                          id="date_start" 
                          name="date_start"
                          class="ml-2"
                          v-model="date_start"
                          required>

                  </div> 
                

                  <div class="form-group mt-5 d-flex ">

                          <label for="timedate">date de fin de visite : </label>

                          <input type="text" 
                            placeholder="03-31-2021"
                            id="dtime" 
                            name="dtime"
                            class="ml-2"
                            v-model="date_end"
                            required>

                  </div> 
            </div>
         </div>
          <button type="submit" 
                  class="btn btn-secondary mt-3"
                  >Envoyer
          </button>
    </form> 
    
  <form  @submit.prevent="handsup"  class="form-group m-3 ">

        <div class="form-group m-5">
                      <label for="Emailclient">Supprimer un client</label>
                      <input  name="Emailclient" 
                              type="email" 
                              class="form-control" 
                              id="Emailclient"  
                              v-model="Emailclient" 
                              aria-describedby="emailHelp" 
                              placeholder="Entrez  l'email du client" 
                              required>
          </div>

      <button @click="deleteSubmit()"
                  class="btn btn-secondary mt-3"
                  >Supprimer l'acquéreur     <i class="fas fa-trash"></i>
      </button>
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
       InputEmail:"",
       date_end:"",
       ccial_id:"",
       date_start:"",
       Emailclient:""
      
      }
    },
          methods: {
          async   handSubmit(){               //methode pour envoyer l'inscription sur le serveur
            await axios.post('http://localhost:3000/api/visite', { 
                'InEmail':this.InEmail,
                'InputEmail': this.InputEmail,
                'date_start': this.date_start,
                'date_end':this.date_end
              })
                .then(() => {
                  alert("Votre compte a bien été crée !")
                  this.$router.push('/');
                })
                .catch(() => {
                  
                  alert("Votre compte n'a pu être créer car le pseudo ou l'email est déjà utilisé")
                  
                })
              },
            
            async deleteSubmit(){
              await axios.delete(`http://localhost:3000/api/visite?email=${this.Emailclient}`)
              .then(() => {
                this.$router.push('/');
              })
              .catch((error) => {
                  const erreur = error.res.data
                  alert(erreur.error)
                  });
                
             
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
