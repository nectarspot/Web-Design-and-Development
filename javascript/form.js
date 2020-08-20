<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>

                              
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" rel="stylesheet">
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script> -->
<style type="text/css">
    
.stepwizard-step p {
    margin-top: 0px;
    color:#666;
}
.stepwizard-row {
    display: table-row;
}
.stepwizard {
    display: table;
    width: 100%;
    position: relative;
}
.stepwizard-step button[disabled] {
    /*opacity: 1 !important;
    filter: alpha(opacity=100) !important;*/
}
.stepwizard .btn.disabled, .stepwizard .btn[disabled], .stepwizard fieldset[disabled] .btn {
    opacity:1 !important;
    color:#bbb;
}
.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content:" ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-index: 0;
}
.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
    padding-top: 5px;
}
.btn-circle {
    width: 100px;
    height: 21px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;

}

/* General Style */
/**/

/* General button style (reset) */


/* Special trash effect */
/**/


ul.chec-radio {
    margin: 15px;
}
ul.chec-radio li.pz {
    display: inline;
}
.chec-radio label.radio-inline input[type="checkbox"] {
    display: none;
}
.chec-radio label.radio-inline input[type="checkbox"]:checked+div {
    color: #fff;
    background-color: #000;
}
.chec-radio .radio-inline .clab {
    cursor: pointer;
    background: #e7e7e7;
    padding: 7px 20px;
    text-align: center;
    text-transform: uppercase;
    color: #333;
    position: relative;
    height: 34px;
    float: left;
    margin: 0;
    margin-bottom: 5px;
}
.chec-radio label.radio-inline input[type="checkbox"]:checked+div:before {
    content: "\e013";
    margin-right: 5px;
    font-family: 'Glyphicons Halflings';
}
.chec-radio label.radio-inline input[type="radio"] {
    display: none;
}
.chec-radio label.radio-inline input[type="radio"]:checked+div {
    color: #fff;
    background-color: #000;
}
.chec-radio label.radio-inline input[type="radio"]:checked+div:before {
    content: "\e013";
    margin-right: 5px;
    font-family: 'Glyphicons Halflings';
}



.inputGroup {
  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;
}
.inputGroup label {
  padding: 12px 30px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3C454C;
  cursor: pointer;
  position: relative;
  z-index: 2;
  -webkit-transition: color 200ms ease-in;
  transition: color 200ms ease-in;
  overflow: hidden;
}
.inputGroup label:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: '';
  background-color: #5562eb;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);
          transform: translate(-50%, -50%) scale3d(1, 1, 1);
  -webkit-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}
.inputGroup label:after {
  width: 32px;
  height: 32px;
  content: '';
  border: 2px solid #D1D7DC;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 71%;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  cursor: pointer;
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
}
.inputGroup input:checked ~ label {
  color: #fff;
}
.inputGroup input:checked ~ label:before {
  -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);
          transform: translate(-50%, -50%) scale3d(56, 56, 1);
  opacity: 1;
}
.inputGroup input:checked ~ label:after {
  background-color: #54E0C7;
  border-color: #54E0C7;
}
.inputGroup input {
  width: 32px;
  height: 32px;
  -webkit-box-ordinal-group: 2;
          order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

.form {
  padding: 0 16px;
  max-width: 550px;
  margin: 50px auto;
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
}




</style>

<script type="text/javascript">
    $(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-success').trigger('click');
});
</script>

<script type="text/javascript">
    
     jQuery(document).ready(function(){
  $("#slider").slider({
      value:100000,
      min:100000,
      max:2000000,
      step:10,
      slide:function(event, ui){
        $("#amount").val(" "+ui.value)
      }
  });
  $("#amount").val(""+$("#slider").slider("value"));


   $("#slider1").slider({
      value:2.0,
      min:1.5,
      max:2.5,
      step:0.5,
      slide:function(event, ui){
        $("#amount1").val(""+ui.value)
      }
  });
  $("#amount1").val(""+$("#slider1").slider("value"));


  $("#slider2").slider({
      value:650,
      min:500,
      max:800,
      step:1,
      slide:function(event, ui){
        $("#amount2").val(""+ui.value)
      }
  });
  $("#amount2").val(""+$("#slider2").slider("value"));

  $("#slider3").slider({
      value:500000,
      min:100000,
      max:1000000,
      step:1,
      slide:function(event, ui){
        $("#amount3").val(""+ui.value)
      }
  });
  $("#amount3").val(""+$("#slider3").slider("value"));
  });

