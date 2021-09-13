// function narcissistic(value) {
//     sum = 0;
//     str = String(value);
//     for(let i = 0; i < str.length; ++i){
//         sum += Math.pow(str[i],str.length);
//     }
//     return sum == value;
// }
// console.log(narcissistic(153));


// function list(names) {
//     var output = ""
//     names.map((obj, i)=> {
//         if(names.length >=2 && i == names.length-1){
//             output += ` & ${obj.name}`;
//         }else if(i === 0){
//             output += `${obj.name}`;
//         }else{
//             output += `, ${obj.name}`;
//         }
//     });
//     return output;  
// }

// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// // returns 'Bart, Lisa & Maggie'

// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// // returns 'Bart & Lisa'

// console.log(list([{ name: 'Bart' }]));
// // returns 'Bart'

// console.log(list([]));
// // returns ''

// return masked string
// function maskify(cc) {
//     output =""
//     for(var i = 0; i < cc.length; ++i){
//         if(i < cc.length-4){
//             output += "#"
//         }else{
//             output += cc[i]
//         }
//     }
//     return output;
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify(     "64607935616"));
// console.log(maskify(               "1"));
// console.log(maskify(                ""));

// function createPhoneNumber(numbers){
//     var groups = ["","",""]
//     numbers.map((num,i) => {
//         if(i<3){
//             groups[0] += num;
//         }else if(i>=3 && i<6){
//             groups[1] += num;
//         }else{
//             groups[2] += num;
//         }
//     });
//     return  `(${groups[0]}) ${groups[1]}-${groups[2]}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// function isIsogram(str){
//     let characters = [];
//     let lowerStr = str.toLowerCase()
//     for(let i = 0; i < str.length ;++i){
//         if(characters.includes(lowerStr[i])){
//             return false;
//         }
//         characters.push(lowerStr[i]);
//     }
//     return true;
// }


// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("mo0se"));


// function solution(number){
//     sum = 0;
//     if(num < 0){
//         return sum;
//     }
//     for(var num = 0;num<number; ++num){
//         if(num%3 === 0 || num%5 === 0){
//             sum += num;
//         }
//     };
//     return sum;

// }

// console.log(solution(10));


// function cakes(recipe, available) {
//     let toMake = [];
//     let recipeKeys = Object.keys(recipe);
//     let availKeys = Object.keys(available);
//     for(var i = 0; i < recipeKeys.length ;++i){
//         // console.log(key);
//         // console.log(!availKeys.includes(key));
//         if(!availKeys.includes(availKeys[i])){
//             return toMake.push(0);
//         }
//         return toMake.push(Math.floor(available[availKeys[i]]/recipe[availKeys[i]]));
//     };
//     console.log(toMake)
//     return Math.min(...toMake);
// }


// console.log(cakes({flour: 500, sugar: 200, eggs: 1},
//     {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

// // console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
// //     {sugar: 500, flour: 2000, milk: 2000}));

// function mix(s1, s2) {
//     var output = "";
//     var mixObj = {};
//     var tempObj = {};
//     var s2Obj = {};
//     var activeKey = 0;
//     var position = 1;
//     s1Formated = s1.replace(/[^a-z]/g, '').toLowerCase();
//     s2Formated = s2.replace(/[^a-z]/g, '').toLowerCase();
//     for(let i = 0;i < s1Formated.length ;++i){
//         if(!mixObj.hasOwnProperty(s1Formated[i])){
//             mixObj[s1Formated[i]] = [1,1];
//         }else{
//             mixObj[s1Formated[i]][1] += 1;
//         }
//     }
//     for(let i = 0;i < s2Formated.length ;++i){
//         if(!s2Obj.hasOwnProperty(s2Formated[i])){
//             s2Obj[s2Formated[i]] = 1;
//         }else{
//             s2Obj[s2Formated[i]] += 1;
//         }
//     }
//     let s2Keys = Object.keys(s2Obj);
//     for(let i = 0; i<s2Keys.length; ++i){
//         if(!mixObj.hasOwnProperty(s2Keys[i])){
//             mixObj[s2Keys[i]] = [2, s2Obj[s2Keys[i]]];
//         }else if(mixObj[s2Keys[i]][1] === s2Obj[s2Keys[i]]){
//             mixObj[s2Keys[i]][0] = "=";
//         }else if(mixObj[s2Keys[i]][1] < s2Obj[s2Keys[i]]){
//             mixObj[s2Keys[i]] = [2,s2Obj[s2Keys[i]]];
//         }
//     }
//     let mixKeys = Object.keys(mixObj).sort();
//     while(mixKeys.length > 0){

