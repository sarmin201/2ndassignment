

//Check the age of your marriage and provide age-appropriate Messages

let name=prompt("please enter your name");
let age=prompt("please enter your age");


if(age>=0 &&age<21){

    console.log(`Hi ${name}, you are not eligible to get married`);

}
else if (age>=21){
    console.log(`Hi ${name}, you are eligible to get married`);
}
else{console.log("invalid age")}



// Prepare the resulting system where results can be found in Grade and GPA

let studentName=prompt("please enter your name");
let marks=prompt("please enter your marks");

if(marks>=80 && marks<=100){

console.log(`Hi ${studentName} , you have got A+ and your GPA is 5`);
}
else if(marks>=75 && marks<=79){

    console.log(`Hi ${studentName} , you have got A and your GPA  is 4`);
    }
    else if(marks>=70&& marks<=74){

        console.log(`Hi ${studentName} , you  have got A- and your GPA  is 3.5`);
 }
 else if(marks>=65 && marks<=69){

            console.log(`Hi ${studentName} , you have got B+ and your GPA  is 3.25`);
            }
            else if(marks>=55 && marks<=64){

                console.log(`Hi ${studentName} , you have got B and your GPA  is 3`);
                }
                else if(marks>=45 && marks<=54){

                    console.log(`Hi ${studentName} , you have got C+ and your GPA  is 2.75`);
                    }
                    else if(marks>=40 && marks<=44){

                        console.log(`Hi ${studentName} , you have got D and your GPA is 2`);
                        }
                        else if(marks>=0 && marks<=39){

                            console.log(`Hi ${studentName} , you have  got  F  grade and your GPA is 0`);
                            }
                             else{

                            console.log("invalid result");
                        }

 //Prepare a user access program based on age where everyone between the ages of 20 and 35 will have access

  let  userName=prompt("please enter your name");
  let userAge=prompt("enter your age");

if(userAge>=20 && userAge <=35)
{
     console.log(`Hi ${userName}, You have access to enter  the program`);
                            }
                            else {
                                console.log(`Hi ${userName}, We are very sorry , you do not have access to enter the program`);
                            }
                        