</script>
<script>
function myFunction() {
  var inpObj = document.getElementById("name");
  var inpObj1 = document.getElementById("email");


  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = " Please Enter Name";
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 

  if (!inpObj1.checkValidity()) {
    document.getElementById("demo1").innerHTML = "Please Enter Email";
  } else {
    document.getElementById("demo1").innerHTML = "Input OK";
  } 
} 

function myFunction1() {
  var inpObj2 = document.getElementById("firstname");
  var inpObj3 = document.getElementById("mail");
  var inpObj4 = document.getElementById("state");
  var inpObj5 = document.getElementById("zipcode");
  var inpObj6 = document.getElementById("lastname");
  var inpObj7 = document.getElementById("city");
  var inpObj8 = document.getElementById("street");
  var inpObj9 = document.getElementById("dob");
  

  if (!inpObj2.checkValidity()) {
    document.getElementById("demo2").innerHTML = "Please Enter First Nname";
  } else {
    document.getElementById("dem02").innerHTML = "Input OK";
  } 

  if (!inpObj3.checkValidity()) {
    document.getElementById("demo3").innerHTML = "Please Enter Mail Id";
  } else {
    document.getElementById("demo3").innerHTML = "Input OK";
  } 

   if (!inpObj4.checkValidity()) {
    document.getElementById("demo4").innerHTML = "Please Enter State";
  } else {
    document.getElementById("demo4").innerHTML = "Input OK";
  } 

   if (!inpObj5.checkValidity()) {
    document.getElementById("demo5").innerHTML = "Please Enter Zipcode";
  } else {
    document.getElementById("demo5").innerHTML = "Input OK";
  } 
   if (!inpObj6.checkValidity()) {
    document.getElementById("demo6").innerHTML = "Please Enter Last Name";
  } else {
    document.getElementById("demo6").innerHTML = "Input OK";
  } 
   if (!inpObj7.checkValidity()) {
    document.getElementById("demo7").innerHTML = "Please Enter City";
  } else {
    document.getElementById("demo7").innerHTML = "Input OK";
  } 
   if (!inpObj8.checkValidity()) {
    document.getElementById("demo8").innerHTML = "Please Enter Street";
  } else {
    document.getElementById("demo8").innerHTML = "Input OK";
  } 
   if (!inpObj9.checkValidity()) {
    document.getElementById("demo9").innerHTML = "Please Enter Date Of Birth";
  } else {
    document.getElementById("demo9").innerHTML = "Input OK";
  } 
} 


</script>


