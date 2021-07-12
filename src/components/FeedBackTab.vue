<template>
    <div class="container">
        <b-card-group deck class="Fcard offset-lg-5 col-md-12 col-lg-8">
                                <b-card bg-variant="default" header="Leave your FeedBack here" class="text-left text-dark ">
                                    <form @submit.prevent="addFeedBack" class="text-left">
                                        <div class="row">
                                            <div class="col-lg-4 pt-3">Email:</div> 
                                            <div class="col-lg-4">
                                                <b-form-input v-model="email" name="email" trim  type="email" id="email" placeholder="example@example.com" required ></b-form-input>
                                            </div>
                                       
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-lg-4 pt-3">Rating:</div> 
                                            <div class="col-lg-4">
                                                <b-form-rating id="rating-md-no-border" class="Frating" trim type="rating" no-border  required v-model="exportRating"></b-form-rating>
                                            </div>
                                       
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-lg-4 pt-3">Comments:</div> 
                                            <div class="col-lg-4">
                                                <b-form-textarea type="comment" id="comment" class="Fcomment" placeholder="Your Comment" required ></b-form-textarea>
                                            </div>
                                       
                                        </div>
                                                 <div>
                                                   <b-button class="mt-4" type="submit">Submit</b-button>
                                                 </div></form>
                                                 </b-card>
                                             </b-card-group>
    </div>
</template>

<style>
.container{
    align-content: center;
    margin-right: 0px;
}
.Frating{
    width: 350px;
}
.Fcomment{
    width: 350px;
}
.Fcard{
    align-content: center;
}
</style>