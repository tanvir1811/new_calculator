<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
    <link rel="stylesheet" type="text/css" href="C:\Users\admin\OneDrive\Desktop\calculator\calculator.css">



</head>
<body>
    <section id="in">
        <section id="pp">
            <h2>Calculator</h2>
        </section>
        <section id="lk">
            <h3>Happy Compute &#x1F60A; </h3>
        </section>
        <section id="ll">
          <input type="text" id="display">
            </section>
            <br/>
         
        <section id="kk">
           <section >
            <button type="button" id ="b5"  onclick="cal()" ">
              <h1>Enter</h1>
            </button>
            <input type="button" value="1" onclick="display('1')"  >
            <input type="button" value="2" onclick="display('2')">
            <input type="button" value="3" onclick="display('3')">

        </section>
        <br/>
         <section> 
          <input type="button" value="4" onclick="display('4')" >
            <input type="button" value="5" onclick="display('5')">
            <input type="button" value="6"  onclick="display('6')">
            <input type="button" value="7" onclick="display('7')">
         </section>
          <br/>
         <section>
          <input type="button" value="8" onclick="display('8')" >
            <input type="button" value="9" onclick="display('9')">
            <input type="button" value="0" onclick="display('0')">
            <input type="button" value="%" onclick="display('%')">
            <br/>
          
          <button type="button" id="b13"  onclick="display('+')">
            <h1>+</h1>
          </button>
        
        <button type="button" id="b13"  onclick="display('-')">
          <h1>-</h1>
        </button>
              
              <button type="button" id="b13"  onclick="display('*')">
                <h1>*</h1>
              </button>
              <button type="button" id="b14"  onclick="display('/')">
                <h1>/</h1>
              </button>
              <br/>
              <button type="button" id="b13"  onclick="display('(')">
                <h1>(</h1>
              </button>
                    
                    <button type="button" id="b13"  onclick="display(')')">
                      <h1>)</h1>
                    </button>
                    <button type="button" id="b14"  onclick="display('.')">
                      <h1>.</h1>
                    </button>
              <button type="button" id="b14"  onclick="cleardis(' ')" ondblclick="call(' ')">
                <h1>clear</h1>
              </button>
              
          </section>
        </section>
        
          
      
  
    </section>
     <script src="Calculator.js">

     </script>
</body>

</html>