<div class="container">
    <div class="stepwizard">
        <div class="stepwizard-row setup-panel">
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-1" type="button" class="btn btn-success btn-circle"></a>
                <p class="mr-5"></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-4" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
             <div class="stepwizard-step col-xs-3"> 
                <a href="#step-5" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
             <div class="stepwizard-step col-xs-3"> 
                <a href="#step-6" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-7" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
             <div class="stepwizard-step col-xs-3"> 
                <a href="#step-8" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-9" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-10" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
             <div class="stepwizard-step col-xs-3"> 
                <a href="#step-11" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-12" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
            <div class="stepwizard-step col-xs-3"> 
                <a href="#step-13" type="button" class="btn btn-default btn-circle" disabled="disabled"></a>
                <p></p>
            </div>
        </div>
    </div>
    <div class="">
    <form role="form"  method="post" enctype="multipart/form-data" >
        <div class="panel panel-primary setup-content" id="step-1">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body" style="text-align: center;">
                <div class="form-group">
                      <h3 class="fs-title">Do you qualify for lower payments?</h3> 

                                    <p>Find out in 60 seconds (it's free)!</p>

                                    
                <h3 class="fs-title">   Have you or your spouse served in the Military?</h3>




                <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="lowerpayment" class=" button-3 button-3a pro-chx nextBtn" value="Yes">
            <div class="clab">Yes</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="lowerpayment" class=" button-3 button-3a pro-chx nextBtn" value="No" >
            <div class="clab">No</div>
        </label>
    </li><br>
    
</ul>


<!-- <button type="button" name="yes" class="button button-3 button-3a icon-cart nextBtn"><i class="fa fa-shopping-cart"></i> Yes</button><br>
<button type="button" name="no" class="button button-3 button-3a icon-cart nextBtn"><i class="fa fa-shopping-cart"></i> No</button> -->
                 
                </div>
                
            </div>
        </div>
        <img src="images/sucess.jpg" border="0" style="padding-left:10px; vertical-align: bottom; padding-right: 10px">
        <div class="panel panel-primary setup-content" id="step-2">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body" >
                <h2>What is your current interest rate?</h2>

                 <label for="amount">$</label>
              <input type="text" id="amount" name="interestrate" class="form-control" value="" readonly="" style="font-weight: bold;color: #000000;margin-bottom: 15px ; text-align: center; font-size: 20px;">
            
              <div id="slider"></div> <br>

              <span><b>$100,000</b></span>
              <span style="float: right;"><b>$2000,000</b></span> <br>
                <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
            </div>
        </div>
        
        <div class="panel panel-primary setup-content" id="step-3">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body" >
                 <h2>What is your current interest rate?</h2>

                 <label for="amount1"></label>
              <input type="text" id="amount1" name="amount1" class="form-control" value="" readonly="" style="font-weight: bold;color: #000000;margin-bottom: 15px ; text-align: center; font-size: 20px;">
            
              <div id="slider1"></div> <br>
              <span><b>1.5%</b></span>
              <span style="float: right;"><b>2.5%</b></span> <br>
                <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
            </div>
        </div>

         <div class="panel panel-primary setup-content" id="step-4">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body" >
                <h3 class="fs-title">Where are you working?</h3>

                <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="office" class=" button-3 button-3a pro-chx nextBtn" value="office">
            <div class="clab">Office</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="remote" class=" button-3 button-3a pro-chx nextBtn" value="remote" >
            <div class="clab">Remote</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="coworking" class=" button-3 button-3a pro-chx nextBtn" value="Co Working" >
            <div class="clab">Co-Working</div>
        </label>
    </li><br>
    
</ul> 

                                   

<!-- <button type="button" name="office" class="button button-3 button-3a icon-cart nextBtn"><i class="fa fa-shopping-cart"></i> Office</button><br>
<button type="button" name="remote" class="button button-3 button-3a icon-cart nextBtn"><i class="fa fa-shopping-cart"></i> Remote</button><br>
<button type="button" name="coworking" class="button button-3 button-3a icon-cart nextBtn"><i class="fa fa-shopping-cart"></i> Co-Working</button> -->
                
            </div>
        </div>

       


        
        <div class="panel panel-primary setup-content" id="step-5">
            <div class="panel-heading">
                 <h3 class="fs-title">Who should we send the results to?</h3> 
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6">
                <div class="form-group">

                    

                    <label class="control-label"> Name</label>
                    <input maxlength="200" type="text" id="name" name="name"  class="form-control" placeholder="Enter Company Name" required="required" />
                    <p id="demo" style="color: red;"></p>
                </div>
                </div>
                <div class="col-sm-6">
                <div class="form-group">

                    <label class="control-label">Email</label>
                    <input maxlength="200" type="text" id="email" name="email"  class="form-control" placeholder="Enter Company Address" required="required"/>
                     <p id="demo1" style="color: red;"></p>
                </div>
            </div>
               <button class="btn btn-primary nextBtn pull-right" type="button" onclick="myFunction()">Next</button>
            </div>
            </div>
        </div>

         <div class="panel panel-primary setup-content" id="step-6">
            <div class="panel-heading">
                 <h3 class="fs-title">Who should we send the results to?</h3> 
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6">
                <div class="form-group">

                    <label class="control-label">First Name</label>
                    <input maxlength="200" type="text" id="firstname" name="firstname"  class="form-control" placeholder="Enter Company Name" required="required"/>
                    <p id="demo2" style="color: red;"></p>
                </div>

                <div class="form-group">
                    <label class="control-label">Email Address</label>
                    <input maxlength="200" type="text" name="mail" id="mail" class="form-control" placeholder="Enter Company Name" required="required"/>
                    <p id="demo3" style="color: red;"></p>
                </div>
                <div class="form-group">

                    <label class="control-label">State</label>
                    <input maxlength="200" type="text" id="state" name="state"  class="form-control" placeholder="Enter Company Name" required="required"/>
                    <p id="demo4" style="color: red;"></p>
                </div>

                <div class="form-group">

                    <label class="control-label">Zipcode</label>
                    <input maxlength="200" type="text" name="zipcode" id="zipcode"  class="form-control" placeholder="Enter Company Name" required="required"/>
                    <p id="demo5" style="color: red;"></p>
                </div>
                </div>
                <div class="col-sm-6">
                <div class="form-group">

                    <label class="control-label">Last Name </label>
                    <input maxlength="200" type="text" id="lastname" name="lastname"  class="form-control" placeholder="Enter Company Address" required="required"/>
                    <p id="demo6" style="color: red;"></p>
                </div>

                <div class="form-group">

                    <label class="control-label">City</label>
                    <input maxlength="200" type="text" id="city"  name="city"  class="form-control" placeholder="Enter Company Name" required="required"/>
                    <p id="demo7" style="color: red;"></p>
                </div>

                <div class="form-group">

                    <label class="control-label">Street</label>
                    <input maxlength="200" type="text" id="street" name="street" class="form-control" placeholder="Enter Company Name" required="required"/>
                    <p id="demo8" style="color: red;"></p>
                </div>

                <div class="form-group">

                    <label class="control-label">Date of birth</label>
                    <input maxlength="200" type="text" id="dob" name="dob"  class="form-control" placeholder="YYYY-MM-DD" required="required"/>
                    <p id="demo9" style="color: red;"></p>
                </div>
            </div>
                 <button class="btn btn-primary nextBtn pull-right" type="button" onclick="myFunction1()">Next</button>
            </div>
            </div>
        </div>


        <div class="panel panel-primary setup-content" id="step-7">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">Where are you working?</h3> 

                <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="Excellent" class=" button-3 button-3a pro-chx nextBtn" value="excellent">
            <div class="clab">Excellent</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="good" class=" button-3 button-3a pro-chx nextBtn" value="good" >
            <div class="clab">Good</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="fair" class=" button-3 button-3a pro-chx nextBtn" value="fair" >
            <div class="clab">Fair</div>
        </label>
    </li><br>

    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="poor" class=" button-3 button-3a pro-chx nextBtn" value="poor" >
            <div class="clab">Poor</div>
        </label>
    </li><br>
    
</ul>

                                   


                
            </div>
        </div>


        <div class="panel panel-primary setup-content" id="step-8">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">Credit Score - 2</h3> 

                                   

<label for="amount2">Select Price:</label>
              <input type="text" id="amount2" class="form-control" value="" readonly="" style="font-weight: bold;color: #000000;margin-bottom: 15px ; text-align: center; font-size: 20px;">
            
              <div id="slider2"></div> <br>

              <span><b>500</b></span>
              <span style="float: right;"><b>800</b></span> <br>
                <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
                
            </div>
        </div>

<div class="panel panel-primary setup-content" id="step-9">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">Are you currently employed?</h3> 

                <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="fulltime" class=" button-3 button-3a pro-chx nextBtn" value="fulltime">
            <div class="clab">Full Time</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="parttime" class=" button-3 button-3a pro-chx nextBtn" value="parttime" >
            <div class="clab">Part Time</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="selfemployed" class=" button-3 button-3a pro-chx nextBtn" value="selfemployed" >
            <div class="clab">Self Employed</div>
        </label>
    </li><br>

    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-co" name="retired" class=" button-3 button-3a pro-chx nextBtn" value="retired" >
            <div class="clab">Retired</div>
        </label>
    </li><br>

    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="notenployed" class=" button-3 button-3a pro-chx nextBtn" value="notenployed" >
            <div class="clab">Not Employed</div>
        </label>
    </li><br>
    
</ul>

                                   



                
            </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-10">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">How often do you get paid?</h3>

                <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="weekly" class=" button-3 button-3a pro-chx nextBtn" value="weekly">
            <div class="clab">Weekly</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="biweekly" class=" button-3 button-3a pro-chx nextBtn" value="biweekly" >
            <div class="clab">Biweekly</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="twicemonthly" class=" button-3 button-3a pro-chx nextBtn" value="twicemonthly" >
            <div class="clab">Twice Monthly</div>
        </label>
    </li><br>

    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="monthly" class=" button-3 button-3a pro-chx nextBtn" value="monthly" >
            <div class="clab">Monthly</div>
        </label>
    </li><br>

    
    
</ul> 

                                   



                
            </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-11">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">What's your approx. annual income?</h3> 

                                   

<label for="amount3">Select Price:</label>
              <input type="text" id="amount3" class="form-control" value="" readonly="" style="font-weight: bold;color: #000000;margin-bottom: 15px ; text-align: center; font-size: 20px;">
            
              <div id="slider3"></div> <br>

              <span><b>10000</b></span>
              <span style="float: right;"><b>1000000</b></span> <br>
                <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
                
            </div>
        </div>


        <div class="panel panel-primary setup-content" id="step-12">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">Do you consent to FCRA?</h3> 

                 <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="yes1" class=" button-3 button-3a pro-chx nextBtn" value="yes">
            <div class="clab">Yes</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="no1" class=" button-3 button-3a pro-chx nextBtn" value="no" >
            <div class="clab">No</div>
        </label>
    </li>
</ul>

                                   




                
            </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-13">
            <div class="panel-heading">
                 
            </div>
            <div class="panel-body">
                <h3 class="fs-title">Do you consent to TCPA?</h3> 

            <ul class="chec-radio">
    <li class="pz">
        <label class="radio-inline">
            <input type="radio"  id="pro-chx-residential" name="yes2" class=" button-3 button-3a pro-chx nextBtn" value="yes">
            <div class="clab">Yes</div>
        </label>
    </li><br>
    <li class="pz">
        <label class="radio-inline">
            <input type="radio" id="pro-chx-commercial" name="no2" class=" button-3 button-3a pro-chx nextBtn" value="no" >
            <div class="clab">No</div>
        </label>
    </li>
</ul>     

                                   

<button class="btn btn-success " type="submit">Finish!</button>


                
            </div>
        </div>

    </form>
</div>



 
<?php
  
if( $_POST){


    
      // $firstname = $_POST["firstname"];
      //  $email = $_POST["email"];
      //   $email = $_POST["email"];
      //    $email = $_POST["email"];


    $email = $_POST["email"];
$to = "mrao@iim-jobs.com";
$subject = "New Email Address for Mailing List";
$headers = "From: $email\n";
$message = "
<html>
<head>
    <title>NectarSpot Inc</title>
    
    
    <style >
        body {
            margin-left: auto;
            margin-top: 10px;
            margin-right: auto;
            margin-bottom: 10px;
            font-family: 'Open Sans', sans-serif;
            background-color: #ffa500;
            font-size: 18px !important;
            max-width: 800px;
        }

        h1,h2,h3,h4,h5,h6 {margin-top: 0; margin-bottom: 0}
              
        th {
            padding-top: 4px;
            padding-bottom: 4px;
        }

        .data-details {
    width: 100%;
}



.data-details tr:nth-child(even){background-color: #f2f2f2}
        
        @media screen and (max-width: 630px) {
            .content {
                max-width: inherit;
            }
            td {display: block; text-align: center;}
            .data-details td {display: table-cell; text-align: left;}
            span.title {display: inline-block !important; padding-top: 20px; max-width: inherit;}
            .shippmethod td {width: 100%;}
            .Paymentdetails td {display: inline;}
        }
    </style>
</head>

<body>
    <table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='border-radius: 4px;-moz-border-radius: 4px;-webkit-border-radius: 4px; background-color: #ffffff'>
        <tr>
            <td>
                <table width='90%'' border='0' align='center' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td>
                            <tr>
                                <td height='40' align='center'></td>
                            </tr>
                            <tr>
                                <td>
                                    <table width='100%'' cellspacing='0' cellpadding='0'>
                                        <tr>
                                            <td align='center'><img src='https://gallery.mailchimp.com/d1e38b5d598c6f44dff403363/images/3f20f797-ea85-4b96-b28b-1e19c0cacf56.jpg' border='0' style='padding-left:10px; vertical-align: bottom; padding-right: 10px'></td>
                                        </tr>                                        
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height='40' align='center'></td>
                            </tr>
                             <tr>
                                <td>
                                    <table width='100%'' cellspacing='0' cellpadding='0'>
                                        <tr>
                                            <td align='left'><img src='https://gallery.mailchimp.com/d1e38b5d598c6f44dff403363/images/bca3b46d-a901-45fa-a363-4255830538cb.jpg' border='0' style='padding-left:10px; vertical-align: bottom; padding-right: 10px'>800.794.4140</td>
                                            <td align='right'><a style='font-size:20px; color:#3b3b3b; text-decoration: none; font-weight: bold;''  href='mailto:sales@beyondshelving.com' target='_blank'>nectarspot@gmail.com</a></td>
                                        </tr>                                        
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height='2' align='center' bgcolor='#3b3b3b'></td>
                            </tr>
                            <tr>
                                <td height='40' align='center'></td>
                            </tr>
                          
                               
                               <tr>
                                <td align='left' style='padding-left: 10px; padding-right: 10px; padding-top: 0px; padding-bottom: 0px;''>
                                    <p style='color: #ffa500; font-weight: bold'><span style='color: #3b3b3b'>Dear [User Name]:</span><br /><br /></td>
                                </tr>
                                 <tr>
                                <td align='left' style='padding-left: 10px; padding-right: 10px; padding-top: 0px; padding-bottom: 0px;''>
                                  
                                    <table class='sucess'>
                                        <tr>
                                            <td width='85'><img src='images/sucess.jpg' border='0' style='padding-left:10px; vertical-align: bottom; padding-right: 10px'></td>
                                            <td style='color: #ffa500; font-weight: bold'>Your registration has been completed successfully.</td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                                  <tr>
                                  <td align='left' style='padding-left: 10px; padding-right: 10px; padding-top: 0px; padding-bottom: 0px;'>
                                    <p style='color: #ffa500; font-weight: bold'>
                                  Thank you for registering with BeyondShelving. Our team is here to
assist you and your company with staying organized and efficient.</p>
                                <p>Please do not hesitate to contact one of our shelving specialists for:</p>
                                <ul>
                                    <li>Quotes</li>
                                    <li>Configuration Assistance</li>
                                    <li>Special Project Pricing</li>
                                    <li>Technical Questions</li>
                                </ul>
                                <p>We appreciate your interest in BeyondShelving. We look forward to
serving you in the future.</p>
                           <p>BeyondShelving Customer Support</p>

                                </td>
                                
                            </tr>
                            
                            <tr>
                               
                                <td height='40' align='center'></td>
                            </tr>
                            <tr>
                                <td height='2' align='center' bgcolor='#3b3b3b'></td>
                            </tr>
                            
                            <tr>
                                <td height='40' align='center'></td>
                            </tr>
                            <tr>
                                <td height='40' align='center'>
                                    <a style='font-size:20px; color:#ffa21a; text-decoration: none; font-weight: bold;'' href='https://www.beyondshelving.com'>www.beyondshelving.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td height='80' align='center'>
                                    <p>
                                        <span style='padding:10px 0;''>
                            <a href='http://www.facebook.com' style='text-decoration: none;'>
                              <img src='https://gallery.mailchimp.com/d1e38b5d598c6f44dff403363/images/9eb8a202-5827-4e02-82c4-d3789be88db6.jpg' width='48' height='48'  border='0' style='padding-left:10px;'' title='Facebook'>
                              </a>&nbsp;&nbsp;
                              
                                </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td height='40' align='center'></td>
                            </tr>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>";
// $user = "$email";
// $usersubject = "Thank You";
// $userheaders = "From: madhuboddakayala@gmail.com\n";
// $usermessage = "Thank you for subscribing to our mailing list.";
mail($to,$subject,$message,$headers);


    
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "jsondb";

// Create connection
 $link = new mysqli($servername, $username, $password, $dbname);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
//Escape user inputs for security

$name = mysqli_real_escape_string($link, $_POST['name']);
$email = mysqli_real_escape_string($link, $_POST['email']);
$firstname = mysqli_real_escape_string($link, $_POST['firstname']);
$mail = mysqli_real_escape_string($link, $_POST['mail']);
$state = mysqli_real_escape_string($link, $_POST['state']);
$zipcode = mysqli_real_escape_string($link, $_POST['zipcode']);
$lastname = mysqli_real_escape_string($link, $_POST['lastname']);
$city = mysqli_real_escape_string($link, $_POST['city']);
$street = mysqli_real_escape_string($link, $_POST['street']);
$dob = mysqli_real_escape_string($link, $_POST['dob']);
 $lowerpayment = mysqli_real_escape_string($link, $_POST['lowerpayment']);
 
 $interestrate = mysqli_real_escape_string($link, $_POST['interestrate']);
 

 
// Attempt insert query execution
$sql = "INSERT INTO formdata (name,email, firstname, mail,state,zipcode,lastname, city,street,dob,lowerpayment,interestrate)
 VALUES ('$name','$email', '$firstname', '$mail','$state', '$zipcode', '$lastname','$city','$street','$dob', '$lowerpayment', '$interestrate')";
if(mysqli_query($link, $sql)){
print_r("data saved");
} else{
echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
}








?>
</div>