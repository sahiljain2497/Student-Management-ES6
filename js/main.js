const batch = "UCA2018";
let batch2 = "UCA2019";

function getStudentDetails() {
    document.getElementById("username").innerHTML = batch;
}

["a", "b"].map(name => `${name}!`);


function student(roll,name,pass,stream)
    {
        this.roll_no = roll;
        this.name = name;
        this.pass = pass;
        this.stream = stream;
    }

function make_data()
    {
        const out = [];
        const names = ["Tyron","Osbourn","Neely","Uplinger","Margert","Marshal","Marketta","Ziolkowski","Bribiesca","Alfreda"];
        const streams = ["CSE","MBA","ME","Barch","B.Com","M.com","Nursing","ECE","B pharma","CE"];
        const roll =[1,2,3,4,5,6,7,8,9,10]
        const pass =[2019,2019,2019,2019,2019,2019,2019,2019,2019,2019]
        for(let i=0;i<10;i++)
        {
            out.push(new student(roll[i],names[i],pass[i],streams[i]));
        }
        return out;
    }

const data = make_data();


function make_modal(data){
    console.log("adadsfa");
    $('.modal-content').html('')
    $('.modal-content').append(`
    <div class="modal-header">
    <button type='button' class='close' data-dismiss='modal'>&times;</button>
    <h4 class='modal-title'>Edit Details</h4>
    </div>
    <div class ="modal-body">
    <form>
    <div class="form-group">
    <label for="Name">Name :</label>
    <input type="text" class="form-control" id="name" placeholder="Enter name" value=${data.name}></div>
    <div class="form-group">
    <label for="PassYear">Passing Year :</label>
    <input type="text" class="form-control" id="year" placeholder="Enter Year" value=${data.pass}></div>
    <div class="form-group">
    <label for="Roll">Roll No :</label>
    <input type="text" class="form-control" id="roll" placeholder="Enter Rollno" value=${data.roll_no} disabled></div>
    <div class="form-group">
    <label for="Stream">Stream :</label>
    <input type="text" class="form-control" id="stream" placeholder="Enter Stream" value=${data.stream}></div>
    <button type="button" class="btn btn-success submit">Submit</button>
    </div>
    </form>
    </div>`
  )}

function deleteRow(r) {
    data_id=$(r).attr('id');
    var i = r.parentNode.parentNode.parentNode.rowIndex;
    document.getElementsByClassName("put")[0].deleteRow(i);
    for(let i=0; i<data.length; i++){
        if(data[i].roll_no == data_id){
            data.splice(i, 1);
            break;
        }
    }
}

const cross = '<span class="glyphicon glyphicon-remove"></span>';
const edit = '<span class="glyphicon glyphicon-pencil"></span>';

