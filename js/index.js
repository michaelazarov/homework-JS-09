//hw-09-01----------------------------
// Завершите код функции typeMessage так, чтобы на 
// страницу выводился один символ в секунду
// function typeMessage ( message, velocity ) {
//     var container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     ...
// }
// typeMessage ( `Welcome to the hell`, 1 )
//------------------------------------
function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
//     var result = ''
//     message.split('').forEach(function(item, i) {
//         setTimeout( () => container.innerText = result += item, 1000 * i * velocity )  
//         })
   message.split('').forEach((item, i) => 
        setTimeout( 
            () => container.innerText = result += item, 1000 * i * velocity ), result = ''  
        )
}
typeMessage ( `Welcome to the hell`, 0.3 )


//hw-09-02----------------------------
// Напилите код методов setUserPresent, showPresent и showAbsent
// var users = (
//     function ( list ) {
//         var users = []
//         for ( var user of list )
//             users.push ({
//                 name: user,
//                 present: false
//             })
//         return {
//             setUserPresent ( userName, present ) {
//                 ...
//             },
//             showPresent () {
//                 ...
//             },
//             showAbsent () {
//                 ...
//             }
//         }
//     }
// )( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )
// users.showAbsent()
// ...
//------------------------------------

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })
        return {
            setUserPresent ( userName, present ) {
                users.find(user => user.name === userName).present = 
//тут 2 варианта. 
//1) Если мы отмечаем только присутствие, то достаточно 
// наличие чего угодно "не пустого":
                present ? true : false 

//2) Если планируется реагировать н ашаблонные строки, то можно 
//проверять на соответствие допустимым значениям
//                 present === "присутствовал" || present === "+" || present === true   
//                     ? true 
//                         : false
            },
            showPresent () {
                users.filter(user => user.present).forEach(
                    user => console.log(user.name)
                )  
            },
            showAbsent () {
                users.filter(user => !user.present).forEach(
                    user => console.log(user.name)
                )  
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
console.log('-----------')
users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )
users.showPresent()



//hw-09-03----------------------------
// Допилите код функции changeClass, которая парсит все 
// стили страницы в поисках заданного класса, а затем 
// меняет атрибуты стиля этого класса
// let changeClass = ( classname, styleString ) => (
//    ...
// ).length > 0 ? console.log ( "found" ) :
//     document.head.appendChild (
//         document.createElement ( "style" )
//     ).textContent = `.${classname} {${styleString}}`
// После вызова функции:
// changeClass (
//   "second-level-menu",
//   "background-color: red!important;"
// )
// в консоли страницы, где есть элементы с классом 
// second-level-menu, у всех элементов этого класса 
// цвет фона должен измениться на красный
//------------------------------------
function findCange(classname, styleString) {
    arrReturn = [] 
    styleSheets = document.styleSheets
    Object.keys(styleSheets).forEach(indexStyleSheet => {
        cssRules = styleSheets[indexStyleSheet].cssRules
        Object.keys(cssRules).forEach(indexCssRule => {
            if (!!cssRules[indexCssRule].selectorText){
                if(cssRules[indexCssRule].selectorText.indexOf(`.${classname}`) !== -1){
                    if (cssRules[indexCssRule].style !== undefined){
                        cssRules[indexCssRule].style.setProperty('background-color','red','important')
                        arrReturn.push(cssRules[indexCssRule])
                     }
                }
             }
        })
    })  
    return arrReturn
}

let changeClass = ( classname, styleString ) => (
   findCange(classname, styleString)
).length > 0 ? console.log ( "found" ) :
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ("second-level-menu", "background-color: red!important;")


