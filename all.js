// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCobNRRYfL0VrA1-mhC4-KtLqv1SVaaYq4",
  authDomain: "testproject-4c864.firebaseapp.com",
  databaseURL: "https://testproject-4c864.firebaseio.com",
  projectId: "testproject-4c864",
  storageBucket: "testproject-4c864.appspot.com",
  messagingSenderId: "719587665505",
  appId: "1:719587665505:web:e16cdcd3848c424c7f6c20",
  measurementId: "G-QNVB8Q3W96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("user_div").style.display="block";
        document.getElementById("login_div").style.display="none";

        var user = firebase.auth().currentUser;
        if(user != null){
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        }

      } else {
        // No user is signed in.
        document.getElementById("user_div").style.display="none";
        document.getElementById("login_div").style.display="block";

      }
  });

function login(){

    var email=document.getElementById("email_field").value;
    var password=document.getElementById("password_field").value;
    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : "+ errorMessage);
        // ...
      });


}
function Logout()
{
    firebase.auth().signOut();
}