$(document).ready(() => {

  function display_data(){
      $(".put").html("");
      $(".put").append(`<tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Passout Year</th>
                        <th>Stream</th>
                        <th>Operation</th>
                        </tr>`);
      for(let i=0;i<data.length;i++)
      {
          row = `<tr>
              <td>${data[i].roll_no}</td>
              <td>${data[i].name}</td>
              <td>${data[i].pass}</td><td>${data[i].stream}</td>
              <td class = "text-center edit">
                  <div>
                  <button id=${data[i].roll_no} class="edit-button btn btn-warning" data-toggle="modal" data-target="#myModal">${edit}</button>
                  <button id=${data[i].roll_no} class="delete-button btn btn-danger" onclick="deleteRow(this)">${cross}</button>
                  <input type="checkbox" class="checkclass" id=${data[i].roll_no}>
                  </div>
              </td>
          </tr>`;
          $(".put").append(row);
      }
  }

  display_data();

  $(document).on("click",'.edit-button',function(){
      id = $(this).attr('id');
      for(let i=0;i<data.length;i++){
          if(data[i].roll_no == id)
          {
            make_modal(data[i]);
            break;
          }
      }
      //

      $('.submit').click(() => {
          if(/^\d+$/.test($('#roll').val()) == true && $("#name").val()!="" && $("#roll").val()!="" && $("#stream").val()!="" && $("#year").val()!="" && /^\d+$/.test($('#year').val()) == true ){
          let flag=0;
          nam = $("#name").val();
          roll = $('#roll').val();
          str = $('#stream').val();
          pas = $('#year').val();
          for(let i=0;i<data.length;i++){
            if(data[i].roll_no == roll){
              data[i].name=nam;
              data[i].pass=pas;
              data[i].stream=str;
              flag=1;
              break;
            }
          }
          if(flag==0){
              updated  = new student(roll,name,pass,str);
              data.push(updated);
          }
          display_data();
          $('.modal').modal('toggle');
          }
          else{
            if($("#name").val()=="" || $("#roll").val()=="" || $("#stream").val()=="" || $("#year").val()=="")
                alert("ALl Fields Required");
            else if(/^\d+$/.test($('#year').val()) == false)
                alert("Year should be a real number");
            else if(/^\d+$/.test($('#roll').val()) == false)
                alert("Roll should be a real number");
          }
      })
  })

  $('.addStudent').click(() => {
      roll=parseInt(data[data.length-1].roll_no) + 1
    $('.modal-content').html('')
    $('.modal-content').append(`
    <div class="modal-header">
    <button type='button' class='close' data-dismiss='modal'>&times;</button>
    <h4 class='modal-title'>Edit Details</h4>
    </div>
    <div class ="modal-body">
    <form>
    <div class="form-group">
    <label for="Name">Name :</label>
    <input type="text" class="form-control" id="name" placeholder="Enter name"></div>
    <div class="form-group">
    <label for="PassYear">Passing Year :</label>
    <input type="text" class="form-control" id="year" placeholder="Enter Year"></div>
    <div class="form-group">
    <label for="Roll">Roll No :</label>
    <input type="text" class="form-control" id="roll" placeholder="Enter Rollno" value=${roll}></div>
    <div class="form-group">
    <label for="Stream">Stream :</label>
    <input type="text" class="form-control" id="stream" placeholder="Enter Stream"></div>
    <button type="button" class="btn btn-success submit">Submit</button>
    </div>
    </form>
    </div>`
    );

    $('.submit').click(() => {
      if(/^\d+$/.test($('#roll').val()) == true && $("#name").val()!="" && $("#roll").val()!="" && $("#stream").val()!="" && $("#year").val()!="" && /^\d+$/.test($('#year').val()) == true ){
      name = $("#name").val();
      roll = $('#roll').val();
      str = $('#stream').val();
      pass = $('#year').val();
      if(roll == ''){
          alert("Please Enter the Rollno");
      }
      else{
      datan= new student(roll,name,pass,str);
      data.push(datan);
      display_data();
      $('.modal').modal('toggle');
    }
      }
        else{
            if($("#name").val()=="" || $("#roll").val()=="" || $("#stream").val()=="" || $("#year").val()=="")
                alert("ALl Fields Required");
            else if(/^\d+$/.test($('#year').val()) == false)
                alert("Year should be a real number");
            else if(/^\d+$/.test($('#roll').val()) == false)
                alert("Roll should be a real number");

        }
    })
  })

  $('.delStudent').click(() => {
        let checked=[];
        const todelete=[];
        checked=document.getElementsByClassName('checkclass');
        console.log(checked);
        for(let i=0;i<checked.length;i++){
          if (checked[i].checked == true)
            {
              todelete.push(checked[i]);
            }
        }
        for(let i=0;i<todelete.length;i++){
          deleteRow(todelete[i]);
        }
  });

});
const heroShinker = () => {
    const hero = $('.hero-nav');
    const heroHeight = $('.hero-nav').outerHeight(true);
    $(hero).parent().css('padding-top', heroHeight);
    $(window).scroll(() => {
        const scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
        if (scrollOffset > (heroHeight - 315)) {
            hero.addClass('fixme');
        } else {
            hero.removeClass('fixme');
        };
    });
};
heroShinker();