//         if(mixObj[mixKeys[position]][1] === 1){
//             delete mixObj[mixKeys[position]];
//             mixKeys = Object.keys(mixObj).sort();
//             position = 0;
//         }
//         if(mixObj[mixKeys[activeKey]][1] < mixObj[mixKeys[position]][1]){
//             activeKey = position;
//         }
//         if(mixObj[mixKeys[activeKey]][1] == mixObj[mixKeys[position]][1] && (mixObj[mixKeys[activeKey]][0] > mixObj[mixKeys[position]][0] || (mixObj[mixKeys[activeKey]][0] == "=" && mixObj[mixKeys[position]][0] != "="))){
//             activeKey = position;
//         }
//         ++position;  
//         if(position >= mixKeys.length){
//             if(mixObj[mixKeys[activeKey]][1] != 1){
//                 tempObj[mixKeys[activeKey]] = mixObj[mixKeys[activeKey]];
//             }
//             delete mixObj[mixKeys[activeKey]];
//             mixKeys = Object.keys(mixObj).sort();
//             position = 0;
//             activeKey = 0;
//         }     
//     }
//     var tempKeys = Object.keys(tempObj);
//     tempKeys.map((key,i)=>{
//         if(i==tempKeys.length-1){
//             output += `${tempObj[key][0]}:${key.repeat(tempObj[key][1])}`
//         }else{
//             output += `${tempObj[key][0]}:${key.repeat(tempObj[key][1])}/`
//         }
//     });
//     return output
// }


// one = "my&friend&Paul has heavy hats! &"
// two = "my friend John has many many friends &"
// console.log(mix(one, two));

// one = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// two = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// console.log(mix(one, two));

// one = "codewars"
// two = "codewars"
// console.log(mix(one, two));


// var isSquare = function (n) {
//     if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
//         return true;
//     }
//     return false;
// }

// console.log(isSquare(-1));
// console.log(isSquare( 0));
// console.log(isSquare( 3));
// console.log(isSquare( 4));
// console.log(isSquare(25));
// console.log(isSquare(26));


// function dirReduc(arr){
//     let i =0;
//     let begin = false;
//     while(i < arr.length){
//         if((arr[i] == "NORTH" &&  arr[i+1] == "SOUTH") || arr[i+1] == "NORTH" &&  arr[i] == "SOUTH"){
//             arr = [...arr.slice(0,i),...arr.slice(i+2,arr.length)]
//             begin = true;
//         }
//         if((arr[i] == "WEST" &&  arr[i+1] == "EAST") || arr[i+1] == "WEST" &&  arr[i] == "EAST"){
//             arr = [...arr.slice(0,i),...arr.slice(i+2,arr.length)]
//             begin = true;
//         }
//         if(begin){
//             i = 0;
//             begin =false
//         }else{
//             ++i;
//         }
//     }
//     return arr;
// }

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));//, ["WEST"])
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));//, ["NORTH", "WEST", "SOUTH", "EAST"])
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));//, [])


// function filter_list(l) {
//     let i = 0;
//     let begin = false;
//     while(i < l.length){
//         if (typeof l[i] === 'string') {
//             l = [...l.slice(0, i), ...l.slice(i + 1, l.length)];
//             begin = true;
//         }
//         if(begin){
//             i = 0;
//             begin =false
//         }else{
//             ++i;
//         }
//     }
//     return l;
// }

// console.log(filter_list(['a','b']));//,[1,2])
// console.log(filter_list([1,'a','b',0,15]));//,[1,0,15])
// console.log(filter_list([1,2,'aasf','1','123',123]));//,[1,2,123])

