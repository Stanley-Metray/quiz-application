
let topMenuToggle = true;
let flag1 = true;

window.addEventListener('resize', () => {
    if (window.screen.width >= 825) {
        document.getElementById('topMenuItems').style.display = "flex";
        document.getElementById('topMenu').classList.remove('res');
        topMenuToggle = true;
        flag1 = false;
    }

    if (window.innerWidth <= 825 && flag1 == false) {
        document.getElementById('topMenuItems').style.display = "none";
        topMenuToggle = true;
        flag1 = true;
    }
});

document.getElementById('toggleTopMenu').addEventListener('click', () => {
    document.getElementById('topMenu').classList.toggle('res');
    if (topMenuToggle == true) {
        document.getElementById('topMenuItems').style.display = "flex";
        topMenuToggle = false;
    }
    else {
        document.getElementById('topMenuItems').style.display = "none";
        topMenuToggle = true;
    }
});


function checkAnswer(event)
{
    if(event.target.parentElement.classList.contains("true"))
    {
        event.target.classList.toggle("fa-square");
        event.target.classList.toggle("fa-check-square");
        event.target.parentElement.classList.toggle("black");
        event.target.parentElement.getElementsByTagName('span')[0].classList.toggle("correctAnswer");
        
        let re = event.target.parentElement.parentElement.getElementsByTagName('i');
        for(let i=0; i<re.length; i++)
        {
            re[i].removeAttribute('onclick');
        }
   }
    else
    {
        event.target.classList.toggle("fa-square");
        event.target.classList.toggle("fa-check-square");
        event.target.parentElement.classList.toggle("black");
        event.target.parentElement.getElementsByTagName('span')[0].classList.toggle("wrongAnswer");
        
        let re = event.target.parentElement.parentElement.getElementsByTagName('i');
        for(let i=0; i<re.length; i++)
        {
            re[i].removeAttribute('onclick');
        }
    }
}

let btnCheckAnswer = document.getElementsByClassName("btn-check-answer");

for(i=0; i<btnCheckAnswer.length; i++)
{
    btnCheckAnswer[i].addEventListener('click', function(event){
        let li = event.target.parentElement.getElementsByTagName("li");
        event.target.parentElement.getElementsByClassName("answer")[0].style.display = "block";
        console.log(li[0]);
        for(let j=0; j<li.length; j++)
        {
            if(li[j].classList.contains("true"))
            {
                li[j].getElementsByTagName('i')[0].classList.toggle("fa-square");
                li[j].getElementsByTagName('i')[0].classList.toggle("fa-check-square");
                li[j].getElementsByTagName('i')[0].parentElement.classList.toggle("black");
                li[j].getElementsByTagName('i')[0].parentElement.getElementsByTagName('span')[0].classList.toggle("correctAnswer");
                break;
            }
        }
    });
}

// Using Jquery To Add Content







// function indexOfSubString(str, sub)
// {
//     let i;
//     for(i=0; i<str.length; i++)
//     {
//         let k=i;
//         for(j=0; j<sub.length; j++)
//         {
//             if(str[k]==sub[j])
//                 k++;
//             else
//                 break;
//         }

//         if(j==sub.length)
//         {
//             index = i;
//             flag = true;
//             break;
//         }
//     }

//     if(flag)
//         return i;
//     else
//         return -1;
// }

// let str = "Hello my name is Stanley Metray";
// let sub = "name";
// let index, flag = false;

// let i = indexOfSubString(str, sub);

// if(i!=-1)
//     console.log("Index of sub string is ",i);
// else
//     console.log("Sub-string is not present");




// let str1 = "hello my dear";
// let str2 = "h";

// const removeChars = (str1, str2)=>{
//     str1 = str1.split("");
//     str2 = str2.split("");
//     for(let i=0; i<str2.length; i++)
//     {
//         for(let j=0; j<str1.length; j++)
//         {
//             if(str2[i]==str1[j])
//                 str1[j]=null;
//         }
//     }

//     return str1.join("");
// }

// console.log(removeChars(str1, str2));

// console.log(str1);
// console.log(str2);


// if two string are rotation of each other





// let str1 = "IndiaUSAEngland";
// let str2 = "IndiaEnglandUSA";

// let str3 = str1+str1;

// console.log(isRotation(str3.split(""), str2.split("")));

// function isRotation(str, sub)
// {
//     if(find(str, sub))
//         return true;
//     else
//         return false;
// }

// function find(str, sub)
// {
//     let i, j, k, flag=false;

//     for(i=0; i<str.length; i++)
//     {
//         k = i;
//         for(j=0; j<sub.length; j++)
//         {
//             if(str[k]==str[j])
//                 k++;
//             else
//                 break;
//         }

//         console.log(j);
//         console.log(sub.length);

//         if(j==sub.length)
//         {
//             console.log("Hello");
//             flag = true;
//             break;
//         }
//     }

//     if(flag)
//         return true;
//     else
//         return false;
// }