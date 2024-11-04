var age = 20
age = 65
age = 105
age = 68
console.log(age)

var username = "Josh";
var password = "password";
var isMale = false;
var isLoggedIn = false;
var blog_posts = ["hello, how are you>", "I am well", "thank you", "this program is awesome!"];

console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(blog_posts);

if(isMale == true){
    console.log("I am a computer!");
} else {
    console.log("i am a phone");
}

while(age < 70){
    console.log("my age is" + age);
    age = age + 1;
}

function sayHello() {
    alert("Hello everyone");
}

function showAge() {
    var user_input = document.getElementById("user-input").value;

    document.getElementById("header-age").textContent = user_input;
}