function stripeTokenHandler(token){
    console.log(token.id);
}

var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
var elements = stripe.elements();
var card = elements.create('card');
card.mount('#card-element');
stripe.createToken(card).then(function(result){
    if(result.error){
        console.log('error');
    }else{
        stripeTokenHandler(result.token);
    }
});