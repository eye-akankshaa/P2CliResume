//Inquirer module strives to be an easily embeddable and beautiful command line interface for Node.js
/*It should ease the process of
a.providing error feedback
b.parsing input
c.validating answers
d.managing hirearchical prompts  
*/
let inquirer=require('inquirer')
const cp=require('child_process')

function displayDetails(){
    inquirer //Array Containing Question Object
    .prompt([
        {
        type:'list',//list ka kya kaam h is program m
        name:'Selection',
        choices:['About','Skills','Projects','Academics']
        }
    ])
    .then((choices)=>{
        if(choices.Selection=='About'){
            console.log(`A passionately curious Web Developer who just found out that making websites and seeing
                         the magic happen on Internet is what excites him the most. `)
            displayNext()
        }
        else if(choices.Selection=='Skills'){
            console.log('JavaScript','Node js','React','Golang','Java')
            displayNext()
        }
        else if(choices.Selection=='Projects'){
            cp.execSync('start chrome https://github.com/eye-akankshaa')
            displayNext()
        }
        else if(choices.Selection=='Academics'){
            cp.execSync('start chrome https://www.linkedin.com/in/akansha-khandelwal-1b92591aa')
            displayNext()
        }
     }) 
}
displayDetails()

function displayNext(){
    inquirer
    .prompt([
        {
            type:'list',
            name:'GoBack',
            choices:['back']
        }
    ])//Array containing question object
    .then((choices)=>{
        if(choices.Goback='back'){ //isme name chl raha pichle wale kyo nahi---key value ka use kyo ni--explain --TA doubt
            displayDetails()
        }
    })
}
