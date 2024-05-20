import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({  
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
    },
    formTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
      margin: 10,
    },
    formInput: {
      borderColor: 'white',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 22,
      width: '80%',
      padding: 10,
      margin: 10,
    },
    formButton: {
      backgroundColor: '#EC4424',
      width: '80%',
      height: '8%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center', 
      
    },    
    subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    subButton: {
      padding: 10,
    },
    subTextButton: {
      color: '#EC4424',
      fontSize: 20,
    },

    //Apenas para NewUser.js
    topBarNewUser: {
      padding: 10,
      backgroundColor: 'black',
      width: '100%',
      justifyContent: 'space-between',
    },
    logoImageNewUser: {
      width: 150,
      height: 150,
      marginBottom: 20, 
      marginTop: 30     
    },

    logoImageReplacePass: {
      width: 150,
      height: 150,
      marginBottom: 40, 
      marginTop: 70     
    },

    //Apenas para Index.js
    logoImage: {
      width: 150,
      height: 150,
      marginBottom: 40, 
      marginTop: 130     
    },
    //Telas internas
    internalContainer: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: 'black'
    },
    topBar: {
      flexDirection: 'row-reverse',
      marginTop: 20,
      height: 100,
      padding: 7,
      backgroundColor: 'black',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    topBarButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700'
    },

    //Somente para Home.js
      scrollViewCatalog: {
        flex: 1,
        backgroundColor: '#000000',
      },
      containerCatalog: {
          flex: 1,
          backgroundColor: "black",
          alignItems: "flex-start",
      },
      
      categoryCatalog: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
          marginBottom: 15,
      },
      categoryTextCatalog: {
          fontSize: 20,
          fontWeight: "700",
          color: "#FFF",
      },
      movieTextCatalog: {
          color: "#fff",
          fontSize: 18,
          fontWeight: "700",
          padding: 15,
      },
      movieImageThumbnailCatalog: {
          width: "100%",
          alignItems: "center",
      },
      contentListCatalog: {
          paddingLeft: 18,
          paddingRight: 30,
      },
      evaImage: {
        width: 32,
        height: 32,
        marginRight: 250
      }


  });