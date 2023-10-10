a = confirm("Are you ready to view my Laptop Requirements?")

if(a){
    document.write("This is my Laptop HP Pavilion U Series")
    document.write('OS Edition: Windows 11 Home Single Language')
    document.write('Processor: 12th Gen Intel(R) Core(TM) i5-1235U   1.30 GHz')
}
else{
    b = confirm('then would you like to know about my phone?')
}

if(b){
    document.write('This page is about my phone Narzo 50')
}
else{
    c = confirm('WOULD YOU LIKE TO KNOW ABOUT MY SHOE ATLEAST??? 😤')
}
if(c){
    document.write("This is a normal Kitkat shoe worth rupees 300")
}
else{
    d = prompt("Enter your name")
}

if(d){
    document.write(d + " you are a chutiya")
    alert("Going Offline")
}