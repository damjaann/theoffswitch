var invite_friends=[];
var app=app||{}
function tt(){
     var friends = invite_friends.toString();
   var pattern = /,/g;  
    window.plugins.socialsharing.shareViaTwitter('I hit the OFF switch button and get in to the real life @SWSofia @GSB2014 '+ friends.replace( pattern, " " ));
app.mobileApp.navigate('views/ads_page.html');
}
function add_to_friends_list(twitter){
    invite_friends.push(twitter);
}
function donne_with_adding(){
    app.mobileApp.navigate('#:back');
    $.each(invite_friends, function(key, value){
        $('.tagged_users_list').append('<div class="one_user">'+value+',</div>');
    });
}
function counter_func(){
    alert();
            var counetr=0;
            setInterval(function(){alert("Hello")}, 3000);
            setInterval(function(){
                counter++;
               $('.timer').html(counter);
            },1000);
}
