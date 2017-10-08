function equals(c,n){return OPS[calc.operator](Number(c),Number(n))}function updater(c){calc[calc.current]||"."!==c||(c="0."),calc[calc.current]+=c,screenVal(calc[calc.current])}function negator(c){return"0"!==c&&""!==c&&(c=-1===c.indexOf("-")?"-"+c:c.replace("-",""),screenVal(c)),c}function screenVal(c){c=lengthCheck(c),$(".screen").text(c)}function lengthCheck(c){return c.length>3&&(c=commas(c)),c}function clear(){calc.valB?calc.valB="":reset(""),screenVal("0")}function commas(c){var n=/(\d)(?=(\d{3})+$)/g,e=c.split(".");return e[0]=e[0].replace(n,"$1,"),e.join(".")}function percent(c){calc[calc.current]=calc.valB?calc.valA/100*c:c/100,screenVal(calc[calc.current])}function reset(c){calc.valA=c,calc.valB="",calc.current="valA"}const OPS={plus:function(c,n){return c+n},minus:function(c,n){return c-n},multiply:function(c,n){return c*n},divide:function(c,n){return c/n}};var calc={operator:"",current:"valA",valA:"",valB:""};$(".basic-ops").click(function(c){calc.operator=c.target.id,calc.current="valB"}),$(".num-pad").click(function(c){updater(c.target.innerText)}),$(".negate-btn").click(function(){calc[calc.current]=negator(String(calc[calc.current]))}),$(".percent-btn").click(function(){percent(calc[calc.current])}),$(".decimal-btn").click(function(){-1===calc[calc.current].indexOf(".")&&updater(".")}),$(".ac-btn").click(function(){clear()}),$(".equals-btn").click(function(){var c=equals(calc.valA,calc.valB);screenVal(String(c)),reset(c)});