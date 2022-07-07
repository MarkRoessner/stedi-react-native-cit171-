import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const sendText = async (phoneNumber) =>{
  console.log('PhoneNumber: ',phoneNumber);
  const tokenReponse = await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    }
  });
  const tokenReponseText = await tokenReponse.text();//converts promise into string using await
  console.log("Login Reponse: ",tokenReponseText);

}


const getToken = async ({phoneNumber, oneTimePassword, setUserLoggedIn}) =>{
  const tokenReponse=await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    },
    body:JSON.stringify({phoneNumber, oneTimePassword})
  });

  const reponseCode = tokenReponse.status;//200 means logged in right
  if(reponseCode==200){
    setUserLoggedIn(true);
  }
const tokenResponseString = await tokenReponse.text();
console.log("Reponse Status Code", reponseCode)
const emailAddress = getEmailToken({tokenResponseString})
}

const getEmailToken = async ({tokenReponse}) =>{
  const emailReponse = await fetch('https://dev.stedi.me/validate/'+tokenReponse,{
  method: 'GET',
  headers:{
    'content-type':'application/text'
  },
});
const emailReponseString = await emailReponse.text();
return emailReponseString;
}

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholderTextColor='#4251f5'
        placeholder="801-555-1212"
      />
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{sendText(phoneNumber)}}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor='#4251f5'
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={()=>getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn})}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView:{
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default Login;