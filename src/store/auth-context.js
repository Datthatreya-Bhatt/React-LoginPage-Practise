import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLoggout: ()=>{},
    onLoggin: (email, password)=>{}
});

export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn'); 
  
      if(storedUserLoggedInInformation === '1'){
          setIsLoggedIn(true);
      }
  
    }, [])
  

    const logoutHandler = ()=>{
	    localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = ()=>{
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };
    
    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLoggout: logoutHandler, onLoggin: loginHandler}}> {props.children} </AuthContext.Provider>
    );
};


export default AuthContext;

