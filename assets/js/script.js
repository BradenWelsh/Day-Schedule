let time = moment();
let current = time.hours();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$("#currentTime").text(moment().format("h:mm a"));

let nine = $("#9");
let ten = $("#10");
let eleven = $("#11");
let twelve = $("#12");
let thrtn = $("#13");
let fourteen = $("#14");
let fifteen = $("#15");
let sixteen = $("#16");
let seventeen = $("#17");
let eightteen = $("#18");

const save = $(".saveBtn");
const deleteBtn = $(".deleteBtn");
let txtDel = $("#txtDel");


function pPF(){
    $(".time-block").each(function(){
        let cH = parseInt($(this)[0].id);

        if (cH < current){
            $(this).addClass("past");
        } 
        else if (cH == current){
            $(this).addClass("pres");
        }
        else{
            $(this).addClass("future");
        }

    })



}