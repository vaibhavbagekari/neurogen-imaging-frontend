

export const setCookie = (key, value, expiresInDays = 7, isJson = false) => {
    let cookieValue = value;
  
    if (isJson) {
      cookieValue = JSON.stringify(value);
    }
  
    cookieValue = encodeURIComponent(cookieValue);
  
    const expires = new Date();
    expires.setTime(expires.getTime() + expiresInDays * 24 * 60 * 60 * 1000); 
  
    document.cookie = `${key}=${cookieValue}; expires=${expires.toUTCString()}; path=/; secure; samesite=strict`;
  };
  

export const getCookie = (key, isJson)=>{
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (let cookie of cookies){
        const [cookieKey, cookieValue] = cookie.split('=');
        if (cookieKey === key){
            let decodedValue = decodeURIComponent(cookieValue);
            if (isJson){
                try{
                    return JSON.parse(decodedValue);
                }catch(error){
                    console.error('Error parsing JSON from cookie:', error);
                    return null;
                }
            }
        }
    }
    return null;
}

export const removeCookie = (key)=>{
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export const getUser = ()=>{
    return getCookie('user', true)
}

export const setUser = (user)=>{
    setCookie('user', user, 30, true);
}