let browser="Safarid";
switch(browser){
    case "Edge":
    case "Chrome":
    case "Firefox":
        console.log("You are using a chromium based browser");
        break;
        case "Safari":
        console.log("You are using Safari");
        break;  
        case "Opera":
        console.log("You are using Opera");
        break;
        default:
        console.log("You are using an unsupported browser");
}