// function solution(list) {
//     let startNum;
//     let endNum;
//     let output = '';
//     list.map((n,i) => {
//         if((n != endNum+1)){
//             if(i != 0){
//                 if(startNum <= endNum-2){
//                     output += `${startNum}`;
//                     output += `-${endNum},`;
//                 }else if(startNum != endNum){
//                     output += `${startNum}`;
//                     output += `,${endNum},`;
//                 }else{
//                     output += `${startNum},`;
//                 }
//             }
//             startNum = n;
//             endNum = n;
//         }else{
//             endNum = n;
//         }
//         if(i == list.length-1){
//             if(startNum <= endNum-2){
//                 output += `${startNum}`;
//                 output += `-${endNum}`;
//             }else if(startNum != endNum){
//                 output += `${startNum}`;
//                 output += `,${endNum}`;
//             }else{
//                 output += `${startNum}`;
//             }
//         }
//     });
//     return output;
// }

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));//, "-6,-3-1,3-5,7-11,14,15,17-20")


// function add(a, b) {
//     let additionStr = '';
//     let remainder = 0;
//     let m = 0;
//     let o = 0;
//     let subtotal = 0

//     let mainStr = a;
//     let otherStr = b;
//     let lenDiff = mainStr.length - otherStr.length;
//     if (lenDiff < 0) {
//         mainStr = b;
//         otherStr = a;
//         lenDiff = mainStr.length - otherStr.length
//     }

//     for (var i = mainStr.length - 1; i >= 0; --i) {
//         m = parseInt(mainStr[i]);
//         if(i - lenDiff < 0){
//             o = 0;
//         }else{
//             o = parseInt(otherStr[i - lenDiff]);
//         }
        
//         subtotal = (m + o + remainder);
//         console.log(`m ${m}, o ${o}, remainder ${remainder}`)
//         if (subtotal > 9) {
//             additionStr = (subtotal - 10) + additionStr;
//             remainder = 1;

//         } else {
//             additionStr = subtotal + additionStr;
//             remainder = 0;
//         }
//     }
//     if(remainder == 1){
//         additionStr = remainder + additionStr;
//     }
//     return additionStr; // Fix me!
// }

// console.log(add("1", "1"));//, "2");
// console.log(add("123", "456"));//, "579");
// console.log(add("888", "222"));//, "1110");
// // console.log(add("1372", "69"));//, "1441");
// // console.log(add("12", "456"));//, "468");
// // console.log(add("101", "100"));//, "201");
// // console.log(add('63829983432984289347293874', '90938498237058927340892374089'));//, "91002328220491911630239667963")


// function elderAge(m,n,l,t) {
//     let sum = 0;
//     let lagNeg = l%2>0 ? Math.ceil(l/2)*l : ((l/2)+0.5)*l;

//     lagNeg = 

//     let sub = 0;
//     // console.log(lagNeg);
//     if(m>=n){
//         m = m - l;
//         for(let i = 0;i < m;++i){
//             sum += (i^Math.floor(n/2));
//         }
        
//         sum = sum * n;
//         // sum = (sum - (m*l - lagNeg))*n
//     }else{
//         for(let i = 0;i < n;++i){

//             sum += (Math.floor(m/2)^i)
//             // sub = Math.floor(m/2)^i;
//             // if(sub >= l){
//             //     sum += sub;
//             // }
//             // sum += (Math.floor(m/2)^i);
//         }
//         console.log(sum);
//         sum = (sum -  * m);
//         // sum = Math.ceil((sum - ((n-(l+.5))*l)) * m); // wors for 4323
//         // sum = (sum - (n*l - lagNeg))*m
//     }
 
//     return sum%t;
// }

// // console.log(elderAge(5,20,1,100));//, );
// // console.log(elderAge(8,5,1,100));//, 5);
// // console.log(elderAge(8,8,0,100007));//, 224);

// // console.log(elderAge(25,31,0,100007));//, 11925);
// console.log(elderAge(5,45,3,1000007));//, 4323);
// console.log(elderAge(31,39,7,2345));//, 1586);
// // console.log(elderAge(545,435,342,1000007));//, 808451);
// // // You need to run this test very quickly before attempting the actual tests :)
// // console.log(elderAge(28827050410, 35165045587, 7109602, 13719506));//, 5456283);